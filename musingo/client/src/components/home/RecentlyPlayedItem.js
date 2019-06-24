import React from "react";

function RecentlyPlayedItem(props) {
  const { imgUrl, title } = props;
  return (
    <div className="Home-recently-item">
      <div className="Home-recently-item-image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="Home-recently-item-text">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default RecentlyPlayedItem;
