import "CustomJoke"
class JokeFactory {
    public static createCustomJokes(jsonArray: string) : CustomJoke[]
    {
        let tab = JSON.parse(jsonArray);  //: object
        //JSON.stringify(tab): ""
        //TOTO = '[{"setup":"..." ; ...}]'
        let result = []

        tab.forEach(function (joke) {
            result.push(new CustomJoke(joke.type, joke.setup, joke.punchline, joke.image, joke.ID));
        });

        return result;
    }

    static createSampleJokes(jsonArray: string): SampleJoke[] {
        let json = JSON.parse(jsonArray);
        let result = [];

        json.forEach(function (joke) {
            result.push(new SampleJoke(joke.type, joke.setup, joke.punchline, joke.image, joke.id));
        });

        return result;
    }
}