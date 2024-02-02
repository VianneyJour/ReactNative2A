import {Joke} from "./Joke";

export class CustomJoke extends Joke {
    private _id: string;

    constructor(type: string, setup: string, punchline: string, image: string, ID: string) {
        super(type, setup, punchline, image);
        this._id = ID;
    }

    public get id(): string
    {
        return this._id;
    }
}