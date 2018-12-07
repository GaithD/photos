import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {TableComponent} from './table.component';

const routes = [
  { path: '', component: TableComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {
}
