---
sidebar_position: 1
---

# Getting Started

Let's set up **Signit** on your local server **in less than 5 minutes**.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
```sh
  # Homebrew
  brew install nodejs

  # Sudo apt
  sudo apt install nodejs

  # Packman
  pacman -S nodejs

  # Module Install
  dnf module install nodejs:<stream> # stream is the version

  # Windows (chocolaty)
  cinst nodejs.install
```

- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

```sh
  npm install --global yarn
```

- [Git](https://git-scm.com/downloads)

```sh
  # Homebrew
  brew install git

  # Sudo apt
  apt-get install git

  # Packman
  pacman -S git

  # Module Install (Fedora)
  dnf install git
```

## Yarn vs Npm
- Yarn, initially released by Facebook in 2016, is another popular package manager for the JavaScript programming language. The intention behind creating Yarn was to address some of the performance and security shortcomings of working with npm (at that time).
- The performance of your package manager is an important consideration when managing a large number of packages. Since development is arduous, you need a performant tool that will not weigh you down.
- Though in recent times, especially from v5 and v6, npm has been considerably bridging the gap with Yarn, Yarn is still faster in most cases.
- The project uses Yarn and not NPM. It is strictly advised to stick with Yarn so as to avoid dependency conflicts down the line.

```
## Checkout into the project client directory
cd client

## Install Dependencies
yarn install

## Run the Project
yarn start

```

Following are the commands to remove/add new dependencies using yarn

```
## Add a new Package
yarn add package_name

## Remove an existing Package
yarn remove package_name

## Save Package as a Dev Dependency
yarn add -D package_name
```

## Start your site

- Install the dependencies.

```shell
cd project-guava-web/client

yarn install
```

- Start your development server
```
yarn start
```

Your site starts at `http://localhost:3000`.

## Start your documentation site

- Install the dependencies.

```shell
cd project-guava-web/docs

yarn install
```

- Start your development server
```
yarn start
```

Your site starts at `http://localhost:3000`.
