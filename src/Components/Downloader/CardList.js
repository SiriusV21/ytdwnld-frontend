import React from 'react';
import Card from './Card.js';
import List from './List.js';

const CardList = () => {
  return (
    <div className="flex center mt4">      
      {
        List.map((card) => {
        return (
          <div className="ml4 mr4">
            <Card 
            link={card.link} 
            title={card.title} 
            description={card.description}
            />
          </div>
          );
        })
      }
    </div> 
  )
};

export default CardList;