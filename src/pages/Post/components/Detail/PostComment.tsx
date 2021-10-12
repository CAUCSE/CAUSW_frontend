import { memo } from 'react';
import styled from 'styled-components';
import { ClearUl } from '@/components/atoms/clear';
import { ReactComponent as Icon } from '@/assets/icons/comment_arrow_icon.svg';

export const PostComments: React.FC<{ model: Model.Post }> = memo(({ model: { comments } }) => (
  <Wrapper>
    <Comments comments={comments} />
  </Wrapper>
));

const Comments: React.FC<{ comments: Model.Comment[] }> = memo(({ comments }) => (
  <>
    {comments.map(c => (
      <PostComment key={c.id} model={c} />
    ))}
  </>
));

const PostComment: React.FC<{ model: Model.Comment }> = memo(
  ({ model: { author, content, formatedCreatedAt, childComments, isChild } }) => (
    <>
      <li>
        {isChild ? <ReCommentIcon /> : null}
        <Comment isChild={isChild}>
          <Profile>
            <ProfileImage>
              <img src={author.profileImg} alt="author profile image" />
            </ProfileImage>
            <Name>{author.name}</Name>
          </Profile>
          <Content dangerouslySetInnerHTML={{ __html: content }} />
          <Date>{formatedCreatedAt}</Date>
        </Comment>
      </li>
      <Comments comments={childComments} />
    </>
  ),
);

const Wrapper = styled(ClearUl)`
  margin: 3px 0 0;
  padding: 5px 0 0;
  border-top: 1px solid #dadada;

  li {
    position: relative;
  }
`;

const ReCommentIcon = styled(Icon)`
  position: absolute;
  top: 15px;
`;

const Comment = styled.div<{ isChild: boolean }>`
  position: relative;
  margin-top: 5px;
  ${({ isChild }) => (isChild ? 'margin-left: 20px' : null)};
  padding: 7px 10px;
  width: ${({ isChild }) => (isChild ? 'calc(100% - 20px)' : '100%')};
  box-sizing: border-box;
  background: #f5f5f5;
  border-radius: 10px;

  > * {
    display: inline-block;
    vertical-align: top;
  }
`;

const Profile = styled.div`
  width: 30px;
`;

const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  overflow: hidden;

  img {
    height: 100%;
    display: 100%;
  }
`;

const Name = styled.div`
  padding: 4px 0;
  text-align: center;
  font-size: 10px;
  line-height: 12px;
  color: #3f4040;
  overflow: hidden;
`;

const Content = styled.p`
  margin: 0 0 18px;
  padding-left: 10px;
  width: calc(100% - 30px);
  box-sizing: border-box;
  font-size: 13px;
  line-height: 15px;
  word-break: break-all;

  p {
    margin: 0;
  }
`;

const Date = styled.div`
  position: absolute;
  right: 8px;
  bottom: 9px;
  font-size: 10px;
  line-height: 12px;
  color: #dadada;
`;
