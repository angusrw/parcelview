# ParcelView

A system for managing post

## Development setup

- Ensure you have [git](https://git-scm.com/) installed and that you have created a public key and added it to your bitbucket account
- Clone the repository by running `git clone git@bitbucket.org:ghyston/parcel-view.git`
- Install the [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) installed on your machine. You can verify this by running `java -version`
- Install [Node](https://nodejs.org/en/download/current/). You can verify it is working by running `node -v`
- Install [Yarn](https://nodejs.org/en/download/current/). You can verify it is working by running `node -v`
- Download [Papercut](https://github.com/changemakerstudios/papercut) and run it on port 25, which is the default
- Download postgres and install it
- Install [IntelliJ IDEA](https://www.jetbrains.com/idea/) and [Datagrip](https://www.jetbrains.com/datagrip/)
- Create the database:
    - ensure postgres is running
    - in datagrip add a new postgres data source (little green plus in the top left)
    - use `host: localhost, user: postgres, pass: postgres, port: 5432` (Note this may be different depending on what you chose when installing postgres)
    - add a new database  (right click postgres@loclhost -> new -> database)
    - open a console (By right clicking your newly created database) and run the following by selecting each line and hitting `ctrl + enter`:
    ```sql
    CREATE DATABASE parcelview;
    CREATE USER postgres WITH PASSWORD 'parcelview_password';
    GRANT ALL PRIVILEGES ON DATABASE parcelview TO parcelview_user;
    ```
- Launch Papercut in order to recieve emails

- Open the project folder in intelliJ
- Run `yarn install` in the `/client` directory
- Use the included [run configurations](https://www.jetbrains.com/help/idea/creating-and-editing-run-debug-configurations.html) to run the server and client components (All you need to do is hit the green arrow)  

### Migrations

Database migrations are handled via [flyway](https://flywaydb.org/documentation/) and are run automatically on startup.
These can be manually run by calling `./gradlew flywayMigrate`
To completely recreate your database (useful when developing a migration) you can run `./gradlew flywayClean` and then run the migrations again

## Workflow

- Assign yourself to a ticket on trello
- Create a new branch in git with a name that relates to the ticket `git checkout -b your-descriptive-branch-name`
- Where relevant create tests to cover the functionality you are creating
- Continually create small focused commits and push your branch remotely
- Once you are finished create a pull request in bitbucket
- Get at least one other person to review and approve your code
- Success

## Useful links

#### Tools

- [Idea](https://www.jetbrains.com/idea/) A multi-language [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment)
- [Papercut](https://github.com/changemakerstudios/papercut) A local SMTP server useful for testing email

#### API Component

- [Kotlin](https://kotlinlang.org/docs/reference/) A programming langugage which targets the [JVM](https://en.wikipedia.org/wiki/Java_virtual_machine) designed to enhance and improve upon Java by embracing industry best practaces while providing the ability to tightly integrate and take advantage of the Java ecosystem
- [Postgres](https://www.postgresql.org/download/) A free open-source [SQL](https://developer.mozilla.org/en-US/docs/Glossary/SQL) database
- [Gradle](https://gradle.org/) a [build tool](https://stackoverflow.com/questions/7249871/what-is-a-build-tool) and [package manager](https://en.wikipedia.org/wiki/Package_manager) for building JVM based projects
- [Flyway](https://flywaydb.org/) A tool to run and manage [database migrations](https://en.wikipedia.org/wiki/Schema_migration), integrates with gradle and spring
- [Spring boot](https://projects.spring.io/spring-boot/) specifically V2. A vast and mature web framework which provides solutions for almost all web related tasks. Provides good kotlin support  

#### Client component

- [Typescript](https://www.typescriptlang.org/index.html) A [type system](https://en.wikipedia.org/wiki/Type_system) for [Javascript](https://developer.mozilla.org/bm/docs/Web/JavaScript) designed to reduce bugs and speed development
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) The way you change the appearance of web pages
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) XML based markup which is rendered by web-browsers
- [Material UI](http://www.material-ui.com/#/components/flat-button) A component kit which will speed development by provided high quality pre-built UI elements
- [Styled Components]() A Javascript library for styling react components
- [React](https://reactjs.org/) A Javascript library for writing user interfaces
- [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) A utility for bootstrapping client applications. Handles creating lots of config and boilerplate files. The User guide has a _lot_ of information on all of the frontend technologies and how they are configured  

## Team

- Dean Merchant <dean.merchant@ghyston.com>;
- Angus Williams <aw16797@my.bristol.ac.uk>;
- Jack Hodgkinson <jh16015@my.bristol.ac.uk>;
- Mark Vijitratanakit <pv16445@my.bristol.ac.uk>;
- Palvi Shah <ps16925@my.bristol.ac.uk>;
- Tom Armson <ta16168@my.bristol.ac.uk>;
- Yuzhou Yu <yy16510@my.bristol.ac.uk>;
