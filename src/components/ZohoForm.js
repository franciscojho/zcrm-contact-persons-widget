import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from "@mui/lab";
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import ZohoInputText from "./ZohoInputText";

const containerStyles = {
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'center',
  width: 750,
  height: 350,
  p: 2,
}

const inputGroupStyles = {
  width: '100%',
  display: 'flex',
  mb: 2,
  gap: 2,
}

const emailValidation = {
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Correo con formato inválido"
  }
}

const phoneValidation = {
  pattern: {
    value: /^9[0-9]{8}$/gm,
    message: "Celular con formato inválido"
  }
}

const defaultValues = {
  defaultValues: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    workPhone: '',
    commsChannel: '',
  },
}

export default function ZohoForm({ setFormData, disabled, loading }) {
  const { control, handleSubmit, formState: { errors } } = useForm(defaultValues)
  const onSubmit = (data) => {
    console.log(data)
    setFormData(data)
  }
  return (
    <Box sx={{...containerStyles}}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box sx={inputGroupStyles}>
          <ZohoInputText
            name='firstName'
            label='Nombres'
            control={control}
            errorText={errors.firstName?.message}
            disabled={disabled} />
          <ZohoInputText
            name='lastName'
            label='Apellidos'
            control={control}
            errorText={errors.lastName?.message}
            disabled={disabled} />
        </Box>
        <Box sx={inputGroupStyles}>
          <ZohoInputText
            name='email'
            type='correo'
            label='Correo'
            control={control}
            errorText={errors.email?.message}
            rules={emailValidation}
            disabled={disabled} />
          <ZohoInputText
            name='phone'
            label='Móvil Personal'
            control={control}
            errorText={errors.phone?.message}
            rules={phoneValidation}
            disabled={disabled} />
        </Box>
        <Box sx={inputGroupStyles}>
          <ZohoInputText
            name='workPhone'
            label='Móvil Laboral'
            control={control}
            errorText={errors.workPhone?.message}
            rules={phoneValidation}
            required={false}
            disabled={disabled} />
        </Box>
        <LoadingButton
          type="submit"
          variant="contained"
          loading={loading}
          startIcon={<SaveIcon />}
          loadingPosition="start"
          disabled={disabled}>
          Enviar
        </LoadingButton>
      </Box>
    </Box>
  )
}