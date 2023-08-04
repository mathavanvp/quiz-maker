import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { QuizCategory } from './models/quiz-category.model';
import { QuizQuestions, QuizQuestionsData } from './models/quiz-testscreen.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: BehaviorSubject<QuizQuestionsData[]> = new BehaviorSubject<QuizQuestionsData[]>([])
  currentData = this.data.asObservable();

  constructor(private http: HttpClient) { }

  setData(data: QuizQuestionsData[]) {
    this.data.next(data);
  }

  getCategory(): Observable<QuizCategory[]> {
    return this.http.get<QuizCategory[]>('https://opentdb.com/api_category.php');
  }

  getQuestions(category: number, difficulty: string): Observable<QuizQuestions[]> {
    return this.http.get<QuizQuestions[]>(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`);
  }

}
