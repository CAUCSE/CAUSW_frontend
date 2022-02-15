import { Header, LayoutHOC } from '@/v2/components';

const HistoryCommentPage: React.FC = () => {
  return (
    <>
      <Header title="내가 쓴 댓글" mini withBack RightComponent={null} />
    </>
  );
};

export default LayoutHOC(HistoryCommentPage);
