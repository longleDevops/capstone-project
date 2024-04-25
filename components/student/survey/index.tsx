"use client";
import React, { useState } from 'react';
import styles from "./styles.module.css";

export default function Survey() {
    // States to store the input field values
    const [graduationQuarter, setGraduationQuarter] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [major, setMajor] = useState('');
    const [utilizationRatings, setUtilizationRatings] = useState({
        explore: '',
        occupations: '',
        employment: '',
        interviewing: '',
        resume: ''
    });
    const [satisfactionRatings, setSatisfactionRatings] = useState({
        planning: '',
        jobMarket: '',
        jobListings: '',
        interviewSkills: '',
        resumeSkills: '',
        websiteAccess: '',
        staffHelp: ''
    });
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [jobRelevance, setJobRelevance] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [salaryRange, setSalaryRange] = useState('');
    const [jobSecuredMonth, setJobSecuredMonth] = useState('');
    const [jobSecuredYear, setJobSecuredYear] = useState('');
    const [pursuingDegree, setPursuingDegree] = useState('');
    const [expectedJobs, setExpectedJobs] = useState('');
    const [jobRelation, setJobRelation] = useState('');
    const [expectedSalaryRange, setExpectedSalaryRange] = useState('');
    const [selectedGender, setSelectedGender] = useState<string>('');
    const handleSelectChange = (e: TextInputProps['e']) => {
        setSelectedGender(e.target.value);
    };
    const [CWUID, setID] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [Name, setName] = useState<string>('');

    // State to track the current table
    const [currentTable, setCurrentTable] = useState(1);

    // Function to handle navigation to the next table
    const handleNext = () => {
        setCurrentTable(currentTable + 1);
    };

    // Function to handle navigation to the previous table
    const handleBack = () => {
        setCurrentTable(currentTable - 1);
    };
    const handleSubmit = () => {
        // Handle form submission logic here
        // For now, let's just navigate back to the dashboard page
        history.push('/student/dashboard'); // Assuming '/dashboard' is the route to your dashboard page
    };

    // Function to generate years for the dropdown
    function generateYears() {
        const currentYear = new Date().getFullYear();
        const years = [];
        const startYear = currentYear - 10; // Adjust the number of years as needed
        for (let year = currentYear; year >= startYear; year--) {
            years.push(year.toString());
        }
        return years;
    }

    // Function to render the appropriate table based on the currentTable state
    const renderTable = () => {
        switch (currentTable) {
            case 1:
                return (
                    <div className={styles.container}>
                        {/* ACADEMIC BACKGROUND TABLE */}
                        <table className="survey-table">
                            <tbody>
                                <div className={styles.title}>Student Info</div>
                                <tr>
                                    <div className={styles.question}>What is your name?</div>
                                </tr>
                                <div className={styles.inputWrapper}>
                                    <input
                                        className={styles.input}
                                        placeholder="Your name"
                                        value={Name}
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <tr>
                                    <div className={styles.question}>What is your gender?</div>
                                </tr>
                                <div>
                                    <select value={selectedGender} onChange={handleSelectChange} className={styles.dropDown}>
                                        <option value="" disabled selected className={styles.placeholderOption}>
                                            Select Gender (Optional)
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <tr>
                                    <div className={styles.question}>What is your CWU ID?</div>
                                </tr>
                                <div className={styles.inputWrapper}>
                                    <input
                                        className={styles.input}
                                        placeholder="SID"
                                        value={CWUID}
                                        onChange={(e) => setID(e.target.value)} />
                                </div>
                                <tr>
                                    <div className={styles.question}>What is your CWU Email?</div>
                                </tr>
                                <div className={styles.inputWrapper}>
                                    <input
                                        className={styles.input}
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <tr>
                                    <div className={styles.question}>When did you graduate from CWU?</div>
                                </tr>
                                <tr>
                                    <td>
                                        <select value={graduationQuarter} onChange={(e) => setGraduationQuarter(e.target.value)} className={styles.dropDown}>
                                            <option value="">Select Quarter</option>
                                            <option value="Spring">Spring</option>
                                            <option value="Summer">Summer</option>
                                            <option value="Fall">Fall</option>
                                            <option value="Winter">Winter</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <select value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} className={styles.dropDown}>
                                            <option value="">Select Year</option>
                                            {generateYears().map((year) => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <div className={styles.question}>What was your major at CWU?</div>
                                </tr>
                                <tr>
                                    <td>
                                        <select value={major} onChange={(e) => setMajor(e.target.value)} className={styles.dropDown}>
                                            <option value="">Select Major</option>
                                            <option value="Computer Science">Computer Science</option>
                                            <option value="Business Administration">Business Administration</option>
                                            <option value="Psychology">Psychology</option>
                                            {/* List of majors */}
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <button disabled={!Name || !email || !CWUID || !graduationQuarter || !graduationYear || !major} onClick={handleNext} className={styles.nextButton}>Next</button>
                    </div>
                );
            case 2:
                return (
                    <div>
                        {/* CAREER RESOURCE UTILIZATION TABLE */}
                        <table className="survey-table">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className={styles.title}>Career Survey</div>
                                        <div className={styles.container}>
                                            <div className={styles.question}>How much did you learn through your use of the career information provided by the career services office?</div>
                                            <div className={styles.container}>
                                                <div className={styles.question}>I learned how to explore, make career decisions, and plan my career goals.</div>
                                                <div className={styles.ratingOptions}>
                                                    <input type="radio" id="utilizationRating2_1_1" name="utilizationRating2_1" value="1" />
                                                    <label htmlFor="utilizationRating2_1_1">1</label>
                                                    <input type="radio" id="utilizationRating2_1_2" name="utilizationRating2_1" value="2" />
                                                    <label htmlFor="utilizationRating2_1_2">2</label>
                                                    <input type="radio" id="utilizationRating2_1_3" name="utilizationRating2_1" value="3" />
                                                    <label htmlFor="utilizationRating2_1_3">3</label>
                                                    <input type="radio" id="utilizationRating2_1_4" name="utilizationRating2_1" value="4" />
                                                    <label htmlFor="utilizationRating2_1_4">4</label>
                                                    <input type="radio" id="utilizationRating2_1_5" name="utilizationRating2_1" value="5" />
                                                    <label htmlFor="utilizationRating2_1_5">5</label>
                                                </div>

                                                <div className={styles.question}>I learned about current occupations and the job market.</div>
                                                <div className={styles.ratingOptions}>
                                                    <input type="radio" id="utilizationRating2_2_1" name="utilizationRating2_2" value="1" />
                                                    <label htmlFor="utilizationRating2_2_1">1</label>
                                                    <input type="radio" id="utilizationRating2_2_2" name="utilizationRating2_2" value="2" />
                                                    <label htmlFor="utilizationRating2_2_2">2</label>
                                                    <input type="radio" id="utilizationRating2_2_3" name="utilizationRating2_2" value="3" />
                                                    <label htmlFor="utilizationRating2_2_3">3</label>
                                                    <input type="radio" id="utilizationRating2_2_4" name="utilizationRating2_2" value="4" />
                                                    <label htmlFor="utilizationRating2_2_4">4</label>
                                                    <input type="radio" id="utilizationRating2_2_5" name="utilizationRating2_2" value="5" />
                                                    <label htmlFor="utilizationRating2_2_5">5</label>
                                                </div>

                                                <div className={styles.question}>I learned about employment and the job search.</div>
                                                <div className={styles.ratingOptions}>
                                                    <input type="radio" id="utilizationRating2_3_1" name="utilizationRating2_3" value="1" />
                                                    <label htmlFor="utilizationRating2_3_1">1</label>
                                                    <input type="radio" id="utilizationRating2_3_2" name="utilizationRating2_3" value="2" />
                                                    <label htmlFor="utilizationRating2_3_2">2</label>
                                                    <input type="radio" id="utilizationRating2_3_3" name="utilizationRating2_3" value="3" />
                                                    <label htmlFor="utilizationRating2_3_3">3</label>
                                                    <input type="radio" id="utilizationRating2_3_4" name="utilizationRating2_3" value="4" />
                                                    <label htmlFor="utilizationRating2_3_4">4</label>
                                                    <input type="radio" id="utilizationRating2_3_5" name="utilizationRating2_3" value="5" />
                                                    <label htmlFor="utilizationRating2_3_5">5</label>
                                                </div>
                                                <div className={styles.question}>I learned about interviewing and communication.</div>
                                                <div className={styles.ratingOptions}>
                                                    <input type="radio" id="utilizationRating2_4_1" name="utilizationRating2_4" value="1" />
                                                    <label htmlFor="utilizationRating2_4_1">1</label>
                                                    <input type="radio" id="utilizationRating2_4_2" name="utilizationRating2_4" value="2" />
                                                    <label htmlFor="utilizationRating2_4_2">2</label>
                                                    <input type="radio" id="utilizationRating2_4_3" name="utilizationRating2_4" value="3" />
                                                    <label htmlFor="utilizationRating2_4_3">3</label>
                                                    <input type="radio" id="utilizationRating2_4_4" name="utilizationRating2_4" value="4" />
                                                    <label htmlFor="utilizationRating2_4_4">4</label>
                                                    <input type="radio" id="utilizationRating2_4_5" name="utilizationRating2_4" value="5" />
                                                    <label htmlFor="utilizationRating2_4_5">5</label>
                                                </div>

                                                <div className={styles.question}>I learned about writing resume and job preparation questions.</div>
                                                <div className={styles.ratingOptions}>
                                                    <input type="radio" id="utilizationRating2_5_1" name="utilizationRating2_5" value="1" />
                                                    <label htmlFor="utilizationRating2_5_1">1</label>
                                                    <input type="radio" id="utilizationRating2_5_2" name="utilizationRating2_5" value="2" />
                                                    <label htmlFor="utilizationRating2_5_2">2</label>
                                                    <input type="radio" id="utilizationRating2_5_3" name="utilizationRating2_5" value="3" />
                                                    <label htmlFor="utilizationRating2_5_3">3</label>
                                                    <input type="radio" id="utilizationRating2_5_4" name="utilizationRating2_5" value="4" />
                                                    <label htmlFor="utilizationRating2_5_4">4</label>
                                                    <input type="radio" id="utilizationRating2_5_5" name="utilizationRating2_5" value="5" />
                                                    <label htmlFor="utilizationRating2_5_5">5</label>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                {/* Add more rows for additional questions */}
                            </tbody>
                        </table>
                        <div className={styles.buttonContainer}>
                            <button onClick={handleBack} className={styles.nextButton}>Back</button>
                            <button onClick={handleNext} className={styles.nextButton}>Next</button>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        {/* Career Information Satisfaction */}
                        <div className={styles.title}>Career Survey</div>
                        <div className="survey-question">
                            <div className={styles.question}>How much did you satisfy through your use of the career information provided by the career services office?</div>
                            <div>
                                <div className={styles.question}>Career planning and decisions.</div>
                                <div className={styles.ratingOptions}>
                                    <input type="radio" id="satisfactionRating3_1_1" name="satisfactionRating3_1" value="1" />
                                    <label htmlFor="satisfactionRating3_1_1">1</label>
                                    <input type="radio" id="satisfactionRating3_1_2" name="satisfactionRating3_1" value="2" />
                                    <label htmlFor="satisfactionRating3_1_2">2</label>
                                    <input type="radio" id="satisfactionRating3_1_3" name="satisfactionRating3_1" value="3" />
                                    <label htmlFor="satisfactionRating3_1_3">3</label>
                                    <input type="radio" id="satisfactionRating3_1_4" name="satisfactionRating3_1" value="4" />
                                    <label htmlFor="satisfactionRating3_1_4">4</label>
                                    <input type="radio" id="satisfactionRating3_1_5" name="satisfactionRating3_1" value="5" />
                                    <label htmlFor="satisfactionRating3_1_5">5</label>
                                </div>

                                <div className={styles.question}>Occupations and the job market.</div>
                                <div className={styles.ratingOptions}>
                                    <input type="radio" id="satisfactionRating3_2_1" name="satisfactionRating3_2" value="1" />
                                    <label htmlFor="satisfactionRating3_2_1">1</label>
                                    <input type="radio" id="satisfactionRating3_2_2" name="satisfactionRating3_2" value="2" />
                                    <label htmlFor="satisfactionRating3_2_2">2</label>
                                    <input type="radio" id="satisfactionRating3_2_3" name="satisfactionRating3_2" value="3" />
                                    <label htmlFor="satisfactionRating3_2_3">3</label>
                                    <input type="radio" id="satisfactionRating3_2_4" name="satisfactionRating3_2" value="4" />
                                    <label htmlFor="satisfactionRating3_2_4">4</label>
                                    <input type="radio" id="satisfactionRating3_2_5" name="satisfactionRating3_2" value="5" />
                                    <label htmlFor="satisfactionRating3_2_5">5</label>
                                </div>
                                <div className={styles.question}>Listings of full time job/internship oppotunities/ Job Network</div>
                                <div className={styles.ratingOptions}>
                                    <input type="radio" id="satisfactionRating3_3_1" name="satisfactionRating3_3" value="1" />
                                    <label htmlFor="satisfactionRating3_3_1">1</label>
                                    <input type="radio" id="satisfactionRating3_3_2" name="satisfactionRating3_3" value="2" />
                                    <label htmlFor="satisfactionRating3_3_2">2</label>
                                    <input type="radio" id="satisfactionRating3_3_3" name="satisfactionRating3_3" value="3" />
                                    <label htmlFor="satisfactionRating3_3_3">3</label>
                                    <input type="radio" id="satisfactionRating3_3_4" name="satisfactionRating3_3" value="4" />
                                    <label htmlFor="satisfactionRating3_3_4">4</label>
                                    <input type="radio" id="satisfactionRating3_3_5" name="satisfactionRating3_3" value="5" />
                                    <label htmlFor="satisfactionRating3_3_5">5</label>
                                </div>
                                <div className={styles.question}>Building interview/communication skills</div>
                                <div className={styles.ratingOptions}>
                                    <input type="radio" id="satisfactionRating3_4_1" name="satisfactionRating3_4" value="1" />
                                    <label htmlFor="satisfactionRating3_4_1">1</label>
                                    <input type="radio" id="satisfactionRating3_4_2" name="satisfactionRating3_4" value="2" />
                                    <label htmlFor="satisfactionRating3_4_2">2</label>
                                    <input type="radio" id="satisfactionRating3_4_3" name="satisfactionRating3_4" value="3" />
                                    <label htmlFor="satisfactionRating3_4_3">3</label>
                                    <input type="radio" id="satisfactionRating3_4_4" name="satisfactionRating3_4" value="4" />
                                    <label htmlFor="satisfactionRating3_4_4">4</label>
                                    <input type="radio" id="satisfactionRating3_4_5" name="satisfactionRating3_4" value="5" />
                                    <label htmlFor="satisfactionRating3_4_5">5</label>
                                </div>
                                <div className={styles.question}>Building writing resume/CV skills</div>
                                <div className={styles.ratingOptions}>
                                    <input type="radio" id="satisfactionRating3_5_1" name="satisfactionRating3_5" value="1" />
                                    <label htmlFor="satisfactionRating3_2_1">1</label>
                                    <input type="radio" id="satisfactionRating3_5_2" name="satisfactionRating3_5" value="2" />
                                    <label htmlFor="satisfactionRating3_2_2">2</label>
                                    <input type="radio" id="satisfactionRating3_5_3" name="satisfactionRating3_5" value="3" />
                                    <label htmlFor="satisfactionRating3_2_3">3</label>
                                    <input type="radio" id="satisfactionRating3_5_4" name="satisfactionRating3_5" value="4" />
                                    <label htmlFor="satisfactionRating3_2_4">4</label>
                                    <input type="radio" id="satisfactionRating3_5_5" name="satisfactionRating3_5" value="5" />
                                    <label htmlFor="satisfactionRating3_2_5">5</label>
                                </div>
                                <div className={styles.question}>Career information accessible through the career services website.</div>
                                <div className={styles.ratingOptions}>
                                    <input type="radio" id="satisfactionRating3_6_1" name="satisfactionRating3_6" value="1" />
                                    <label htmlFor="satisfactionRating3_6_1">1</label>
                                    <input type="radio" id="satisfactionRating3_6_2" name="satisfactionRating3_6" value="2" />
                                    <label htmlFor="satisfactionRating3_6_2">2</label>
                                    <input type="radio" id="satisfactionRating3_6_3" name="satisfactionRating3_6" value="3" />
                                    <label htmlFor="satisfactionRating3_6_3">3</label>
                                    <input type="radio" id="satisfactionRating3_6_4" name="satisfactionRating3_6" value="4" />
                                    <label htmlFor="satisfactionRating3_6_4">4</label>
                                    <input type="radio" id="satisfactionRating3_6_5" name="satisfactionRating3_6" value="5" />
                                    <label htmlFor="satisfactionRating3_6_5">5</label>
                                </div>
                                <div className={styles.question}>Staff who help you find career infomation.</div>
                                <div className={styles.ratingOptions}>
                                    <input type="radio" id="satisfactionRating3_7_1" name="satisfactionRating3_7" value="1" />
                                    <label htmlFor="satisfactionRating3_7_1">1</label>
                                    <input type="radio" id="satisfactionRating3_7_2" name="satisfactionRating3_7" value="2" />
                                    <label htmlFor="satisfactionRating3_7_2">2</label>
                                    <input type="radio" id="satisfactionRating3_7_3" name="satisfactionRating3_7" value="3" />
                                    <label htmlFor="satisfactionRating3_7_3">3</label>
                                    <input type="radio" id="satisfactionRating3_7_4" name="satisfactionRating3_7" value="4" />
                                    <label htmlFor="satisfactionRating3_7_4">4</label>
                                    <input type="radio" id="satisfactionRating3_7_5" name="satisfactionRating3_7" value="5" />
                                    <label htmlFor="satisfactionRating3_7_5">5</label>
                                </div>                </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button onClick={handleBack} className={styles.nextButton}>Back</button>
                            <button onClick={handleNext} className={styles.nextButton}>Next</button>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div>
                        {/* CURRENT EMPLOYMENT STATUS */}
                        <div className={styles.title}>Employment Status</div>
                        <div className="survey-question">
                            <div className={styles.question}>Are you currently employed?</div>
                            <select value={employmentStatus} onChange={(e) => setEmploymentStatus(e.target.value)} className={styles.dropDown}>
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {employmentStatus === 'Yes' && (
                                <div>
                                    <div className={styles.question}>Is your current job relevant to your major?</div>
                                    <select value={jobRelevance} onChange={(e) => setJobRelevance(e.target.value)} className={styles.dropDown}>
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    <div className={styles.question}>What is your job?</div>
                                    <div className={styles.inputWrapper}>
                                        <input
                                            className={styles.input}
                                            placeholder="Job Title"
                                            value={jobTitle}
                                            onChange={(e) => setJobTitle(e.target.value)} />
                                    </div>
                                    <div className={styles.question}>What is your salary range?</div>
                                    <select value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)} className={styles.dropDown}>
                                        <option value="">Select Range</option>
                                        <option value="$0 - $20,000">$0 - $20,000</option>
                                        <option value="$20,001 - $40,000">$20,001 - $40,000</option>
                                        <option value="$40,001 - $60,000">$40,001 - $60,000</option>
                                        {/* List of salary ranges */}
                                    </select>
                                    <div className={styles.question}>Please enter the month and year you secured a job:</div>
                                    <select value={jobSecuredMonth} onChange={(e) => setJobSecuredMonth(e.target.value)} className={styles.dropDown}>
                                        <option value="">Select Month</option>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                    <select value={jobSecuredYear} onChange={(e) => setJobSecuredYear(e.target.value)} className={styles.dropDown}>
                                        <option value="">Select Year</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        {/* Add more years as needed */}
                                    </select>

                                </div>
                            )}
                            {employmentStatus === 'No' && (
                                <div>
                                    <div className={styles.question}>Are you currently pursuing another academic degree?</div>
                                    <select value={pursuingDegree} onChange={(e) => setPursuingDegree(e.target.value)} className={styles.dropDown}>
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    {pursuingDegree === 'No' && (
                                        <div>
                                            <div className={styles.question}>What kind of jobs do you expect to pursue?</div>
                                            <div className={styles.inputWrapper}>
                                                <input
                                                    className={styles.input}
                                                    placeholder="Job Title"
                                                    value={expectedJobs}
                                                    onChange={(e) => setExpectedJobs(e.target.value)} />
                                            </div>
                                            <div className="survey-question">
                                                <div className={styles.question}>How do these expected job opportunities relate to your major at CWU? (Ratio 1-5)</div>
                                                <div className={styles.ratingOptions}>
                                                    <input type="radio" id="jobRelation1" name="jobRelation" value="1" />
                                                    <label htmlFor="jobRelation1">1</label>
                                                    <input type="radio" id="jobRelation2" name="jobRelation" value="2" />
                                                    <label htmlFor="jobRelation2">2</label>
                                                    <input type="radio" id="jobRelation3" name="jobRelation" value="3" />
                                                    <label htmlFor="jobRelation3">3</label>
                                                    <input type="radio" id="jobRelation4" name="jobRelation" value="4" />
                                                    <label htmlFor="jobRelation4">4</label>
                                                    <input type="radio" id="jobRelation5" name="jobRelation" value="5" />
                                                    <label htmlFor="jobRelation5">5</label>
                                                </div>
                                            </div>

                                            <div className={styles.question}>What salary range do you expect for these positions?</div>
                                            <select value={expectedSalaryRange} onChange={(e) => setExpectedSalaryRange(e.target.value)} className={styles.dropDown}>
                                                <option value="">Select Range</option>
                                                <option value="$0 - $20,000">$0 - $20,000</option>
                                                <option value="$20,001 - $40,000">$20,001 - $40,000</option>
                                                <option value="$40,001 - $60,000">$40,001 - $60,000</option>
                                                {/* List of salary ranges */}
                                            </select>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        {/* Submit Button */}
                        <div className={styles.buttonContainer}>
                            <button onClick={handleBack} className={styles.nextButton}>Back</button>
                            <button onClick={handleSubmit} className={styles.nextButton}>SUBMIT</button>
                        </div>
                    </div>
                );

            // Add more cases for additional tables
            default:
                return null;
        }
    };

    return (
        <div className={styles.scrollableContainer}>
            <div className={styles.imageHolder}>
                <img src="/cwu-logo.png" alt="CWU Logo" className={styles.cwuImage} />
            </div>
            <div className={styles.surveyContainer}>
                <div className={styles.surveyHeader}></div>
                {/* Render current table */}
                <div className="renderTableContainer">{renderTable()}</div>
            </div>
        </div>
    );

}
