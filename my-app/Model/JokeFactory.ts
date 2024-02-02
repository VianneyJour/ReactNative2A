import {CustomJoke} from "./CustomJoke";
import {SampleJoke} from "./SampleJoke";

export class JokeFactory {
    public static createCustomJokes(jsonArray: string) : CustomJoke[]
    {
        const tab = JSON.parse(jsonArray);  //: object
        //JSON.stringify(tab): ""
        //TOTO = '[{"setup":"..." ; ...}]'
        let result :CustomJoke[] = []

        for (const joke of tab)
        {
            result.push(new CustomJoke(joke.type, joke.setup, joke.punchline, joke.image, joke.ID));
        }

        return result;
    }

    static createSampleJokes(jsonArray: string): SampleJoke[] {
        const json = JSON.parse(jsonArray);
        let result :SampleJoke[] = [];

        for (const joke of json)
        {
            result.push(new SampleJoke(joke.type, joke.setup, joke.punchline, joke.image, joke.id));
        }

        return result;
    }
}