import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDisplayComponent } from './user-display/user-display.component';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';
import { UpdateComponent } from './update/update.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
const routes: Routes = [
  {path:'display', component: UserDisplayComponent},
  {path:'search',component:SearchComponent},
  {path:'sort',component:SortComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'register',component:RegistrationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
