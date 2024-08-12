import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter, HostListener,
  Input,
  OnChanges,
  OnInit,
  Output, Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import DataTableColDef from "../../model/ColDef";
import {faArrowDown, faArrowsUpDown, faArrowUp, faBars, faGripLinesVertical} from "@fortawesome/free-solid-svg-icons";
import {SortType} from "../../utils/enums/sortenum";
import * as _ from "lodash";
import Search from "../../model/search";
import RowSearch from "../../model/row-search";
import {CellEditingStartedEvent, CellEditingStoppedEvent} from "../../interfaces/cellEditingStartEvent";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  protected readonly SortType = SortType;
  protected readonly faArrowUp = faArrowUp;
  protected readonly faArrowDown = faArrowDown;
  protected readonly Object = Object;

  @Input({required: true}) rowData: any[] = [];
  @Input({required: true}) columnDefs: DataTableColDef[] = [];
  @Input() search: boolean = true;
  @Input() sort: boolean = true;
  @Input() editable: boolean = false;

  @Output() cellEditingStartedEvent: EventEmitter<CellEditingStartedEvent> = new EventEmitter<CellEditingStartedEvent>();
  @Output() cellEditingStoppedEvent: EventEmitter<CellEditingStoppedEvent> = new EventEmitter<CellEditingStoppedEvent>();


  sortType: SortType = SortType.NONE;
  oldRowData: any = {};
  currentSortColumn: string = "";
  filterObject: any = {};
  protected readonly faBars = faBars;
  showColumnSelection: boolean = false;

  protected readonly faArrowsUpDown = faArrowsUpDown;
  showPopUpIndex: number = -1;
  columnSelectPopupX: any;
  columnSelectPopupY: any;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngOnInit() {
    this.oldRowData = _.clone(this.rowData);
  }

  @HostListener('window:scroll', ['$event'])
  doSomething(event: any) {
    this.showColumnSelection = false;
    this.columnSelectPopupX = 0;
    this.columnSelectPopupY = 0;
  }

  onSortClick(colDef: DataTableColDef, field: string) {
    this.currentSortColumn = field;
    if (colDef.sortType === SortType.NONE || !colDef.sortType) {
      colDef.sortType = SortType.ASC;
      this.rowData.sort((a, b) => this.sortData(a, b, field, colDef));
    } else if (colDef.sortType === SortType.ASC) {
      colDef.sortType = SortType.DESC;
      this.rowData.sort((a, b) => this.sortData(a, b, field, colDef));
    } else if (colDef.sortType === SortType.DESC) {
      colDef.sortType = SortType.ASC;
      this.rowData.sort((a, b) => this.sortData(a, b, field, colDef));
    }
  }

  sortData(a: any, b: any, field: string, colDef: DataTableColDef): number {

    if (typeof (a[field]) == "number") {
      return colDef.sortType === SortType.ASC ? a[field] - b[field] : b[field] - a[field];
      // return a?[field].toString().localeCompare(b?[field].toString());
    }
    return colDef.sortType === SortType.ASC ? a[field].toString().localeCompare(b[field].toString()) : b[field].toString().localeCompare(a[field].toString());
  }

  onSearch(event: any, field: string) {

    if (!Object.keys(this.filterObject).includes(field)) {
      this.filterObject[field] = new Search(field, event.target.value);
    } else {
      this.filterObject[field].searchString = event.target.value;
    }

    if (this.rowData.length == 0) {
      this.rowData = this.oldRowData.filter((data: any) => data[field].toString().toLowerCase().includes(event.target.value.toLowerCase()));
    } else {
      this.rowData = this.rowData.filter((data: any) => data[field].toString().toLowerCase().includes(event.target.value.toLowerCase()));
    }
  }

  onCellEditingStarted(event: CellEditingStartedEvent) {
    this.cellEditingStartedEvent.emit(event);
  }

  onCellEditingStopped(event: CellEditingStoppedEvent) {
    this.cellEditingStoppedEvent.emit(event);
  }

  onShowColumnSelection(event: any) {
    this.showColumnSelection = true;
    this.columnSelectPopupX = (event.clientX + 250) > event.view.outerWidth ? `${event.clientX - 250}px` : `${event.clientX}px`;
    // this.columnSelectPopupX = (event.clientX + 250) > event.view.outerWidth ? `${event.clientX-250}px` :`${event.clientX}px`;
    this.columnSelectPopupY = `${event.clientY + 10}px`;
    console.log(event)
    console.log(event.view.outerWidth, event.pageX, (event.pageX + 250) > event.outerWidth, (event.pageX + 250) > event.outerWidth ? `${event.pageX - 250}px` : `${event.pageX}px`)
  }

  clickedOutside(value: boolean) {
    console.log(value)
    // this.showColumnSelection = value ? this.showColumnSelection : value;
  }

  getColumnCount(){
    return this.columnDefs.filter(col => !col.hide).length;
  }

}
