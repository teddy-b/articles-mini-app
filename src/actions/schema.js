import { schema } from 'normalizr';

export const reply = new schema.Entity('replies');

export const comment = new schema.Entity('comments', {
  comments: [reply]
});

export const article = new schema.Entity('articles', {
  comments: [comment]
});
