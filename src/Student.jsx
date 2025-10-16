import PropTypes from "prop-types";
function Student(prop) {
  return (
    <div className="student">
      <p>Name: {prop.name}</p>
      <p>Age: {prop.age}</p>
      <p>isStudent: {prop.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};
export default Student;
