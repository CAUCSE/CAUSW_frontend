export const historyCommentList: User.FindCommentsResponseDto = {
  comment: {
    content: [
      {
        boardId: '1',
        postId: '1',
        parentCommentId: null,
        circleName: 'circleName',
        boardName: 'boardName',
        postName: 'postName',
        id: '1',
        content: 'comment_content',
        tagUserName: 'tagUserName',
        createdAt: '2024-01-22T17:41:50.213Z',
        updatedAt: '2024-01-22T17:41:50.213Z',
      },
    ],
    last: true, //problem: false하면 반복 생성됨.
  },
};

export const historyPostList: User.FindPostsResponseDto = {
  post: {
    content: [
      {
        boardId: '1',
        title: 'title',
        circleName: 'circleName',
        boardName: 'boardName',
        numComment: 0,
        id: '1',
        createdAt: '2024-01-22T17:41:50.213Z',
        updatedAt: '2024-01-22T17:41:50.213Z',
      },
    ],
    last: true, //problem: false하면 반복 생성됨.
  },
};
