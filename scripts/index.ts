import * as schema from "@/app/(back-end)/db/schema";
import { account, domesticStudent, studentBackground, internationalStudent, working, searchingJob, seekingDegree, satisfaction } from "@/app/(back-end)/db/schema";
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { avgSalaryArr, genderateWorkingStudentData, generateAccountData, generateDomesticStudentData, generateInternationalStudentData, generateSatisfactionData, generateSearchingData, generateSeekingDegreeData, generateStudentBackgroundData, salaryRange } from './fake-data';
import { faker } from '@faker-js/faker';


const sql = neon("postgresql://career-path_owner:JCaNYRAb3ev5@ep-orange-cloud-a6ut7nna.us-west-2.aws.neon.tech/career-path?sslmode=require");
const db = drizzle(sql, { schema });


async function main() {
  //await db.delete(account)

  //await insertDomesticOnly(2025);
  //await insertInternationalOnly(3305);
  await insertWorkingOnly(25);
  //await insertSeekingDegreeOnly(3055);
  //await insertSearchingJobOnly(4055);
}


// Test pass
async function insertInternationalOnly(size: number) {
  const statusArr = [
    'international-student',
  ]
  try {
    //await db.delete(account)


    for (let i = 0; i < size; i++) {
      const isEmployed = faker.datatype.boolean()
      const range = isEmployed ? faker.helpers.arrayElement(salaryRange) : ''
      const foundSalary = avgSalaryArr[salaryRange.indexOf(range)]
      const avgSalary = isEmployed ? foundSalary : 0

      const accountData = generateAccountData();
      const newAccount = await db.insert(account).values(accountData).returning({ id: account.id });

      const satisfactionData = generateSatisfactionData(newAccount[0].id);
      const ratingArr = [satisfactionData.q1Answer, satisfactionData.q2Answer, satisfactionData.q3Answer, satisfactionData.q4Answer, satisfactionData.q5Answer]
      const sum = ratingArr.reduce((acc, current) => acc + current, 0)
      const avgRating = (sum / 5).toFixed(1)

      const studentBackgroundData = generateStudentBackgroundData(newAccount[0].id, statusArr, isEmployed, avgSalary, avgRating);

      const internationalStudentData = generateInternationalStudentData(newAccount[0].id, isEmployed, range, avgSalary);

      await db.insert(studentBackground).values(studentBackgroundData);
      await db.insert(internationalStudent).values(internationalStudentData);
      await db.insert(satisfaction).values(satisfactionData);
    }
    console.log("International Successful")
  } catch (e) {
    console.error(e)
  }
}


// Test Pass
async function insertDomesticOnly(size: number) {
  const statusArr = [
    'domestic-student'
  ]
  try {
    //await db.delete(account)

    for (let i = 0; i < size; i++) {

      const isEmployed = faker.datatype.boolean()
      const range = isEmployed ? faker.helpers.arrayElement(salaryRange) : ''
      const foundSalary = avgSalaryArr[salaryRange.indexOf(range)]
      const avgSalary = isEmployed ? foundSalary : 0

      const accountData = generateAccountData();
      const newAccount = await db.insert(account).values(accountData).returning({ id: account.id });

      const satisfactionData = generateSatisfactionData(newAccount[0].id);
      const ratingArr = [satisfactionData.q1Answer, satisfactionData.q2Answer, satisfactionData.q3Answer, satisfactionData.q4Answer, satisfactionData.q5Answer]
      const sum = ratingArr.reduce((acc, current) => acc + current, 0)
      const avgRating = (sum / 5).toFixed(1)

      const studentBackgroundData = generateStudentBackgroundData(newAccount[0].id, statusArr, isEmployed, avgSalary, avgRating);
      const domesticStudentData = generateDomesticStudentData(newAccount[0].id, isEmployed, range, avgSalary);

      const allPromises = [

        db.insert(studentBackground).values(studentBackgroundData),
        db.insert(domesticStudent).values(domesticStudentData),
        db.insert(satisfaction).values(satisfactionData)
      ]
      await Promise.all(allPromises)
    }
    console.log("Insert Domestic Successful")
  } catch (e) {
    console.error(e)
  }
}


