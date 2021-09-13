import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Logo as Image } from 'assets/images/logo';
import EmailSource from 'assets/icons/email_icon.png';
import PasswordSource from 'assets/icons/password_icon.png';

import Input from 'components/common/Input/Input';
import { Checkbox } from 'components/atoms/form';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 30% 30px 0;
  width: 100%;
  height: 100%;
`;

export const Logo = styled(Image)`
  display: block;
  margin: 0 auto 30px;
`;

export const EmailIcon = styled.img.attrs({ src: EmailSource, alt: 'email icon' })``;

export const PasswordIcon = styled.img.attrs({ src: PasswordSource, alt: 'password icon' })``;

export const InputRow = styled.div`
  position: relative;
  width: 100%;

  & + & {
    margin-top: 9px;
  }

  ${EmailIcon},
  ${PasswordIcon} {
    position: absolute;
    top: 11px;
    left: 13px;
  }
`;

export const AuthInput = styled(Input)`
  box-sizing: border-box;
  margin: 0;
  padding: 10px 10px 10px 30px;
  width: 100%;
  height: 34px;
`;

export const AuthCheck = styled(Checkbox)`
  display: block;
  margin: 15px 0 15px 10px;
`;

export const Menu = styled(Link)`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.333333px;
  text-decoration: none;
  color: #858282;
`;

export const SubMenu = styled.ul`
  position: absolute;
  bottom: 40px;
  left: 50%;
  margin: 0;
  padding: 0;
  transform: translateX(-50%);

  ${Menu} {
    position: relative;
    margin: 0 5px;

    &:first-child {
      &:before {
        display: none;
      }
    }

    &:before {
      content: '';
      position: absolute;
      top: 2px;
      left: -5px;
      display: block;
      width: 1px;
      height: 14px;
      background: #b3afaf;
    }
  }
`;
