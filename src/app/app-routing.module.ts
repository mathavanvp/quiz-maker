import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuizCategoryComponent } from './quiz-category/quiz-category.component';

const routes: Routes = [
  { path: 'home', component: QuizCategoryComponent },  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'result', component: QuizResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
