import {JokeFactory} from "./JokeFactory";

export class Stub {
    // Element CustomJoke
    static customJokeStub = JokeFactory.createCustomJokes('[' +
        '{"id":"1", "type":"custom", "setup":"one", "punchline":"bidule", "image":"Tata"},' +
        '{"id":"2", "type":"custom", "setup":"two","punchline":"machin", "image":"Titi"}]'
    );

    // Element SampleJoke
    static sampleJokeStub = JokeFactory.createSampleJokes('[' +
        '{"id":"1", "type":"custom", "setup":"Toto dans un avions", "punchline":"Toto est un salaud", "image":"Toto"},' +
        '{"id":"2", "type":"custom", "setup":"Quoi ?","punchline":"FEUR", "image":"Chloe"}]'
    );
}