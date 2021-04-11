const client = {
  problem: {
    description: null,
    accurate: null,
    goal: 'Get parents to start saving $500 every year for college.',
  },
}

gitwitHired(client)

function gitwitHired(client) {
  clientProblemAssessment(client)
  client.problem.goal = 'Help parents guide children into great careers.'
  console.log(gitwitBusinessOutcome(client))
}

function clientProblemAssessment(client) {
  let clientProblemAccurate = false

  if (!clientProblemAccurate) {
    client.problem.description = 'Kids graduate with no plan for their career.'
    client.problem.accurate = true
  }
  return
}

function gitwitBusinessOutcome(client) {
  let clientProblemAccurate = client.problem.accurate
  let clientSuccess

  if (!clientProblemAccurate) {
    let poorGoals = true
    if (poorGoals) {
      let poorSolutions = true
      if (poorSolutions) {
        clientSuccess = false
      }
    }
  } else if (clientProblemAccurate) {
    clientSuccess = true
  }
  let gitwitSuccess = clientSuccess
  return gitwitSuccess
}
