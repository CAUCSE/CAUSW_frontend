import { http, HttpResponse, ResponseResolver } from 'msw';

import { commentList } from '../mockData';

const getCommentHandler = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const postId = url.searchParams.get('postId');
  const pageNum = url.searchParams.get('pageNum');

  return HttpResponse.json<PostComment.GetResponseDto>({
    content: commentList.content,
    last: false,
  });
};

const createCommentHandler = async ({ request }: { request: Request }) => {
  const body: PostComment.CreateRequestDto = await request.json();
  const newComment = {
    postId: body.postId,
    id: commentList.content.length.toString(),
    writerAdmissionYear: 20,
    writerName: 'writer_name3',
    writerProfileImage: 'writerProfileImage3 | null',
    content: body.content,
    createdAt: '2024-01-14T15:34',
    updatedAt: '2024-01-15T15:34',
    numChildComment: 0,
    updatable: true,
    deletable: true,
    isDeleted: false,
  };
  commentList.content.push(newComment);
  return HttpResponse.json<PostComment.CreateResponseDto>(newComment);
};

const editCommentHandler = async ({
  request,
  params,
}: {
  request: Request;
  params: { [key: string]: unknown };
}) => {
  const body: PostComment.CreateRequestDto = await request.json();
  const { commentId } = params;
  const editComment = commentList.content.find(content => content.id === commentId)!;
  editComment.content = body.content;

  return new Response(null, {
    status: 200,
  });
};

const deleteCommentHandler = () => {};

export const commentHandler = [
  http.get('/api/v1/comments', getCommentHandler),
  http.post('/api/v1/comments', createCommentHandler),
  http.put('/api/v1/comments/:commentId', editCommentHandler),
  // http.delete('/api/v1/comments/:id', deleteCommentHandler),
];
