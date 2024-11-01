import { createContactPerson } from "../adapters/createContactPerson";
import { ZOHO } from "../vendor/ZSDK";

const buildRequestData = params => ({
  arguments: JSON.stringify(params)
});

export const createZohoService = () => ({
  searchBooksContactById: async ({ zcrmModule, zcrmId }) => {
    const { details = {} } =
      await ZOHO.CRM.FUNCTIONS.execute('searchzbookscontacts',
        buildRequestData({ zcrmModule, zcrmId })
      );
    const { output = {} } = details;
    return JSON.parse(output);
  },
  createBooksContactPerson: async (contactPersonData) => {
    const { details = {} } =
      await ZOHO.CRM.FUNCTIONS.execute('createzbookscontactpersons',
        buildRequestData({ contactPersonData: createContactPerson(contactPersonData) })
      );
    const { output = {} } = details;
    return JSON.parse(output);
  }
});
