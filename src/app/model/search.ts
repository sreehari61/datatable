export default class Search{
  field: string = "";
  searchString: string = "";

  constructor(field: string, searchString: string) {
    this.field = field;
    this.searchString = searchString;
  }
}
