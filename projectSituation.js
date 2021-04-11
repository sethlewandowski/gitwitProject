let clientSuccess = Boolean

const client = {
  problem: {
    description: 'Get parents to start saving $500 every year for college.',
    isCorrect: false,
  },
}

const gitwitHired = () => {
  let clientAssessment = "Client doesn't understand their problem."
  let actualClientProblem = 'Kids graduate with no plan for their career.'
  if (clientAssessment && actualClientProblem) {
    client.problem.description =
      'Help parents guide children into great careers.'
    client.problem.isCorrect = true
    return JSON.stringify(client.problem.description)
  }
}

console.log(gitwitHired())
