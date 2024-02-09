import SearchIcon from '@mui/icons-material/Search';
import { FormControl, Input } from '@mui/material';
import { Control, Controller, FieldValues, Path, UseControllerProps } from 'react-hook-form';

import { ClearButton } from '..';

interface Props<TFieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  id: string;
  rules?: UseControllerProps['rules'];
  placeholder?: string;
}

export const SearchInput = <TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  rules,
  id,
  placeholder,
}: Props<TFieldValues>): JSX.Element => (
  <Controller<TFieldValues>
    name={name}
    control={control}
    rules={rules}
    render={({ field }) => (
      <FormControl fullWidth variant="standard">
        <Input
          id={id}
          placeholder={placeholder}
          autoComplete="off"
          endAdornment={
            <ClearButton type="submit">
              <SearchIcon fontSize="small" />
            </ClearButton>
          }
          {...field}
        />
      </FormControl>
    )}
  />
);
