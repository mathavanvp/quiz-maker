import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { QuizQuestionsData } from '../models/quiz-testscreen.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {

  displayQuizData!: QuizQuestionsData[];
  pageTitle: string = "Result Screen";
  resltCount: number = 0;
  resultColor!: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.currentData.subscribe((response: QuizQuestionsData[]) => {
      if (Object.keys(response).length === 0) {
        this.router.navigate(['/home']);
      }
      else {
        this.displayResult(response);
      }

    });
  }

  displayResult(response: QuizQuestionsData[]) {
    this.displayQuizData = response;
    this.displayQuizData.forEach((data) => {
      if (data.isCorrect === true) {
        this.resltCount++;
      }
    });

    if (this.resltCount < 2) {
      this.resultColor = "red";
    }
    else if (this.resltCount >= 2 && this.resltCount <= 3) {
      this.resultColor = "yellow";
    }
    else {
      this.resultColor = "green";
    }
  }

}
