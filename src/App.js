import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Student Enrollment Portal</h1>

      <form>
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
              <select required>
                <option value="">Select</option>
                <option>Filipino</option>
                <option>American</option>
                <option>Other</option>
              </select>
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
              <input type="email" required />
            </div>
            <div>
              <label>Mobile Number</label>
              <input type="tel" required />
            </div>
          </div>

          <div className="grid-2">
            <div>
              <label>Landline</label>
              <input type="tel" />
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
          <label><input type="radio" name="level" /> Undergraduate</label>
          <label><input type="radio" name="level" /> Graduate</label>

          <h3>Semester</h3>
          <label><input type="radio" name="semester" /> 1st Semester</label>
          <label><input type="radio" name="semester" /> 2nd Semester</label>

          <h3>Campus</h3>
          <label><input type="radio" name="campus" /> Manila</label>
          <label><input type="radio" name="campus" /> Quezon City</label>

          <h3>College Department</h3>
          <select required>
            <option value="">Select Department</option>
            <option>College of Engineering and Architecture</option>
            <option>College of Computer Studies</option>
            <option>College of Business Education</option>
            <option>College of Arts</option>
          </select>

          <h3>Degree Program</h3>
          <select required>
            <option value="">Select Program</option>
            <option>BS Computer Engineering</option>
            <option>BS Computer Science</option>
            <option>BS Information Technology</option>
            <option>BS Accountancy</option>
            <option>Bachelor of Arts in English</option>
            <option>Master of Information Technology</option>
            <option>Doctor of Engineering</option>
          </select>
        </fieldset>

        <button type="submit">Submit Registration</button>
      </form>
    </div>
  );
}

export default App;
