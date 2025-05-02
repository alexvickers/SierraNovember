import React from "react";
import "../styles/animations/fog.scss";

const FogOverlay = () => (
  <div className="fogwrapper">
    {[1, 2, 3].map((layer) => (
      <div key={layer} id={`foglayer_0${layer}`} className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
    ))}
  </div>
);

export default FogOverlay;
