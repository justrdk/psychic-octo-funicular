# bg-backend
Osman Hernandez

#Build instructions

1. clone repository
2. `npm install`
3. copy paste mongo connection string sent on email and put it inside `app/service/common/db-config.js`
4. `node server.js`
5. Server will start listening on port 3000


# Answered Questions

1. Why did you pick your particular design? What assumptions did you make, and what tradeoffs did you consider?

First thing consider on my design is separating the nodejs framework from the database so both are not tightly coupled and a change
of database wouldn't mean a big refactor on the code. That is why when and endpoint is hit a service is called which later calls its helper which is the one that actually makes the query to the database. This way KoaJS routes are not tightly coupled with the database
connection since its the service that actually does the connection and the queries.

I assumed mongodb was the right database for this example since each row of orders could be an object and could easily be stored and handle between backend and frontend. I declared my functions as generator functions so I could yield promises and avoid chaining
`then` methods, which tend to lead to convoluted and tedious unit tests cause of all the stubbing that goes into place with all the callbacks. Since there was no relation with other objects a NOSQL schema sound about right and easy for the exercise.

2. What do you like (and dislike) about Node/Javascript compared to other programming languages?

I love javascript is my favorite language. I like its flexibility, I like its dynamic typing, how easy it is to setup an environment
and start coding right away. I love how fast things are moving and all the new goodies and exciting stuff coming out really often.
Regarding node I believe is a great framework but backend tends to be more strict than the frontend. I feel sometimes is not as reliable as other languages, such as C# or Golang, and not as fast either. I don't like that node is behind es6 features and we
end up using babel transpiler (although most of the features are out on nodev8, but that is not a stable release and should not
  be used on production code).

I love the package manager (npm or yarn), not many languages have that easy setup or ability to download and start using
3rd party packages in a manner of minutes.
