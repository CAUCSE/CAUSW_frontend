import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore';
import { PostProvider } from '@/stores/PostStore';

export const PagePostDetail: React.FC = observer(() => {
  const {
    post: { fetchById: fetch, post },
  } = useRootStore();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <PostProvider>
      {post ? (
        <div>
          <div>
            <h2>{post.boardName}</h2>
            <h3>{post.title}</h3>
            <div></div>
            <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
            <div>{post.commentNum}</div>
          </div>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      ) : null}
    </PostProvider>
  );
});
