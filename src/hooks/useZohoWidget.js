import { ZOHO } from '../vendor/ZSDK'
import { useEffect, useState } from "react";
import { useZohoAdapter } from './useZohoAdapter';

export default function useZohoWidget() {
  const [zcrmRecordData, setZcrmRecordData] = useState(null);
  const [zbooksRecordId, setZBooksRecordId] = useState(null);
  const [isLoadingSkeleton, setIsLoadingSkeleton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [alertData, setAlertData] = useState({
    isOpen: false,
    type: 'error',
    description: '',
  });
  const { searchBooksContactById, createBooksContactPerson } = useZohoAdapter()

  useEffect(() => {
    init();
    function init() {
      ZOHO.embeddedApp.on('PageLoad', (data) => {
        setZcrmRecordData({
          zcrmId: data?.EntityId?.[0],
          zcrmModule: data?.Entity,
        })
      });
      return ZOHO.embeddedApp.init();
    }
  }, []);

  useEffect(() => {
    const getZbooksContact = (data) => 
      searchBooksContactById(data)
        .then(data => {
          if (data?.contact_id) return setZBooksRecordId(data.contact_id)
          throw new Error();
        })
        .catch(() => setAlertData({
          isOpen: true,
          description: 'No se ha encontrado el contacto en Zoho Books'
        }))
        .finally(() => setIsLoadingSkeleton(false))

    if (zcrmRecordData) {
      getZbooksContact(zcrmRecordData)
    }

  }, [zcrmRecordData, searchBooksContactById]);

  return {
    isLoadingSkeleton,
    isLoading,
    setIsLoading,
    zcrmRecordId: zcrmRecordData?.zcrmId,
    zbooksRecordId,
    createBooksContactPerson,
    alertData,
    setAlertData
  };
}