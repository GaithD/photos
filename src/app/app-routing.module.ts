import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'photos', loadChildren: './features/photos/photos-view.module#PhotosViewModule'},
  {path: 'table', loadChildren: './features/table/table.module#TableModule'},
  {
    path: '',
    redirectTo: 'photos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}



