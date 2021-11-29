import { MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import { MenuIcon } from '@/components/atoms/Icon';
import { ClearButton } from '@/components/atoms/clear';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore';
import { MenuBox, MenuButton, RightButtonWrapper } from '@/components/header/styled';

export const ContextMenu = observer(() => {
  const {
    post: { post },
  } = useRootStore();
  const [visiable, setVisiable] = useState(false);

  if (!post) {
    return null;
  }

  const { updatable, deletable } = post;

  return (
    <>
      <Wrapper onClick={() => setVisiable(state => !state)}>
        <MenuIcon className="absolute-center" />
        <span className="a11y-hidden">메뉴</span>
      </Wrapper>
      <MenuBox visiable={visiable}>
        {updatable ? <MenuButton>게시글 수정</MenuButton> : null}
        {deletable ? <MenuButton>게시글 삭제</MenuButton> : null}
      </MenuBox>
    </>
  );
});

const Wrapper = styled(ClearButton)<{ onClick: MouseEventHandler<HTMLButtonElement> }>`
  ${RightButtonWrapper}
`;
