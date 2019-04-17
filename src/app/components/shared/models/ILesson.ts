import { ICourse } from './ICourse';

export interface ILesson {
    _id: string;
    title: string;
    image: string;
    video?: string;
    words: IWord[];
    grammar: string[];
    course: ICourse;
    test: IQuestion[];
}

export interface IWord {
    _id: string;
    word: string;
    translation: string;
    lesson: string;
}

export interface IQuestion {
    _id: string;
    question: string;
    a1: string;
    a2: string;
    a3: string;
    answer: number;
}