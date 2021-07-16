const app = require('../index.js')
const mongoose = require('mongoose')
const supertest = require('supertest')

const request = supertest(app)

// const Books = require('../../../bookclub-backend/models/books.js')
// const Reviews = require('../../../bookclub-backend/models/reviews.js')
// const Users = require('../../../bookclub-backend/models/users.js')

afterAll((done) => {
  mongoose.connection.close()
  done()
});

describe('testing if body always returns an array', () => {

  it('describe what the test is doing', async () => {
    const { body } = await request.get('/books/e_9MDwAAQBAJ');
    console.log(body)
    expect(body).toEqual(true);
  })

  // it('describe what the test is doing!', async () => {
  //   const { body } = await request.get('/books/e_9MDwAAQBAJ');
  //   expect(1).toEqual(1);
  // })

})