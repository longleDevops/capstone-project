import * as schema from "@/app/(back-end)/db/schema";
import { account, domesticStudent, studentBackground, internationalStudent, working, searchingJob, seekingDegree, satisfaction } from "@/app/(back-end)/db/schema";
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { genderateWorkingStudentData, generateAccountData, generateDomesticStudentData, generateInternationalStudentData, generateSatisfactionData, generateSearchingData, generateSeekingDegreeData, generateStudentBackgroundData } from './fake-data';

const sql = neon("postgresql://career-path_owner:JCaNYRAb3ev5@ep-orange-cloud-a6ut7nna.us-west-2.aws.neon.tech/career-path?sslmode=require");
const db = drizzle(sql, { schema });


async function main() {
  await db.delete(account)

  await insertWorkingOnly(15);
}

async function insertMixed(size: number) {
  const statusArr = [
    'domestic-student',
    'international-student',
    'working-student',
    'seeking-student',
    'job-seeking-student'
  ]
  try {
    //await db.delete(account)
    for (let i = 0; i < size; i++) {
      const accountData = generateAccountData();
      const newAccount = await db.insert(account).values(accountData).returning({ id: account.id });

      const studentBackgroundData = generateStudentBackgroundData(newAccount[0].id, statusArr);
      await db.insert(studentBackground).values(studentBackgroundData);

      if (studentBackgroundData.status === 'domestic-student') {
        await insertDomestic(newAccount[0].id);
      } else if (studentBackgroundData.status === 'international-student') {
        await insertInternational(newAccount[0].id);
      } else if (studentBackgroundData.status === 'working-student') {
        await insertWorking(newAccount[0].id);
      } else if (studentBackgroundData.status === 'seeking-student') {
        await insertSeeking(newAccount[0].id);
      } else {
        await insertSearching(newAccount[0].id);
      }
    }
    console.log("Insert Mixed Successful")

  } catch (e) {
    console.error(e)
  }
}

async function insertInternationalOnly(size: number) {
  const statusArr = [
    'international-student',
  ]
  try {
    //await db.delete(account)

    for (let i = 0; i < size; i++) {
      const accountData = generateAccountData();
      const newAccount = await db.insert(account).values(accountData).returning({ id: account.id });

      const studentBackgroundData = generateStudentBackgroundData(newAccount[0].id, statusArr);
      await db.insert(studentBackground).values(studentBackgroundData);
      await insertInternational(newAccount[0].id);
    }
    console.log("Successful")
  } catch (e) {
    console.error(e)
  }
}

async function insertDomesticOnly(size: number) {
  const statusArr = [
    'domestic-student'
  ]
  try {
    //await db.delete(account)

    for (let i = 0; i < size; i++) {
      const accountData = generateAccountData();
      const newAccount = await db.insert(account).values(accountData).returning({ id: account.id });

      const studentBackgroundData = generateStudentBackgroundData(newAccount[0].id, statusArr);
      await db.insert(studentBackground).values(studentBackgroundData);
      await insertDomestic(newAccount[0].id);
    }
    console.log("Insert Domestic Successful")
  } catch (e) {
    console.error(e)
  }
}

async function insertWorkingOnly(size: number) {
  const statusArr = [
    'working-student'
  ]
  try {
    //await db.delete(account)

    for (let i = 0; i < size; i++) {
      const accountData = generateAccountData();
      const newAccount = await db.insert(account).values(accountData).returning({ id: account.id });

      const studentBackgroundData = generateStudentBackgroundData(newAccount[0].id, statusArr);
      await db.insert(studentBackground).values(studentBackgroundData);
      await insertWorking(newAccount[0].id);
    }
    console.log("Insert Working Successful")
  } catch (e) {
    console.error(e)
  }
}

async function insertSeekingDegreeOnly(size: number) {
  const statusArr = [
    'seeking-student'
  ]
  try {
    //await db.delete(account)

    for (let i = 0; i < size; i++) {
      const accountData = generateAccountData();
      const newAccount = await db.insert(account).values(accountData).returning({ id: account.id });

      const studentBackgroundData = generateStudentBackgroundData(newAccount[0].id, statusArr);
      await db.insert(studentBackground).values(studentBackgroundData);
      await insertSeeking(newAccount[0].id);
    }
    console.log("Insert Seeking Degree Successful")
  } catch (e) {
    console.error(e)
  }
}

async function inserSearchingJobOnly(size: number) {
  const statusArr = [
    'job-seeking-student'
  ]
  try {
    //await db.delete(account)

    for (let i = 0; i < size; i++) {
      const accountData = generateAccountData();
      const newAccount = await db.insert(account).values(accountData).returning({ id: account.id });

      const studentBackgroundData = generateStudentBackgroundData(newAccount[0].id, statusArr);
      await db.insert(studentBackground).values(studentBackgroundData);
      await insertSearching(newAccount[0].id);
    }
    console.log("Insert Searching Successful")
  } catch (e) {
    console.error(e)
  }
}

async function insertDomestic(id: string) {
  const domesticStudentData = generateDomesticStudentData(id);
  await db.insert(domesticStudent).values(domesticStudentData);
}

async function insertInternational(id: string) {
  const internationalStudentData = generateInternationalStudentData(id);
  await db.insert(internationalStudent).values(internationalStudentData);
}

async function insertWorking(id: string) {
  const workingData = genderateWorkingStudentData(id);
  await db.insert(working).values(workingData);
}

async function insertSeeking(id: string) {
  const seekingData = generateSeekingDegreeData(id);
  await db.insert(seekingDegree).values(seekingData);
}

async function insertSearching(id: string) {
  const searchingData = generateSearchingData(id);
  await db.insert(searchingJob).values(searchingData);
}

async function insertSatisfaction(id: string) {
  const satisfactionData = generateSatisfactionData(id);
  await db.insert(satisfaction).values(satisfactionData);
}

main();