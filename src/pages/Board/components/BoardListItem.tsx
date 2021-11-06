import { memo } from 'react';
import { generatePath } from 'react-router';
import styled from 'styled-components';
import { PAGE_URL } from '@/configs/path';
import { ClearLink } from '@/components/atoms/clear';

export const BoardListItem: React.FC<{ model: Model.Board }> = memo(({ model: { id, name } }) => (
  <StyledLink to={generatePath(PAGE_URL.Post, { boardId: id })}>{name}</StyledLink>
));

const StyledLink = styled(ClearLink)`
  float: left;
  clear: left;
  margin-top: 14px;
  font-size: 12px;
  line-height: 14px;
`;
