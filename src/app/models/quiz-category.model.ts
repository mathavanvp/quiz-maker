export interface QuizCategoryData {
    id: number;
    name: string;
}

export interface QuizCategory {
    trivia_categories: QuizCategoryData[]
}

export interface QuizDifficulty {
    id: number;
    name: string;
}
