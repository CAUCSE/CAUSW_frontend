declare namespace HistoryData {
  export interface Post {
    boardId: string;
    id: string;
    circleName: string | null;
    boardName: string;
    title: string;
    numComment: number;
    createdAt: string;
    updatedAt: string;
    //#71 추가
    circleId: string;
  }

  export interface Comment {
    boardId: string;
    postId: string;
    //parentCommentId: string | null;
    circleName: string | null;
    boardName: string;
    postName: string;
    id: string;
    content: string;
    //tagUserName: string | null;
    createdAt: string;
    updatedAt: string;
    //#71 추가
    isDeleted: boolean;
    circleId: string;
  }
}
