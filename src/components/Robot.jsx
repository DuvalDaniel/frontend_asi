import React from "react";
import Label from "./Label";

function Robot({ robot }) {
  return (
    <div className="card mb-3" style={{ maxWidth: "400px" }}>
      <div className="card-body">
        <h5 className="card-title">{robot.title}</h5>
        {robot.visual_type === "img" ? (
          <img src={robot.visual_src} alt={robot.title} className="img-fluid mb-2" />
        ) : (
          <div className="ratio ratio-16x9 mb-2">
            <iframe
              src={robot.visual_src}
              title={robot.title}
              allowFullScreen
            ></iframe>
          </div>
        )}
        <div>
          {robot.parts.map((part, idx) => (
            <Label key={idx} text={part} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Robot;
