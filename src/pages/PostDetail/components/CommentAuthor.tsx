import { memo } from 'react';

export const CommentAuthor: React.FC = memo(() => {
  return (
    <div>
      <img />
      <div>
        <div>
          <img />
          <div>이름</div>
        </div>
        <div>
          <p>댓글 내용</p>
          <div>댓글 작성일</div>
        </div>
      </div>
    </div>
  );
});
