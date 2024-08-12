import DataTableColDef from "../model/ColDef";

export interface CellEvent {
  // column: DataTableColDef;
  colDef: DataTableColDef;
  /** The value for the cell */
  value?: any;
}
