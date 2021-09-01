# Welcome to the exercise-check-installed-apps exercise!

This exercise checks your ability to manage GitHub Apps for your organization. It is automatically graded via a workflow once you have completed the instructions.

## About this exercise

:warning: A grading script exists under `.github/workflows/grading.yml`. You do not need to use this workflow for any purpose and **altering its contents will affect the repository's ability to assess your exercise and give feedback.**

:warning: This exercise utilizes [GitHub Actions](https://docs.github.com/en/actions), which is free for public repositories and self-hosted runners, but may incur charges on private repositories. See _[About billing for GitHub Actions]_ to learn more.

:information_source: The use of GitHub Actions also means that it may take the grading workflow a few seconds and sometimes minutes to run.

:closed_lock_with_key: This exercise asks you to create a personal access token (PAT). This step is a prerequisite of the exercise, and you should already be comfortable with PATs on GitHub before proceeding. The PAT is encrypted and used only by a local action that does not leave your repository. GitHub has safeguards in place if the PAT is exposed by mistake, but you should know that if someone gains access to your PAT, they would have the same access you've given the token. To be safe, we recommend setting an expiration for the token. If you'd like to learn more about how your PAT is used, check the action's documentation in [`.github/actions/`](.github/actions/), _[Personal Access Token - GitHub Docs]_, and _[token scopes]_.

:busts-in-silhouette: This exercise needs to be completed in an organization. We recommend you [create a new organization](https://github.com/account/organizations/new?coupon=&plan=team_free) for free. If you choose to use an existing organization, note that this exercise will ask you to adjust settings in the organization that may have unintended effects on existing repositories or organization members. 

## Instructions

<!-- Specific instructions for your exercise -->

Please complete the instructions below:

1. Create an organization-owned copy of this repository using the [Use this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template) button. 
2. Create a [PAT (personal access token)](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) with the `read:org` scope selected.
3. Store the PAT as an organization secret titled `EXERCISE_PAT`.
4. Install a GitHub App of your choice on this repository only. 
5. If your chosen GitHub App requires a configuration file, push that file to this repository to trigger the grading workflow. If your chosen GitHub App doesn't require configuration, push any commits to this repository or change and push changes to [`grading-config.yml`](grading_config.yml) to trigger the grading workflow.

<!-- Add your steps below starting with step 2 -->

## Seeing your result

Your exercise is graded automatically once you have completed the instructions. To see the result of your exercise, go to the **Actions** tab, and see the most recent run on the **Grading** workflow. <!-- specify expected Looking Glass display_type --><!-- specific place to look -->

<!-- Display types:
- actions
- issues
 -->

Below is an example of an incorrect solution and the feedback provided in the **Grading results:**

![image](https://user-images.githubusercontent.com/38021615/128258382-b4a79384-ce2d-4377-ae53-e37f8ca2c1a3.png)

See _[Viewing workflow run history]_ if you need assistance.

## Troubleshooting

If you are stuck with a step in the exercise or the grading workflow does not automatically run after you complete the instructions, run the troubleshooter: in the **Actions** tab select the **Grading workflow**, click **Run workflow**, select the appropriate branch, and click the **Run workflow** button.

![image](https://user-images.githubusercontent.com/38021615/128258382-b4a79384-ce2d-4377-ae53-e37f8ca2c1a3.png)

The troubleshooter will either display useful information to help you understand what you might have done wrong in your exercise or redirect you to the documentation relevant to your exercise to help you out.

See _[Running a workflow on GitHub]_ if you need assistance.

## Useful resources

Use these to help you!

Resources specific to this exercise:

<!-- - Add further resources for the learner -->

- [Removing sensitive data from a repository] - GitHub Docs

Resources for working with exercises and GitHub Actions in general:

- [Creating a repository from a template]

<!--
Links used throughout this README:
-->
<!-- Edit the links below to be relevant -->

[creating a repository from a template]: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template


[personal access token - github docs]: https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
[token scopes]: https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes
[Encrypted secrets - Github Docs]: https://docs.github.com/en/actions/reference/encrypted-secrets
