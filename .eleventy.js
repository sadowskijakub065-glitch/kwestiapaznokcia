module.exports = function(eleventyConfig) {
  // Kopiuje te pliki i foldery do zbudowanej strony
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("admin");
  
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site" // Tutaj Eleventy wypluje gotową stronę
    }
  }
};
