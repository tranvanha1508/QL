import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
// import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsComponent } from './students/students.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// import { ReactiveformComponent } from './reactiveform/reactiveform.component';


const routes: Routes = [
  {path: '',component: HomeComponent },
  {path: 'home',component: HomeComponent },
  {path: 'dashboard',component: DashboardComponent },
  {path: 'about',component: AboutComponent},
  {path: 'students',component: StudentsComponent},
  {path: 'student-form/:id',component: StudentFormComponent},
  // {path: 'reactiveform', component: ReactiveformComponent},
  // {path: 'form', component: FormComponent},
  {path: '**',component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
