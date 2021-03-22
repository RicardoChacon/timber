module.exports = {
  extends: ['codfish', 'codfish/docker', 'codfish/dapp'],
  root: true,
  rules: {
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    'no-restricted-syntax': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': ['integration-test/test.js', 'integration-test/testData.js'],
      },
    ],
  },
  env: {
    mocha: true,
  },
  globals: {
    'BigInt':true
  },
};
