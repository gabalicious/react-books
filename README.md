# React Books

React Books is an interface to search the google books API. It uses react as frontend and Parceljs as it's bundler.

## Installation

* `git clone git@github.com:gabalicious/react-books.git`
* `cd react-books`
* `npm install`
* `npm start`

## Tests

* `npm run test`

## Technology Considerations

I went with parcel as the bundler because I love the zero config experience. I still needed to add some configuration to customize babel and to add postcss module support.  Also testing didn't work out of the box so I had to add some additional config options to get that working.

## Challenges

* [x] Add pagination

Originally I implemented pagination serverside using the totalItems attribute.  But totalItems attribute was unreliable and caused a wonky experience so opted to search for the first 40 results and paginate locally.

* [x] Make it performant / debounce / cache results

Cache results in localstorage.

* [x] Make it accessible (WCAG)

Passing lighthouse accessibility with 100%.

* [x] Add books publish date, and make it sortable
* [x] Add Jest unit tests for the code

Wrote one unit test to check for search button in component and one integration test to simulate book search with mock results.

* [x] Color the rows with alternating colours (grey / white)
* [x] Add a modal to show full book details when clicked
