# Gatsby Theme Job Board

Job Board theme for Gatsby.

[Demo](https://gatsby-theme-job-board.netlify.com)

## Getting started

To use this theme in your Gatsby site, follow these instructions:

1.  Install the theme

    ```sh
    npm install --save @smnk/gatsby-theme-job-board
    ```

2.  Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
      plugins: ["@smnk/gatsby-theme-job-board"],
    }
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```

## Configuration

Example:

```js
module.exports = {
  siteMetadata: {
    title: "My Gatsby Job Board",
    author: "Your Name",
    description:
      "Description of your job board. Should be short as it will be displayed on all pages.",
    siteUrl: "https://yoursite.com",
  },
}
```

Change your sites logo in `content/assets/`. Can be any image format.

## Adding/editing jobs

Jobs can be edited and added via Markdown files. You'll find those in `content/jobs`. You can supply all necessary details like below. The url will be linked below the job description to apply.

```yaml
---
title: Theme Developer
company: Gatsby
location: Remote
date: "2019-07-31"
companyLogo: "./logo.png"
url: https://gatsbyjs.org
---
Description goes here.

And so on.

```