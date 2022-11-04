import React from "react";
import "./categories.style.scss";

const Categories = ({categories}) => {
  
  return (
    <div className="categories-container">
      {categories.map(({ id, imageUrl, title }) => {
        return (
          <div key={id} className="category-container">
            <div
              className="background-image"
              style={{
                backgroundImage: `url(${imageUrl})` 
                }}
            />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
