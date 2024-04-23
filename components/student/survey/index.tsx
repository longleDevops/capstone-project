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


    function generateYears() {
        const currentYear = new Date().getFullYear();
        const years = [];
        const startYear = currentYear - 10; // Adjust the number of years as needed
        for (let year = currentYear; year >= startYear; year--) {
            years.push(year.toString());
        }
        return years;
    }

    return (


        <div className={styles.scrollableContainer}>
            <div className={styles.imageHolder}>
                <img src="/cwu-logo.png" alt="CWU Logo" className={styles.cwuImage} />
            </div>
            <div className={styles.surveyContainer}>
                <div className="survey-header">Survey Start</div>
                {/* ACADEMIC BACKGROUND */}
                <div className="survey-question">
                    <p className="question-text">When did you graduate from CWU?</p>
                    <select value={graduationQuarter} onChange={(e) => setGraduationQuarter(e.target.value)}>
                        <option value="">Select Quarter</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Fall">Fall</option>
                        <option value="Winter">Winter</option>
                    </select>
                    <select value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)}>
                        <option value="">Select Year</option>
                        {generateYears().map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>

                </div>
                <div className="survey-question">
                    <p className="question-text">What was your major at CWU?</p>
                    <select value={major} onChange={(e) => setMajor(e.target.value)}>
                        <option value="">Select Major</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Business Administration">Business Administration</option>
                        <option value="Psychology">Psychology</option>
                        {/* List of majors */}
                    </select>
                </div>

                {/* CAREER RESOURCE UTILIZATION */}
                <div className="survey-question">
                    <p className="question-text">How much did you learn through your use of the career information provided by the career services office?</p>
                    <div className="utilization-ratings">
                        <p>2.1. I learned how to explore, make career decisions, and plan my career goals.</p>
                        <div className="rating-options">
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

                        <p>2.2. I learned about current occupations and the job market.</p>
                        <div className="rating-options">
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

                        <p>2.3. I learned about employment and the job search.</p>
                        <div className="rating-options">
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

                        <p>2.4. I learned about interviewing and communication.</p>
                        <div className="rating-options">
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

                        <p>2.5. I learned about writing resume and job preparation questions.</p>
                        <div className="rating-options">
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


                {/* Career Information Satisfaction */}
                <div className="survey-question">
                    <p className="question-text">How much did you satisfy through your use of the career information provided by the career services office?</p>
                    <div className="satisfaction-ratings">
                        <p>3.1. Career planning and decisions.</p>
                        <div className="rating-options">
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

                        <p>3.2. Occupations and the job market.</p>
                        <div className="rating-options">
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
                        <p>3.3. Listings of full time job/internship oppotunities/ Job Network</p>
                        <div className="rating-options">
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
                        <p>3.4. Building interview/communication skills</p>
                        <div className="rating-options">
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
                        <p>3.5	Building writing resume/CV skills</p>
                        <div className="rating-options">
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
                        <p>3.6	Career information accessible through the career services website.</p>
                        <div className="rating-options">
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
                        <p>3.7	Staff who help you find career infomation.</p>
                        <div className="rating-options">
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
                        </div>

                        {/* Repeat for each satisfaction aspect */}
                    </div>
                </div>


                {/* CURRENT EMPLOYMENT STATUS */}
                <div className="survey-question">
                    <p className="question-text">Are you currently employed?</p>
                    <select value={employmentStatus} onChange={(e) => setEmploymentStatus(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    {employmentStatus === 'Yes' && (
                        <div>
                            <p>Is your current job relevant to your major?</p>
                            <select value={jobRelevance} onChange={(e) => setJobRelevance(e.target.value)}>
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <p>Job Title:</p>
                            <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
                            <p>Salary range:</p>
                            <select value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)}>
                                <option value="">Select Range</option>
                                <option value="$0 - $20,000">$0 - $20,000</option>
                                <option value="$20,001 - $40,000">$20,001 - $40,000</option>
                                <option value="$40,001 - $60,000">$40,001 - $60,000</option>
                                {/* List of salary ranges */}
                            </select>
                            <p>Please enter the month and year you secured a job:</p>
                            <select value={jobSecuredMonth} onChange={(e) => setJobSecuredMonth(e.target.value)}>
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
                            <select value={jobSecuredYear} onChange={(e) => setJobSecuredYear(e.target.value)}>
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
                            <p>Are you currently pursuing another academic degree?</p>
                            <select value={pursuingDegree} onChange={(e) => setPursuingDegree(e.target.value)}>
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {pursuingDegree === 'No' && (
                                <div>
                                    <p>What kind of jobs do you expect to pursue?</p>
                                    <input type="text" value={expectedJobs} onChange={(e) => setExpectedJobs(e.target.value)} />
                                    <div className="survey-question">
                                        <p className="question-text">How do these expected job opportunities relate to your major at CWU? (Ratio 1-5)</p>
                                        <div className="rating-options">
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

                                    <p>What salary range do you expect for these positions?</p>
                                    <select value={expectedSalaryRange} onChange={(e) => setExpectedSalaryRange(e.target.value)}>
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
            </div>
            {/* Submit Button */}
            <button className={styles.button}>SUBMIT</button>
        </div>

    );

}
