export interface User {
  name: string;
  avatar: string;
}

export interface Idea {
  image: string;
  text: string;
  time: string;
  author: User;
}
