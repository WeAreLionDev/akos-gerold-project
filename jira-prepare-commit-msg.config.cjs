const config = {
  messagePattern: '[$J] $M',
  jiraTicketPattern: '([A-Z]+-\\d+)',
  isConventionalCommit: true,
  conventionalCommitPattern: '^([a-z]+)(\\([a-z0-9.,-_ ]+\\))?!?: ([\\w \\S]+)$',
  allowEmptyCommitMessage: false,
  allowReplaceAllOccurrences: true,
  ignoredBranchesPattern: '^(master|main|dev|develop|development|release)$',
  ignoreBranchesMissingTickets: false,
}

module.exports = config
