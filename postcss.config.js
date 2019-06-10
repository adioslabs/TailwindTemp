const purgecss = require("@fullhuman/postcss-purgecss");
const tailwindcss = require("tailwindcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    tailwindcss("./tailwind.config.js"),
    cssnano({
      preset: "default"
    }),

    purgecss({
      content: ["./src/*html"],
      extractors: [
        {
          extractor: class TailwindExtractor {
            static extract(content) {
              return content.match(/[A-z0-9-:\/]+/g) || [];
            }
          },
          extensions: ["css", "html"]
        }
      ]
    }),
    autoprefixer
  ]
};
