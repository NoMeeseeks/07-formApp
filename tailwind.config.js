/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/app/shared/components/side-menu/side-menu.component.html",
    "./src/app/app.component.html",
    "./src/app/auth/pages/register-page/register-page.component.html",
    "./src/app/reactive/pages/basic-page/basic-page.component.html",
    "./src/app/reactive/pages/dymanic-page/dynamic-page.component.html",
    "./src/app/reactive/pages/switches-page/switches-page.component.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
