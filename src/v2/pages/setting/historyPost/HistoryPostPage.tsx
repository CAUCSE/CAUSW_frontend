import { Header, LayoutHOC } from '@/v2/components';

const HistoryPostPage: React.FC = () => {
  return (
    <>
      <Header title="내가 쓴 글" mini withBack RightComponent={null} />
    </>
  );
};

export default LayoutHOC(HistoryPostPage);
