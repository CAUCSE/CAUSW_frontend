import 'react-quill/dist/quill.snow.css';
import { observer } from 'mobx-react-lite';
import ImageUploader from 'quill-image-uploader';
import { useMemo, useCallback, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ReactQuill, { Quill } from 'react-quill';
import { useRouteMatch } from 'react-router-dom';

import { EditorWrapper } from '../styled';

import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { IMAGE_TYPE, StorageRepoImpl } from '@/stores/repositories/StorageRepo';

Quill.register('modules/imageUploader', ImageUploader);

export const Editor: React.FC = observer(() => {
  const isEdit = !!useRouteMatch(PAGE_URL.PostEdit);
  const { post } = usePageUiStore<PageUiStore.PostEditor>();
  const { setValue: set } = useFormContext();
  const [value, setValue] = useState('');
  const handleChange = useCallback(
    data => {
      set('content', data);
      setValue(data);
    },
    [set],
  );

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [
            'bold',
            'italic',
            { align: '' },
            { align: 'center' },
            { align: 'right' },
            'image',
            'link',
          ],
        ],
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

  useEffect(() => {
    if (isEdit && post) handleChange(post.content);
    return () => handleChange('');
  }, [isEdit, post, handleChange]);

  return (
    <EditorWrapper>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={modules}
        placeholder="내용을 입력하세요."
      />
    </EditorWrapper>
  );
});
