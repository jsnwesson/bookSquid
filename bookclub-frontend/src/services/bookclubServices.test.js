const { searchByCategory } = require('./bookclubServices')

// const Books = require('../../../bookclub-backend/models/books.js')
// const Reviews = require('../../../bookclub-backend/models/reviews.js')
// const Users = require('../../../bookclub-backend/models/users.js')

describe('testing if body always returns an array', () => {

  it('Should return an Array', async () => {
    let res = await searchByCategory('20000')
      .then((results) => {
        return results;
      });
    console.log(res);
    expect(Array.isArray(res)).toEqual(true);
  });

  // it('describe what the test is doing!', async () => {
  //   const { body } = await request.get('/books/e_9MDwAAQBAJ');
  //   expect(1).toEqual(1);
  // })

})