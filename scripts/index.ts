import { account, domesticStudent, internationalStudent, studentBackground } from "@/app/(back-end)/db/schema";
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "@/app/(back-end)/db/schema";
import { auth } from "@clerk/nextjs";
import { faker } from '@faker-js/faker';

const avgSalary = [
  45000,
  55000,
  65000,
  75000,
  85000,
  95000,
  120000
]

function generateAccountData() {
  return {
    id: faker.string.nanoid(7),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    isSubmitted: true,
  };
}

function generateStudentBackgroundData(userId: string) {
  return {
    userId: userId,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    studentId: faker.number.int({ min: 1000000, max: 9999999 }).toString()
    ,
    major: 'Computer Science',
    startTerm: 'Fall 2016',
    endTerm: 'Fall 2018',
    campus: 'Des Moines',
    gender: faker.person.gender(),
    race: 'Asian',
    degreeLevel: 'Master Degree',
    status: 'domestic-student',
  };
}

function generateDomesticStudentData(userId: string) {
  return {
    userId: userId,
    isInternship: faker.datatype.boolean(),
    internshipCompany: faker.company.name(),
    internshipTitle: faker.person.jobTitle(),
    internshipSalary: '$50,000 - $60,000',
    internshipPrepTime: '1 month - 3 months',
    avgInternshipSalary: faker.helpers.arrayElement(avgSalary),
  };
}

async function main() {
  const sql = neon("postgresql://career-path_owner:JCaNYRAb3ev5@ep-orange-cloud-a6ut7nna.us-west-2.aws.neon.tech/career-path?sslmode=require");
  const db = drizzle(sql, { schema });

  //await db.delete(account)

  for (let i = 0; i < 50; i++) {
    const accountData = generateAccountData();
    const newAccount = await db.insert(account).values(accountData).returning({ id: account.id });

    const studentBackgroundData = generateStudentBackgroundData(newAccount[0].id);

    await db.insert(studentBackground).values(studentBackgroundData);

    const domesticStudentData = generateDomesticStudentData(newAccount[0].id);
    await db.insert(domesticStudent).values(domesticStudentData);
  }


  console.log("Successful")
}

main();