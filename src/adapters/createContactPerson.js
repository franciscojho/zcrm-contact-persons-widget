export const createContactPersonAdapter = (payload) => ({
  "contact_id": payload.recordId,
  "first_name": payload.firstName,
  "last_name": payload.LastName,
  "email": payload.email,
  "phone": payload.workPhone,
  "mobile": payload.phone,
  "communication_preference": {
    "is_email_enabled": payload.commsChannel === "email",
    "is_sms_enabled": payload.commsChannel === "sms",
    // "is_whatsapp_enabled": false
  }
});