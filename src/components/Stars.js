import React from "react";
import FontAwesome from "react-fontawesome";

import "../css/stars.css";

const Stars = (props) => {
  const renderStar1 = () => {
    return props.fakeArray1.map((element, i) => {
      return <FontAwesome key={i} className="stars" name="star" size="3x" />;
    });
  };

  const renderStar2 = () => {
    return props.fakeArray2.map((element, i) => {
      return <FontAwesome key={i} className="stars" name="star-o" size="3x" />;
    });
  };
  return (
    <div className="stars">
      {renderStar1()}
      {renderStar2()}
    </div>
  );
};

export default Stars;
