import styled from '@emotion/styled';

import { ClearButton } from '@/components';

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  height: 45px;
  width: calc(100% - 40px);
  border-bottom: 1px solid #f5f5f5;
`;

export const UserName = styled.div`
  flex: 1 0 0;
`;

export const RowButton = styled(ClearButton)`
  padding: 10px;
`;
