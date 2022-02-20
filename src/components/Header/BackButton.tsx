import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { memo } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ClearButton } from '@/components';

export const BackButton: React.FC<{ className?: string; link?: boolean | string }> = memo(
  ({ className, link = false }) => {
    const { goBack } = useHistory();
    // TODO: 이전 페이지 state 있는 경우 해당 페이지로 이동

    const Icon = (
      <>
        <img src="/images/icons/back.svg" alt="back icon" />
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

const styledCss = css`
  position: relative;
  display: block;
  margin-left: -20px;
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
  ${styledCss}
`;
const StyledButton = styled(ClearButton)`
  ${styledCss}
`;
