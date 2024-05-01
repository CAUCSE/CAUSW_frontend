import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { PageUiStoreImpl } from './ApiErrorPageUiStore';

import { BodyScreen, Header, PageBody, PageStoreHOC } from '@/components';
import { PAGE_URL } from '@/configs/path';

const ApiErrorPage: React.FC = observer(() => {
  return (
    <>
      <PageBody>
        <Wrapper>
          <img src="/images/empty.png" alt="Empty list logo" />
          <br />
          일시적으로 서비스를 사용할 수 없습니다.
          <br />
          해당 문제가 지속적으로 발생하는 경우
          <br />
          이하 이메일로 연락주세요.
          <br />
          caucsedongne@gmail.com
        </Wrapper>
      </PageBody>
    </>
  );
});

const Wrapper = styled.div`
  margin: 200px 0 30px;
  font-size: 17px;
  //font-weight: bolder;
  color: gray;
  line-height: 20px;
  text-align: center;

  > img {
    margin-bottom: 10px;
    width: 100px;
  }
`;

export default PageStoreHOC(<ApiErrorPage />, { store: PageUiStoreImpl });
