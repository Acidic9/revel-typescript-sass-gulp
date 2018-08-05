# Revel : TypeScript : Sass : Gulp

### A full starter project which uses the Go Revel web framework and has gulp setup for TypeScript and Sass.

## Getting Started

1. In your terminal, run
   ```
   git clone https://github.com/Acidic9/revel-typescript-sass-gulp.git my-web-app && cd my-web-app
   ```

2. Install the dependencies
   ```
   yarn install && go get github.com/revel/cmd/revel
   ```

3. Run your app with
   ```
   yarn run build && revel run
   ```

You may also open a new terminal and run `yarn run watch` to watch all changes made in `/src`.

You may also want to replace `revel-typescript-sass-gulp` in `package.json` and `conf/app.conf` to your app's name.

## Code Layout

The directory structure of a generated Revel application:

    conf/             Configuration directory
        app.conf      Main app configuration file
        routes        Routes definition file

    app/              App sources
        init.go       Interceptor registration
        controllers/  App controllers go here
        views/        Templates directory

    messages/         Message files

    src/              Assets (CSS, JS, Images, Fonts)
        sass/         SASS files
        ts/           TypeScript files
        assets/       Images and fonts
            img/      Image files
            fonts/    Font files

    public/           Public static assets (DO NOT EDIT)
        css/          CSS files
        js/           Javascript files
        images/       Image files

    tests/            Test suites


## Help

* The [Getting Started with Revel](http://revel.github.io/tutorial/gettingstarted.html).
* The [Revel guides](http://revel.github.io/manual/index.html).
* The [Revel sample apps](http://revel.github.io/examples/index.html).
* The [API documentation](https://godoc.org/github.com/revel/revel).

* The [Getting Started with Gulp](https://gulpjs.org/getting-started).
