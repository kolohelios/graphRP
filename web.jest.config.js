module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|my-linked-module)/',
  ],
  transform: {
    '^.+\\.(js)$':
      '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__web_tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*styles.ts',
    '!rn-cli.config.js',
    '!**/*.d.ts',
    '!*.js',
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/coverage/",
    "/dist/",
  ],
  globalSetup: './web/global-setup.js',
  globalTeardown: './web/global-teardown.js',
}
