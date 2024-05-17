import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { PageUiStoreImpl } from './ApiErrorPageUiStore';

import { PageBody, PageStoreHOC, Header } from '@/components';
import { PAGE_URL } from '@/configs/path';

const ApiErrorPage: React.FC = observer(() => {
  return (
    <>
      <Header withBack={PAGE_URL.Home} title="500 Error" />
      <PageBody>
        <Wrapper>
          <img src="/images/mascot-study.png" alt="Api Error Img" />
          <h4>일시적으로 서비스를 이용할 수 없습니다.</h4>
          문제가 지속적으로 발생하는 경우 <br />
          아래 이메일로 문의해주세요.
          <br />( caucsedongne@gmail.com )
        </Wrapper>
      </PageBody>
    </>
  );
});

const Wrapper = styled.div`
  margin: 100px 0 30px;
  font-size: 12px;
  //font-weight: bolder;
  color: #545454;
  text-align: center;

  > img {
    margin-bottom: -10px;
    width: 170px;
  }

  > h4 {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

export default PageStoreHOC(<ApiErrorPage />, { store: PageUiStoreImpl });
