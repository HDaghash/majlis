module.exports = {
  singleQuote: true,
  useTabs: false,
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  htmlWhitespaceSensitivity: 'strict',
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: true,
  proseWrap: 'preserve',
  trailingComma: 'none',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    },
    {
      files: '*.html',
      options: {
        printWidth: 100
      }
    }
  ]
};
