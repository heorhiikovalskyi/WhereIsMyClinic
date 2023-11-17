import { eq } from 'drizzle-orm';
import { Clinics } from '../../db/schema/clinics.js';
import { db } from '../../db/db.js';
import { clinics } from './Selections.js';

export class ClinicsRepository {
  private constructor() {}
  private static instance: ClinicsRepository;
  public static getInstance(): ClinicsRepository {
    if (!ClinicsRepository.instance) {
      ClinicsRepository.instance = new ClinicsRepository();
    }
    return ClinicsRepository.instance;
  }

  getByCity = async (city: string) => {
    return await db.select(clinics()).from(Clinics).where(eq(Clinics.city, city));
  };

  getByState = async (state: string) => {
    return await db.select(clinics()).from(Clinics).where(eq(Clinics.state, state));
  };

  getByZip = async (zip: string) => {
    return await db.select(clinics()).from(Clinics).where(eq(Clinics.postCode, zip));
  };

  getByName = async (clinic: string) => {
    return await db.select(clinics()).from(Clinics).where(eq(Clinics.name, clinic));
  };

  getBySuburb = async (suburb: string) => {
    return await db.select(clinics()).from(Clinics).where(eq(Clinics.suburbName, suburb));
  };
}
