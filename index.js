module.exports = {
  'extends': [
    'airbnb',
    'react-app'
  ],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'import/prefer-default-export': [
      0
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js'
        ]
      }
    ],
    'react/jsx-one-expression-per-line': [
      0
    ],
    'react/jsx-tag-spacing': [
      'warn',
      {
        beforeSelfClosing: 'never'
      }
    ],
    'react/prop-types': [
      0
    ],
    'react/destructuring-assignment': [
      0
    ],
    'arrow-parens': [
      2,
      'always'
    ],
    'jsx-a11y/label-has-associated-control': [
      0
    ],
    'jsx-a11y/label-has-for': [
      0
    ],
    'jsx-a11y/anchor-is-valid': [
      0
    ],
    'jsx-a11y/href-no-hash': [
      0
    ],
    'object-curly-spacing': [
      1
    ],
    'object-curly-newline': [
      'warn',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 4
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 4
        }
      }
    ],
    indent: [
      'warn',
      2
    ],
    'symbol-description': [
      'warn'
    ],
    'newline-after-var': [
      'warn',
      'always'
    ],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: 'block',
        next: 'return'
      }
    ],
    'comma-dangle': [
      'warn',
      'never'
    ],
    'computed-property-spacing': [
      'warn',
      'never'
    ],
    'array-bracket-spacing': [
      'warn',
      'always',
      {
        objectsInArrays: false
      }
    ],
    'implicit-arrow-linebreak': [
      'warn',
      'beside'
    ],
    curly: [
      'warn',
      'all'
    ],
    'space-before-function-paren': [
      'warn',
      'never'
    ],
    'brace-style': [
      'warn',
      '1tbs',
      {
        allowSingleLine: false
      }
    ],
    'space-before-blocks': [
      'warn',
      'always'
    ],
    'object-property-newline': [
      'warn',
      {
        allowAllPropertiesOnSameLine: true
      }
    ],
    'one-var': [
      'warn',
      {
        'var': 'always',
        'let': 'always',
        'const': 'never'
      }
    ]
  }
};
