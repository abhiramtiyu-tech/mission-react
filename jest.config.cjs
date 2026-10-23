module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }],
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.(png|jpe?g|gif|webp|avif|svg)$': '<rootDir>/src/test/fileMock.cjs',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};