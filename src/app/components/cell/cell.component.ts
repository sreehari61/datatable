import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit, Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import * as _ from 'lodash';
import DataTableColDef from "../../model/ColDef";
import DataTableParams from "../../model/tableparams";
import {CellEditingStartedEvent, CellEditingStoppedEvent} from "../../interfaces/cellEditingStartEvent";

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit, AfterViewInit {
  @Input() rowData: any = {}
  @Input() colDef: DataTableColDef = new DataTableColDef();
  @Input() index: number = -1;
  @Output() cellEditingStartedEvent: EventEmitter<CellEditingStartedEvent> = new EventEmitter<CellEditingStartedEvent>();
  @Output() cellEditingStoppedEvent: EventEmitter<CellEditingStoppedEvent> = new EventEmitter<CellEditingStoppedEvent>();

  private oldData: any;

  constructor() {
  }


  ngOnInit(): void {
    // this.getCellRederer();
  }

  ngAfterViewInit() {
    this.getCellRederer();
  }

  @ViewChild("cellRederer", {read: ViewContainerRef, static: false}) rendererRef!: ViewContainerRef

  onInputFocusIn() {
    this.oldData = _.clone(this.rowData);
    this.cellEditingStartedEvent.emit({colDef: this.colDef, value: this.rowData[this.colDef.field]})
  }

  onInputFocusOut() {
    this.cellEditingStoppedEvent.emit({
      colDef: this.colDef,
      value: this.rowData[this.colDef.field],
      oldValue: _.clone(this.oldData[this.colDef.field]),
      newValue: this.rowData[this.colDef.field]
    })
  }

  getTooltipValue() {
    let params: DataTableParams = new DataTableParams(this.colDef, this.rowData);
    return this.colDef.toolTipValueGetter ? this.colDef.toolTipValueGetter(params) : this.rowData[this.colDef.tooltipField];
  }

  getValue() {
    let params: DataTableParams = new DataTableParams(this.colDef, this.rowData);
    return this.colDef.valueGetter ? this.colDef.valueGetter(params) : this.rowData[this.colDef.field];
  }

  getCellRederer() {
    let params: DataTableParams = new DataTableParams(this.colDef, this.rowData, this.rowData[this.colDef.field]);
    if (this.rendererRef) {
      this.rendererRef.clear();
      const componentRef = this.rendererRef.createComponent(this.colDef.cellRenderer);
      // @ts-ignore
      componentRef.instance?.dataTableInit(params);
    }
  }

  onCellFocused(event: boolean) {
    if(event){
      this.onInputFocusIn();
    }else{
      this.onInputFocusOut();
    }
  }
}
