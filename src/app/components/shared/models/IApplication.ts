export interface IApplication {
    title: string;
    body: string;
    userId: string;
    _id?: string;
    state: number;
}

export interface IApplicationEntity {
    title: string;
    body: string;
}