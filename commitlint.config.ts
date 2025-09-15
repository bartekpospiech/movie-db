import type { UserConfig } from '@commitlint/types'

import { RuleConfigSeverity } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [RuleConfigSeverity.Error, 'always', ['feat', 'fix', 'docs', 'refactor', 'chore', 'merge']],
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'type-empty': [RuleConfigSeverity.Error, 'never'],
    'subject-max-length': [RuleConfigSeverity.Error, 'always', 120],
    'subject-min-length': [RuleConfigSeverity.Error, 'always', 3],
  },
}

module.exports = Configuration
