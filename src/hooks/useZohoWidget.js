import { ZOHO } from '../vendor/ZSDK'
import { useEffect, useState } from "react";

const buildRequestData = zcrmContactId => ({
  arguments: JSON.stringify({
    zcrm_contact_id : zcrmContactId
  })
});

export default function useZohoWidget() {
  const [recordId, setRecordId] = useState(null);
  const [zbooksContact, setZbooksContact] = useState(null);

  useEffect(() => {
    init();
    function init() {
      ZOHO.embeddedApp.on('PageLoad', (data) => setRecordId(data?.EntityId?.[0]));
      return ZOHO.embeddedApp.init();
    }
  }, []);

  useEffect(() => {
    if (recordId) getZbooksContact('searchzbookscontacts', recordId);
    function getZbooksContact(funcName, zcrmContactId) {
      ZOHO.CRM.FUNCTIONS.execute(funcName, buildRequestData(zcrmContactId))
      .then(data => setZbooksContact(data))
    }
  }, [recordId]);

  return { recordId, zbooksContact };
}