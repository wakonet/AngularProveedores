import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaproveedoresComponent } from './listaproveedores/listaproveedores.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
   { path: 'listaproveedores', component: ListaproveedoresComponent },
   { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
