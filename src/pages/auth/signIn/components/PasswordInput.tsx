import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useCallback, useEffect, useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import { Input } from '../styled';

interface Props {
  control: Control<User.SignInRequestDto>;
}
export const PasswordInput: React.FC<Props> = ({ control }) => {
  const [visible, setvisible] = useState(false);
  const handleClick = useCallback(() => setvisible(flag => !flag), []);

  useEffect(() => {
    return () => setvisible(false);
  }, []);

  return (
    <Controller
      name="password"
      control={control}
      render={({ field }) => (
        <Input
          type={visible ? 'text' : 'password'}
          placeholder="비밀번호"
          InputProps={{
            startAdornment: <LockOutlinedIcon sx={{ fontSize: 16 }} />,
            endAdornment: visible ? (
              <VisibilityOffOutlinedIcon sx={{ fontSize: 16 }} onClick={handleClick} />
            ) : (
              <VisibilityOutlinedIcon sx={{ fontSize: 16 }} onClick={handleClick} />
            ),
          }}
          {...field}
        />
      )}
    />
  );
};
