import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  // check number wether is greater than the array length
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    // check number wether is less than the array length;

    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  // nxt person
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  //previous button
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  //random person
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
      console.log(randomNumber);
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
      </div>
      <span className="qoute-icon">
        <FaQuoteRight />
      </span>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
