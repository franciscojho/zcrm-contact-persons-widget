import { Alert, AlertTitle } from "@mui/material";

const alertStyles = {
  position: 'absolute',
  left: 16,
  bottom: 16,
};


export default function ZohoAlert({
  title = 'Error',
  description,
  type = 'error',
  isOpen = false,
  setAlertData
}) {
  const handleIsOpen = prev => setAlertData(({ ...prev, isOpen: false }))
  return (
    <>
      {isOpen && 
        <Alert severity={type} sx={alertStyles} onClose={handleIsOpen}>
          <AlertTitle>{title}</AlertTitle>
          {description}
        </Alert>}
    </>
  )
}