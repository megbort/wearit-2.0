'use client';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import theme from '../../theme/theme';
import { ThemeProvider } from '@mui/material';

interface SelectDropdownProps {
  readonly placeholder: string;
  readonly items: { value: string; label: string }[];
  readonly value: string;
  readonly onChange: (event: SelectChangeEvent) => void;
}

export default function SelectDropdown({
  placeholder,
  items,
  value,
  onChange,
}: SelectDropdownProps) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <Select
            value={value}
            onChange={onChange}
            displayEmpty
            inputProps={{ 'aria-label': placeholder }}
            renderValue={(selected) => {
              if (!selected) {
                return <em>{placeholder}</em>;
              }
              const selectedItem = items.find(
                (item) => item.value === selected
              );
              return selectedItem ? selectedItem.label : selected;
            }}
          >
            <MenuItem disabled value="">
              <em>{placeholder}</em>
            </MenuItem>
            {items.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </ThemeProvider>
  );
}
