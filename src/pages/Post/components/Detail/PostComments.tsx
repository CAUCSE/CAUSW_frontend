import { memo, useCallback } from 'react';
import styled from 'styled-components';
import { useLongPress } from 'use-long-press';
import { ClearUl } from '@/components/atoms/clear';
import { ReactComponent as Icon } from '@/assets/icons/comment_arrow_icon.svg';
import { computed } from 'mobx';
import { useRootStore } from '@/stores/RootStore';
import { UI_COMMENT_MENU } from '@/configs/uiStoreKey';

export const PostComments: React.FC<{ list: Model.Comment[] }> = memo(({ list }) => (
  <Wrapper>
    <Comments list={list} />
  </Wrapper>
));

const Comments: React.FC<{ list: Model.Comment[] }> = memo(({ list }) => (
  <>
    {list.map(comment => (
      <PostComment key={comment.id} model={comment} />
    ))}
  </>
));

const PostComment: React.FC<{ model: Model.Comment }> = memo(
  ({ model: { isChild, author, content, childComments, formatedCreatedAt } }) => {
    const {
      ui: {
        commentUi: { openMenuModal },
      },
    } = useRootStore();

    const bind = useLongPress(openMenuModal, {
      cancelOnMovement: true,
    });

    return (
      <>
        <li>
          {isChild ? <ReCommentIcon /> : null}
          <Comment isChild={isChild} {...bind}>
            <Profile>
              <ProfileImage>
                <img src={author.profileImage} alt="author profile image" />
              </ProfileImage>
              <Name>{author.nameWithAdmission}</Name>
              <Date>{formatedCreatedAt}</Date>
            </Profile>
            <Content dangerouslySetInnerHTML={{ __html: content }} />
          </Comment>
        </li>
        <Comments list={childComments} />
      </>
    );
  },
);

const Wrapper = styled(ClearUl)`
  margin: 10px 0;
  padding: 5px 0 0;
  border-top: 1px solid #f5f5f5;

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
  user-select: none;

  > * {
    display: inline-block;
    vertical-align: top;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  overflow: hidden;

  > img {
    height: 100%;
    display: 100%;
  }
`;

const Name = styled.div`
  flex: 1 1 0;
  margin-left: 0.5rem;
  font-size: 10px;
  line-height: 12px;
  color: #3f4040;
  overflow: hidden;
`;

const Date = styled.div`
  width: 50px;
  text-align: right;
  font-size: 10px;
  line-height: 12px;
  color: #a3a1a1;
`;

const Content = styled.p`
  margin: 0.5rem 0;
  width: 100%;
  font-size: 13px;
  line-height: 15px;
  word-break: break-all;

  p {
    margin: 0;
  }
`;
