import 'react-quill/dist/quill.snow.css';
import styled from '@emotion/styled';
import { useMemo, useCallback, useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import ReactQuill from 'react-quill';

interface Props {
  content?: string;
}

export const Editor: React.FC<Props> = ({ content = '' }) => {
  const [value, setValue] = useState(content);
  const { setValue: set } = useFormContext();
  const handleChange = useCallback(
    data => {
      set('content', data);
      setValue(data);
    },
    [setValue],
  );
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [['bold', 'italic', { align: '' }, { align: 'center' }, { align: 'right' }, 'image', 'link']],
      },
    }),
    [],
  );

  useEffect(() => {
    setValue(content);
    set('content', content);
  }, [content]);

  return (
    <Wrapper>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={modules}
        placeholder="내용을 입력하세요."
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1 0 0;

  .quill {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .ql-toolbar.ql-snow {
    padding: 0 0 8px;
    border: 0;
  }

  .ql-container.ql-snow {
    flex: 1 0 0;
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
