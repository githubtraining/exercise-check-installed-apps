const github = require("@actions/github");
const core = require("@actions/core");

module.exports = async () => {
  const token = core.getInput("exercise-token");
  const octokit = github.getOctokit(token);
  const context = github.context;
  const { owner } = context.repo;

  const res = await octokit.rest.orgs.listAppInstallations({
    org: owner,
  });

  const installations = res.data;

  try {
    // check for value in array
    const foundSelectedRepos = installations.installations.find(
      (installation) => installation.repository_selection === "selected"
    );
    //   Do some logic to verify the leaner understands
    // org_app_count > 1 && selectedRepos
    if (installations.total_count >= 1 && foundSelectedRepos) {
      return {
        reports: [
          {
            filename: "",
            isCorrect: true,
            display_type: "issues",
            level: "info",
            msg: "Great job!",
            error: {
              expected: "",
              got: "",
            },
          },
        ],
      };
      // BAD-RESULT
      // else if org_app_count < 1 || !selectedRepos
    } else {
      return {
        reports: [
          {
            filename: "",
            isCorrect: false,
            display_type: "issues",
            level: "warning",
            msg: `incorrect solution`,
            error: {
              expected:
                "We expected BOTH an app installation count of 1 or greater AND an app to be installed on only **selected** repos",
              got: `{numberOfapp: ${installations.total_count},selectedRepoStatus: ${foundSelectedRepos}}`,
            },
          },
        ],
      };
    }
  } catch (error) {
    return {
      reports: [
        {
          filename: filename,
          isCorrect: false,
          display_type: "issues",
          level: "fatal",
          msg: "",
          error: {
            expected: "",
            got: "An internal error occurred.  Please open an issue at: https://github.com/githubtraining/exercise-check-installed-apps and let us know!  Thank you",
          },
        },
      ],
    };
  }
};
