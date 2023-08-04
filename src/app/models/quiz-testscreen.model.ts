export interface QuizQuestionsData {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
    combined_answers: string[],
    selected_answers: string,
    isAnswered: boolean,
    isCorrect: boolean
}

export interface QuizQuestions {
    response_code: number,
    results: QuizQuestionsData[]
}
