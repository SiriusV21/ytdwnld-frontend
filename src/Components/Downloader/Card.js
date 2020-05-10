import React from 'react';

const Card = ({ link, title, description }) => {
  return (
    <article className="mw5 center pa3 pa4-ns mv3 ba bw1 b--black-20 ">
      <div className="tc">
        <img src={link} alt={title} className="br-100 h3 w3 dib" title={title} />
        <h1 className="f4">{title}</h1>
        <hr className="mw3 bb bw1 b--black-40" />
      </div>
      <p className="lh-copy measure center f5 black-70 fw5">{description}</p>
    </article>
  )
};

export default Card;
