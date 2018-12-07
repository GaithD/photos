import {NgModule} from '@angular/core';

import {TableComponent} from './table.component';
import {TableRoutingModule} from './table-routing.module';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [TableRoutingModule],
})
export class TableModule {

}

