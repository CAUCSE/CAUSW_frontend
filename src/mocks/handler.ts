import { http, HttpResponse } from 'msw';

const contentList: Post.Dto[] = [
  {
    id: '0',
    title: 'post_title',
    writerName: 'post_writerName',
    writerAdmissionYear: 19,
    writerProfileImage: 'content_writerProfileImage | null',
    content: 'content',
    createdAt: new Date('2024-01-11T15:34'),
    updatedAt: new Date(),
    numComment: 0,
    updatable: false,
    deletable: false,
    isDeleted: false,
  },
  {
    id: '1',
    title: 'post_title2',
    writerName: 'post_writerName2',
    writerAdmissionYear: 20,
    writerProfileImage: 'content_writerProfileImage2 | null',
    content: 'content2',
    createdAt: new Date('2024-01-12T15:34'),
    updatedAt: new Date(),
    numComment: 2,
    updatable: false,
    deletable: false,
    isDeleted: false,
  },
];

const commentList: PostComment.GetResponseDto = {
  last: false,
  content: [
    {
      postId: '0',
      id: '0',
      writerAdmissionYear: 19,
      writerName: 'writer_name',
      writerProfileImage: 'writerProfileImage | null',
      content: 'comment_content',
      createdAt: '2024-01-12T15:34',
      updatedAt: '2024-01-13T15:34',
      numChildComment: 1,
      updatable: false,
      deletable: false,
      isDeleted: false,
    },
    {
      postId: '0',
      id: '1',
      writerAdmissionYear: 19,
      writerName: 'writer_name',
      writerProfileImage: 'writerProfileImage | null',
      content: 'comment_content',
      createdAt: '2024-01-12T15:34',
      updatedAt: '2024-01-13T15:34',
      numChildComment: 1,
      updatable: false,
      deletable: false,
      isDeleted: false,
    },
  ],
};

const getHomePageHandler = () => {
  return HttpResponse.json<Home.GetHomePageResponseDto>([
    {
      board: { id: '0', category: 'board_category', name: '학생회 공지게시판' },
      posts: {
        content: contentList,
      },
    },
  ]);
};

const getAllPostHandler = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const boardId = url.searchParams.get('boardId');
  // const page = url.searchParams.get('pageNum');
  return HttpResponse.json<Post.FindAllResponseDto>({
    boardId: boardId!,
    boardName: '학생회 공지 게시판',
    writable: false,
    post: {
      content: contentList,
      last: false,
    },
  });
};

const getDetailPostHandler = ({ params }: { params: { postId: string } }) => {
  const { postId } = params;

  return HttpResponse.json<Post.FindByIdResponseDto>({
    boardId: '0',
    boardName: '학생회 공지 게시판',
    content: contentList[parseInt(postId)],
    commentList: commentList,
  });
};

const getCommentHandler = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const postId = url.searchParams.get('postId');
  const pageNum = url.searchParams.get('pageNum');
  return HttpResponse.json<PostComment.GetResponseDto>({
    content: commentList.content,
    last: false,
  });
};

const handlers = [
  http.get('/api/v1/home', getHomePageHandler),
  http.get('/api/v1/posts', getAllPostHandler),
  http.get('/api/v1/posts/:postId', getDetailPostHandler),
  http.get('/api/v1/comments', getCommentHandler),
];

export default handlers;
