import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { PageUiStoreImpl } from './BoardCreatePageUiStore';

import {
  BodyScreen,
  Header,
  Input,
  PageBody,
  PageFooter,
  PageStoreHOC,
  NavButton,
  SelectInput,
  ErrorMessage,
} from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores/RootStore';

const BoardCreatePage: React.FC = observer(() => {
  const { replace } = useHistory();
  const { create } = usePageUiStore<PageUiStore.BoardCreate>();
  const {
    ui: { alert },
    auth: { fetch, me },
  } = useRootStore();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      name: undefined,
      description: undefined,
      category: '공지 게시판',
      circleName: '',
    },
  });

  const onSubmit = async (data: {
    name: string;
    description: string;
    category: string;
    circleName?: string;
  }) => {
    const body: Board.CreateRequestDto = {
      name: data.name,
      description: data.description,
      category: data.category,
      createRoleList: [],
      circleId: null,
    };

    if (me && data.category === '동아리 공지 게시판') {
      body.createRoleList = ['ADMIN', 'VICE_PRESIDENT', 'PRESIDENT', 'LEADER_CIRCLE'];
      body.circleId =
        me.circleIds![me.circleNames!.findIndex(circleName => circleName === data.circleName)];
    } else if (me && data.category === '동아리 자유 게시판') {
      body.createRoleList = [
        'ADMIN',
        'VICE_PRESIDENT',
        'PRESIDENT',
        'LEADER_CIRCLE',
        'LEADER_1',
        'LEADER_2',
        'LEADER_3',
        'LEADER_4',
        'COUNCIL',
        'COMMON',
      ];
      body.circleId =
        me.circleIds![me.circleNames!.findIndex(circleName => circleName === data.circleName)];
    } else if (me && data.category === '공지 게시판') {
      body.createRoleList = ['ADMIN', 'VICE_PRESIDENT', 'PRESIDENT', 'COUNCIL'];
    } else if (me && data.category === '자유 게시판') {
      body.createRoleList = [
        'ADMIN',
        'VICE_PRESIDENT',
        'PRESIDENT',
        'LEADER_CIRCLE',
        'LEADER_1',
        'LEADER_2',
        'LEADER_3',
        'LEADER_4',
        'COUNCIL',
        'COMMON',
      ];
    }

    const { success } = (await create(body)) as unknown as StoreAPI;
    if (success) {
      replace(PAGE_URL.Board);
      alert({ message: '게시판이 생성되었습니다.' });
    }
  };

  useEffect(() => {
    fetch();
    if (me?.isCircleLeader) {
      setValue('circleName', me.circleNames![0]);
      setValue('category', '동아리 공지 게시판');
    }
  }, []);

  return (
    <>
      <Header title="게시판 생성" withBack={PAGE_URL.Board} />
      <PageBody>
        <BodyScreen>
          <Input
            name="name"
            label="게시판 이름"
            placeholder="게시판 이름을 입력하세요."
            required
            control={control}
            rules={{ required: '게시판 설명을 입력해주세요.' }}
          />
          {errors.name ? <ErrorMessage>{errors.name?.message}</ErrorMessage> : null}

          <Input
            name="description"
            label="게시판 설명"
            placeholder="게시판 설명을 입력하세요."
            required
            control={control}
            rules={{ required: '게시판 설명을 입력해주세요.' }}
          />
          {errors.description ? <ErrorMessage>{errors.description?.message}</ErrorMessage> : null}

          <SelectInput
            name="category"
            label="게시판 카테고리"
            control={control}
            required
            options={
              me?.isCircleLeader
                ? ['동아리 공지 게시판', '동아리 자유 게시판']
                : ['공지 게시판', '자유 게시판']
            }
          />
          {me?.isCircleLeader ? (
            <SelectInput
              name="circleName"
              label="게시판 생성 동아리"
              control={control}
              required
              options={me.circleNames}
            />
          ) : null}
        </BodyScreen>
      </PageBody>

      <PageFooter>
        <NavButton onClick={handleSubmit(onSubmit)}>게시판 생성</NavButton>
      </PageFooter>
    </>
  );
});

export default PageStoreHOC(<BoardCreatePage />, { store: PageUiStoreImpl });
