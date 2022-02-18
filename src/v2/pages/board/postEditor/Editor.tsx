import 'react-quill/dist/quill.snow.css';
import styled from '@emotion/styled';
import { useMemo, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import ReactQuill, { Quill } from 'react-quill';

import { IMAGE_TYPE, StorageRepoImpl } from '@/stores/repositories/StorageRepo';
import ImageUploader from 'quill-image-uploader';

interface Props {
  content?: string;
}

Quill.register('modules/imageUploader', ImageUploader);

export const Editor: React.FC<Props> = ({ content = '' }) => {
  const { setValue: set } = useFormContext();

  const handleChange = useCallback(data => set('content', data), [set]);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [['bold', 'italic', { align: '' }, { align: 'center' }, { align: 'right' }, 'image', 'link']],
      },
      imageUploader: {
        upload: (file: File) =>
          new Promise((resolve, reject) => {
            StorageRepoImpl.upload(IMAGE_TYPE.POST, file)
              .then(path => resolve(path))
              .catch(e => reject(e));
          }),
      },
    }),
    [],
  );

  return (
    <Wrapper>
      <ReactQuill
        theme="snow"
        defaultValue={content}
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
