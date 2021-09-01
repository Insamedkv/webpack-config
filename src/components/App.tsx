import React from 'react';
import { cards } from '../cards';
import { Card } from './Card';
import { SearchBar } from './SearchBar';

export function App(): JSX.Element {
  return (
    <>
      <SearchBar />
      <div className="content">
        {cards.map((card) => (
          <Card
            key={card.name}
            picture={card.picture}
            name={card.name}
            author={card.author}
            likes={card.likes}
            views={card.views}
          />
        ))}
      </div>
    </>
  );
}
