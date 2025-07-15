import React from "react";
import prompts from "../utils/prompts";

const Main = () => {
  return (
    <main>
      <h1>
        Proomts Count:{" "}
        <span>
          {/*
            Checks if the count is between 0 and 9.
            If true, adds a leading '0' (e.g., 4 becomes "04").
            Otherwise, shows the number as is (e.g., 10 stays "10").
          */}
          {prompts.length >= 0 && prompts.length <= 9
            ? String(prompts.length).padStart(2, "0")
            : prompts.length}
        </span>
      </h1>
      <ul>
        {/* prototype */}
        {/* <li className="card">
          <div className="card-title-n-tags">
            <h3 className="card-title">{prompts[0].name}</h3>
            <ul className="tags-list">
              <li>html</li>
              <li>css</li>
              <li>converter</li>
            </ul>
          </div>
          <pre className="card-subtitle clamp">{prompts[0].prompt}</pre>
          <button className="cp-btn">Copy</button>
        </li> */}

        {/* actual thing on the webpage */}
        {/* {prompts.map((prompt, index) => (
          <li key={index} className="card">
            <div className="card-title-n-tags">
              <h3 className="card-title">{prompt.name}</h3>
              <ul className="tags-list">
                {prompt.tags.map((tag) => (
                  <li>tag</li>
                ))}
              </ul>
            </div>
            <pre className="card-subtitle clamp">{prompt.prompt}</pre>
            <button className="cp-btn">Copy</button>
          </li>
        ))} */}

        {prompts.map((prompt) => (
          <li key={prompt.id || prompt.name} className="card">
            {" "}
            <div className="card-title-n-tags">
              <h3 className="card-title">{prompt.name}</h3>
              {/* This is the check! */}
              {prompt.tags && prompt.tags.length > 0 && (
                <ul className="tags-list">
                  {prompt.tags.map((tag, tagIndex) => (
                    <li key={tag || tagIndex}>{tag}</li>
                  ))}
                </ul>
              )}
            </div>
            <pre className="card-subtitle clamp">{prompt.prompt}</pre>
            <button className="cp-btn">Copy</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
