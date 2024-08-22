/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  testEnvironment: 'jest-environment-jsdom',

};

export default config;
