import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import DataTableColDef from "../../model/ColDef";

@Component({
  selector: 'app-cellinput',
  templateUrl: './cellinput.component.html',
  styleUrls: ['./cellinput.component.css']
})
export class CellinputComponent implements OnInit{
  @Input({required: true}) colDef: DataTableColDef = new DataTableColDef();
  @Input({required: true}) data: any = {};
  @Input({required: true}) enableEdit: boolean = false;

  @Output() cellFocused: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnInit(): void {
    }
  onCellFocusIn(){
      this.cellFocused.emit(true)
  }

  onCellFocusOut(){
    this.cellFocused.emit(false)
  }

}
