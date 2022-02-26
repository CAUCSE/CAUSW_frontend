import styled from '@emotion/styled';
import { Snackbar, snackbarContentClasses } from '@mui/material';

export const ToastView = styled(Snackbar)`
  bottom: 70px;
  justify-content: center;

  .${snackbarContentClasses.root} {
    flex-grow: initial;
  }

  .${snackbarContentClasses.message} {
    font-size: 12px;
    line-height: 14px;
    color: #fff;
  }
`;
