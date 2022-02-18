import styled from '@emotion/styled';
import { checkboxClasses, FormControlLabel, outlinedInputClasses, TextField, typographyClasses } from '@mui/material';

import { Button, ClearLink } from '@/v2/components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 70vw;
`;

export const LogoImage = styled.img`
  display: block;
  margin: 0 auto 30px;
`;

export const Input = styled(TextField)`
  width: 100%;

  & + & {
    margin-top: 10px;
  }

  .${outlinedInputClasses.input} {
    padding: 10px 8px;
    font-size: 12px;
    line-height: 14px;
    background: transparent;
  }

  .${outlinedInputClasses.notchedOutline} {
    border: 1px solid #383743;
    box-sizing: border-box;
    border-radius: 25px;
  }
`;

export const CheckboxLabel = styled(FormControlLabel)`
  margin-top: 9px;
  margin-left: 6px;

  .${typographyClasses.root} {
    margin-top: 3px;
    font-size: 12px;
    line-height: 14px;
  }

  .${checkboxClasses.root} {
    padding: 7px;
  }
`;

export const LoginButton = styled(Button)`
  margin-top: 17px;
  height: 40px;
  border-radius: 30px;
`;

export const SubLink = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 35px;
  text-align: center;
`;

export const Link = styled(ClearLink)`
  padding: 0 10px;
  font-size: 12px;
  line-height: 14px;
  color: #858282;

  & + & {
    border-left: 1px solid #ccc;
  }
`;
