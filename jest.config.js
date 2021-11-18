module.exports = {
  transform: {
    "^.+\\.(ts|js)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      diagnostics: {
        ignoreCodes: ["TS6133"],
      },
    },
  },
  testEnvironment: "node",
};
