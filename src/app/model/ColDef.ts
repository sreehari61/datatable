import {SortType} from "../utils/enums/sortenum";
import {Component} from "@angular/core";
import DataTableParams from "./tableparams";

export default class DataTableColDef{
  headerName: string = "";
  headerTooltip: string = "";
  field: string = "";
  tooltipField: string = "";
  hide?: boolean = false;
  sortType?: SortType = SortType.NONE;
  editable?: boolean = false;
  valueGetter?: (params: DataTableParams) => string;
  toolTipValueGetter?: (params: DataTableParams) => string;
  cellRenderer?: any;
}
