#[Udacity ](https://udacity.com/)

## Evaluate a news article with Natural Language Processing

Bulid A web tool that allows users to Run Natural Language Processing (NLP)on articales or blogs found on other website 
 
 Using an exciting new api called Aylien, we can build a simple web interface to interact with their NLP system. This tool will give us back pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

 Node and express will be the webserver and routing, and webpack will be our build tool of choice. Using webpack, we will set up the app to have development and production environments, each with their own set of tools and commands.

We will also use Jest to test our route and other JavaScript functions of our application

### Setup the  project

 ####Step 1 : you need to install and configure webpack 
`npm install `
`npm i webpack webpack-cli `
 - Step 2: you need to change all your css file into Sass style 
          and Minify js and styles in the production environment.
 - Step 3:Choose the necessary installation for your development mode

`npm i -D @babel/core @babel/preset-env babel-loader`
`npm i -D style-loader node-sass css-loader sass-loader`
`npm i -D clean-webpack-plugin`
`npm i -D html-webpack-plugin`
`npm i -D mini-css-extract-plugin`
`npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin`

- Step 4: Creating layouts and page design
- Step 5: Add Service workers
- Step 6: Using APIs and creating requests to external urls
          you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key. Don't worry, at the time of this course, the API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.
- Step 7: Install the SDK ,you'll need to get the SDK. SDK stands for Software Development Kit, and SDKs are usually a program that brings together various tools to help you work with a specific technology. SDKs will be available for all the major languages and platforms, for instance the Aylien SDK brings together a bunch of tools and functions that will make it possible to interface with their API from our server and is available for Node, Python, PHP, Go, Ruby and many others. We are going to use the Node one, the page is available [here](https://docs.aylien.com/textapi/sdks/#sdks). You get 1000 free requests per day. 

## Run the project in development and production mode.

### Run in development mode:
to start the webpack dev start server at port 8080

`$ npm run build-dev`

### Run in production mode:
`npm run build-prod ` to start server at port 8081

` npm run start`

### Configs

Here, we have two webpack config files for both development mode(webpack.config.dev.js) 
and production mode(webpack.config.prod.js )

We also have a package.json to manage dependencies
 ### Testing
 [Jest](https://jestjs.io/en/) is a framework for testing JavaScript projects.
  The Jest framework provides us the ability to create, and run unit tests.
1-Testing the handleSubmit functionality.
2-Testing the checkForName functionality.
3-Testing the ValidURL functionality.

  To run test, use the command
 `npm run test`


 ### Offline Functionality
 The project must have set up service workers in webpack.
 test that the site should be available even when you stop your local server .