SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "timernator": {
      "main": "timernator.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "css": "github:systemjs/plugin-css@0.1.21",
    "jquery": "npm:jquery@2.2.3",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.9",
    "text": "github:systemjs/plugin-text@0.0.7"
  },
  packages: {
    "github:twbs/bootstrap@3.3.6": {
      "map": {
        "jquery": "npm:jquery@2.2.3"
      }
    }
  }
});
