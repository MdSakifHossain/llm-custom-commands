import React, { useState } from "react";
import prompts from "../utils/prompts";
import { copyToClipboard } from "../utils/clipboard";

const Main = () => {
  // State to track whether the text has been copied for each prompt
  const [isCopied, setIsCopied] = useState({});

  // Function to handle the copy action
  const handleCopy = async (text, index) => {
    const success = await copyToClipboard(text);
    if (success) {
      // Set the copied state for the specific prompt index
      setIsCopied((prevCopied) => ({
        ...prevCopied,
        [index]: true,
      }));

      // Reset the copied state after 1.5 seconds
      setTimeout(() => {
        setIsCopied((prevCopied) => ({
          ...prevCopied,
          [index]: false,
        }));
      }, 1000);
    } else {
      alert("Copy failed! 😢");
    }
  };

  return (
    <main>
      <h1>
        Proomts Count:{" "}
        <span>
          {prompts.length >= 0 && prompts.length <= 9
            ? String(prompts.length).padStart(2, "0")
            : prompts.length}
        </span>
      </h1>
      <ul>
        {prompts.map((prompt, cardIndex) => (
          <li key={cardIndex} className="card">
            {" "}
            <div className="card-title-n-tags">
              <h3 className="card-title">{prompt.name}</h3>
              {prompt.tags && prompt.tags.length > 0 && (
                <ul className="tags-list">
                  {prompt.tags.map((tag, tagIndex) => (
                    <li key={tagIndex}>{tag}</li>
                  ))}
                </ul>
              )}
            </div>
            <pre className="card-subtitle clamp">{prompt.prompt}</pre>
            <button
              className="cp-btn"
              onClick={() => handleCopy(prompt.prompt, cardIndex)}
            >
              {isCopied[cardIndex] ? "Copied" : "Copy"}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
