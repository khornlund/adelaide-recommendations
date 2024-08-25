module.exports = function(eleventyConfig) {
    // Copy CSS files from src to _site
    eleventyConfig.addPassthroughCopy("src/styles.css");

    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };
