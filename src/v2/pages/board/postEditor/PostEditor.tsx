import { useMemo, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

export const PostEditor: React.FC = () => {
  const { setValue } = useFormContext();
  const handleChange = useCallback(data => setValue('content', data), [setValue]);
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [['bold', 'italic', { align: '' }, { align: 'center' }, { align: 'right' }, 'image', 'link']],
      },
    }),
    [],
  );

  return (
    <Wrapper>
      <ReactQuill theme="snow" onChange={handleChange} modules={modules} placeholder="내용을 입력하세요." />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ql-toolbar.ql-snow {
    padding: 8px 0;
    border: 0;
  }

  .ql-container.ql-snow {
    padding: 8px 0;
    border: 0;
  }

  .ql-editor {
    padding: 0;
    font-size: 14px;
    line-height: 16px;
    color: #3f4040;

    &.ql-blank::before {
      left: 7px;
      font-size: 14px;
      font-style: normal;
      line-height: 16px;
      color: #dadada;
    }
  }
`;
