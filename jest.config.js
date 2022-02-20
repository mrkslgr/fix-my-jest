const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  preset: "jest-preset-angular",

  roots: ["<rootDir>/src/app/"],
  testMatch: ["**/+(*.)+(spec|test).+(ts)"],

  transformIgnorePatterns: ["node_modules/(?!(jest-test))"],
  transform: {
    "^.+\\.(ts|js|html)$": "jest-preset-angular",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
    },
  },
  globalSetup: "./src/tests-setup.ts",
  setupFilesAfterEnv: ["<rootDir>/src/test.ts"],
  collectCoverage: true,
  coverageReporters: ["html", "text-summary"],

  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "js", "html"],

  coverageDirectory: "coverage/app",
  moduleNameMapper: {
    d3: "<rootDir>/src/mocks/d3-mock.ts",
    ...pathsToModuleNameMapper(compilerOptions.paths || {}, {
      prefix: "<rootDir>/",
    }),
  },
  testRunner: "jest-jasmine2",
  verbose: true,
  snapshotSerializers: [
    "jest-preset-angular/build/serializers/ng-snapshot",
    "jest-preset-angular/build/serializers/html-comment",
  ],
};
