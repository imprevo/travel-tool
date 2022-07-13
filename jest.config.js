module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-tests.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
};
