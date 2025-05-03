import React, { useEffect, useState } from "react";

const jungleAlternatives = [
  "concrete jungle of",
  "city with no horizon,",
  "urban sprawl of",
  "locomotive of Brazil,",
  "cultural melting pot of",
  "unstoppable city,",
  "home of SC Corinthians Paulista,",
  "place with the best pizza in the World,",
  "biggest city in the Southern Hemisphere,",
  "place that makes Anthony Bourdain's favortite sandwich,",
];

const getRandomPhrases = (count) => {
  const shuffled = [...jungleAlternatives].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const HomeHeader = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const phrases = getRandomPhrases(4);
    const typingSpeed = 60;
    const pauseBeforeDelete = 1000;
    const deletingSpeed = 40;

    let index = 0;
    let charIndex = 0;
    let deleting = false;

    const runTypingAnimation = () => {
      const type = () => {
        const current = phrases[index];

        if (!deleting) {
          setDisplayText(current.slice(0, charIndex));
          charIndex++;

          if (charIndex > current.length) {
            deleting = true;
            setTimeout(type, pauseBeforeDelete);
            return;
          }
        } else {
          setDisplayText(current.slice(0, charIndex));
          charIndex--;

          if (charIndex < 0) {
            deleting = false;
            index++;

            if (index >= phrases.length) {
              setDisplayText(phrases[phrases.length - 1]);
              setShowCursor(false);
              return;
            }
          }
        }

        setTimeout(type, deleting ? deletingSpeed : typingSpeed);
      };

      type();
    };

    if (!localStorage.getItem("hasLoaded")) {
      localStorage.setItem("hasLoaded", "true");
      runTypingAnimation();
    } else {
      localStorage.removeItem("hasLoaded");
      runTypingAnimation();
    }
  }, []);

  return (
    <h2 className="text-white mb-4">
      Frontend Developer with a love for building things, living in the{" "}
      <span style={{ whiteSpace: "nowrap" }}>{displayText}</span>
      {showCursor && <span className="blinking-cursor">|</span>}
      {" "}São Paulo, Brazil.
    </h2>
  );
};

export default HomeHeader;
