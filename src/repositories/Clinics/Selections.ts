import { Clinics } from '../../db/schema/clinics.js';

export const clinics = () => ({
  id: Clinics.id,
  name: Clinics.name,
  city: Clinics.city,
  suburbName: Clinics.suburbName,
  fullAddress: Clinics.fullAddress,
  typeform: Clinics.typeform,
  website: Clinics.website,
  email: Clinics.email,
  phone: Clinics.phone,
  about: Clinics.about,
  postCode: Clinics.postCode,
  state: Clinics.state,
});
