import React from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Select,
} from '@material-ui/core';
import { OnChangeSelect, SelectLabel } from '../../types/types';

export function SelectComponent<R>({
  name,
  labelText,
  value,
  onChange,
  onErrorChange,
  options,
  error,
}: {
  name: string;
  labelText: string;
  onChange: OnChangeSelect;
  onErrorChange: OnChangeSelect;
  value: string;
  options: SelectLabel[];
  error: string;
}) {
  return (
    <FormControl sx={{ mt: 2, mb: 1 }} fullWidth error={!!error}>
      <InputLabel shrink htmlFor={`outlined-${name}-native-simple`}>
        {labelText}
      </InputLabel>
      <Select
        native
        value={value}
        onChange={onChange}
        onBlur={onErrorChange}
        label={labelText}
        input={
          <OutlinedInput
            notched
            label={labelText}
            name={name}
            id={`outlined-${name}-native-simple`}
          />
        }
      >
        <option aria-label="None" value="" />
        {options.map(({ name }, index) => (
          <option value={value} key={`text-${index}`}>
            {name}
          </option>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
