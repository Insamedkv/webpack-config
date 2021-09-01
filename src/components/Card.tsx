import React from 'react';

interface CardProps {
  picture: string;
  name: string;
  author: string;
  likes: number;
  views: number;
}

export function Card(props: CardProps): JSX.Element {
  return (
    <div className="card">
      <img className="picture" src={props.picture} alt="emotions" />
      <div className="card-info">
        <a href="#" className="picture-name">
          {props.name}
        </a>

        <span className="by">by {props.author}</span>

        <hr></hr>

        <div className="numbers-info">
          <div className="wrapper">
            <div className="likes"></div>

            <div>{props.likes}</div>
          </div>

          <div className="wrapper">
            <div className="views"></div>

            <div>{props.views}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
