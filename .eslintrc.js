module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-kui`
  extends: ["kui"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
