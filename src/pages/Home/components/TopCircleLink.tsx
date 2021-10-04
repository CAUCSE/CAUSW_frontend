import { memo } from 'react';
import styled from 'styled-components';
import { ClearA, ClearLink } from '@/components/atoms/clear';
import { ReactComponent as UniversityIcon } from '@/assets/icons/link/university.svg';
import { ReactComponent as LibraryIcon } from '@/assets/icons/link/library.svg';
import { ReactComponent as CSEIcon } from '@/assets/icons/link/cse.svg';
import { ReactComponent as PortalIcon } from '@/assets/icons/link/portal.svg';
import { ReactComponent as LockerIcon } from '@/assets/icons/link/locker.svg';

export const University = memo(() => (
  <ClearA href="https://www.cau.ac.kr">
    <Circle>
      <UniversityIcon />
    </Circle>
    <Text>
      학교
      <br />
      홈페이지
    </Text>
  </ClearA>
));

export const Library = memo(() => (
  <ClearA href="https://library.cau.ac.kr">
    <Circle>
      <LibraryIcon />
    </Circle>
    <Text>
      중앙
      <br />
      홈페이지
    </Text>
  </ClearA>
));

export const CSE = memo(() => (
  <ClearA href="https://cse.cau.ac.kr">
    <Circle>
      <CSEIcon />
    </Circle>
    <Text>
      컴공
      <br />
      홈페이지
    </Text>
  </ClearA>
));

export const Portal = memo(() => (
  <ClearA href="https://mportal.cau.ac.kr">
    <Circle>
      <PortalIcon />
    </Circle>
    <Text>포탈</Text>
  </ClearA>
));

export const Locker = memo(() => (
  <ClearLink to="#">
    <Circle>
      <LockerIcon />
    </Circle>
    <Text>
      사물함
      <br />
      관리
    </Text>
  </ClearLink>
));

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > * {
    display: inline-block;
    width: 15%;
  }
`;

const Circle = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 100%;
  background: #eaeaea;

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
  }
`;

const Text = styled.div`
  margin-top: 6px;
  text-align: center;
  font-size: 8px;
  line-height: 12px;
  color: #808080;
`;
