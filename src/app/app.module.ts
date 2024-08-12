import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { CellComponent } from './components/cell/cell.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule} from "@angular/forms";
import { CellrenderereComponent } from './components/cellrenderere/cellrenderere.component';
import { CellinputComponent } from './components/cellinput/cellinput.component';
import { ColumnpopupComponent } from './components/columnpopup/columnpopup.component';
import {OutSideClickDirective} from "./utils/directives/outSideClick";
import {ResizableModule} from "angular-resizable-element";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CellComponent,
    CellrenderereComponent,
    CellinputComponent,
    ColumnpopupComponent
  ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        FormsModule,
        OutSideClickDirective,
        ResizableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
