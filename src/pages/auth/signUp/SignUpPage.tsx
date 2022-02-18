import { observer } from 'mobx-react-lite';

import { Header, LayoutHOC } from '@/v2/components';

const SignUpPage: React.FC = observer(() => {
  return (
    <>
      <Header withBack title="회원가입" mini RightComponent={null} />
    </>
  );
});

export default LayoutHOC(SignUpPage, { Nav: null });
