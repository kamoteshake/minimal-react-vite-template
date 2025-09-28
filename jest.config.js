import { jestAliases } from './aliases.ts'

/** @type {import("jest").Config} **/
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.svg\\?react$': '<rootDir>/__mocks__/svgMock.ts',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.ts',
    ...jestAliases
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.app.json',
        useESM: true
      }
    ]
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
}
