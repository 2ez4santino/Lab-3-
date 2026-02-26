import { useState } from "react";
import "./App.css";


function App() {
  const [department, setDepartment] = useState("");
  const [academicLevel, setAcademicLevel] = useState("");
  const [nationality, setNationality] = useState("");
  const [otherNationality, setOtherNationality] = useState("");
  const [showModal, setShowModal] = useState(false);

const programs = {
  undergraduate: {
    "College of Engineering and Architecture": [
      "BS Architecture",
      "BS Chemical Engineering",
      "BS Civil Engineering",
      "BS Computer Engineering",
      "BS Electrical Engineering",
      "BS Electronics Engineering",
      "BS Industrial Engineering",
      "BS Mechanical Engineering",
    ],
    "College of Computer Studies": [
      "BS Computer Science",
      "BS Data Science and Analytics",
      "BS Entertainment and Multimedia Computing",
      "BS Information Technology",
    ],
    "College of Business Education": [
      "BS Accountancy",
      "BS Accounting Information System",
      "BS Business Administration – Financial Management",
      "BS Business Administration – Human Resource Management",
      "BS Business Administration – Logistics and Supply Chain Management",
      "BS Business Administration – Marketing Management",
    ],
    "College of Arts": [
      "Bachelor of Arts in English Language",
      "Bachelor of Arts in Political Science",
    ],
  },
  graduate: {
    "Master Programs": [
      "Master in Information Systems",
      "Master in Information Technology",
      "Master in Logistics and Supply Chain Management",
      "Master of Engineering with Specialization in Civil Engineering",
      "Master of Engineering with Specialization in Computer Engineering",
      "Master of Engineering with Specialization in Electrical Engineering",
      "Master of Engineering with Specialization in Electronics Engineering",
      "Master of Engineering with Specialization in Industrial Engineering",
      "Master of Engineering with Specialization in Mechanical Engineering",
      "Master of Science in Computer Science",
    ],
    "Doctorate Programs": [
      "Doctor in Information Technology",
      "Doctor of Engineering with Specialization in Computer Engineering",
      "Doctor of Philosophy in Computer Science",
    ],
  },
};

  return (
    <div className="container">
      <h1>Student Enrollment Portal</h1>

      {/* Dialog-only popup — no banner */}

      {showModal && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-box fade-in">
            <h2>Registration Successful</h2>
            <p>Your registration has been received.</p>
            <div className="modal-actions">
              <button
                type="button"
                onClick={() => setShowModal(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={(e) => {
        const emailInput = e.target.querySelector('input[type="email"]');
        if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          e.preventDefault();
          alert('Please enter a complete email address (e.g., name@email.com)');
          emailInput.focus();
          return;
        }

        // All validations passed -> show success modal
        e.preventDefault();
        setShowModal(true);
        // auto-hide modal after a few seconds
        setTimeout(() => setShowModal(false), 5000);
      }}>
        {/* PERSONAL INFORMATION */}
        <fieldset>
          <legend>Personal Information</legend>

          <div className="grid-4">
            <div>
              <label>First Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Middle Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Suffix</label>
              <input type="text" />
            </div>
          </div>

          <div className="grid-2">
            <div>
              <label>Date of Birth</label>
              <input type="date" required onKeyDown={(e) => e.preventDefault()} />
            </div>
            <div>
              <label>Gender</label>
              <select required>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-binary</option>
              </select>
            </div>
          </div>

          <div className="grid-2">
            <div>
              <label>Nationality</label>
              <select
                required
                value={nationality}
                onChange={(e) => {
                  setNationality(e.target.value);
                  if (e.target.value !== "Other") {
                    setOtherNationality("");
                  }
                }}
              >
                <option value="">Select</option>
                <option>Filipino</option>
                <option>American</option>
                <option>Other</option>
              </select>
              {nationality === "Other" && (
                <input
                  className="fade-in"
                  type="text"
                  placeholder="Please specify"
                  value={otherNationality}
                  onChange={(e) => setOtherNationality(e.target.value)}
                  required
                />
              )}
            </div>
            <div>
              <label>Religion</label>
              <input type="text" />
            </div>
          </div>
        </fieldset>

        {/* CONTACT DETAILS */}
        <fieldset>
          <legend>Contact Details</legend>

          <div className="grid-2">
            <div>
              <label>Email Address</label>
              <input 
                type="email" 
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                placeholder="name@email.com"
                required 
              />
            </div>
            <div>
              <label>Mobile Number</label>
              <input 
                type="text" 
                placeholder="11 digits only"
                pattern="[0-9]*"
                maxLength="11"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 11);
                }}
                required
              />
            </div>
          </div>

          <div className="grid-2">
            <div>
              <label>Landline</label>
              <input 
                type="text" 
                placeholder="8 digits only"
                pattern="[0-9]*"
                maxLength="8"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 8);
                }}
              />
            </div>
            <div>
              <label>Barangay</label>
              <input type="text" />
            </div>
          </div>

          <div className="grid-3">
            <div>
              <label>Street</label>
              <input type="text" />
            </div>
            <div>
              <label>City</label>
              <input type="text" />
            </div>
            <div>
              <label>Province</label>
              <input type="text" />
            </div>
          </div>
        </fieldset>

        {/* ACADEMIC HISTORY */}
        <fieldset>
          <legend>Academic History – Grade School</legend>
          <div className="grid-2">
            <input type="text" placeholder="School Name" />
            <input type="number" min="1900" max="2026" placeholder="Year Graduated" />
          </div>
          <input type="text" placeholder="School Address" />
        </fieldset>

        <fieldset>
          <legend>Academic History – Junior High School</legend>
          <div className="grid-2">
            <input type="text" placeholder="School Name" />
            <input type="number" min="1900" max="2026" placeholder="Year Graduated" />
          </div>
          <input type="text" placeholder="School Address" />
        </fieldset>

        <fieldset>
          <legend>Academic History – Senior High School</legend>
          <div className="grid-3">
            <input type="text" placeholder="School Name" />
            <input type="number" min="1900" max="2026" placeholder="Year Graduated" />
            <input type="number" step="0.01" placeholder="Grade Average" />
          </div>
          <input type="text" placeholder="School Address" />
        </fieldset>

        {/* ENROLLMENT CHOICES */}
        <fieldset>
  <legend>Enrollment Choices</legend>

  <h3>Academic Level</h3>
  <label>
    <input 
      type="radio" 
      name="level"
      value="undergraduate"
      checked={academicLevel === "undergraduate"}
      onChange={(e) => {
        setAcademicLevel(e.target.value);
        setDepartment("");
      }}
    /> Undergraduate
  </label>
  <label>
    <input 
      type="radio" 
      name="level"
      value="graduate"
      checked={academicLevel === "graduate"}
      onChange={(e) => {
        setAcademicLevel(e.target.value);
        setDepartment("");
      }}
    /> Graduates
  </label>

  <h3>Semester</h3>
  <label>
    <input type="radio" name="semester" /> 1st Semester
  </label>
  <label>
    <input type="radio" name="semester" /> 2nd Semester
  </label>

  <h3>Campus</h3>
  <label>
    <input type="radio" name="campus" /> Manila
  </label>
  <label>
    <input type="radio" name="campus" /> Quezon City
  </label>

  <h3>College Department</h3>
  <select
    value={department}
    onChange={(e) => setDepartment(e.target.value)}
    required
    disabled={!academicLevel}
  >
    <option value="">
      {academicLevel ? "Select Department" : "Select Academic Level First"}
    </option>
    {academicLevel &&
      Object.keys(programs[academicLevel]).map((dept) => (
        <option key={dept} value={dept}>
          {dept}
        </option>
      ))}
  </select>

  <h3>Degree Program</h3>
  <select required disabled={!department}>
    <option value="">
      {department ? "Select Program" : "Select Department First"}
    </option>
    {department &&
      programs[academicLevel][department].map((program) => (
        <option key={program} value={program}>
          {program}
        </option>
      ))}
  </select>


        </fieldset>

        <button type="submit">Submit Registration</button>
      </form>
    </div>
  );
}

export default App;
