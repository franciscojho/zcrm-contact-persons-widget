import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
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
  disabled
}) {
  return (
    <Controller
      name={name}
      rules={{ required, ...rules }}
      control={control}
      disabled={disabled}
      render={({ field }) =>
        <FormControl fullWidth>
          <InputLabel
            sx={{
              ...(errorText && { color: '#d32f2f' }) 
            }}>{label}</InputLabel>
          <Select
            { ...field }
            label={label}
            error={!!errorText}
          >
            <MenuItem value="Logistica">Logistica</MenuItem>
            <MenuItem value="Cobranzas">Cobranzas</MenuItem>
            <MenuItem value="Facturación">Facturación</MenuItem>
            <MenuItem value="Mantenimiento">Mantenimiento</MenuItem>
            <MenuItem value="Operaciones">Operaciones</MenuItem>
          </Select>
          {errorText && <FormHelperText sx={{ color: '#d32f2f' }}>{errorText}</FormHelperText>}
        </FormControl>
      }
    />
  )
}