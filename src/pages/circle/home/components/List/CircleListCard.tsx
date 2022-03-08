import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { generatePath } from 'react-router-dom';

import { ClearLink } from '@/components';
import { PAGE_URL } from '@/configs/path';

export const CircleListCard: React.FC<{ model: Model.Circle }> = observer(
  ({
    model: {
      id: circleId,
      mainImage,
      name,
      leaderName,
      numMember,
      formatedCreatedAt,
      formatJoinedAt,
    },
  }) => (
    <Card to={generatePath(PAGE_URL.CircleMain, { circleId })}>
      <Image src={mainImage} />
      <Info>
        <Name className="text-ellipsis-line">{name}</Name>
        <Desc>
          동아리장 : {leaderName}
          <br />
          회원 수 : {numMember}명
          <br />
          생성일 : {formatedCreatedAt}
          <br />
          가입일 : {formatJoinedAt}
        </Desc>
      </Info>
    </Card>
  ),
);

const Card = styled(ClearLink)`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  box-shadow: 1px 2px 5px rgb(0 0 0 / 15%);

  & + & {
    margin-top: 10px;
  }
`;

const Image = styled.div<{ src: string | null }>`
  width: 60px;
  height: 74px;
  border-radius: 5px;
  background: center / contain no-repeat url(${({ src }) => src ?? '/images/empty.png'});
  background-color: #efefef;
`;

const Info = styled.div`
  min-width: 0;
  flex: 1 0 0;
  padding: 0 7px 0 17px;
`;

const Name = styled.h3`
  margin: 5px 0 10px;
  font-size: 12px;
  line-height: 14px;
`;

const Desc = styled.div`
  font-size: 9px;
  line-height: 1.5;
`;
