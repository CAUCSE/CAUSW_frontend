import { useForm } from 'react-hook-form';

import { SearchInput } from '../Form';
import { SearchedUser } from './SearchedUser';
import { SearchUserModal } from './SearchUserModal';
import { WithSearchUserModalUi } from './SearchUserModalUi';

import { usePageUiStore } from '@/hooks';

interface FormBody {
  name: string;
}

export const SearchUserForm: React.FC<{ guide?: string }> = ({ guide }) => {
  const { searchUserModal } = usePageUiStore<WithSearchUserModalUi>();
  const { handleSubmit, control, setValue } = useForm<FormBody>({
    defaultValues: {
      name: '',
    },
  });

  const onSearch = async (body: FormBody) => {
    const { success, message } = (await searchUserModal.fetch(body.name)) as unknown as StoreAPI;

    if (success) searchUserModal.open();
    else if (message) alert({ message });
    setValue('name', '');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSearch)}>
        <SearchInput<FormBody>
          id="search-user-ipt"
          name="name"
          placeholder="유저 이름으로 검색"
          control={control}
          rules={{ required: true }}
        />
      </form>
      <SearchedUser guide={guide} />
      <SearchUserModal />
    </>
  );
};
