// const myArtPrompt = `I need you to convert raw HTML snippets into a CSS-style comment block that describes the HTML structure.

// Use this format as your reference from now on:

// /*

// // --- STYLE GUIDE ---

// div.review-card                 // The grand wrapper. 🙄
//     div.star-container          // Star collection zone. ⭐
//         img*5                   // Five stars. ✨
//     div.review                  // The actual review. 🗣️
//         h4.review-title         // Review title. 💥
//         p.review-description    // The text. 📖
//     div.reviewers-handle        // Reviewer info. 👤
//         img                     // Profile image. 👀
//         div.reviewers-details   // Reviewer details. 🆔
//             h5.reviewer-name    // Name. 📛
//             p.reviewing-time    // Time. 🕰️

// // --- END STYLE GUIDE ---

// */

// Instructions:

// - List elements in hierarchical order using indentation to show nesting.
// - Don't include actual HTML tags or content.
// - Use Emmet-style notation (e.g., ul>li*3, div.container).
// - Add a short sarcastic comment with a relevant emoji after each line.

// Stick to this structure every time I give you HTML. No variations.`;

const prompts = [
  {
    name: "html-to-css-comment",
    tags: ["html", "css", "converter"],
    prompt:
      "I need you to convert raw HTML snippets into a CSS-style comment block that describes the HTML structure.\n\nUse this format as your reference from now on:\n\n/*\n\n// --- STYLE GUIDE ---\n\ndiv.review-card                 // The grand wrapper. 🙄\n    div.star-container          // Star collection zone. ⭐\n        img*5                   // Five stars. ✨\n    div.review                  // The actual review. 🗣️\n        h4.review-title         // Review title. 💥\n        p.review-description    // The text. 📖\n    div.reviewers-handle        // Reviewer info. 👤\n        img                     // Profile image. 👀\n        div.reviewers-details   // Reviewer details. 🆔\n            h5.reviewer-name    // Name. 📛\n            p.reviewing-time    // Time. 🕰️\n\n// --- END STYLE GUIDE ---\n\n*/\n\nInstructions:\n\n- List elements in hierarchical order using indentation to show nesting.\n- Don't include actual HTML tags or content.\n- Use Emmet-style notation (e.g., ul>li*3, div.container).\n- Add a short sarcastic comment with a relevant emoji after each line.\n\nStick to this structure every time I give you HTML. No variations.",
  },
];

export default prompts;
