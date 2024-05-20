import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { RemoveComponent } from './remove/remove.component';

const routes: Routes = [{path:'main', component:MainComponent},
{path:'add', component:AddComponent}, 
{path:'view', component:ViewComponent},
{path:'search', component:SearchComponent}, 
{path:'remove', component:RemoveComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
