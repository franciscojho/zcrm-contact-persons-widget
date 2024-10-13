import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function ZohoInputText({ 
  name,
  label,
  control,
  required = 'Este campo es requerido',
  type = 'text',
  errorText,
  rules = {},
  disabled }) {
  return (
    <Controller
      name={name}
      rules={{ required, ...rules }}
      control={control}
      disabled={disabled}
      render={({ field }) => 
          <TextField 
            {...field}
            sx={{ width: '100%' }}
            type={type}
            label={label}
            variant='outlined'
            error={!!errorText}
            helperText={errorText} 
          />}
    />
  )
}