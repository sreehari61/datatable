import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, EventEmitter, Inject, Output,} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Directive({
  standalone: true,
  selector: '[appOutSideClick]'
})
export class OutSideClickDirective {
  @Output() clickOutside = new EventEmitter<boolean>();

  documentClickSubscription: Subscription | undefined;

  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit(): void {
    this.documentClickSubscription = fromEvent(this.document, 'click')
      .pipe(
        map((event:any) => {
          return !this.isInside(event.target as HTMLElement);
        })
      )
      .subscribe((res) => {
        this.clickOutside.emit(res);
      });
  }

  ngOnDestroy(): void {
    this.documentClickSubscription?.unsubscribe();
  }

  isInside(elementToCheck: HTMLElement): boolean {
    return (
      elementToCheck === this.element.nativeElement ||
      this.element.nativeElement.contains(elementToCheck)
    );
  }
}
