import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select
} from "@mui/material";
import { Controller } from "react-hook-form";

export default function ZohoInputSelect({
  name,
  label,
  control,
  required = 'Este campo es requerido',
  errorText,
  rules = {},
  disabled,
  children,
  sx,
}) {
  return (
    <Controller
      name={name}
      rules={{ required, ...rules }}
      control={control}
      disabled={disabled}
      render={({ field }) =>
        <FormControl fullWidth sx={sx}>
          <InputLabel
            sx={{
              ...(errorText && { color: '#d32f2f' }) 
            }}>{label}</InputLabel>
          <Select
            { ...field }
            label={label}
            error={!!errorText}
          >
            {children}
          </Select>
          {errorText && <FormHelperText sx={{ color: '#d32f2f' }}>{errorText}</FormHelperText>}
        </FormControl>
      }
    />
  )
}