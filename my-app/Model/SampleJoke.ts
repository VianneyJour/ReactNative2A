class SampleJoke extends Joke {
    private _id: number;

    constructor(type: string, setup: string, punchline: string, image: string, ID: number) {
        super(type, setup, punchline, image);
        this._id = ID;
    }

    public get id(): number
    {
        return this._id;
    }
}