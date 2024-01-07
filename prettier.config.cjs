/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("prettier-plugin-packagejson"),
  ],
};

module.exports = config;
