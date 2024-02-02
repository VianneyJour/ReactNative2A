import {JokeFactory} from "./JokeFactory";

export class Stub {
    // Element CustomJoke
    static customJokeStub = JokeFactory.createCustomJokes('[' +
        '{"id":"0", "type":"custom", "setup":"pourquoi pas ça", "punchline":"bidule", "image":"Tata"},' +
        '{"id":"1", "type":"custom", "setup":"je pense pas","punchline":"machin", "image":"Titi"}]'
    );

    // Element SampleJoke
    static sampleJokeStub = JokeFactory.createSampleJokes('[' +
        '{"id":"0", "type":"sample", "setup":"C est l histoire de", "punchline":"non", "image":"https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/03/web-images.jpg?auto=format&q=60&w=1600&h=824&fit=crop&crop=faces"},' +
        '{"id":"1", "type":"sample", "setup":"Qu est-ce qui est","punchline":"non en faite rien", "image":"https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/03/web-images.jpg?auto=format&q=60&w=1600&h=824&fit=crop&crop=faces"},' +
        '{"id":"2", "type":"sample", "setup":"C est l histoire de", "punchline":"non", "image":"https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/03/web-images.jpg?auto=format&q=60&w=1600&h=824&fit=crop&crop=faces"},' +
        '{"id":"3", "type":"sample", "setup":"Qu est-ce qui est","punchline":"non en faite rien", "image":"https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/03/web-images.jpg?auto=format&q=60&w=1600&h=824&fit=crop&crop=faces"}]'
    );
}