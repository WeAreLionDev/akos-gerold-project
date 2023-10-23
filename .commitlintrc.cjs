const config = {
  plugins: ['@mindblowing/commitlint-plugin-jira-rules'],
  extends: ['@commitlint/config-conventional', '@mindblowing/commitlint-config-jira'],
  rules: {
    'subject-case': [2, 'always', 'sentence-case'],
    // commitlint jira rules @see https://github.com/noahlaux/commitlint-jira#rules
    'jira-task-id-project-key': [2, 'always', ['AKOS', 'NOJIRA']],
  },
}

module.exports = config
