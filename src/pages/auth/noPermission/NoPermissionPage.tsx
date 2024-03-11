import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { PageUiStoreImpl } from './NoPermissionPageUiStore';

import { BodyScreen, Header, PageBody, PageStoreHOC } from '@/components';
import { PAGE_URL } from '@/configs/path';

const NoPermissionPage: React.FC = observer(() => {
  return (
    <>
      <Header withBack={PAGE_URL.Home} title="접근 불가" />
      <PageBody>
        <Wrapper>
          <img src="/images/empty.png" alt="Empty list logo" />
          <br />
          페이지가 존재하지 않거나, 권한이 없습니다.
        </Wrapper>
      </PageBody>
    </>
  );
});

const Wrapper = styled.div`
  margin: 160px 0 30px;
  font-size: 17px;
  //font-weight: bolder;
  color: gray;
  line-height: 12px;
  text-align: center;

  > img {
    margin-bottom: 10px;
    width: 100px;
  }
`;

export default PageStoreHOC(<NoPermissionPage />, { store: PageUiStoreImpl });
