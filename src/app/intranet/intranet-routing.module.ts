import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {InformacionComponent} from "./informacion/informacion.component";
import {IntranetComponent} from "./intranet.component";

const routes: Routes = [
  { path: '',
    component: IntranetComponent,
    children: [
      {path: '', component: IntranetComponent },
      {path: 'index', component: IndexComponent },
      {path: 'informacion', component: InformacionComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class intranetRoutingModule { }
