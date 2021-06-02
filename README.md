<span>

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Starware](https://img.shields.io/badge/Starware-⭐-black?labelColor=f9b00d)](https://github.com/zepfietje/starware)

</span>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<p align="center">
  <a href="https://github.com/dscnitrourkela/project-guava-web">
    <img src="images/Signit.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Signit</h3>

  <p align="center">
    Digital Certificate Generation and Distribution
    <br />
    <br />
    <a href="https://signit.dscnitrourkela.org">View Demo</a>
    ·
    <a href="https://github.com/dscnitrourkela/project-guava-web/issues">Report Webapp Bugs</a>
    .
    <a href="https://github.com/dscnitrourkela/project-guava/issues">Report Server Bugs</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      </ul>
        <li><a href="#built-with">Built With</a></li>
        <!-- <li><a href="#configuration">Configuration</a></li> -->
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#contribution-guidlines">Contribution guidlines</a></li>
        <li><a href="#local-repository-setup">Local Repository Setup</a></li>
        <li><a href="#running-the-project">Running the project</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#dsc-nit-rourkela">DSC NIT Rourkela</a></li>
    <li><a href="#starware">Starware</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

## About The Project

[![Signit Certificate Compose][product-screenshot]](https://signit.dscnitrourkela.org)

A completely digital and customizable solution for managing all your certificates.

- The project repository for the web application of an open system to generate and manage certificates.
- Login to initiate a request to authorize a certificate.
- After successful authorization, digitally sign the certificate.
- Once done, distribute to the participants through our portal.

Features:

- No restrictions on certificate design. Upload your own designs.
- Easily drag and drop the location of sign on the certificate.
- Add a maximum of 3 signees per certificate.
- Manage easily all your approved and pending certificates via our dashboard.

A list of commonly used resources that I find helpful are listed in the
acknowledgements.

### Built With

Following technologies and libraries are used for the development of this
project.

- [Create React App](https://create-react-app.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Material UI](https://www.typescriptlang.org/)
- [React Konva](https://konvajs.org/docs/react/index.html)
- [React Testing Library](https://testing-library.com/)

<!-- GETTING STARTED -->

## Getting Started

To setup the project locally follow the steps below

### Prerequisites

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

### Contribution guidlines 🎃

---

Our Slack Community: [Slack Invite](http://bit.ly/NITRDevs) <br>

`Contributions are welcome 🎉🎉`

### Local Repository Setup

Please refer to the project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

1.  **Fork** the repo on GitHub
2.  **Clone** the project to your local system
3.  **Commit** changes to your own separate branch
4.  **Push** your work back up to your fork
5.  Submit a **Pull request** so that we can review your changes

NOTE 1: Please abide by the [Contributing Guidelines](https://github.com/dscnitrourkela/project-guava-web/blob/master/CONTRIBUTING.md).

NOTE 2: Please abide by the [Code of Conduct](https://github.com/dscnitrourkela/project-guava-web/blob/master/CODE_OF_CONDUCT.md).

### Running the project.

The project uses Yarn and not NPM. It is strictly advised to stick with Yarn so as to avoid dependency conflicts down the line.

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

## Roadmap

The following project is in its v1 stage. We are open to new features and suggestions. As of now, following are the features that we plan to integrate.

- Set up time of distribution for automatice certificates distributions.
- Complaint management system for disputes.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## DSC NIT Rourkela

Project developed and maintained by [DSC NIT Rourkela](https://dscnitrourkela.org/)
![DSC NIT Rourkela Cover Image](./repoCover.png)

## Starware

dscnitrourkela/project-guava is Starware.
This means you're free to use the project, as long as you star its GitHub repository.
Your appreciation makes us grow and glow up. ⭐

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/DesignrKnight"><img src="https://avatars0.githubusercontent.com/u/27865704?v=4" width="100px;" alt=""/><br /><sub><b>Abel Mathew</b></sub></a><br /><a href="https://github.com/dscnitrourkela/project-guava/commits?author=DesignrKnight" title="Code">💻</a> <a href="#ideas-DesignrKnight" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-DesignrKnight" title="Maintenance">🚧</a> <a href="#ideas-DesignrKnight" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://allcontributors.org"><img src="https://avatars1.githubusercontent.com/u/46410174?v=4" width="100px;" alt=""/><br /><sub><b>All Contributors</b></sub></a><br /><a href="#tool-all-contributors" title="Tools">🔧</a></td>
    <td align="center"><a href="https://github.com/actions"><img src="https://avatars1.githubusercontent.com/u/65916846?v=4" width="100px;" alt=""/><br /><sub><b>actions-user</b></sub></a><br /><a href="#tool-actions-user" title="Tools">🔧</a></td>
    <td align="center"><a href="https://github.com/riteshsp2000"><img src="https://avatars3.githubusercontent.com/u/56112399?v=4" width="100px;" alt=""/><br /><sub><b>Ritesh Patil</b></sub></a><br /><a href="https://github.com/dscnitrourkela/project-guava/commits?author=riteshsp2000" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/dscnitrourkela/project-guava-web?style=for-the-badge
[contributors-url]: https://github.com/dscnitrourkela/project-guava-web/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dscnitrourkela/project-guava-web?style=for-the-badge
[forks-url]: https://github.com/dscnitrourkela/project-guava-web/network/members
[stars-shield]: https://img.shields.io/github/stars/dscnitrourkela/project-guava-web?style=for-the-badge
[stars-url]: https://github.com/dscnitrourkela/project-guava-web/stargazers
[issues-shield]: https://img.shields.io/github/issues/dscnitrourkela/project-guava-web?style=for-the-badge
[issues-url]: https://github.com/dscnitrourkela/project-guava-web/issues
[license-shield]: https://img.shields.io/github/license/dscnitrourkela/project-guava?style=for-the-badge
[product-screenshot]: images/Compose.png
[dsc-nitrourkela]: image/repoCover.png
