# Startup Tasks Graph

The present code is for the challenge __Crowdholding - Startup Tasks Graph__ on VanHackaton 2017.

The challenge is to build a Graphical Interface for the task's
 dataset hosted on: https://docs.google.com/document/d/13v8xTD0lT_jW_CPJD6QBP0oRE93zjlylNgsZ7JW_TgE/edit

The description of the event was:
```
Given a simple dataset of 10 startup, 100 tasks and users answering the task, find a graphical way to express the activity.
```

Although, The dataset doesn't corespond with the description.

## Extra

A Chrome Extension was also made in addition to the challenge.

# Used Tools

To complete this task, I used:

- __ReactJS__ - Facebook Framework for User Interfaces.
- __Stylus__ - Stylesheet language that compiles down to CSS.
- __Pug__ - A Template language to generate HTML.
- __Gulp__ - Web Compiler.
- __Webpack__ - Web Bundler.
- __ESLint__ - Code inspector for JavaScript.
- __Babel__ - JavaScript transpiler for ES6/ES7.
- __Npm__ - Dependency mananger for nodejs based applications.
- __Darch__ - A React Framework that I develop along with my coworkers.
- __React Bootstrap__ - The Bootstrap framework, rebuilt for React.


# Directories Structure

* `app/`: Has all the application-related files. Source codes, images, fonts, icons, settings and the dataset (in `app/config/dataset.json`).

* `docs/`: Documentation-related files.

* `webpack/`: Settings to use the Webpack bundler.


# How to use?

To see the results, clone that repository and follow the next steps:

1. In a terminal, enter the project folder and run the command to download the dependencies: `npm install`

2. Next, build the application on the `dist` folder with the command `make`.

3. Done. See the results by openning the `dist/index.html` in a browser.

4. To run the application as a Chrome Extension:

    4.1) access `Settings > More Tools > Extensions`

    ![Go to Chrome Extensions](https://raw.githubusercontent.com/marco-souza/vanhackaton-2017-Startup-Task-Graph/master/docs/chrome-ext-1.png)

    4.2) Check the Developer Mode. After that, click on button `Load unpacked extension...` and select the `dist` folder. You will see a new icon on your Google Chrome Browser.

    ![Use the app as Chrome Extensions](https://raw.githubusercontent.com/marco-souza/vanhackaton-2017-Startup-Task-Graph/master/docs/chrome-ext-2.png)
