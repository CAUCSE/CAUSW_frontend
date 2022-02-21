import styled from '@emotion/styled';
import { LinearProgress, linearProgressClasses } from '@mui/material';

import { ClearLink } from '@/components';

export const Card = styled(ClearLink)`
  display: block;
  margin-bottom: 20px;
  padding: 15px 15px 5px;
  border: 0.5px solid #f5f5f5;
  border-radius: 8px;
  background: #fbfbfb;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`;

export const Name = styled.h2`
  margin: 0 0 3px;
  font-size: 16px;
  line-height: 19px;
`;

export const Desc = styled.div`
  margin-bottom: 6px;
  font-size: 11px;
  line-height: 13px;
`;

export const Bar = styled(LinearProgress)`
  margin-bottom: 3px;
  height: 10px;
  background-color: #dadada;

  .${linearProgressClasses.bar} {
    background-color: #312ed7;
  }
`;

export const Status = styled.div`
  font-size: 11px;
  line-height: 13px;
  text-align: right;

  color: #a3a1a1;
`;
