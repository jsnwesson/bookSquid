var favorites = [
  {
    authors: ['Frank Herbert'],
    bookId: 'B1hSG45JCX4C',
    title: 'Dune',
    publishedDate: '2005',
    description: 'Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny.',
    genre: 'Fiction',
    image: 'http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
  },
  {
    authors: ['Jane Austen'],
    bookId: 'NNuEDwAAQBAJ',
    title: 'Pride and Prejudice',
    publishedDate: '2007',
    description: 'In late eighteenth-century England, a spirited young woman copes with the suit of a snobbish gentleman as well as the romantic entanglements of three of her four sisters.',
    genre: 'Fiction',
    image: 'https://books.google.com/books/content?id=5GbdTc9OJ78C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70zPvMzQ68dV4MvjPCa-ln2ZfxkrXgswWkXbEKytTaJagOkrNAfwUWNNPyXhX0ghuENcNa4rjT0FvduLFB8Z6xr19DIInMHLyy2elNLt8Pw3p5WazhIO4lWvOTKmFhoMpmZsT_x',
    thumbnail: 'https://books.google.com/books/content?id=5GbdTc9OJ78C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70zPvMzQ68dV4MvjPCa-ln2ZfxkrXgswWkXbEKytTaJagOkrNAfwUWNNPyXhX0ghuENcNa4rjT0FvduLFB8Z6xr19DIInMHLyy2elNLt8Pw3p5WazhIO4lWvOTKmFhoMpmZsT_x'
  },
  {
    authors: ['Emily Brontë'],
    bookId: 'CLLJoAEACAAJ',
    title: 'Wuthering Heights',
    publishedDate: '1847',
    description: "Emily Bronte was an English novelist & poet, who is best known for her only novel, \"Wuthering Heights: She has written poems also such as - ‘Poems by Currer, Ellis and Action Bell’, ‘A Death Scene’, ‘To a Wreath of Snow, and lots Many. ‘Wuthering Heights’ is a highly imaginative work of passion and hate. Author was interested in mysticism and used to enjoy her solitude outdoors. This novel consists of those elements. It is now considered a classic of English literature. It was published under the pseudonym - \"Ellis Bell” The story is full of high creativity and very imaginative. It narrates revenge also. It revolves around the main character, Heathcliff. Wuthering Heights is his farmhouse. Heathcliff is a young orphan, who was brought by Earnshaw at Wuthering Heights, 30 years ago. Earnshaw loves him (Heathcliff) so much, even neglects his own children. After death of Earnshaw, his elder son Hindley becomes the new master of Wuthering Heights and he allows Heathcliff to stay there only as a servant. Catherine is in love with Heathcliff, but doesn't show due to her social statue. The story thus seems very interesting and it ends with sights of the ghosts of Catherine and Heathcliff. It consists of many ups and downs Readers will Surely going to enjoy the novel. It’s Heartthrobing and it’s very difficult to getup without reading the novel - fully.",
    genre: 'Gothic fiction',
    image: 'https://books.google.com/googlebooks/images/no_cover_thumb.gif',
    thumbnail: 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'
  },
  {
    authors: ['J. K. Rowling'],
    bookId: 'kTH6zAEACAAJ',
    title: 'Harry Potter and the Philosopher\'s Stone',
    publishedDate: '1997',
    description: 'Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry.',
    genre: "Children's stories",
    image: 'http://books.google.com/books/content?id=kTH6zAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=kTH6zAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
  },
  {
    authors: ["J. R. R. Tolkien"],
    bookId: 'GNnxzQEACAAJ',
    title: "The Fellowship of the Ring",
    publishedDate: '2003-09',
    description: "After discovering the true nature of the One Ring, Bilbo Baggins entrusts it to the care of his young cousin, Frodo, who is charged with bringing about its destruction and thus foiling the plans of the Dark Lord.",
    genre: 'Fiction',
    image: 'http://books.google.com/books/content?id=GNnxzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=GNnxzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  },
  {
    authors: ['Iain M. Banks'],
    bookId: 'G803AgAAQBAJ',
    title: 'Excession',
    image: 'data:image/jpeg;base64,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',
    genre: 'Fiction',
    description: "After discovering the true nature of the One Ring, Bilbo Baggins entrusts it to the care of his young cousin, Frodo, who is charged with bringing about its destruction and thus foiling the plans of the Dark Lord.",
    publishedDate: '2003-09',
    thumbnail: 'data:image/jpeg;base64,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'
  },
];

var previouslyRead = [
  {
    authors: ['Frank Herbert'],
    bookId: 'B1hSG45JCX4C',
    title: 'Dune',
    thumbnail: 'http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
  },
  {
    authors: ['Jane Austen'],
    bookId: 'NNuEDwAAQBAJ',
    title: 'Pride and Prejudice',
    thumbnail: 'http://books.google.com/books/content?id=NNuEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
  },
  {
    authors: ['Emily Brontë'],
    bookId: 'CLLJoAEACAAJ',
    title: 'Wuthering Heights',
    thumbnail: 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'
  },
  {
    authors: ['J. K. Rowling'],
    bookId: 'kTH6zAEACAAJ',
    title: 'Harry Potter and the Philosopher\'s Stone',
    thumbnail: 'http://books.google.com/books/content?id=kTH6zAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
  },
  {
    authors: ["J. R. R. Tolkien"],
    bookId: 'GNnxzQEACAAJ',
    title: "The Fellowship of the Ring",
    thumbnail: 'http://books.google.com/books/content?id=GNnxzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  },
  {
    authors: ['Iain M. Banks'],
    bookId: 'G803AgAAQBAJ',
    title: 'Excession',
    thumbnail: 'http://books.google.com/books/content?id=G803AgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
  },
];

var wantToRead = [
  {
    authors: ['Frank Herbert'],
    bookId: 'B1hSG45JCX4C',
    title: 'Dune',
    thumbnail: 'http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
  },
  {
    authors: ['Jane Austen'],
    bookId: 'NNuEDwAAQBAJ',
    title: 'Pride and Prejudice',
    thumbnail: 'http://books.google.com/books/content?id=NNuEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
  },
  {
    authors: ['Emily Brontë'],
    bookId: 'CLLJoAEACAAJ',
    title: 'Wuthering Heights',
    thumbnail: 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'
  },
  {
    authors: ['J. K. Rowling'],
    bookId: 'kTH6zAEACAAJ',
    title: 'Harry Potter and the Philosopher\'s Stone',
    thumbnail: 'http://books.google.com/books/content?id=kTH6zAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
  },
  {
    authors: ["J. R. R. Tolkien"],
    bookId: 'GNnxzQEACAAJ',
    title: "The Fellowship of the Ring",
    thumbnail: 'http://books.google.com/books/content?id=GNnxzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  },
  {
    authors: ['Iain M. Banks'],
    bookId: 'G803AgAAQBAJ',
    title: 'Excession',
    thumbnail: 'http://books.google.com/books/content?id=G803AgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
  },
];

module.exports = {
  favorites,
  previouslyRead,
  wantToRead,
};
