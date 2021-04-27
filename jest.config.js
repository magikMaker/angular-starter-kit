module.exports = {
  'coverageReporters': ['json', 'lcov', 'text','clover', 'html'],
  'preset': 'jest-preset-angular',
  'setupFilesAfterEnv': [
    '<rootDir>/jest-setup.ts'
  ],
  'testMatch': [
    '<rootDir>/src/**/*.spec.ts'
  ],
  'testPathIgnorePatterns': [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/'
  ],
  'globals': {
    'ts-jest': {
      'tsconfig': '<rootDir>/tsconfig.spec.json',
      'stringifyContentPathRegex': '\\.html$'
    }
  }
};
