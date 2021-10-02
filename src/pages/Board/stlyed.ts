import styled from 'styled-components';
import { MascoteUniform } from '@/assets/images/Mascote';

export const PageHeader = styled.h2`
  margin: 30px 0 12px;
  font-size: 24px;
  line-height: 28px;
`;

export const Mascote = styled(MascoteUniform)`
  position: absolute;
  top: 40px;
  right: 13px;
  width: 67px;
  height: 56px;
`;
