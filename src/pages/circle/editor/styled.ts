import { TextareaAutosize, styled } from '@mui/material';

export const Label = styled('div')`
  margin-top: 30px;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`;

export const Textarea = styled(TextareaAutosize)`
  margin-top: 20px;
  padding: 0;
  width: 100%;
  border: none;
  outline: none;
  resize: none;

  &::placeholder {
    font-size: inherit;
    color: 'currentColor';
    opacity: 0.5;
  }
`;
