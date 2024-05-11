import styled from "styled-components";
import EducationItem from "./EducationItem";

function Education({ education }) {
  return (
    <ul className="container">
      {education.map((item) => (
        <EducationItem educationItem={item} key={item.id} />
      ))}
    </ul>
  );
}

export default Education;
