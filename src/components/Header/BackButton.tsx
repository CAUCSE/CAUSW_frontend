import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { memo } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Icons } from '@/assets';
import { ClearButton } from '@/components';

export const BackButton: React.FC<{ className?: string; link?: boolean | string }> = memo(
  ({ className, link = false }) => {
    const { goBack } = useHistory();
    // TODO: 이전 페이지 state 있는 경우 해당 페이지로 이동

    const Icon = (
      <>
        <Icons.BackIcon className="absolute-center" />
        <span className="a11y-hidden">뒤로가기</span>
      </>
    );

    if (typeof link === 'string' && link !== '') {
      return (
        <StyledLink className={className} to={link}>
          {Icon}
        </StyledLink>
      );
    } else {
      return (
        <StyledButton type="button" className={className} onClick={goBack}>
          {Icon}
        </StyledButton>
      );
    }
  },
);

const style = css`
  position: relative;
  display: block;
  width: 50px;
  height: 50px;

  > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const StyledLink = styled(Link)`
  ${style}
`;
const StyledButton = styled(ClearButton)`
  ${style}
`;
