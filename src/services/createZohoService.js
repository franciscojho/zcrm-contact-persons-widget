import { createContactPerson } from "../adapters/createContactPerson";
import { ZOHO } from "../vendor/ZSDK";

const buildRequestData = params => ({
  arguments: JSON.stringify(params)
});

export const createZohoService = () => ({
  searchBooksContactById: async (zcrmContactId) => {
    const { details = {} } =
      await ZOHO.CRM.FUNCTIONS.execute('searchzbookscontacts',
        buildRequestData({ zcrmContactId })
      );
    const { output = {} } = details;
    return JSON.parse(output);
  },
  createBooksContactPerson: async (contactPersonData) => {
    console.log('body', createContactPerson(contactPersonData));
    const { details = {} } =
      await ZOHO.CRM.FUNCTIONS.execute('createzbookscontactpersons',
        buildRequestData({ contactPersonData: createContactPerson(contactPersonData) })
      );
    const { output = {} } = details;
    return JSON.parse(output);
  }
});
