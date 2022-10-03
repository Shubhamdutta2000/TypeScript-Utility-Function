// Readonly: Takes an object and makes its properties read-only.

interface Comments {
    message: string;
    author: string;
    likeCount?: number;
  }
  
  type CommentsFromAPI = Readonly<Comments>;
  