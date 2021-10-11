import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore';
import { PostProvider } from '@/stores/PostStore';
import { Wrapper, Breadcrumb, Content, Title, NumComment } from './styled';
import { ClearLink } from '@/components/atoms/clear';
import { PostAuthor } from './components/PostAuthor';
import { ReactComponent as Icon } from '@/assets/icons/message.svg';
import { PostComments } from './components/PostComment';

export const PagePostDetail: React.FC = observer(() => {
  const {
    post: { fetchById: fetch, post, resetDetail },
  } = useRootStore();

  useEffect(() => {
    fetch();

    return () => resetDetail();
  }, []);

  return (
    <PostProvider>
      {post ? (
        <Wrapper>
          <Breadcrumb>
            <ClearLink to={post.boardLink}>{post.boardName}</ClearLink>
          </Breadcrumb>
          <Title>{post.title}</Title>
          <PostAuthor model={post} />
          <Content dangerouslySetInnerHTML={{ __html: post.content }} />
          <NumComment>
            <Icon /> {post.numComment}
          </NumComment>
          <PostComments model={post} />
        </Wrapper>
      ) : null}
    </PostProvider>
  );
});
