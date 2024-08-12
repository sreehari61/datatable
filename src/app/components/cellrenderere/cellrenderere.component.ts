import { Component } from '@angular/core';
import DataTableParams from "../../model/tableparams";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-cellrenderere',
  templateUrl: './cellrenderere.component.html',
  styleUrls: ['./cellrenderere.component.css']
})
export class CellrenderereComponent {

  params?: DataTableParams;

  public dataTableInit(params: any) {
    this.params = params
  }

  protected readonly faUserCircle = faUserCircle;
}
