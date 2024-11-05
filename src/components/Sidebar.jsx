import React from "react";

function Sidebar({ topics }) {
  return (
    <aside className="sidebar">
      <h2>Tópicos</h2>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
