import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';

type Props = {
  children?: React.ReactNode;
};

export const AuthRouter: React.FC<Props> = observer(({ children, ...rest }) => {
  return <Route {...rest} render={() => children} />;
});
