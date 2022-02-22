import styled from '@emotion/styled';
import { TextareaAutosize } from '@mui/material';

export const Guide = styled.div`
  margin-top: 20px;
  font-size: 12px;
  line-height: 18px;
  color: #518cff;
`;

export const Label = styled.div`
  margin-top: 30px;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`;

export const Textarea = styled(TextareaAutosize)`
  margin: 20px 20px 0;
  padding: 0;
  width: calc(100% - 40px);
  border: none;
  font-size: 14px;
  outline: none;
`;
