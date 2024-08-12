import DataTableColDef from "./ColDef";

export default class DataTableParams{
  coldefs?: DataTableColDef;
  data?: any;
  value?: any;
  constructor(coldefs?: DataTableColDef, data?: any, value?: any) {
    this.coldefs = coldefs;
    this.data = data;
    this.value = value;
  }
}
