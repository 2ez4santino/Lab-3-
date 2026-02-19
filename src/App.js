import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Student Enrollment Portal</h1>

      <form>
        {/* Personal Information */}
        <fieldset>
          <legend>Contact Details</legend>

        <fieldset>
  <legend>Academic History – Grade School</legend>

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
</fieldset>


  <div className="grid-2">
    <div>
      <label>School Name</label>
      <input type="text" />
    </div>

    <div>
      <label>Year Graduated</label>
      <input type="number" min="1900" max="2026" />
    </div>
  </div>

  <div>
    <label>School Address</label>
    <input type="text" />
  </div>
</fieldset>


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
      <label>Zip Code</label>
      <input type="text" />
    </div>
  </div>

          
          <legend>Personal Information</legend>

          {/* Name Grid */}
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
              <input
                type="date"
                required
                onKeyDown={(e) => e.preventDefault()}
              />
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
        </fieldset>

        {/* Submit Button */}
        <button type="submit">Submit Registration</button>
      </form>
    </div>
  );
}

export default App;
