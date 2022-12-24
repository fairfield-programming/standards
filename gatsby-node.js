/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const fs = require("fs");
const parse = require("./src/utility/stdParser.js");
const clean = require('./src/utility/stdCleaner.js');

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  
  const standards = fs.readdirSync('./standards');

  const { createPage } = actions

  let standardsFileData = [];

  standards.forEach((standard, index) => {

    const standardData = fs.readFileSync('./standards/' + standard, 'utf-8');
    const stdData = parse(standardData);
    const cleanedData = clean(stdData);

    console.log(cleanedData);

    standardsFileData.push(cleanedData);

    createPage({
      path: `/standards/${cleanedData.slug}`,
      component: require.resolve("./src/templates/standard.js"),
      context: { ...cleanedData, index },
      defer: false,
    })

    createPage({
      path: `/standards/${cleanedData.slug}.html`,
      component: require.resolve("./src/templates/standardHtml.js"),
      context: { ...cleanedData, index },
      defer: false,
    })

  })

  fs.writeFileSync('./data/standards.json', JSON.stringify(standardsFileData, null, 4));

}
