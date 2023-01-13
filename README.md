# GitHub API Repository Issues checker<a id='top'></a>

[Installation](#section1)

[How does it work?](#section2)

[How did I made it?](#section3)

[What's next?](#section4)
<hr>

## Installation<a id='section1'></a>
Run `npm instal` to download dependencies

### Development server
Run `npm start` o `npm run serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Running unit tests 
Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Build
If you want to check "offline first" you need to run `npm run build` to create dist build first and then run `npm run http`.

[back to top](#top)

## How does it work?<a id='section2'></a>

<-- img here -->

It's simple. Just enter the repository link into the search box and hit "enter" to get the info, for example: 
```
https://github.com/{owner}/{repository}

https://github.com/irontec/ivozprovider
https://github.com/facebook/angular/
```

The app will make a request to the GitHub API and if exist return a repository with issues list. Before loading the result page, the app will check if the provided link is correct, changing the input field borders from _red_ to _green_.

Once loaded, you will see basic information like:
- Issues title
- Issues labels

Also, you can click on "+" button to show more information about this issues
- Issues ID
- Creation date
- Issue body content
- Owner name
- Owner avatar
- Owner ID


Hope you like it
Enjoy! ;)

[back to top](#top)

## How did I made it?<a id='section3'></a>

I used Angular 15, TailwindCSS, Angular Router, NgRX, TypeScript HTML5, GitHub API.

<-- img here -->

* [Angular CLI](https://angular.io/) - for frontend
* [Angular Router](https://angular.io/guide/router) - for routing
* [TypeScript](https://www.typescriptlang.org/) - for type checking
* [NgRX](https://ngrx.io/) - for state management
* [TailwindCSS](https://tailwindcss.com/) - for styling
* [HTML5](https://developer.mozilla.org/es/docs/Web/HTML) - for markup
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS#:~:text=Cascading%20Style%20Sheets%20(CSS)%20is,speech%2C%20or%20on%20other%20media.) - for extra styles 
* [Regex](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions) - for link pattern validation


#### _Why TailwindCSS and not Material UI or Bootstrap?_
I choose TailwindCSS because it's very light and easy to use.
You don't need to download all styles and scripts, only those you use in your application. This way my app is really light and fast.

<-- img here -->

[back to top](#top)

## What's next?<a id='section4'></a>
There are a lot of things to do. I'm planning to add more features to this app.

For example:
- [x] Add repository search
- [x] Add pagination
- [x] Add url validation
- [x] Add HttpErrorResponse check
- [x] Add more information about issue
- [x] Transform issue "body" into HTML
- [x] Add issues tags
- [x] Add offline first
- [x] Add NgRx effects
- [ ] Use NX monorepo
- [ ] Improve testing
- [ ] Add repository search by "user name" or "repo name"
- [ ] Add issues comments
    
    And more...

[back to top](#top)