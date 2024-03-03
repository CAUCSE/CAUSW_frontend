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
      circleName: '전체',
    },
  });

  if (
    (errors.name && errors.name.type === 'required') ||
    (errors.description && errors.description.type === 'required')
  ) {
    alert({ message: '모든 항목을 다 입력해주세요.' });
  }

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
    if (me?.isCircleLeader && data.circleName !== '전체') {
      //동아리장이 동아리 게시판을 생성하는 경우
      if (data.category === '공지 게시판') {
        body.createRoleList = ['ADMIN', 'VICE_PRESIDENT', 'PRESIDENT', 'LEADER_CIRCLE'];
        body.circleId =
          me.circleIds![me.circleNames!.findIndex(circleName => circleName === data.circleName)];
      } else if (data.category === '자유 게시판') {
        body.createRoleList = [
          'ADMIN',
          'VICE_PRESIDENT',
          'PRESIDENT',
          'LEADER_CIRCLE',
          'LEADER_1',
          'LEADER_2',
          'LEADER_3',
          'LEADER_4',
          'COMMON',
        ];
        body.circleId =
          me.circleIds![me.circleNames!.findIndex(circleName => circleName === data.circleName)];
      }
    } else {
      //학생회장 혹은 관리자가 동아리 게시판을 생성하는 경우
      if (data.category === '공지 게시판') {
        body.createRoleList = ['ADMIN', 'VICE_PRESIDENT', 'PRESIDENT'];
      } else if (data.category === '자유 게시판') {
        body.createRoleList = [
          'ADMIN',
          'VICE_PRESIDENT',
          'PRESIDENT',
          'LEADER_CIRCLE',
          'LEADER_1',
          'LEADER_2',
          'LEADER_3',
          'LEADER_4',
          'COMMON',
        ];
      }
    }
    const { success } = (await create(body)) as unknown as StoreAPI;
    if (success) {
      replace(PAGE_URL.Board);
      alert({ message: '게시판이 생성되었습니다.' });
    }
  };

  useEffect(() => {
    fetch();
    if (me?.isCircleLeader && !(me.isAdmin || me.isPresident))
      setValue('circleName', me.circleNames![0]);
  }, []);

  return (
    <>
      <Header title="게시판 생성" withBack={PAGE_URL.Board} />
      <PageBody>
        <BodyScreen>
          <Input name="name" label="게시판 이름" required control={control} />
          <Input name="description" label="게시판 설명" required control={control} />
          <SelectInput
            name="category"
            label="게시판 카테고리"
            control={control}
            required
            options={['공지 게시판', '자유 게시판']}
          />
          {me?.isCircleLeader ? (
            <SelectInput
              name="circleName"
              label="게시판 생성 동아리"
              control={control}
              required
              options={me.isAdmin || me.isPresident ? ['전체', ...me.circleNames!] : me.circleNames}
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
