function App() {
  return (
    <div className="container">
      <h1>Student Enrollment Portal</h1>

      <form>
        {/* Personal Information */}
        <fieldset>
          <legend>Personal Information</legend>
        </fieldset>

        {/* Contact Details */}
        <fieldset>
          <legend>Contact Details</legend>
        </fieldset>

        {/* Academic History */}
        <fieldset>
          <legend>Academic History</legend>
        </fieldset>

        {/* Enrollment Choices */}
        <fieldset>
          <legend>Enrollment Choices</legend>
        </fieldset>

        <button type="submit">Submit Registration</button>
      </form>
    </div>
  );
}

export default App;
