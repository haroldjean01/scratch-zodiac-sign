import React from 'react';
import './Main.css';
import background from '../../background.jpeg';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';
import { zodiac } from '../../data.js';

export default function Main() {
  return <main style={{ backgroundImage: { backgroundImage: `url(${background})` } }}></main>;
}
