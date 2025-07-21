// clipboard.js

export const copyToClipboard = async (text) => {
  if (!navigator?.clipboard) {
    console.error("Clipboard API not supported in this browser 🥲");
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Failed to copy 😤:", error);
    return false;
  }
};
