import { faker } from '@faker-js/faker';
import { min } from 'drizzle-orm';

export const avgSalaryArr = [
  35000,
  45000,
  55000,
  65000,
  75000,
  85000,
  95000,
  105000,
  115000,
  125000,
  145000,
]

export const salaryRange = [
  "$30,000 - $40,000",
  "$40,000 - $50,000",
  "$50,000 - $60,000",
  "$60,000 - $70,000",
  "$70,000 - $80,000",
  "$80,000 - $90,000",
  "$90,000 - $100,000",
  "$100,000 - $110,000",
  "$110,000 - $120,000",
  "$120,000 - $130,000",
  "$130,000 - $160,000", // list of salaries.
]

export const startTermArr = ["Fall 2017", "Winter 2017", "Spring 2017", "Summer 2017", "Fall 2018", "Winter 2018", "Spring 2018", "Summer 2018", "Fall 2019", "Winter 2019", "Spring 2019", "Summer 2019", "Fall 2020", "Winter 2020", "Spring 2020", "Summer 2020", "Fall 2021", "Winter 2021", "Spring 2021", "Summer 2021", "Fall 2022", "Winter 2022", "Spring 2022", "Summer 2022", "Fall 2023", "Winter 2023", "Spring 2023", "Summer 2023", "Fall 2024", "Winter 2024", "Spring 2024"];

export const endTermArr = ["Fall 2017", "Winter 2017", "Spring 2017", "Summer 2017", "Fall 2018", "Winter 2018", "Spring 2018", "Summer 2018", "Fall 2019", "Winter 2019", "Spring 2019", "Summer 2019", "Fall 2020", "Winter 2020", "Spring 2020", "Summer 2020", "Fall 2021", "Winter 2021", "Spring 2021", "Summer 2021", "Fall 2022", "Winter 2022", "Spring 2022", "Summer 2022", "Fall 2023", "Winter 2023", "Spring 2023", "Summer 2023", "Fall 2024", "Winter 2024", "Spring 2024", "Summer 2025"];

export const majorArr = [
  "Art",
  "Elementary Education",
  "Business",
  "Psychology",
  "Criminal Justice and Safety Studies",
  "Social Science Research Methods",
  "Marketing",
  "Computer Science",
  "Photography",
  "Web Page and Digital Design",
  "Accounting",
  "Finance",
  "Nursing",
  "Medical"
]

export const degreeLevelArr = [
  "Bachelor's Degree",
  "Master's Degree",
  "Doctoral Degree",
]

export const raceArr = [
  'Asian',
  'White and European',
  'African',
  'Hispanic and Latino',
  'Middle Eastern',
]

export const genderArr = [
  'Male',
  'Female',
  'Other',
]

export const campusArr = [
  "Ellensburg",
  "Pierce County",
  "Lynnwood",
  "Des Moines",
  "Sammamish",
  "Online"
]

export const prepTimeArr = [
  "less than 1 month",
  "1 month - 3 months",
  "3 months - 6 months",
  "6 months - 1 year",
  "1 year - 2 years",

]

export function generateAccountData() {
  return {
    id: faker.string.nanoid(7),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    isSubmitted: true,
  };
}

export function generateStudentBackgroundData(userId: string, statusArr: string[], isEmployed: boolean, avgSalary: number, avgRating: string) {

  const startTerm = faker.helpers.arrayElement(startTermArr);
  const filteredEndTerm = endTermArr.filter(value => endTermArr.indexOf(value) > startTermArr.indexOf(startTerm));
  const endTerm = faker.helpers.arrayElement(filteredEndTerm);

  const status = statusArr[0]

  return {
    userId: userId, // good
    firstName: faker.person.firstName(), // good
    lastName: faker.person.lastName(), // good
    studentId: faker.number.int({ min: 1000000, max: 9999999 }).toString(), // good
    major: faker.helpers.arrayElement(majorArr), // good
    startTerm, // good
    endTerm, // good
    campus: faker.helpers.arrayElement(campusArr), // good
    gender: faker.helpers.arrayElement(genderArr), // good
    race: faker.helpers.arrayElement(raceArr), // good
    degreeLevel: faker.helpers.arrayElement(degreeLevelArr), // good
    status, // good
    avgSalary, // good
    isEmployed, // good
    avgRating // good
  };
}

// Domestic students
export function generateDomesticStudentData(userId: string, isEmployed: boolean, range: string, avgSalary: number) {
  return {
    userId: userId,
    isInternship: isEmployed,
    internshipCompany: faker.company.name(),
    internshipTitle: faker.person.jobTitle(),
    internshipSalary: range,
    internshipPrepTime: faker.helpers.arrayElement(prepTimeArr),
    avgInternshipSalary: avgSalary,
  };
}

// International students
export function generateInternationalStudentData(userId: string, isEmployed: boolean, range: string, avgSalary: number) {
  return {
    userId: userId,

    isOPT: isEmployed,


    companyName: faker.company.name(),
    jobTitle: faker.person.jobTitle(),
    salary: range,
    avgSalary,
  };
}

// Working students
export function genderateWorkingStudentData(userId: string, avgSalary: number) {
  return {
    userId: userId,

    isWorking: true,

    companyName: faker.company.name(),
    jobTitle: faker.person.jobTitle(),
    salary: faker.helpers.arrayElement(salaryRange),
    avgSalary,
  };
}

// Seeking degree students
export function generateSeekingDegreeData(userId: string) {
  return {
    userId: userId,

    institution: faker.company.name(),
    major: faker.person.jobTitle(),
    isHelped: faker.datatype.boolean(),
    prepTime: faker.helpers.arrayElement(prepTimeArr),
    degreeLevel: faker.helpers.arrayElement(degreeLevelArr)
  };
}

// Searching jobs students
export function generateSearchingData(userId: string) {
  return {
    userId: userId,

    companyName: faker.company.name(),
    jobTitle: faker.person.jobTitle(),
    salary: faker.helpers.arrayElement(salaryRange),
  };
}

// satisfaction 
export function generateSatisfactionData(userId: string) {
  return {
    userId: userId,

    q1Answer: faker.number.int({ min: 1, max: 5 }),
    q2Answer: faker.number.int({ min: 1, max: 5 }),
    q3Answer: faker.number.int({ min: 1, max: 5 }),
    q4Answer: faker.number.int({ min: 1, max: 5 }),
    q5Answer: faker.number.int({ min: 1, max: 5 })

  };

}