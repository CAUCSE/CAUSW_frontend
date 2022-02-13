import styled from '@emotion/styled';

import { ClearLink, ClearUl } from '@/v2/components';

export const CommentsBox = styled(ClearUl)`
  margin: 10px 0;
  padding: 5px 0 0;
  border-top: 1px solid #f5f5f5;
`;

export const BackLink = styled(ClearLink)`
  padding: 5px 4px;
  font-size: 10px;
  line-height: 12px;
`;

export const Li = styled.li`
  display: flex;
  align-items: flex-start;
`;

export const Icon = styled.img`
  margin: 10px 5px;
  flex-grow: 15px;
`;
