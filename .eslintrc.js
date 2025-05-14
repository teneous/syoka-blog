module.exports = {
    root: true,
    extends: ['next/core-web-vitals', 'prettier'],
    overrides: [
      // TypeScript 文件使用 TypeScript 解析器和规则
      {
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint'],
        extends: ['plugin:@typescript-eslint/recommended'],
        rules: {
          '@typescript-eslint/no-explicit-any': 'error',
          '@typescript-eslint/no-unused-vars': 'error',
        },
      },
    ],
}