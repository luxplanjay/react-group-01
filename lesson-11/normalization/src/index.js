import { schema, normalize } from 'normalizr';

// posts
// authors
// tags
// comments

const authorSchema = new schema.Entity('authors');

const tagSchema = new schema.Entity('tags');

const commentSchema = new schema.Entity('comments', {
  author: authorSchema,
  tags: [tagSchema],
});

const postSchema = new schema.Entity('posts', {
  author: authorSchema,
  tags: [tagSchema],
  comments: [commentSchema],
});

const data = [
  {
    id: 'post-1',
    text: 'random post text',
    author: { id: 'author-1', name: 'Mango' },
    tags: [
      { id: 'tag-1', value: 'life' },
      { id: 'tag-2', value: 'fun' },
      { id: 'tag-4', value: 'sleep' },
    ],
    comments: [
      {
        id: 'comment-1',
        text: 'random comment text',
        author: { id: 'author-2', name: 'Poly' },
        tags: [{ id: 'tag-2', value: 'fun' }],
      },
      {
        id: 'comment-2',
        text: 'random comment text',
        tags: [],
        author: { id: 'author-1', name: 'Mango' },
      },
    ],
  },
  {
    id: 'post-2',
    text: 'random post text',
    author: { id: 'author-2', name: 'Poly' },
    tags: [{ id: 'tag-2', value: 'fun' }, { id: 'tag-3', value: 'work' }],
    comments: [
      {
        id: 'comment-3',
        text: 'random comment text',
        author: { id: 'author-3', name: 'Ajax' },
        tags: [{ id: 'tag-1', value: 'life' }],
      },
      {
        id: 'comment-4',
        text: 'random comment text',
        author: { id: 'author-1', name: 'Mango' },
        tags: [{ id: 'tag-3', value: 'work' }],
      },
    ],
  },
];

console.log('data: ', data);

const normalizedData = normalize(data, [postSchema]);

console.log('normalizedData: ', normalizedData);
