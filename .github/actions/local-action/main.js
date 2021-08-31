const core = require("@actions/core");

const gradeLearner = require("./lib/gradeLearner");

async function run() {
  try {
    const token = core.getInput("exercise-token");
    if (!token) {
      throw "You didn't supply a valid EXERCISE_PAT at the organization level";
    }
    const results = await gradeLearner();
    core.setOutput("reports", results);
  } catch (error) {
    core.setFailed(error);
  }
}

run();
