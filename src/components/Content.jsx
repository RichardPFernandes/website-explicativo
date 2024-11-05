import React from "react";

function Content({ content }) {
  return (
    <div className="content">
      {content.map((item, index) => (
        <p key={index}>
          <code>{item.tag}</code>
          <br />
          {item.description}
        </p>
      ))}
    </div>
  );
}

export default Content;
