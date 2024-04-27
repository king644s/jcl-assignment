import {
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface Props extends Omit<SelectProps, "name" | "label"> {
  name: string;
  label: string;
  placeholder: string;
  options: { label: string; value: string }[];
}

const FormSelect: FC<Props> = ({
  name,
  label,
  options,
  placeholder,
  ...otherProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <FormControl fullWidth error={!!errors[name]}>
          <FormLabel>{label}</FormLabel>
          <Select {...field} {...otherProps}>
            <MenuItem value="" disabled>
              {placeholder}
            </MenuItem>
            {options && options.length > 0 ? (
              options.map((item) => (
                <MenuItem value={item.value}>{item.label}</MenuItem>
              ))
            ) : (
              <MenuItem>no options</MenuItem>
            )}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default FormSelect;
