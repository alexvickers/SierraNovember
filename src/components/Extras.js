import * as React from "react";
import extrasData from "../data/extras-data";

const Extras = () => {
  return (
    <section className="container py-5">
      <h2 className="mb-4 text-center">Stuff I’m Into</h2>
      <div className="row">
        {extrasData.map((extra, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="p-4 h-100 border rounded-3 bg-light">
              <h5>{extra.label}</h5>
              <p>{extra.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extras;
