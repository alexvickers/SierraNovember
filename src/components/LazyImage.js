import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const LazyImage = ({ imageSharp, title, onClick }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const gatsbyImage = getImage(imageSharp);

  return (
    <div ref={ref}>
      {isVisible && (
        <GatsbyImage
          image={gatsbyImage}
          alt={title}
          style={{ display: "block", cursor: "pointer" }}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default LazyImage;
