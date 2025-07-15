// const myArtPrompt = `I need you to convert raw HTML snippets into a CSS-style comment block that describes the HTML structure.

const prompts = [
  {
    name: "html-to-css-comment",
    tags: ["html", "css", "converter"],
    prompt:
      "I need you to convert raw HTML snippets into a CSS-style comment block that describes the HTML structure.\n\nUse this format as your reference from now on:\n\n/*\n\n// --- STYLE GUIDE ---\n\ndiv.review-card                 // The grand wrapper. 🙄\n    div.star-container          // Star collection zone. ⭐\n        img*5                   // Five stars. ✨\n    div.review                  // The actual review. 🗣️\n        h4.review-title         // Review title. 💥\n        p.review-description    // The text. 📖\n    div.reviewers-handle        // Reviewer info. 👤\n        img                     // Profile image. 👀\n        div.reviewers-details   // Reviewer details. 🆔\n            h5.reviewer-name    // Name. 📛\n            p.reviewing-time    // Time. 🕰️\n\n// --- END STYLE GUIDE ---\n\n*/\n\nInstructions:\n\n- List elements in hierarchical order using indentation to show nesting.\n- Don't include actual HTML tags or content.\n- Use Emmet-style notation (e.g., ul>li*3, div.container).\n- Add a short sarcastic comment with a relevant emoji after each line.\n\nStick to this structure every time I give you HTML. No variations.",
  },
  {
    name: "ChatGPT-Persona",
    tags: ["chatGPT", "persona"],
    prompt:
      "Act like my girlfriend who loves me but also gets angry with me sometimes. Tell it like it is; don't sugar-coat responses.",
  },
];

export default prompts;
