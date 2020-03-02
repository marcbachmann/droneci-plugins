#!/usr/bin/env node
const eslint = require('eslint')
const cli = new eslint.CLIEngine({extensions: ['.js', '.vue']})
const argv = process.argv.slice(2)
const files = argv.length ? argv : ['./']

const {errorCount, warningCount, results} = cli.executeOnFiles(cli.resolveFileGlobPatterns(files))
const message = []

if (errorCount) {
  process.exitCode = 1
  message.push(`${errorCount} Errors`)
}

if (warningCount) {
  message.push(`${warningCount} Warnings`)
}

if (!message.length) {
  message.push(`Congrats, everything's fine`)
}

const format = cli.getFormatter('pretty')
const log = format(results)

process.stdout.write(`${message.join('\n')}\n`)
if (log) process.stdout.write(log)

if (process.env.GH_TOKEN) {
  const github = require('@octokit/rest')()
  github.authenticate({type: 'token', token: process.env.GH_TOKEN})

  github.repos.createStatus({
    sha: process.env.DRONE_COMMIT_SHA,
    target_url: `${process.env.DRONE_BUILD_LINK}`,
    owner: process.env.DRONE_REPO_OWNER,
    repo: process.env.DRONE_REPO_NAME,
    context: 'eslint',
    description: message.join(', '),
    state: errorCount ? 'failure' : 'success'
  })
}
