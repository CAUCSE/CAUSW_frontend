import { HttpResponse } from 'msw';
import { commentList, contentList } from './mockData';

export const getAllPostHandler = ({ request }: { request: Request }) => {
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

export const getDetailPostHandler = ({ params }: { params: { postId: string } }) => {
  const { postId } = params;

  return HttpResponse.json<Post.FindByIdResponseDto>({
    boardId: '0',
    boardName: '학생회 공지 게시판',
    content: contentList[parseInt(postId)],
    commentList: commentList,
  });
};

export const getCommentHandler = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const postId = url.searchParams.get('postId');
  const pageNum = url.searchParams.get('pageNum');
  return HttpResponse.json<PostComment.GetResponseDto>({
    content: commentList.content,
    last: false,
  });
};
