# %WEBSITE_TITLE% Astro + ReactJS + Sanity Setup

This is the templatep project for we are lion dev Astro Blog websites, that use ReactJS library as a client side framework. We use Sanity.io as a headless CMS.

### Running the project

- Run `yarn` to install dependencies
- Run `yarn prepare` to configure husky
- Run `yarn start` to run Astro in Dev Mode
- Go to `./sanity` folder run `yarn dev` to run Sanity in Dev Mode

## 📙 Troubleshooting

- If you recieve an `YN0001: @fortawesome/fontawesome-free@npm:^6.4.2: Invalid authentication (as an unknown user)` in the Resolution step, open the `.yarnrc.yml` file and swap $FONTAWESOME with the value from the `.env` file. **(please after a succesfull install, revert `yarnrc.yml` to previous state)**
- `@sanity/cli` - How to set it up globally in order to run Sanity setup: https://www.sanity.io/docs/cli

## Variables

| Variable                     | Description                                                 |
| :--------------------------- | :---------------------------------------------------------- |
| `FONTAWESOME_NPM_AUTH_TOKEN` | FontAwesome NPM Auth Token                                  |
| `SANITY_STUDIO_PROJECT_ID`   | Sanity Project ID                                           |
| `SANITY_STUDIO_DATASET`      | Sanity Dataset                                              |
| `SANITY_AUTH_TOKEN`          | Sanity Deployment Token                                     |
| `SANITY_PORT`                | Sanity Development Port                                     |
| `ASTRO_WEBSITE_URL`          | URL of Astro Website                                        |
| `ASTRO_DISABLE_INDEXING`     | Disable or enable robots.txt indexing of the website        |
| `ASTRO_GTAG_ID`              | G Tag for Analytics in the following format: _G-XXXXXXXXXX_ |
| `ASTRO_GTM_ID`               | Google Tag Manager in the following format: _GTM-XXXXXXX_   |

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                                                                                        |
| :------------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| `yarn prepare`            | Setup Husky                                                                                                                   |
| `yarn postinstall`        | Runs after installing applies fixes for a package                                                                             |
| `yarn sanity`             | Runs a docker command and creates a Docker container with Sanity                                                              |
| `yarn sanity:down`        | Shutdown the docker containers for Sanity                                                                                     |
| `yarn dev` / `yarn start` | Run the Astro instance in development mode                                                                                    |
| `yarn dev:mobile`         | Runs Astro development enviroment on local IP address, so we can debug on Mobile                                              |
| `yarn build`              | Runs Astro build to get a production grade version of the code                                                                |
| `yarn preview`            | Runs Astro in Preview Mode                                                                                                    |
| `yarn astro`              | Astro CLI [https://docs.astro.build/en/reference/cli-reference/]                                                              |
| `yarn format`             | Runs Prettier with rewrite option and fixes errors in files                                                                   |
| `yarn format:ci`          | Runs Prettier with check option and just checks for errors used on CI for checking the quality of the code                    |
| ` yarn lint`              | Runs ESLint and checks for errors used on CI for checking the quality of the code                                             |
| `yarn commitlint`         | Runs Commitlint in order to check, if anything is missing in the Commit Message                                               |
| `yarn env:check`          | Runs Env check, to see if nescessary files are defined on your machine and later on the CI in order to run the build properly |

## 📜 Conventions

Git flow: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

Conventional Commits: https://www.conventionalcommits.org/en/

## 🐶 Husky

Husky Hooks:

### Commiting Code

#### _We have two checks in this stage:_

- Lint staged, Prettier and ESLint:
  - Lint staged is going to run Prettier and ESLint only on our modified files in order to save time

After checking our code, a check is issued for our commit message (we are using [Conventional Commits read more here.](https://www.conventionalcommits.org/en/))

- Commit message:
  - A check is running in order to see, if we have correctly typed our commit message
  - We adhere to a certian format, more can be read here.
  - In order to commit a succesfull message it must be on a correct `feature`/`fix` branch or supplied with the `XXX-000` JIRA tag. Branch example: `feature/XXX-5-header`, `fix/XXX-12-ui-bug`
  - If we are on a correct branch, a tool called `jira-prepare-commit-msg` will run and automatically add our Jira ticket ID to our commit message, eg: `git commit -m "feat: add a new feature"` will become `feat: [XXX-8] add a new feature`.
  - By correctly typing our commit messages we automatically recieve version bumps based on our commits and save precious GitHub time with failed checks, builds etc.

**If both check are complete, we will have a succesfull commit.**

### Pushing Code

#### _We have two checks in this stage:_

- `env:check`
  - Runs a check to see if all the nescesery envs are present in our `.env` file to run a succesfull build
  - This saves time by not running the next step and then failing because of an env variable
- `yarn build`
  - Runs Astro build to see if we have a succefull build

**If the checks are succesfull our code is pushed to the repository.**

## ⚙️ Project Template Setup

- Please use the `Use this template` option and clone to your respective repository
- After creating a new repository, proceed to clone it to your local machine and rename `%WEBSITE_TITLE%`, `weareliondev-astro-template` and `%project-name%` to according values. _(this will be automated in the future via CLI)_
- After creating the new repo, proceed to do `yarn` to install the nescessary packages. (_keep in mind the project is using Yarn v2_)
- Go inside the `.commitlintrc.cjs` and set the proper `jira-task-id-project-key` from `WDOPS` to your JIRA assigned tag
- After changing all this, create our first branch `feature/XXX-000-setup-sanity`, after transitioning to that branch we need to ensure that we have `@sanity/cli` installed globally on our pc and then run the command
- Run the `yarn -y create sanity@latest`, follow the steps the name for your sanity project should be: `project-name-sanity`, this should be in your JIRA ticket.
- Copy config files from `setup/sanity` and copy them over to your Sanity instance, `enable corepack`, `yarn set version berry` and move the Sanity instance to Yarn v2 as well.
- After creating the nescessary code, please proceed to push the code and setup ENV variables for this project.
- Please don't forget to run `yarn prepare`.
- Setup nescessary Plesk SSH Key and add it to the SSH Keys list, so we can run deployments
- Add slack bot and create the `%project-name%-ci` channel on slack
- Setup Github Action secrets

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│ └── pages/
│ └── index.astro
└── package.json
```

Astro looks for `.astro` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Github Action Secrets

_Besides the variables up top, that are required on all enviroments, these are just required in the project settings._
| Variable| Type | Description|
| :------------------------ | :------------------------ | :----------------------------------------------- |
| `FONTAWESOME_NPM_AUTH_TOKEN` | **Secret** | FontAwesome NPM Auth Token |
| `SANITY_STUDIO_PROJECT_ID` | **Secret** | Sanity Project ID |
| `SANITY_STUDIO_DATASET` | **Secret** | Sanity Dataset **Production** Enviroment |
| `SANITY_STUDIO_DATASET_DEV` | **Secret** | Sanity Dataset **Development** Enviroment |
| `SANITY_AUTH_TOKEN` | **Secret** | Sanity Deployment Token |
| `SANITY_PORT` | **Secret** | Sanity Development Port |
| `DEPLOY_SSH_HOST` | **Secret** | URL for the Deployment Server |
| `DEPLOY_SSH_KEY` | **Secret** | Deploy SSH Key for Server |
| `DEPLOY_SSH_PASSPHRASE` | **Secret** | Password for SSH Key |
| `DEPLOY_SSH_PORT` | **Secret** | PORT for SSH on the Deployment Server |
| `DEPLOY_SSH_USERNAME`| **Secret** | Username under which SSH key was made |
| `SLACK_BOT_TOKEN` | **Secret** | Slack bot token, this should come from the Organization. |
| `SLACK_CHANNEL_ID` | **Secret** | This is setup on per project basis under the `project-name-ci` channel |
| `ASTRO_WEBSITE_URL` | _Variable_ | URL of Astro Website |
| `ASTRO_DISABLE_INDEXING` | _Variable_ | Disable or enable robots.txt indexing of the website **Production** |
| `ASTRO_DISABLE_INDEXING_DEV` | _Variable_ | Disable or enable robots.txt indexing of the website **Development** |
| `ASTRO_GTAG_ID` | _Variable_ | G Tag for Analytics in the following format: _G-XXXXXXXXXX_ **Production** |
| `ASTRO_GTAG_ID_DEV` | _Variable_ | G Tag for Analytics in the following format: _G-XXXXXXXXXX_ **Development** |
| `ASTRO_GTM_ID` | _Variable_ | Google Tag Manager in the following format: _GTM-XXXXXXX_ **Production** |
| `ASTRO_GTM_ID_DEV` | _Variable_ | Google Tag Manager in the following format: _GTM-XXXXXXX_ **Development** |
| `DEPLOY_PATH` | _Variable_ | Deployment path on our Server Machine for **Production** builds |
| `DEPLOY_PATH_DEV` | _Variable_ | Deployment path on our Server Machine for **Development** builds |
| `DEPLOY_URL` | _Variable_ | URL for our **Production** Builds |
| `DEPLOY_URL_DEV` | _Variable_ | URL for our **Development** Builds |
| `SANITY_DEPLOY_PATH` | _Variable_ | Deployment path on our Server Machine for Sanity Studio |
| `SANITY_DEPLOY_URL` | _Variable_ | URL for our Sanity Studio |

## Adding Google Tag Manager (GTM) and Google Analytics 4 (GTAG)

- All you are required to do is have 2 containers or web streams that point to Dev and Production
- Enter the following values in the GitHub Variable for the Project or `.env.example` file in order to start using the tools: `ASTRO_GTAG_ID` / `ASTRO_GTAG_ID_DEV` and `ASTRO_GTM_ID` / `ASTRO_GTM_ID_DEV`
- The code automatically applies itself if the values are entered.
- If you are setting up everything for a client, please keep in mind to create it under @wearelion.dev account and invite your Project Manager and Product Owner to the Projects
- **Each subdomain created should always have it's own stream or container, you should never use one GTAG or GTM ID for multiple instances.**

## CI/CD Reporting on Slack

- In order to enable Workflows or CI/CD in the matter, we need to enable Slack CI/CD reporting
- To do this we need to fill the required Secrets in our Github Repo `SLACK_CHANNEL_ID` and `SLACK_BOT_TOKEN`
- You can find the ID for the `SLACK_BOT_TOKEN` in some of the other projects or request the token through a ticket
- You can find the `SLACK_CHANNEL_ID` under the `View channel details`, scrolling down and looking at `Channel ID`. (**Please note:** The channel should bear the name: `%project-name%-ci`)
- You also need to add the Bot to the channel, by clicking on the App `Github Actions Service`, selecting `View app details`, and selecting `Add app to channel option`.

## 👀 Want to learn more?

#### Astro documentation

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

#### Sanity Documentation

[Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)

[Read the blog post about this template](https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js?utm_source=readme)

[Join the community Slack](https://slack.sanity.io/?utm_source=readme)

[Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
