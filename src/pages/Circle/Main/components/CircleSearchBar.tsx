import { memo, useCallback } from 'react';
import styled from 'styled-components';
import { ClearButton } from '@/components/atoms/clear';
import { useForm } from 'react-hook-form';

export const CircleSearchBar = memo(() => {
  const { handleSubmit, register } = useForm();
  const onSubmit = useCallback(data => console.log(data), []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Input type="text" placeholder="원하는 소모임을 검색하세요." {...register('terms')} />
        <SearchButton type="submit" />
      </Label>
    </Form>
  );
});

const Form = styled.form`
  margin: 30px 0;
`;

const Label = styled.label`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 80%;
`;

const Input = styled.input`
  padding: 0 30px 0 15px;
  width: 100%;
  height: 30px;
  border: 1px solid #3f4040;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 13px;
  line-height: 15px;

  ::placeholder {
    color: #e4e4e4;
  }
`;

const SearchButton = styled(ClearButton)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  background: center / contain no-repeat url('/images/icons/search.png');
`;
