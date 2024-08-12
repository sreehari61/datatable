import Search from "./search";

export default class RowSearch{
  field?: string;
  searchObj?: Search;

  constructor(field: string, searchObj: Search) {
    this.field = field;
    this.searchObj = searchObj;
  }
}
