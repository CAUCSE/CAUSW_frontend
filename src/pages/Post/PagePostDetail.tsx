import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore';
import { PostProvider } from '@/stores/PostStore';
import { Wrapper, Content, Title, NumComment } from './components/Detail/styled';
import { PostAuthor } from './components/Detail//PostAuthor';
import { ReactComponent as Icon } from '@/assets/icons/message.svg';
import { PostComments } from './components/Detail/PostComment';
import { Breadcrumb } from './components/Breadcrumb';

export const PagePostDetail: React.FC = observer(() => {
  const {
    post: { post },
  } = useRootStore();

  return (
    <PostProvider>
      {post ? (
        <Wrapper>
          <Breadcrumb />
          <Title>{post.title}</Title>
          <PostAuthor model={post} />
          <NumComment>
            <Icon /> {post.numComment}
          </NumComment>
          <PostComments model={post} />
        </Wrapper>
      ) : null}
    </PostProvider>
  );
});
