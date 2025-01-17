import "./HistoryItems.css";
import React from "react";

function HistoryItems(props) {
  const { historyDetails, onDeleteHistory } = props;
  const { id, timeAccessed, logoUrl, title, domainUrl } = historyDetails;

  const onDeleteItme = () => {
    onDeleteHistory(id);
  };
  return (
    <>
      <li className="history">
        <p className="time-stamp">{timeAccessed}</p>
        <div className="domain-details-container">
          <div className="domain-details">
            <img src={logoUrl} alt="domain logo" className="domain-logo" />
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
          <button
            type="button"
            className="delete-button"
            onClick={onDeleteItme}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </>
  );
}

export default HistoryItems;
