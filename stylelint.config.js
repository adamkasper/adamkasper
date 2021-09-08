module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        severity: 'warning',
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    // support scss keywords better
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'include',
          'each',
          'mixin',
          'if',
          'else',
          'function',
          'return',
          'content',
          'extend',
        ],
      },
    ],
    'property-disallowed-list': [
      'margin-inline', // not supported in browsers enough
      'padding-inline', // not supported in browsers enough
      'word-break', // RTL support https://rtlstyling.com/posts/rtl-styling#3.-line-break
    ],
    'no-empty-source': [true, { severity: 'warning' }],
    'block-no-empty': [true, { severity: 'warning' }],
  },
}
