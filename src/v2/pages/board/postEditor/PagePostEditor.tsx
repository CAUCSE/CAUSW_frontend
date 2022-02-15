import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';
import { generatePath, useHistory, useLocation } from 'react-router';
import { useParams, useRouteMatch } from 'react-router-dom';

import { PageView } from './PageView';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { LayoutHOC } from '@/v2/components';

const PagePostEditor: React.FC = observer(() => {
  const isEdit = !!useRouteMatch(PAGE_URL.PostEdit);
  const { state } = useLocation<{ prevDetail: boolean }>();
  const { replace, goBack } = useHistory();
  const { boardId, postId } = useParams<{ boardId: string; postId: string }>();
  const {
    post: { create, edit, fetchAll, fetch },
  } = useRootStore();

  const onSubmit = useCallback(
    async data => {
      let curPostId = postId;

      if (isEdit) {
        await edit(postId, data);
      } else {
        const post = (await create(data)) as unknown as Model.Post;
        curPostId = post.id;
      }

      if (state?.prevDetail) goBack();
      else replace(generatePath(PAGE_URL.PostDetail, { boardId, postId: curPostId }));
    },
    [replace, state],
  );

  useEffect(() => {
    if (postId) fetch(postId);
    else fetchAll(boardId);
  }, [boardId]);

  return <PageView isEdit={isEdit} onSubmit={onSubmit} />;
});

export default LayoutHOC(PagePostEditor, { Nav: null });
