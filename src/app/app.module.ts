import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizCategoryComponent } from './quiz-category/quiz-category.component';
import { QuizTestscreenComponent } from './quiz-testscreen/quiz-testscreen.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnicodePipe } from './pipes/unicode.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuizCategoryComponent,
    QuizTestscreenComponent,
    QuizResultComponent,
    UnicodePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