// Test Pass
async function insertWorkingOnly(size: number) {
  const statusArr = [
    'working-student'
  ]
  try {
    //await db.delete(account)

    for (let i = 0; i < size; i++) {
      const avgSalary = faker.helpers.arrayElement(avgSalaryArr)
      const isEmployed = true
      const accountData = generateAccountData();
      const newAccount = await db.insert(account).values(accountData).returning({ id: account.id });

      const satisfactionData = generateSatisfactionData(newAccount[0].id);
      const ratingArr = [satisfactionData.q1Answer, satisfactionData.q2Answer, satisfactionData.q3Answer, satisfactionData.q4Answer, satisfactionData.q5Answer]
      const sum = ratingArr.reduce((acc, current) => acc + current, 0)
      const avgRating = (sum / 5).toFixed(1)

      const studentBackgroundData = generateStudentBackgroundData(newAccount[0].id, statusArr, isEmployed, avgSalary, avgRating);

      const workingData = genderateWorkingStudentData(newAccount[0].id, avgSalary);

      const allPromise = [

        db.insert(studentBackground).values(studentBackgroundData),
        db.insert(working).values(workingData),
        db.insert(satisfaction).values(satisfactionData)
      ]
      await Promise.all(allPromise)
    }
    console.log("Insert Working Successful")
  } catch (e) {
    console.error(e)
  }
}

// Test Pass
async function insertSeekingDegreeOnly(size: number) {
  const statusArr = [
    'seeking-student'
  ]
  try {
    //await db.delete(account)

    for (let i = 0; i < size; i++) {
      const accountData = generateAccountData();
      const newAccount = await db.insert(account).values(accountData).returning({ id: account.id });

      const satisfactionData = generateSatisfactionData(newAccount[0].id);
      const ratingArr = [satisfactionData.q1Answer, satisfactionData.q2Answer, satisfactionData.q3Answer, satisfactionData.q4Answer, satisfactionData.q5Answer]
      const sum = ratingArr.reduce((acc, current) => acc + current, 0)
      const avgRating = (sum / 5).toFixed(1)

      const studentBackgroundData = generateStudentBackgroundData(newAccount[0].id, statusArr, false, 0, avgRating);

      const seekingData = generateSeekingDegreeData(newAccount[0].id);



      const allPromise = [
        db.insert(studentBackground).values(studentBackgroundData),
        db.insert(seekingDegree).values(seekingData),
        db.insert(satisfaction).values(satisfactionData)
      ]
      await Promise.all(allPromise)
    }
    console.log("Insert Seeking Degree Successful")
  } catch (e) {
    console.error(e)
  }
}

async function insertSearchingJobOnly(size: number) {
  const statusArr = [
    'job-seeking-student'
  ]
  try {
    //await db.delete(account)

    for (let i = 0; i < size; i++) {
      const accountData = generateAccountData();
      const newAccount = await db.insert(account).values(accountData).returning({ id: account.id });

      const satisfactionData = generateSatisfactionData(newAccount[0].id);
      const ratingArr = [satisfactionData.q1Answer, satisfactionData.q2Answer, satisfactionData.q3Answer, satisfactionData.q4Answer, satisfactionData.q5Answer]
      const sum = ratingArr.reduce((acc, current) => acc + current, 0)
      const avgRating = (sum / 5).toFixed(1)

      const studentBackgroundData = generateStudentBackgroundData(newAccount[0].id, statusArr, false, 0, avgRating);
      const searchingData = generateSearchingData(newAccount[0].id);



      const allPromise = [
        db.insert(studentBackground).values(studentBackgroundData),
        await db.insert(searchingJob).values(searchingData),
        db.insert(satisfaction).values(satisfactionData)
      ]
      await Promise.all(allPromise)


    }
    console.log("Insert Searching Successful")
  } catch (e) {
    console.error(e)
  }
}


main();