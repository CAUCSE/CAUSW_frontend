import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { PageUiStoreImpl } from './BoardCreatePageUiStore';
import { ContextMenu, LeaveModal, ProfileImage } from './components';

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
  const { create } = usePageUiStore<PageUiStore.BoardCreate>();
  const {
    auth: { fetch, me },
  } = useRootStore();

  const { handleSubmit, control, setValue } = useForm();

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
      if (data.category === '공지게시판') {
        body.createRoleList = ['ADMIN', 'VICE_PRESIDENT', 'PRESIDENT', 'LEADER_CIRCLE'];
        body.circleId =
          me.circleIds![me.circleNames!.findIndex(circleName => circleName === data.circleName)];
      } else if (data.category === '자유게시판') {
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
      if (data.category === '공지게시판') {
        body.createRoleList = ['ADMIN', 'VICE_PRESIDENT', 'PRESIDENT'];
      } else if (data.category === '자유게시판') {
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
    (await create(body)) as unknown as StoreAPI;
    location.href = PAGE_URL.Board;
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header title="게시판 생성" mini withBack={PAGE_URL.Board} />

      <PageBody>
        <BodyScreen>
          <Input name="name" label="게시판 이름" required control={control} />
          <Input name="description" label="게시판 설명" required control={control} />
          <SelectInput
            name="category"
            label="게시판 카테고리"
            control={control}
            required
            options={['공지게시판', '자유게시판']}
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
        <NavButton onClick={handleSubmit(onSubmit)}>개인정보 변경</NavButton>
      </PageFooter>

      <LeaveModal />
    </>
  );
});

export default PageStoreHOC(<BoardCreatePage />, { store: PageUiStoreImpl });
