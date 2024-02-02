export abstract class Joke {
    private _type: string;
    private _setup: string;
    private _punchline: string;
    private _image: string;

    protected constructor(type: string, setup: string, punchline: string, image: string) {
        this._type = type;
        this._setup = setup;
        this._punchline = punchline;
        this._image = image;
    }

    public get type(): string {
        return this._type;
    }

    public set type(value: string) {
        this._type = value;
    }

    public get setup(): string {
        return this._setup;
    }

    public get punchline(): string {
        return this._punchline;
    }

    public get image(): string {
        return this._image;
    }

    public set image(value: string) {
        this._image = value;
    }

    public summary(): string
    {
        if (this._setup.length < 25)
        {
            return this._setup;
        }
        return this._setup.substring(0,24) + "...";
    }

    public description(): string
    {
        return this._type + " - " + this.summary();
    }
}