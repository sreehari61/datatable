import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import DataTableColDef from "../../model/ColDef";

@Component({
  selector: 'app-columnpopup',
  templateUrl: './columnpopup.component.html',
  styleUrls: ['./columnpopup.component.css']
})
export class ColumnpopupComponent implements OnInit{

  @Input() colDefs: DataTableColDef[] = [];
  @Input() showPopup: boolean = false;
  @Input("popupInput")

  @Output() displayColumnPopup: EventEmitter<boolean> = new EventEmitter<boolean>();

  isAllChecked: boolean = false;

  ngOnInit(): void {
    this.isAllChecked = this.colDefs.filter(col => !col.hide).length === this.colDefs.length;
  }

  clickedOutside(event: boolean) {
    // this.showPopup = false;
    this.displayColumnPopup.emit(event);
  }

  onCheckBoxChange(event: any, coldef: DataTableColDef) {
    coldef.hide = !event;
    this.isAllChecked = this.colDefs.filter(col => !col.hide).length === this.colDefs.length;
  }

  onAllCheckBoxChecked(event: any) {
    console.log(!event)
    this.colDefs.forEach(col => {
      col.hide = !event;
    })
  }
}
