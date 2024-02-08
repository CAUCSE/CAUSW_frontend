import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useRef, useState } from 'react';
import { generatePath, useParams } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';

import { PageSkeleton, PostCard, PostCreateButton } from './components';
import { PageUiStoreImpl } from './PostListPageUiStore';

import { EmptyList, GNB, Header, PageBody, PageStoreHOC } from '@/components';
import { PAGE_URL, PostParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
const PostListPage: React.FC = observer(() => {
  const { boardId } = useParams<PostParams>();
  const { boardName, posts, hasMore, page, isFetched, fetchAll, search, reset } =
    usePageUiStore<PageUiStore.PostList>();

  const timer = useRef<NodeJS.Timeout>();
  const loadMore = useCallback(
    (hasMore: boolean, page: number) => () => {
      if (timer.current) clearTimeout(timer.current);
      if (hasMore) timer.current = setTimeout(() => fetchAll(boardId, page + 1), 50);
    },
    [boardId, fetchAll],
  );
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    fetchAll(boardId);
    return () => reset();
  }, [boardId, fetchAll, reset]);

  return (
    <>
      <Header title={boardName} withBack RightComponent={<PostCreateButton />} />
      <PageBody>
        {!isFetched ? (
          <PageSkeleton />
        ) : (
          <>
            <FormWrapper
              onSubmit={e => {
                e.preventDefault();
                search(boardId, keyword, page);
              }}
            >
              <SearchInput
                placeholder="제목 혹은 작성자로 검색"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
              />
              <div onClick={() => search(boardId, keyword, page)}>
                <SearchIcon />
              </div>
            </FormWrapper>
            <Virtuoso
              style={{ maxHeight: '100vh' }}
              // endReached={loadMore(hasMore, page)} // TODO: 데이터가 한페이지 넘어갔을 때 다시 테스트
              overscan={200}
              data={posts}
              itemContent={(index, post) => (
                <PostCard
                  key={post.id}
                  model={post}
                  to={generatePath(PAGE_URL.PostDetail, { boardId, postId: post.id })}
                />
              )}
              components={{
                EmptyPlaceholder: () => <EmptyList text="작성된 게시글이 없습니다." />,
              }}
            />
          </>
        )}
      </PageBody>
      <GNB />
    </>
  );
});

const FormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  margin: 10px 20px;
  padding: 5px 10px;
  padding-left: 5px;
  border-radius: 15px;
`;

const SearchInput = styled.input`
  margin-left: 5px;
  width: 90%;
  border: 0;
  outline: none;
  font-size: 1rem;
  color: #3f4040;

  &::placeholder {
    color: #dadada;
  }
`;

export default PageStoreHOC(<PostListPage />, { store: PageUiStoreImpl });
