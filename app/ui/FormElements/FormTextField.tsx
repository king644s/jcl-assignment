import {
  FormControl,
  FormLabel,
  TextField,
  TextFieldProps,
} from "@mui/material";
import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface Props extends Omit<TextFieldProps, "name" | "label"> {
  name: string;
  label: string;
}

const FormTextField: FC<Props> = ({ name, label, ...otherProps }) => {
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
          <TextField {...field} {...otherProps} />
        </FormControl>
      )}
    />
  );
};

export default FormTextField;
