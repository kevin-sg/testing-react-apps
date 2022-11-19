export default {
  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1", "^.+\\.(css|less|scss)$": "babel-jest" },

  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",

  // A list of paths to directories that Jest should use to search for files in
  // roots: ["**/__tests__", "**/__mocks__"],
  roots: ["<rootDir>/src"],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",
  // testEnvironment: "jest-environment-jsdom", <-- Optional

  // The regexp pattern or array of patterns that Jest uses to detect test files
  testRegex: ["(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$"],

  // A map from regular expressions to paths to transformers
  transform: { "^.+\\.tsx?$": "ts-jest", "^.+\\.ts?$": "ts-jest" },
};
