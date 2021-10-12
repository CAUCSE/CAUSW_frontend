import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { PostProvider } from '@/stores/PostStore';
import { Breadcrumb } from './components/Breadcrumb';
import { PostEditor } from './components/Editor/PostEditor';
import { TitleInput } from './components/Editor/styled';

export const PagePostEditor: React.FC = observer(() => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: unknown) => console.log(data);

  return (
    <PostProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Breadcrumb />
        <TitleInput {...register('title')} placeholder="제목을 입력하세요" />
        <PostEditor />
      </form>
    </PostProvider>
  );
});
