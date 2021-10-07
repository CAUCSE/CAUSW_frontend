import styled from 'styled-components';

export const Post: React.FC = () => (
  <Card>
    <h5>외톨이</h5>
    <p className="text-ellipsis">
      아무도 모르게 다가온 이별에 대면했을때 또 다시 혼자가 되는게 두려워 외면했었네 꿈에도 그리던 지나간 시간이
      다시금..
    </p>
  </Card>
);

const Card = styled.div`
  padding: 10px;
  background-color: #fff;
  text-align: left;
  border-radius: 10px;
  width: 100%;

  h5 {
    margin: 0 0 4px;
    font-size: 10px;
    line-height: 12px;
  }

  > p {
    font-size: 9px;
    line-height: 11px;
    max-height: 22px;
  }
`;
