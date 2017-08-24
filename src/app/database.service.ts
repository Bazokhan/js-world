import { Injectable } from '@angular/core';

let javaScript = {
  topicName: 'JavaScript',
  articles: [
    { _id: 'article01',
    name: '10 Tips for Writing JavaScript without jQuery',
    url: '//tutorialzine.com/2014/06/10-tips-for-writing-javascript-without-jquery',
    siteName: 'tutorialzine.com',
    recommended: false,
    completed: false,
    description: `
    jQuery is a great library. It came to be around the time when IE6 was the number one browser.
    Today, however, web browsers have advanced a great deal from those days. We can comfortably use all features provided by ES5, and we have at our disposal awesome HTML5 APIs that make working with the DOM so much nicer.
    Developers are now at a position where they can choose to leave out jQuery for some projects, and still retain their productivity.
    ` },
    { _id: 'article02',
    name: 'Events in JavaScript',
    url: '//www.kirupa.com/html5/javascript_events.htm',
    siteName: 'www.kirupa.com',
    recommended: true,
    completed: false,
    description: `
    In case you haven't noticed, most applications and web sites are pretty boring when left alone.
    The reason for this is simple. Your applications exist to react to things that you do to them.
    The way you tell your applications what to do is by having them react to what are known as events. In this tutorial, we will take an introductory look at what events are and how you can use them.
    `, }
  ],
  youtube_Videos: [
    
  ],
  books: [
    { _id: 'book01',
    name: '15 Awesome And Free JavaScript Books',
    url: '//tutorialzine.com/2015/05/15-awesome-and-free-javascript-books',
    siteName: 'tutorialzine.com',
    recommended: true,    
    completed: false,
    description: `
    Even though it has its quirks, JavaScript is here to stay, and now is a good time to learn it! This is why we've collected for you our 15 favorite free books that will help you learn and sharpen your skills.
    They are divided into : Basic, advanced and frameworks and libraries
    ` }
  ],
  references: [
    { _id: 'reference01',
    name: 'JavaScript Array Reference',
    url: '//www.w3schools.com/jsref/jsref_obj_array.asp',
    siteName: 'www.w3schools.com',
    recommended: false,
    completed: false,
    description: `
    W3Schools reference page for arrays methods and properties
    ` },
    { _id: 'reference02',
    name: 'Processing.js',
    url: '//processingjs.org/reference/',
    siteName: 'processingjs.org',
    recommended: false,
    completed: false,
    description: `
    Processing.js is the sister project of the popular Processing visual programming language, designed for the web.
    Processing.js makes your data visualizations, digital art, interactive animations, educational graphs, video games, etc. work using web standards and without any plug-ins. You write code using the Processing language, include it in your web page, and Processing.js does the rest. It's not magic, but almost.
    ` }
  ]
}

let nodeJs = {
  topicName: 'NodeJs',
  articles: [],
  youtubeVideos: [],
  books: []
}

let angular = {
  topicName: 'Angular'
}

@Injectable()
export class DatabaseService {

  arrOfModules = [ javaScript, nodeJs, angular ]

  constructor() { }

}
