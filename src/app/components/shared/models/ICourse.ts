import { ILesson } from './ILesson';

export interface ICourse {
    _id: string;
    language: string;
    flag: string;
    lessons: ILesson[]
}