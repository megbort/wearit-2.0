'use client';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import theme from '../../theme/theme';
import { ThemeProvider } from '@mui/material';

interface SelectDropdownProps {
  placeholder: string;
  items: { value: string; label: string }[];
}

export default function SelectDropdown({
  placeholder,
  items,
}: Readonly<SelectDropdownProps>) {
  const [selectedValue, setSelectedValue] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <Select
            value={selectedValue}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': placeholder }}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>{placeholder}</em>;
              }
              return selected;
            }}
          >
            <MenuItem disabled value="">
              <em>{placeholder}</em>
            </MenuItem>
            {items.map((item) => (
              <MenuItem key={item.value} value={item.label}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </ThemeProvider>
  );
}
