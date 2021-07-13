BOOKS API

// queries google api book data using query parameters given from client request and returns relevant data back in response body
GET /books/search

query parameters:
  query - String (term used to search) *REQUIRED*
  type - String (whether searching by 'title', 'author', or 'genre') *REQUIRED*
response:
{
  results: [
    {
      bookID: String
      title: String
      author: [String] (possibly more than one author)
      imageURL: URL
      avgRating: Number
      reviewCount: Number
    }, {...}
  ]
}

// queries web app's database for more specific data on a single book
GET /books/:book_id
query parameters:
  book_id - String (will be provided for you from the response body of GET requests for book data via search) *REQUIRED*
response:
{
  bookID: String
  title: String
  subtitle: String
  author: [String]
  publishDate: Date
  summary: String
  imageURLs: {
    smallThumbnail: 'URL_GOES_HERE',
    thumbnail: 'URL_GOES_HERE',
    // small, medium, large, extraLarge available as well
  }
  categories: [String]
    - first category in this array is the most important, and should be the one displayed if the front end needs it
}

REVIEWS API

// retrieve all reviews posted on a book OR by a user
GET /reviews/:id
query parameters:
  id - String *REQUIRED*
  id_type - String (either 'book' or 'user, default is 'book')
response:
{
  results: [
    {
      rating: Number
      reviewBody: String
      reviewDate: Date
      username: String (name, not email. or whichever you want, really. let me know)
    }, {...}
  ]
}

// retrieve review count and individual ratings of a book
GET /reviews/ratingData
query parameters:
  book_id - String *REQUIRED*
response: {
  reviewCount: Number
  ratings: {
    1: Number,
    2: Number,
    3, 4, 5
  }
}

// post a review on a book's info page
POST /reviews
body parameters:
  book_id - String *REQUIRED*
  rating - Number *REQUIRED*
  review_text - String *REQUIRED*
response:
201 code if successful. if any of the above are missing returns a 4xx code




USER API

// retrieve data needed for user profile display
GET /user/profile/

query parameters:
  user_id - String (your own user_id will be available as a prop in any given component)
  email - String
- can give either one of these to check a particular user's profile. if none are given, profile data of currently logged in user is given instead

response:
{
  name: String
  joinDate: Date

  lists: {
    favorites: [String] (array of book IDs)
    readBooks: [String]
    // other lists as needed
  }
  reviews: [String] (array of review IDs)
}

// add a book to a particular list or all lists, whether favorites or otherwise
POST /user/lists/
parameters:
  book_id - String *REQUIRED*
  list_name - String *REQUIRED*

response: 201 if successful, if either parameter is missing returns 4xx


- NOTE: THESE ENDPOINTS WILL NOT BE USEFUL SINCE FIREBASE IS ALREADY HANDLING AUTHENTICATION, DONT WORRY ABOUT THEM
// user creation
POST /user/create

body parameters:
  email - string
  name - string
  password - string
- email must be unique (not already in database) and valid, and will return a 4xx if it isn't both


// user login
POST /user/login

body parameters:
  email - string
  password - string
- standard response codes: 4xx on incorrect or nonexistent email, 2xx on successful login


// user logout
POST /user/logout

parameters:
none (i think.)
