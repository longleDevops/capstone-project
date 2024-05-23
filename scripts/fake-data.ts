import { faker } from '@faker-js/faker';

export const avgSalary = [
  45000,
  55000,
  65000,
  75000,
  85000,
  95000,
  120000
]

export const salaryRange = [
  "$40,000 - $50,000",
  "$50,000 - $60,000",
  "$60,000 - $70,000",
  "$70,000 - $80,000",
  "$80,000 - $90,000",
  "$90,000 - $100,000",
  "Above $100,000", // list of salaries.
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
  "Computer and Information Systems Security",
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

export function generateStudentBackgroundData(userId: string, statusArr: string[]) {

  const startTerm = faker.helpers.arrayElement(startTermArr);
  const filteredEndTerm = endTermArr.filter(value => endTermArr.indexOf(value) > startTermArr.indexOf(startTerm))
  const endTerm = faker.helpers.arrayElement(filteredEndTerm)
  return {
    userId: userId,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    studentId: faker.number.int({ min: 1000000, max: 9999999 }).toString(),
    major: faker.helpers.arrayElement(majorArr),
    startTerm,
    endTerm,
    campus: faker.helpers.arrayElement(campusArr),
    gender: faker.helpers.arrayElement(genderArr),
    race: faker.helpers.arrayElement(raceArr),
    degreeLevel: faker.helpers.arrayElement(degreeLevelArr),
    status: faker.helpers.arrayElement(statusArr),
  };
}

// Domestic students
export function generateDomesticStudentData(userId: string) {
  return {
    userId: userId,
    isInternship: faker.datatype.boolean(),
    internshipCompany: faker.company.name(),
    internshipTitle: faker.person.jobTitle(),
    internshipSalary: faker.helpers.arrayElement(salaryRange),
    internshipPrepTime: faker.helpers.arrayElement(prepTimeArr),
    avgInternshipSalary: faker.helpers.arrayElement(avgSalary),
  };
}

// International students
export function generateInternationalStudentData(userId: string) {
  return {
    userId: userId,

    isOPT: faker.datatype.boolean(),

    companyName: faker.company.name(),
    jobTitle: faker.person.jobTitle(),
    salary: faker.helpers.arrayElement(salaryRange),
    avgSalary: faker.helpers.arrayElement(avgSalary),
  };
}

// Working students
export function genderateWorkingStudentData(userId: string) {
  return {
    userId: userId,

    isWorking: faker.datatype.boolean(),

    companyName: faker.company.name(),
    jobTitle: faker.person.jobTitle(),
    salary: faker.helpers.arrayElement(salaryRange),
    avgSalary: faker.helpers.arrayElement(avgSalary),
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

    q1Answer: faker.number.int({ min: 0, max: 6 }),
    q2Answer: faker.number.int({ min: 0, max: 6 }),
    q3Answer: faker.number.int({ min: 0, max: 6 }),
    q4Answer: faker.number.int({ min: 0, max: 6 }),
    q5Answer: faker.number.int({ min: 0, max: 6 })
  };
}