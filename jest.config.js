/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src', '__mocks__'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^(\.{1,2}/.*)$': '$1'
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['@babel/preset-env'] }]
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageDirectory: 'coverage',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  },
  globals: {
    'process.env': {
      REACT_APP_GOOGLE_SPREADSHEET_ID: 'test-spreadsheet-id'
    }
  }
};
