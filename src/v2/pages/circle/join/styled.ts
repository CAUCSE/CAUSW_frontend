import { css, styled } from '@mui/material/styles';

export const NameCSS = css`
  margin: 25px 0 18px;
  font-size: 18px;
  line-height: 21px;
`;
export const Name = styled('h2')`
  ${NameCSS}
`;

export const ImageCSS = css`
  width: 100%;
  margin-bottom: 15px;
`;
export const Image = styled('img')`
  ${ImageCSS}
`;

export const Row = styled('div')`
  font-size: 12px;
  line-height: 14px;
`;

export const Hr = styled('hr')`
  margin: 14px 0;
  border-width: 0 0 1px 0;
  border-bottom: 1px solid #f5f5f5;
`;

export const Desc = styled('p')`
  font-size: 14px;
  line-height: 16px;
`;
