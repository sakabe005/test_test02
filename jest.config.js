module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'node',
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};