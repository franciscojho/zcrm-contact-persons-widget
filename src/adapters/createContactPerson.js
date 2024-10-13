export const createContactPerson = (payload) => ({
  "contact_id": payload.recordId,
  "first_name": payload.firstName,
  "last_name": payload.lastName,
  "email": payload.email,
  "mobile": payload.phone,
  "phone": payload.workPhone,
  // "communication_preference": {
    // "is_email_enabled": payload.commsChannel === "email",
    // "is_sms_enabled": payload.commsChannel === "sms",
    // "is_whatsapp_enabled": false
  // }
});