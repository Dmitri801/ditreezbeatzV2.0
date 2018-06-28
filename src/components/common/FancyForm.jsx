import React, { Component } from "react";
import "./fancyform.css";
import classnames from "classnames";
// Questions Array
const questions = [
  { question: "Enter Your First Name" },
  { question: "Enter Your Last Name" },
  { question: "Enter Your Email", pattern: /\S+@\S+\.\S+/ }
];

// Init Position At First Question
let position = 0;

// Transition Times
const shakeTime = 100; // Shake Transition Time

class FancyForm extends Component {
  state = {
    formOpen: !this.props.formComplete,
    firstQuestion: position === 0,
    currentQuestion: "",
    type: "text",
    answer: "",
    firstName: "",
    answers: [],
    errors: false
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", this.getQuestion);
    this.getQuestion();
  }
  getFirstName = () => {
    this.setState({ firstName: this.state.answer });
  };

  // Get Question From Array
  getQuestion = () => {
    this.setState({
      firstQuestion: position === 0,
      currentQuestion: questions[position].question,
      type: questions[position].type || "text",
      answer: questions[position].answer || "",
      errors: false
    });
    document.querySelector("#progress-bar").style.width =
      (position * 100) / questions.length + "%";
    this.showQuestion();
    if (!this.state.firstQuestion) {
      document.querySelector("#input-field").focus();
    }
  };

  // Show Question
  showQuestion = () => {
    document.querySelector("#input-group").style.opacity = 1;
    document.querySelector("#input-progress").style.transition = "";
    document.querySelector("#input-progress").style.width = "100%";
  };

  // Hide Question
  hideQuestion = () => {
    document.querySelector("#input-group").style.opacity = 0;
    document.querySelector("#input-group").style.border = "none";
    document.querySelector("#input-label").style.marginLeft = 0;
    document.querySelector("#input-progress").style.width = 0;
    document.querySelector("#input-progress").style.transition = "none";
  };

  // On Input Change

  onAnswerChange = e => {
    this.setState({
      answer: e.target.value
    });
  };

  // Input Field Enter
  onEnterClick = e => {
    if (e.keyCode === 13) {
      if (position === 0) {
        this.getFirstName();
      }
      this.validate();
    }
  };

  // nextBtn click
  nextBtnClick = () => {
    document.querySelector("#input-field").focus();
    if (position === 0) {
      this.getFirstName();
    }

    this.validate();
  };

  // Validate Field
  validate = () => {
    // Make Sure Pattern Matches If There Is One
    if (!this.state.answer.match(questions[position].pattern || /.+/)) {
      this.inputFail();
    } else {
      this.inputPass();
    }
  };

  formComplete = () => {
    this.setState({ formOpen: false });
    this.props.formCompleted();
    setTimeout(() => {
      document.querySelector(".end").style.opacity = 1;
    }, 500);
  };

  // Transform To Create Shake Motion
  transform = (x, y) => {
    document.querySelector(
      "#form-box"
    ).style.transform = `translate(${x}px, ${y}px)`;
  };

  inputFail = () => {
    this.setState({
      errors: true
    });

    // Loop That Creates Error Shake
    for (let i = 0; i < 6; i++) {
      setTimeout(this.transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);
      setTimeout(this.transform, shakeTime * 6, 0, 0);
      document.querySelector("#input-field").focus();
    }
  };

  onAnswerGiven = event => {
    var answers = this.state.answers.slice();
    answers.push(this.state.answer);
    this.setState({ answers });
  };

  inputPass = () => {
    setTimeout(this.transform, shakeTime * 0, 0, 10);
    setTimeout(this.transform, shakeTime * 1, 0, 0);
    this.onAnswerGiven();

    position++;
    if (position !== questions.length) {
      this.hideQuestion();
      this.getQuestion();
    } else {
      this.hideQuestion();
      document.querySelector("#input-progress").style.width = "100%";
      this.formComplete();
    }
  };

  render() {
    const {
      firstQuestion,
      currentQuestion,
      answer,
      errors,
      formOpen,
      firstName
    } = this.state;

    return (
      <div id="container">
        {!formOpen && (
          <h1 className="end">
            Thanks, {firstName}. You are Registered, and Will Get An Email
            Shortly.. :)
          </h1>
        )}
        <div id="form-box" className={classnames({ close: !formOpen })}>
          <i
            id="prev-btn"
            className={classnames({
              "fas fa-arrow-left": !firstQuestion,
              "fas fa-user": firstQuestion
            })}
            style={{ opacity: !formOpen ? "0" : "1" }}
          />
          <i
            id="next-btn"
            className={classnames("fas fa-arrow-right", {
              error: errors
            })}
            onClick={this.nextBtnClick}
            style={{ opacity: !formOpen ? "0" : "1" }}
          />
          <div id="input-group">
            <input
              type="text"
              id="input-field"
              value={answer}
              required
              onChange={this.onAnswerChange}
              onKeyUp={this.onEnterClick}
            />
            <label id="input-label">{currentQuestion}</label>
            <div
              id="input-progress"
              className={classnames({
                error: errors
              })}
            />
          </div>
          <div id="progress-bar" />
        </div>
      </div>
    );
  }
}

export default FancyForm;
