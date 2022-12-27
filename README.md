<p align="center">
<img width="200" src="https://raw.githubusercontent.com/fairfield-programming/backend-server/d84cd53499177b9069d3a0a72c80701627190c18/.github/media/logo-full.svg">
</p>

# Fairfield Programming Association Vault

The Fairfield Programming Association Standards website provides open access to anyone who would like to adapt standards put forth by the FPA.

<p align="left">
<img src="https://img.shields.io/github/contributors/fairfield-programming/standards" alt="GitHub contributors">
<img src="https://img.shields.io/github/commit-activity/w/fairfield-programming/standards" alt="GitHub commit activity">
<img src="https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Ffairfieldprogramming.org" alt="Website">
<img src="https://img.shields.io/github/issues/fairfield-programming/standards" alt="GitHub issues">
<img src="https://img.shields.io/github/stars/fairfield-programming/standards" alt="GitHub Org's stars">
<img src="https://img.shields.io/github/languages/top/fairfield-programming/standards" alt="GitHub top language">
</p>

The new Fairfield Programming Association Standards website is built in Gatsby and uses Tailwind CSS for the styling. This enables us to keep down server costs while also providing an excellent user and developer experience. Most of our pages are DSG ([Deferred Static Generation](https://www.gatsbyjs.com/docs/how-to/rendering-options/using-deferred-static-generation/)), which means that most of the information on the website can be changed by modifying the information inside of the data folder.

## Features

## Setup

1. Download the project from Github.

2. Have Node, NPM, and Gatsby installed.

3. Run the below command to install the packages.

```bash
npm install
```

4. Run the below command to start the website.

```bash
gatsby develop
```

**Note:** It can take anywhere from a few seconds to a few minutes to start the website, but once the website is live, it does [hot reloading](https://www.gatsbyjs.com/docs/reference/local-development/fast-refresh/).

## Create
On `/create` page, the user can use the in-browser standard editor to create a standard file. On the left pane, the user can type in code. At the same time, on the right pane, a preview of the rendered standard document will appear.

## Search
The search feature lets users search for standards based on the name, authors, or category of the standard. This feature allows people to quickly access what they are looking for and adds to the maintainability of the entire website in the long term.

## Contribute
