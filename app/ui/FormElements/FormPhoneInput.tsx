import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import MuiPhone, { MUIPhoneProps } from "./MuiPhone"; // Import your MuiPhone component
import { FormControl, FormLabel } from "@mui/material";

interface FormMuiPhoneProps extends Omit<MUIPhoneProps, "value" | "onChange"> {
  name: string;
  label: string;
}

const FormMuiPhone: React.FC<FormMuiPhoneProps> = ({
  name,
  label,
  ...restProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <FormControl fullWidth error={!!errors[name]}>
          <FormLabel>{label}</FormLabel>
          <MuiPhone
            {...restProps}
            value={value}
            onChange={(phone) => onChange(phone)}
            onBlur={onBlur}
          />
        </FormControl>
      )}
    />
  );
};

export default FormMuiPhone;
