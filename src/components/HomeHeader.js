import React, { useEffect, useState } from "react";
import "../styles/animations/cursor.scss";

const jungleAlternatives = [
  "the concrete jungle of",
  "the city with no horizon,",
  "the urban sprawl of",
  "Brazil's locomotive,",
  "a cultural melting pot,",
  "the place with the best pizza in the world,",
  "the biggest city in the Southern Hemisphere,",
  "the home of Anthony Bourdain's favorite sandwich,",
  "a place where anything can happen,",
  "the birthplace of Ayrton Senna,",
  "the Land of the Garoa,",
  "a city with better traffic than LA,",
  "the greatest city in the world,",
  "the land of pastel and sugarcane juice at the Sunday feira,",
  "the birthplace of Brazilian modernism,",
  "the home of the largest Japanese community outside of Japan,",
  "the city Racionais MC's put on the map,",
  "a city with a concert every night,",
  "a city where distance is measured in time,",
  "a city where four seasons can happen in one day,",
  "one of the world's busiest helicopter cities,",
  "the home of Interlagos and the Brazilian Grand Prix,",
];

const PHRASE_COUNT = 4;
const TYPING_MS = 60;
const DELETING_MS = 40;
const PAUSE_MS = 1000;
const CURSOR_LINGER_MS = null;

const getRandomPhrases = (count) => {
  const pool = [...jungleAlternatives];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
};

const HomeHeader = () => {
  const [phrase, setPhrase] = useState("");
  const [typed, setTyped] = useState(0);
  const [typing, setTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const phrases = getRandomPhrases(PHRASE_COUNT);
    const last = phrases.length - 1;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhrase(phrases[last]);
      setTyped(phrases[last].length);
      setShowCursor(false);
      return;
    }

    const timers = [];
    const later = (fn, ms) => {
      timers.push(setTimeout(fn, ms));
    };

    const finish = () => {
      if (CURSOR_LINGER_MS != null) {
        later(() => setShowCursor(false), CURSOR_LINGER_MS);
      }
    };

    const typeIn = (i, n) => {
      const text = phrases[i];
      setPhrase(text);
      setTyped(n);
      setTyping(n < text.length);
      if (n < text.length) return later(() => typeIn(i, n + 1), TYPING_MS);
      if (i === last) return finish(); // last phrase stays, no delete
      later(() => deleteOut(i, n), PAUSE_MS);
    };

    const deleteOut = (i, n) => {
      setTyped(n);
      setTyping(n > 0);
      if (n > 0) return later(() => deleteOut(i, n - 1), DELETING_MS);
      later(() => typeIn(i + 1, 0), 350);
    };

    later(() => typeIn(0, 0), 600);

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <h2 className="mb-4">
      Frontend Developer with a love for building things, living in{" "}
      <span aria-hidden="true">
        {phrase.slice(0, typed)}
        {showCursor && <span className={`type-cursor${typing ? " is-typing" : ""}`} />}
      </span>{" "}
      São&nbsp;Paulo, Brazil.
    </h2>
  );
};

export default HomeHeader;
