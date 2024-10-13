import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import ZohoAlert from './components/ZohoAlert.js';
import ZohoForm from './components/ZohoForm.js';
import ZohoSkeleton from './components/ZohoSkeleton.js';
import useZohoWidget from './hooks/useZohoWidget.js';

function App() {
  const {
    isLoadingSkeleton,
    isLoading,
    setIsLoading,
    zbooksRecordId,
    createBooksContactPerson,
    alertData,
    setAlertData
  } = useZohoWidget();
  const [
    formData,
    setFormData
  ] = useState(null);

  // console.log({ zbooksRecordId })
  // console.log({ isLoading })
  // console.log({ zcrmRecordId })
  // console.log({ formData })

  useEffect(() => {
    const postFormData = async () => {
      setIsLoading(true);
      setAlertData({ isOpen: false })
      createBooksContactPerson({ recordId: zbooksRecordId, ...formData })
        .then((data) => {
          if (data?.code === 0) {
            return setAlertData({
              type: 'success',
              description: data.message,
              isOpen: true
            });
          }
          throw new Error(data.message);
        })
        .catch((err) => setAlertData({ isOpen: true, description: err.message }))
        .finally(() => setIsLoading(false))
    }
    if (formData && zbooksRecordId) {
      postFormData();
    }
  }, [
    zbooksRecordId,
    formData,
    createBooksContactPerson,
    setIsLoading,
    setAlertData
  ])

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      {!false ?
          <ZohoForm
            setFormData={setFormData}
            loading={isLoading}
            disabled={false}
            // disabled={!zbooksRecordId || isLoading}
          /> 
          : <ZohoSkeleton/>
      }
      <ZohoAlert
        description={alertData?.description}
        isOpen={alertData?.isOpen}
        type={alertData?.type}
        setAlertData={setAlertData}/>
    </Box>
  )
}

export default App
