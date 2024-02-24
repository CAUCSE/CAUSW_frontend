import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import { useParams } from 'react-router-dom';

import { PostParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import useInputs from '@/hooks/useInputs';

const PostSearchForm = () => {
  const { boardId } = useParams<PostParams>();
  const { page, search } = usePageUiStore<PageUiStore.PostList>();
  const { values, handleChange } = useInputs({
    initialValue: { searchPostInput: '' },
  });

  const handleSearchSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    search(boardId, values.searchPostInput, page);
  };

  return (
    <FormWrapper name="searchPostInput" onSubmit={handleSearchSubmit}>
      <SearchInput
        name="searchPostInput"
        placeholder="검색어를 입력하세요..."
        value={values.searchPostInput}
        onChange={handleChange}
        autoComplete="off"
      />
      <SearchButton onClick={() => search(boardId, values.searchPostInput, page)}>
        <SearchIcon />
      </SearchButton>
    </FormWrapper>
  );
};

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

const SearchButton = styled.button`
  border: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PostSearchForm;
