import React from "react";

function Sidebar({ topics, changeContent }) {

  const changeTopic = (topic) => {
    changeContent(topic);
  }

  return (
    <aside className="sidebar">
      <h2>Tópicos</h2>
      <ul>
        {topics.map((topic, index) => (
          <li key={index} onClick={() => changeTopic(topic)}>{topic}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
