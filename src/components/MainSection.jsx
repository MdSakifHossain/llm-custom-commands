import React, { useState } from "react";
import prompts from "../utils/prompts.js";
import { copyToClipboard } from "../utils/clipboard.js";

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
    <main className="py-12 px-6 flex flex-col gap-8 md:px-24">
      <h1 className="text-5xl font-display font-bold md:text-7xl">
        Proomts Count:{" "}
        <span className="text-accent leading-[150%]">
          {prompts.length >= 0 && prompts.length <= 9
            ? String(prompts.length).padStart(2, "0")
            : prompts.length}
        </span>
      </h1>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {prompts.map((prompt, cardIndex) => (
          <li
            key={cardIndex}
            className="bg-input-bg p-8 rounded-2xl duration-100 relative flex flex-col gap-6 md:py-12 md:px-10"
          >
            <div className="flex flex-col">
              <h3 className="text-[1.3rem] font-bold md:text-2xl md:">
                {prompt.name}
              </h3>
              {prompt.tags && prompt.tags.length > 0 && (
                <ul className="flex gap-2">
                  {prompt.tags.map((tag, tagIndex) => (
                    <li
                      className="font-semibold text-[0.9rem] md:"
                      key={tagIndex}
                    >
                      #{tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <pre className="text-sm font-medium font-[`'Courier New', Courier, monospace`] whitespace-pre-wrap line-clamp-12 leading-[120%] md:pl-5">
              {prompt.prompt}
            </pre>
            <button
              className="absolute top-2 right-2 bg-accent font-bold text-base py-2 px-[1.35rem] rounded-[calc(1rem-7px)] duration-100
                      active:bg-text active:text-accent active:scale-125
                      md:text-lg md:py-2 md:px-8 md:top-3 md:right-2
              "
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
