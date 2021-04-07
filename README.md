# Angular Starter Kit
This Angular Starter Kit contains the following libraries 
(instead of the defaults)
* [Cypress][1] instead of [Protractor][2]
* [ESLint][3] instead of [TSLint][4]
* [Jest][5] instead of [Karma][6] / [Jasmine][7]
* [Spectator][8] instead of [TestBed][9]

Additionally, the following libs have been added:
* [TailwindCSS][11]
* [lint-staged][12]

## Development server
Run `yarn dev` for a dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## Code scaffolding
Use the command `yarn generate` or `yarn g` to generate new components, 
services, directives and more. When add 's', the proper spec files using 
Spectator will automatically be generated.

### generate Component
* Without Spectator: `yarn g c dahserised-name`
* Default Spectator: `yarn g cs dasherised-name`
* Spec with a host: `yarn g cs dasherised-name --withHost=true`
* Spec with a custom host: `yarn g cs dasherised-name --withCustomHost=true`

### generate Service
* Without Spectator: `yarn g s dasherised-name`
* Default Spectator: `yarn g ss dasherised-name`
* Spec for testing http data service:
  `yarn g ss dashrized-name --isDataService=true`
  
### generate Directive
* Without Spectator: `yarn g d dashrized-name`
* Default Spectator: `yarn g ds dashrized-name`

### Others
You can also generate the following:
* Generate a Class:
  - without Spectator:`yarn g class`
  - without Spectator: `yarn g c`
  - with Spectator: `yarn g cs`
  
* Generate an Enum  
  - without Spectator: `yarn g enum`
  - without Spectator: `yarn g e`
  - with Spectator: `yarn g es`
  
* Generate a Guard:
  - without Spectator: `yarn g guard`
  - without Spectator: `yarn g g`
  - with Spectator: `yarn g g`
  
* Generate an Interface:
  - without Spectator: `yarn g interface`
  - without Spectator: `yarn g i`
  - with Spectator: `yarn g is`
  
* Generate a Module:
  - without Spectator: `yarn g module`
  - without Spectator: `yarn g m`
  - with Spectator: `yarn g ms`
  
* Generate a Pipe:
  - without Spectator: `yarn g pipe`
  - without Spectator: `yarn g p`
  - with Spectator: `yarn g ps`
  
## Build
Run `yarn build` to build the project. The build artifacts will be stored in 
the `dist/` directory. Use the `yarn build:production` flag for a production build.

## Testing
This project set up comes with both unit tests as well as end to end tests 
(browser test).

### Running unit tests
Run `yarn test` to execute the unit tests via [Jest][5]. Generating coverage
report can be done by running `yarn test:coverage`.

### Running end-to-end tests
Run `yarn test:e2e` to execute the end-to-end tests via [Cypress][1].

## Angular CLI Help
To get more help on the Angular CLI use `ng help` or go check out 
the [Angular CLI Overview and Command Reference][10] page.

---
[1]: https://www.cypress.io/
[2]: http://www.protractortest.org/
[3]: https://eslint.org/
[4]: https://palantir.github.io/tslint/  
[5]: https://jestjs.io/
[6]: https://karma-runner.github.io/
[7]: https://jasmine.github.io/   
[8]: https://github.com/ngneat/spectator
[9]: https://angular.io/api/core/testing/TestBed
[10]: https://angular.io/cli
[11]: https://tailwindcss.com/
[12]: https://github.com/okonet/lint-staged
