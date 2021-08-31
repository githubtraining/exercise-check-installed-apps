module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(948);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 244:
/***/ (function(module, __unusedexports, __webpack_require__) {

const github = __webpack_require__(933);
const core = __webpack_require__(727);

module.exports = async () => {
  const token = core.getInput("exercise-token");
  const octokit = github.getOctokit(token);
  const context = github.context;
  const { owner } = context.repo;

  const res = await octokit.rest.orgs.listAppInstallations({
    org: owner,
  });

  const installations = res.data;
  // const stringifiedInstallations = JSON.stringify(installations);

  // "total_count": 0,
  // "installations": [
  // {
  //   "repository_selection": "all",

  // ]

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


/***/ }),

/***/ 727:
/***/ (function(module) {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 933:
/***/ (function(module) {

module.exports = eval("require")("@actions/github");


/***/ }),

/***/ 948:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(727);

const gradeLearner = __webpack_require__(244);

async function run() {
  try {
    const results = await gradeLearner();
    core.setOutput("reports", results);
  } catch (error) {
    core.setFailed(error);
  }
}

run();


/***/ })

/******/ });