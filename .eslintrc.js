module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: [
          'tsconfig.*?.json',
          'test/e2e/tsconfig.e2e.json'
        ],
        createDefaultProgram: true
      },
      extends: [
        'plugin:@angular-eslint/recommended',
        'airbnb-typescript/base',
        'prettier'
      ],
      rules: {
        'import/prefer-default-export': 'off',
        'max-len': [
          'error',
          {
            'code': 80,
            'ignoreTrailingComments': true,
            'ignoreUrls': true
          }
        ],
        'no-console': [
          'error',
          {
            allow: ['error', 'warn']
          }
        ]
      }
    },
    {
      files: ['*.component.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        'max-len': ['error', {'code': 80}]
      }
    },
    {
      files: ['*.component.ts'],
      extends: ['plugin:@angular-eslint/template/process-inline-templates']
    },
    {
      files: [
        'src/**/*.spec.ts',
        'src/**/*.d.ts'
      ],
      parserOptions: {
        project: './tsconfig.spec.json',
      },
      // Jest rules
      extends: ['plugin:jest/recommended'],
      // Plugin to run Jest rules
      plugins: ['jest'],
      env: {
        'jest/globals': true
      },
      // Turn off 'no-unused-vars' rule
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error'
      }
    }
  ]
}
