SystemJS.config({
  baseURL: "/",
  paths: {
    "github:*": "/jspm_packages/github/*",
    "npm:*": "/jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "timernator.js",
      "src/color-timer/color-timer.js",
      "npm:systemjs-plugin-babel@0.0.9/babel-helpers/createClass.js",
      "npm:systemjs-plugin-babel@0.0.9.json",
      "npm:systemjs-plugin-babel@0.0.9/babel-helpers/classCallCheck.js",
      "src/color-picker/color-picker.js",
      "src/color-picker/color-picker.html!github:systemjs/plugin-text@0.0.7/text.js",
      "github:systemjs/plugin-text@0.0.7.json",
      "src/timer-controls/timer-controls.js",
      "src/timer-controls/timer-controls.html!github:systemjs/plugin-text@0.0.7/text.js",
      "src/timer-controls/timer-controls.css!github:systemjs/plugin-css@0.1.21/css.js",
      "github:systemjs/plugin-css@0.1.21.json",
      "src/navbar/navbar.js",
      "src/navbar/navbar.html!github:systemjs/plugin-text@0.0.7/text.js",
      "github:twbs/bootstrap@3.3.6/dist/css/bootstrap.css!github:systemjs/plugin-css@0.1.21/css.js",
      "github:twbs/bootstrap@3.3.6.json",
      "github:twbs/bootstrap@3.3.6/dist/js/bootstrap.js",
      "npm:jquery@2.2.3/dist/jquery.js",
      "npm:jquery@2.2.3.json"
    ]
  }
});
