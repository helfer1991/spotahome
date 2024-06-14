# spotahome

This is my proposed solution to the Spotahome technical challenge.
I'm a FE engineer with a bit of experience on the backend with Rails.

Tech stack of the exercise:

- React.JS (with Typescript);
- Styled-Components;
- Express.JS;
- GraphQL (with Apollo Client);
- RTL with Jest for unit tests.

I chose Typescript, because that's the stack I work with the most. For the backend I chose JS, as setting Typescript up in the BE would take a bit more time and there is a rather short time constraint for this challenge.
GraphQL is also a technology for BE integration that I've used extensively for almost 3 years at XING.

## Technical decisions

There were 2 ways that I considered to tackle this challenge: either to create more than one endpoint on the backend for pagination and sorting purposes, or just create one endpoint on the backend that would retrieve a query with the data fetched by the endpoint mentioned on the challenge description.

To do the sorting (or searching) and the pagination on the server would provide performance benefits and make the solution a lot more scalable, provided that the data set was actually large enough for that.
However, the data set had less than 100 records, so doing the pagination on the backend would mean a constant back and forth of requests any time I wanted to get the next (or previous) page.

Considering that, I decided to handle that on the frontend, as it would make the UI/UX more seamless and fluid.

That decision also meant that I would do the sorting on the frontend using 3 fields: price, title and bedrooms.

I also created a skeleton component for the Table, which is shown whilst data is being fetched from the graphql server.

I created a component called 'products-list-container' that decides what to render, as in, when the data is being fetched through a useQuery hook it's actually being destructured into the objects 'data', 'loading' and 'error. It's, therefore, the responsibility of this container component to decide whether it will render and error message, an empty state, the loading state or the actual component (products-list).

I created tests for the meaningful functionalities, so I didn't test the footer or the header, as they are just images, or a text.

The data is being displayed on a Table, as required per the acceptance criterias.
If that acceptance criteria was not present I would have created cards and a carousel for each image.

Hope you enjoy!

## Time spent

7 hours. 2h for planning the structure of the project and setting everything up, 4h for coding and refactoring and 1h for unit tests.

## Steps to build, run and test the app

### Backend

cd server
npm install
node server.js
npm test

### Frontend

cd client
npm install
npm start
npm test
