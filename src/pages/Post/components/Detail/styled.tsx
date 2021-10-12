import styled from 'styled-components';
import { ClearLink } from '@/components/atoms/clear';

export const Wrapper = styled.section`
  margin-bottom: 20px;
  color: #3f4040;
`;

export const Breadcrumb = styled.h2`
  margin: 14px 0;
  font-size: 10px;
  font-weight: normal;
  line-height: 12px;

  ${ClearLink} {
    &:after {
      content: ' >';
    }
  }
`;

export const Title = styled.h3`
  margin: 4px 0;
  font-size: 18px;
  line-height: 22px;
`;

export const Content = styled.p`
  font-size: 14px;
  line-height: 16px;
`;

export const NumComment = styled.div`
  margin-top: 2px;
  text-align: right;
  font-size: 10px;
  line-height: 12px;
  color: #518cff;
`;
