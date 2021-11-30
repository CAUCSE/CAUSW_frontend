import { memo, useCallback } from 'react';
import { computed } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useLongPress } from 'use-long-press';
import styled from 'styled-components';
import { useRootStore } from '@/stores/RootStore';
import { ClearUl } from '@/components/atoms/clear';
import { ReactComponent as Icon } from '@/assets/icons/comment_arrow_icon.svg';

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

const PostComment: React.FC<{ model: Model.Comment }> = observer(({ model }) => {
  const {
    ui: { commentUi },
  } = useRootStore();
  const isReply = computed(() => commentUi.target?.id === model.id && commentUi.isReply).get();
  const isEdit = computed(() => commentUi.target?.id === model.id && commentUi.isEdit).get();

  const handeLongPress = useCallback(model => () => commentUi.openMenuModal(model), [commentUi]);
  const bind = useLongPress(handeLongPress(model), {
    cancelOnMovement: true,
    captureEvent: true,
    onFinish: ev => ev?.preventDefault(),
  });

  const { isChild, author, content, childComments, formatedCreatedAt } = model;

  return (
    <>
      <li>
        {isChild ? <ReCommentIcon /> : null}
        <Comment isChild={isChild} reply={isReply} edit={isEdit} {...bind}>
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
});

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

const Comment = styled.div<{ isChild: boolean; reply: boolean; edit: boolean }>`
  position: relative;
  margin-top: 5px;
  ${({ isChild }) => (isChild ? 'margin-left: 20px' : null)};
  padding: 7px 10px;
  width: ${({ isChild }) => (isChild ? 'calc(100% - 20px)' : '100%')};
  box-sizing: border-box;
  background: ${({ reply, edit }) => {
    if (reply) return 'rgba(255, 202, 202, 0.94)';
    else if (edit) return 'rgba(255, 234, 202, 0.94)';

    return '#f5f5f5';
  }};
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
