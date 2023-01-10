import React from 'react';
import './Main.css';
import background from '../../background.jpeg';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';
import { zodiac } from '../../data.js';

export default function Main() {
  return <div style={{ backgroundImage: { backgroundImage: `url(${background})` } }}></div>;
}
