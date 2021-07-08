import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
// import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentComponent } from './student/student.component';
// import { ReactiveformComponent } from './reactiveform/reactiveform.component';


const routes: Routes = [
  {path: '',component: HomeComponent },
  {path: 'home',component: HomeComponent },
  {path: 'about',component: AboutComponent},
  {path: 'student',component: StudentComponent},
  {path: 'student-form',component: StudentFormComponent},
  // {path: 'reactiveform', component: ReactiveformComponent},
  // {path: 'form', component: FormComponent},
  {path: '**',component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
