import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { useRootStore } from 'stores/RootStore';
import { footerHeight } from '../footer/NavigationView';

export const MobileBody: React.FC = observer(({ children }) => {
  const {
    ui: {
      header: { headerHeight },
    },
  } = useRootStore();

  return (
    <Body headerHeight={headerHeight}>
      <section>{children}</section>
    </Body>
  );
});

const Body = styled.main<{ headerHeight: number }>`
  box-sizing: border-box;
  height: ${({ headerHeight }) => `calc(100% - ${headerHeight + footerHeight}px)`};

  section {
    padding: 0 20px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;
