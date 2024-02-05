import { http, HttpResponse } from 'msw';

import { commentList } from '../data/comment';
import { contentList } from '../data/post';

const getAllPostHandler = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const boardId = url.searchParams.get('boardId');
  // const page = url.searchParams.get('pageNum');
  return HttpResponse.json<Post.FindAllResponseDto>({
    boardId: boardId!,
    boardName: '학생회 공지 게시판',
    writable: true,
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

const createPostHandler = async ({ request }: { request: Request }) => {
  const body: Post.CreateRequestDto = await request.json();

  contentList.push({
    id: '2',
    title: body.title,
    writerName: 'post_writerName3',
    writerAdmissionYear: 19,
    writerProfileImage: 'content_writerProfileImage3 | null',
    content: body.content,
    createdAt: new Date('2024-01-13T15:34'),
    updatedAt: new Date(),
    numComment: 3,
    updatable: false,
    deletable: false,
    isDeleted: false,
  });

  return HttpResponse.json<Post.Dto>(contentList[2]);
};

const editPostHandler = async ({
  request,
  params,
}: {
  request: Request;
  params: { [key: string]: unknown };
}) => {
  const body: Post.UpdateRequestDto = await request.json();
  const { postId } = params;
  const editPost = contentList.find(content => content.id === postId)!;
  editPost.title = body.title;
  editPost.content = body.content;

  return HttpResponse.json({});
};

export const postHandler = [
  http.get('/api/v1/posts', getAllPostHandler),
  http.post('/api/v1/posts', createPostHandler),
  http.get('/api/v1/posts/:postId', getDetailPostHandler),
  http.put('/api/v1/posts/:postId', editPostHandler),
];
