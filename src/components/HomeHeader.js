import React, { useEffect, useState } from "react";

const jungleAlternatives = [
  "the concrete jungle of",
  "the city with no horizon,",
  "the urban sprawl of",
  "Brazil's locomotive,",
  "a cultural melting pot,",
  "the unstoppable city,",
  "the home of SC Corinthians Paulista,",
  "the place with the best pizza in the World,",
  "the biggest city in the Southern Hemisphere,",
  "the home Anthony Bourdain's favortite sandwich,",
  "a place where anything can happen,",
  "a city bigger that the Netherlands,",
  "the birthplace of Ayrton Senna,",
  "the Land of the Garoa,",
  "the largest megacity outside of Asia,",
  "a city with better traffic than LA,",
  "the greatest city in the world,",
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
    <h2 className="mb-4">
      Frontend Developer with a love for building things, living in{" "}
      <span style={{ whiteSpace: "nowrap" }}>{displayText}</span>
      {showCursor && <span className="blinking-cursor">|</span>}
      {" "}São Paulo, Brazil.
    </h2>
  );
};

export default HomeHeader;
