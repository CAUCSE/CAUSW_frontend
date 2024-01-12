import { http, HttpResponse } from 'msw';

const content: Post.Dto[] = [
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
    id: 'content_id2',
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

const getHomePageHandler = () => {
  return HttpResponse.json<Home.GetHomePageResponseDto>([
    {
      board: { id: '0', category: 'board_category', name: '학생회 공지게시판' },
      posts: {
        content: content,
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
      content: content,
      last: false,
    },
  });
};

const handlers = [
  http.get('/api/test', () => {
    return HttpResponse.json({ id: 'abc', name: 'Gyu' });
  }),
  http.get('/api/v1/home', getHomePageHandler),
  http.get(`/api/v1/posts`, getAllPostHandler),
];

export default handlers;
