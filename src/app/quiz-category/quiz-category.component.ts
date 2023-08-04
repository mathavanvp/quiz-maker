import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { QuizCategory, QuizCategoryData, QuizDifficulty } from '../models/quiz-category.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizQuestions, QuizQuestionsData } from '../models/quiz-testscreen.model';

@Component({
  selector: 'app-quiz-category',
  templateUrl: './quiz-category.component.html',
  styleUrls: ['./quiz-category.component.scss']
})
export class QuizCategoryComponent implements OnInit {

  pageTitle: string = "Select Category";
  quizCreateForm!: FormGroup;
  quizCategories!: QuizCategoryData[];
  quizDifficulties!: QuizDifficulty[];
  quizQuestions!: QuizQuestionsData[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCategory().subscribe((response: QuizCategory[]) => {
      const getResponse = JSON.parse(JSON.stringify(response));
      this.quizCategories = getResponse['trivia_categories'];
    });

    this.quizDifficulties = [
      { id: 1, name: "Easy" },
      { id: 2, name: "Medium" },
      { id: 3, name: "Hard" }
    ];

    this.quizCreateForm = new FormGroup({
      category: new FormControl('', Validators.required),
      difficulty: new FormControl('', Validators.required)
    });
  }

  createQuiz() {
    const category = this.quizCreateForm.value.category;
    const difficulty = this.quizCreateForm.value.difficulty.toLowerCase();

    this.dataService.getQuestions(category, difficulty).subscribe((response: QuizQuestions[]) => {
      const getResponse = JSON.parse(JSON.stringify(response));
      this.quizQuestions = getResponse['results'];
    });

  }
}
