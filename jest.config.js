export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/e2e/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', 'jest-axe/extend-expect'],
  moduleNameMapper: {
    // Must precede the '@/' alias below -- moduleNameMapper uses the
    // first matching pattern, and asset imports go through that alias
    // too (e.g. '@/assets/foo.svg').
    '\\.(svg|png|jpe?g|gif|webp)$': '<rootDir>/src/test-mocks/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(scss|css)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
  },
}
