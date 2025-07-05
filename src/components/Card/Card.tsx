import React from 'react';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({ title, disabled, children }) => (
  <div
    style={{
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      border: '1px solid #ccc',
      padding: '16px',
      margin: '8px 0',
      borderRadius: '8px'
    }}
  >
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

export default Card;
