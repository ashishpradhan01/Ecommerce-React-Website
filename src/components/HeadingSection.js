import React from "react";


const HeadingSection = ({heading}) => {
  return <React.Fragment>
      <div className="heading_container">
      <div class="top_path">
          <span>
              <a href="">Home</a>
              <a href="">/Men</a>
          </span>
      </div>
      <div class="top_heading">
          <span>{heading}</span>
      </div>
      </div>
  </React.Fragment>;
};

export default HeadingSection;
