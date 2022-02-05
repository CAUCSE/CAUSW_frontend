import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from 'components/common/Input/Input';
import { Checkbox } from 'components/atoms/form';
import { LogoImage } from '@/components/atoms/Logo';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 568px;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  transform: translateY(-50%);
`;

export const Logo = styled(LogoImage)`
  display: block;
  margin: 0 auto 30px;
`;

export const EmailIcon = styled.img.attrs({ src: '/images/icons/email_icon.png', alt: 'email icon' })``;

export const PasswordIcon = styled.img.attrs({ src: '/images/icons/password_icon.png', alt: 'password icon' })``;

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