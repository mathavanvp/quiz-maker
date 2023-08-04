import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { QuizQuestionsData } from '../models/quiz-testscreen.model';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quiz-testscreen',
  templateUrl: './quiz-testscreen.component.html',
  styleUrls: ['./quiz-testscreen.component.scss']
})
export class QuizTestscreenComponent implements OnInit, OnChanges {

  @Input() displayQuizData!: QuizQuestionsData[];
  enableSubmit: boolean = false;
  pageTitle: string = "Test Screen";

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {

  }

  displayButtons() {
    this.displayQuizData.forEach((data) => {
      data.combined_answers = [...data.incorrect_answers];
      data.combined_answers.push(data.correct_answer);
      data.combined_answers = this.shuffle(data.combined_answers);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.displayButtons();
  }

  shuffle(data: string[]) {
    data.sort(() => Math.random() - 0.5);
    return data;
  }

  selectedValue(value: string, dataRowposition: number) {
    this.displayQuizData[dataRowposition].selected_answers = value;
    this.displayQuizData[dataRowposition].isAnswered = true;
    if(this.displayQuizData[dataRowposition].selected_answers === this.displayQuizData[dataRowposition].correct_answer){
      this.displayQuizData[dataRowposition].isCorrect = true;
    }
    else{
      this.displayQuizData[dataRowposition].isCorrect = false;
    }
    this.enableSubmit = this.displayQuizData.every(data => data.isAnswered);
  }

  submitQuiz() {
    this.dataService.setData(this.displayQuizData);
    this.router.navigate(['/result']);
  }

}
