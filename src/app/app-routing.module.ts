import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortlinkComponent } from './shortlink/shortlink.component';

const routes: Routes = [
  {path: '', component: ShortlinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
