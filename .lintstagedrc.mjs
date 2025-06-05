export default {
  '!(*.{ts,tsx})': 'npx prettier --write',
  '*.{ts,tsx}': ['npx eslint --fix --max-warnings 0', 'npx prettier --write'],
}
