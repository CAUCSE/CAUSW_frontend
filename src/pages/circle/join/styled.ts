import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const NameCSS = css`
  margin: 25px 0 18px;
  font-size: 18px;
  line-height: 21px;
`;
export const Name = styled.h2`
  ${NameCSS}
`;

export const CircleImageCSS = css`
  max-width: 100%;
  margin: 0 auto 15px;
`;
export const CircleImage = styled.img`
  ${CircleImageCSS}
`;

export const Row = styled.div`
  font-size: 12px;
  line-height: 14px;
`;

export const Hr = styled.hr`
  margin: 14px 0;
  border-width: 0 0 1px 0;
  border-bottom: 1px solid #f5f5f5;
`;

export const Desc = styled.p`
  font-size: 14px;
  line-height: 16px;
`;
