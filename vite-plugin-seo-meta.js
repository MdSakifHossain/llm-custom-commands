// vite-plugin-seo-meta.js
export default function injectSeoMetaTagsPlugin(options) {
  return {
    name: "seo-meta-injector",
    transformIndexHtml(html) {
      let newTitleTag = `<title>${options.title}</title>`;
      let newOgMetaTags = `
        <meta property="og:title" content="${
          options.ogTitle || options.title
        }" />
        <meta property="og:description" content="${options.description}" />
        <meta property="og:image" content="${options.ogImage}" />
        <meta property="og:url" content="${options.ogUrl}" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${
          options.twitterTitle || options.ogTitle || options.title
        }" />
        <meta name="twitter:description" content="${
          options.twitterDescription || options.description
        }" />
        <meta name="twitter:image" content="${
          options.twitterImage || options.ogImage
        }" />
        <meta name="twitter:url" content="${
          options.twitterUrl || options.ogUrl
        }" />
      `.trim();

      let transformedHtml = html.replace(/<title>.*?<\/title>/s, newTitleTag);
      transformedHtml = transformedHtml.replace(
        "</head>",
        `${newOgMetaTags}\n</head>`
      );

      return transformedHtml;
    },
  };
}
