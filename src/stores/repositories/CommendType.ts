export interface CommentResponseDto {
  id: string;
  content: string;
  writerId: string;
  writerName: string;
  writerProfileImage: string | null;
  createdAt: string;
  updatedAt: string;
  postId: string;
  parentCommentId: string | null;
  childCommentList: CommentResponseDto[];
}
