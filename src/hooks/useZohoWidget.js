import { ZOHO } from '../vendor/ZSDK'
import { useEffect, useState } from "react";
import { useZohoAdapter } from './useZohoAdapter';

export default function useZohoWidget() {
  const [zcrmRecordId, setZcrmRecordId] = useState(null);
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
      ZOHO.embeddedApp.on('PageLoad', (data) => setZcrmRecordId(data?.EntityId?.[0]));
      return ZOHO.embeddedApp.init();
    }
  }, []);

  useEffect(() => {
    const getZbooksContact = (id) => 
      searchBooksContactById(id)
        .then(data => {
          if (data?.contact_id) return setZBooksRecordId(data.contact_id)
          throw new Error();
        })
        .catch(() => setAlertData({
          isOpen: true,
          description: 'No se ha encontrado el contacto en Zoho Books'
        }))
        .finally(() => setIsLoadingSkeleton(false))

    if (zcrmRecordId) {
      getZbooksContact(zcrmRecordId)
    }

  }, [zcrmRecordId, searchBooksContactById]);

  return {
    isLoadingSkeleton,
    isLoading,
    setIsLoading,
    zcrmRecordId,
    zbooksRecordId,
    createBooksContactPerson,
    alertData,
    setAlertData
  };
}