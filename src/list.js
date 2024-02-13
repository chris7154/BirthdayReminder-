import React from "react";
import Data from "./data";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, description, image } = person;
        return (
          <div key={id} className="person-container">
            <article className="person">
              <img src={image} alt={name} />
            </article>
            <div className="descrip">
              <h4>{name}</h4>
              <p>{age}</p>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;