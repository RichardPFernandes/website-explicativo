import React from "react";

function Content({ content }) {
  return (
    <div className="content">
      {content.map((item, index) => (
        <p
          key={index}
          style={{ borderBottom: "1px solid #000", padding: "20px 0" }}
        >
          <h2>- {item.tag}</h2>
          {item.description}
          {item.example && (
            <>
              <p style={{ fontWeight: "bold" }}>Exemplo:</p>
              <pre style={{ whiteSpace: "pre-wrap" }}>
                <code>{item.example}</code>
              </pre>
            </>
          )}
        </p>
      ))}
    </div>
  );
}

export default Content;
