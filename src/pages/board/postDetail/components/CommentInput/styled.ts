import styled from '@emotion/styled';
import { css, TextareaAutosize } from '@mui/material';

import { ClearButton } from '@/components';

export const Nav = styled.nav`
  background: #fbfbfb;
  box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 25%);
`;

export const Chip = styled(ClearButton)<{ isReply?: boolean; isEdit?: boolean }>`
  position: relative;
  margin: 6px 8px 4px;
  padding: 0 1.3rem 0 0.5rem;
  height: 1.25rem;
  border-radius: 30px;
  font-size: 9px;
  line-height: 11px;
  background: ${({ isReply, isEdit }) => {
    if (isReply) return 'rgba(255, 202, 202, 0.94)';
    else if (isEdit) return 'rgba(255, 234, 202, 0.94)';

    return null;
  }};

  :after {
    position: absolute;
    right: 0.5rem;
    content: 'X';
  }
`;

export const Form = styled.form<{ isFocus: boolean }>`
  display: flex;
  width: 100%;
  background: #fff;

  ${({ isFocus }) =>
    isFocus
      ? css``
      : css`
          padding: 0 0 calc(constant(safe-area-inset-bottom));
          padding: 0 0 calc(env(safe-area-inset-bottom));
        `}
`;

export const InputBox = styled.div`
  margin: 5px 0 5px 8px;
  padding: 0.75rem;
  flex: 1 1 0;
  border-radius: 15px;
  background: #f3f3f3;
`;

export const Textarea = styled(TextareaAutosize)`
  padding: 0;
  width: 100%;
  border: 0;
  outline: none;
  background: inherit;
  resize: none;
  font-size: 13px;
  line-height: 15px;

  &::placeholder {
    color: '#BDBDBD';
  }
`;

export const SendButton = styled(ClearButton)`
  width: 50px;
  color: #3f4040;
`;
