import { Box, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Controller } from "react-hook-form";

const radioGroupStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 0,
  // paddingLeft: '14px'
}

export default function ZohoInputRadio({
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
      <RadioGroup
        {...field}
        sx={{...radioGroupStyles}}
        row
      >
        <FormLabel error={!!errorText}>
          {label}
        </FormLabel>
        <Box>
          <FormControlLabel sx={{ marginBottom: '-9px' }} value="email" control={<Radio />} label="Correo" />
          <FormControlLabel sx={{ marginBottom: '-9px' }} value="sms" control={<Radio />} label="SMS" />
          {errorText && <FormHelperText sx={{ color: '#d32f2f', paddingLeft: '14px' }}>{errorText}</FormHelperText>}
        </Box>
      </RadioGroup>
    }
  />
  )
}