import React, { useState } from "react";

import Button from "../../UI/Button/Button";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    event.target.value.trim().length > 0 ? setIsValid(true) : setIsValid(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length == 0) {
      setIsValid(false);
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={!isValid ? "form-control invalid" : "form-control"}>
        <div className={!isValid ? "form-control invalid" : "form-control"}>
          <label>Course Goal</label>
          <input
            type="text"
            onChange={goalInputChangeHandler}
            value={enteredValue}
          />
        </div>
        <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;
