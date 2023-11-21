import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {intranetRoutingModule} from "./intranet-routing.module";
import {RouterModule} from "@angular/router";
import { InformacionComponent } from './informacion/informacion.component';
import { IntranetComponent } from './intranet.component';



@NgModule({
  declarations: [
    IndexComponent,
    InformacionComponent,
    IntranetComponent
  ],
  imports: [
      CommonModule,
      intranetRoutingModule,
      RouterModule,
  ]
})
export class IntranetModule { }
