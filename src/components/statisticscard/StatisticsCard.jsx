import React from 'react';


import "./StatisticsCard.scss";

const StatisticsCard = ({ heading, info, icon }) => {
  return (
    <article className="card">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <h2>{ heading }</h2>
      <p>{ info }</p>
    </article>
  )
}

export default StatisticsCard