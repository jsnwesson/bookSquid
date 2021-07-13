var favorites = [
  {
    authors: ['Frank Herbert'],
    bookId: 'B1hSG45JCX4C',
    title: 'Dune',
    publishedDate: '2005',
    description: 'Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny.',
    genre: 'Fiction',
    img: 'http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
  },
  {
    authors: ['Jane Austen'],
    bookId: 'NNuEDwAAQBAJ',
    title: 'Pride and Prejudice',
    publishedDate: '2007',
    description: 'In late eighteenth-century England, a spirited young woman copes with the suit of a snobbish gentleman as well as the romantic entanglements of three of her four sisters.',
    genre: 'Fiction',
    img: 'http://books.google.com/books?id=5GbdTc9OJ78C&printsec=frontcover&dq=pride+and+prejudice&hl=&cd=2&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=NNuEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
  },
  {
    authors: ['Emily Brontë'],
    bookId: 'CLLJoAEACAAJ',
    title: 'Wuthering Heights',
    publishedDate: '1847',
    description: "Emily Bronte was an English novelist & poet, who is best known for her only novel, \"Wuthering Heights: She has written poems also such as - ‘Poems by Currer, Ellis and Action Bell’, ‘A Death Scene’, ‘To a Wreath of Snow, and lots Many. ‘Wuthering Heights’ is a highly imaginative work of passion and hate. Author was interested in mysticism and used to enjoy her solitude outdoors. This novel consists of those elements. It is now considered a classic of English literature. It was published under the pseudonym - \"Ellis Bell” The story is full of high creativity and very imaginative. It narrates revenge also. It revolves around the main character, Heathcliff. Wuthering Heights is his farmhouse. Heathcliff is a young orphan, who was brought by Earnshaw at Wuthering Heights, 30 years ago. Earnshaw loves him (Heathcliff) so much, even neglects his own children. After death of Earnshaw, his elder son Hindley becomes the new master of Wuthering Heights and he allows Heathcliff to stay there only as a servant. Catherine is in love with Heathcliff, but doesn't show due to her social statue. The story thus seems very interesting and it ends with sights of the ghosts of Catherine and Heathcliff. It consists of many ups and downs Readers will Surely going to enjoy the novel. It’s Heartthrobing and it’s very difficult to getup without reading the novel - fully.",
    genre: 'Gothic fiction',
    img: 'https://books.google.com/googlebooks/images/no_cover_thumb.gif',
    thumbnail: 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'
  },
  {
    authors: ['J. K. Rowling'],
    bookId: 'kTH6zAEACAAJ',
    title: 'Harry Potter and the Philosopher\'s Stone',
    publishedDate: '1997',
    description: 'Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry.',
    genre: "Children's stories",
    img: 'http://books.google.com/books/content?id=kTH6zAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=kTH6zAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
  },
  {
    authors: ["J. R. R. Tolkien"],
    bookId: 'GNnxzQEACAAJ',
    title: "The Fellowship of the Ring",
    publishedDate: '2003-09',
    description: "After discovering the true nature of the One Ring, Bilbo Baggins entrusts it to the care of his young cousin, Frodo, who is charged with bringing about its destruction and thus foiling the plans of the Dark Lord.",
    genre: 'Fiction',
    img: 'http://books.google.com/books/content?id=GNnxzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=GNnxzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  },
  // {authors: ['Iain M. Banks'], bookId: '', title: '', publishedDate: '', description: '', genre: '', img: '', thumbnail: ''},
];

var previouslyRead = [
  {
    authors: ['Frank Herbert'],
    bookId: 'B1hSG45JCX4C',
    title: 'Dune',
    publishedDate: '2005',
    description: 'Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny.',
    genre: 'Fiction',
    img: 'http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
  },
  {
    authors: ['Jane Austen'],
    bookId: 'NNuEDwAAQBAJ',
    title: 'Pride and Prejudice',
    publishedDate: '2007',
    description: 'In late eighteenth-century England, a spirited young woman copes with the suit of a snobbish gentleman as well as the romantic entanglements of three of her four sisters.',
    genre: 'Fiction',
    img: 'http://books.google.com/books?id=5GbdTc9OJ78C&printsec=frontcover&dq=pride+and+prejudice&hl=&cd=2&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=NNuEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
  },
  {
    authors: ['Emily Brontë'],
    bookId: 'CLLJoAEACAAJ',
    title: 'Wuthering Heights',
    publishedDate: '1847',
    description: "Emily Bronte was an English novelist & poet, who is best known for her only novel, \"Wuthering Heights: She has written poems also such as - ‘Poems by Currer, Ellis and Action Bell’, ‘A Death Scene’, ‘To a Wreath of Snow, and lots Many. ‘Wuthering Heights’ is a highly imaginative work of passion and hate. Author was interested in mysticism and used to enjoy her solitude outdoors. This novel consists of those elements. It is now considered a classic of English literature. It was published under the pseudonym - \"Ellis Bell” The story is full of high creativity and very imaginative. It narrates revenge also. It revolves around the main character, Heathcliff. Wuthering Heights is his farmhouse. Heathcliff is a young orphan, who was brought by Earnshaw at Wuthering Heights, 30 years ago. Earnshaw loves him (Heathcliff) so much, even neglects his own children. After death of Earnshaw, his elder son Hindley becomes the new master of Wuthering Heights and he allows Heathcliff to stay there only as a servant. Catherine is in love with Heathcliff, but doesn't show due to her social statue. The story thus seems very interesting and it ends with sights of the ghosts of Catherine and Heathcliff. It consists of many ups and downs Readers will Surely going to enjoy the novel. It’s Heartthrobing and it’s very difficult to getup without reading the novel - fully.",
    genre: 'Gothic fiction',
    img: 'https://books.google.com/googlebooks/images/no_cover_thumb.gif',
    thumbnail: 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'
  },
  {
    authors: ['J. K. Rowling'],
    bookId: 'kTH6zAEACAAJ',
    title: 'Harry Potter and the Philosopher\'s Stone',
    publishedDate: '1997',
    description: 'Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry.',
    genre: "Children's stories",
    img: 'http://books.google.com/books/content?id=kTH6zAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=kTH6zAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
  },
  {
    authors: ["J. R. R. Tolkien"],
    bookId: 'GNnxzQEACAAJ',
    title: "The Fellowship of the Ring",
    publishedDate: '2003-09',
    description: "After discovering the true nature of the One Ring, Bilbo Baggins entrusts it to the care of his young cousin, Frodo, who is charged with bringing about its destruction and thus foiling the plans of the Dark Lord.",
    genre: 'Fiction',
    img: 'http://books.google.com/books/content?id=GNnxzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=GNnxzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  },
  // {authors: ['Iain M. Banks'], bookId: '', title: '', publishedDate: '', description: '', genre: '', img: '', thumbnail: ''},
];

var wantToRead = [
  {
    authors: ['Frank Herbert'],
    bookId: 'B1hSG45JCX4C',
    title: 'Dune',
    publishedDate: '2005',
    description: 'Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny.',
    genre: 'Fiction',
    img: 'http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
  },
  {
    authors: ['Jane Austen'],
    bookId: 'NNuEDwAAQBAJ',
    title: 'Pride and Prejudice',
    publishedDate: '2007',
    description: 'In late eighteenth-century England, a spirited young woman copes with the suit of a snobbish gentleman as well as the romantic entanglements of three of her four sisters.',
    genre: 'Fiction',
    img: 'http://books.google.com/books?id=5GbdTc9OJ78C&printsec=frontcover&dq=pride+and+prejudice&hl=&cd=2&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=NNuEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
  },
  {
    authors: ['Emily Brontë'],
    bookId: 'CLLJoAEACAAJ',
    title: 'Wuthering Heights',
    publishedDate: '1847',
    description: "Emily Bronte was an English novelist & poet, who is best known for her only novel, \"Wuthering Heights: She has written poems also such as - ‘Poems by Currer, Ellis and Action Bell’, ‘A Death Scene’, ‘To a Wreath of Snow, and lots Many. ‘Wuthering Heights’ is a highly imaginative work of passion and hate. Author was interested in mysticism and used to enjoy her solitude outdoors. This novel consists of those elements. It is now considered a classic of English literature. It was published under the pseudonym - \"Ellis Bell” The story is full of high creativity and very imaginative. It narrates revenge also. It revolves around the main character, Heathcliff. Wuthering Heights is his farmhouse. Heathcliff is a young orphan, who was brought by Earnshaw at Wuthering Heights, 30 years ago. Earnshaw loves him (Heathcliff) so much, even neglects his own children. After death of Earnshaw, his elder son Hindley becomes the new master of Wuthering Heights and he allows Heathcliff to stay there only as a servant. Catherine is in love with Heathcliff, but doesn't show due to her social statue. The story thus seems very interesting and it ends with sights of the ghosts of Catherine and Heathcliff. It consists of many ups and downs Readers will Surely going to enjoy the novel. It’s Heartthrobing and it’s very difficult to getup without reading the novel - fully.",
    genre: 'Gothic fiction',
    img: 'https://books.google.com/googlebooks/images/no_cover_thumb.gif',
    thumbnail: 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'
  },
  {
    authors: ['J. K. Rowling'],
    bookId: 'kTH6zAEACAAJ',
    title: 'Harry Potter and the Philosopher\'s Stone',
    publishedDate: '1997',
    description: 'Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry.',
    genre: "Children's stories",
    img: 'http://books.google.com/books/content?id=kTH6zAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=kTH6zAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
  },
  {
    authors: ["J. R. R. Tolkien"],
    bookId: 'GNnxzQEACAAJ',
    title: "The Fellowship of the Ring",
    publishedDate: '2003-09',
    description: "After discovering the true nature of the One Ring, Bilbo Baggins entrusts it to the care of his young cousin, Frodo, who is charged with bringing about its destruction and thus foiling the plans of the Dark Lord.",
    genre: 'Fiction',
    img: 'http://books.google.com/books/content?id=GNnxzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=GNnxzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  },
  // {authors: ['Iain M. Banks'], bookId: '', title: '', publishedDate: '', description: '', genre: '', img: '', thumbnail: ''},
];

module.exports = {
  favorites,
  previouslyRead,
  wantToRead,
};
