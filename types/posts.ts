export interface Post {
  id: string;
  title: string;
  body: string;
  author: string;
  date: string;
  comments: PostComment[];
  test?: string;
}

export interface PostComment {
  id: string;
  text: string;
  username: string;
}
