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
        <Input type="text" placeholder="소모임 이름 검색" {...register('terms')} />
        <SearchButton type="submit" />
      </Label>
    </Form>
  );
});

const Form = styled.form`
  margin: 23px 0;
`;

const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
`;

const Input = styled.input`
  padding: 0 34px 0 13px;
  width: 100%;
  height: 30px;
  border: 1px solid #3f4040;
  border-radius: 12px;
  font-size: 13px;
  line-height: 15px;

  ::placeholder {
    color: #e4e4e4;
  }
`;

const SearchButton = styled(ClearButton)`
  position: absolute;
  top: 5px;
  right: 8px;
  width: 20px;
  height: 20px;
  background: center / contain no-repeat url('/images/icons/search.png');
`;
