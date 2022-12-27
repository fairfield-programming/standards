/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const fs = require("fs");
const parse = require("./src/utility/stdParser.js");
const clean = require('./src/utility/stdCleaner.js');

function slugify(name) {

  return name.replace(/ /g, '-').replace(/(?![a-zA-Z\-])/g, '').toLowerCase();

}

// exports.onPostBuild = ({ page, actions }) => {
  
//   let files = fs.readdirSync("public/standards");

//   files = files.filter(file => !file.endsWith('.html'))
//   console.log(files);

// }

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = ({ actions }) => {
  
  const standards = fs.readdirSync('./standards');

  const { createPage } = actions

  let standardsFileData = [];
  let standardCategories = {};

  standards.forEach((standard, index) => {

    const standardData = fs.readFileSync('./standards/' + standard, 'utf-8');
    const stdData = parse(standardData);
    const cleanedData = clean(stdData);

    cleanedData.tags.forEach(tag => {

      if (standardCategories[tag] == undefined) {

        standardCategories[tag] = [];

      }

      standardCategories[tag].push(cleanedData);

    })

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

    // Todo: Generate PDF Versions of Each Standard

  })

  Object.keys(standardCategories).forEach(category => {

    const values = standardCategories[category];
    const slugifiedCategory = slugify(category);

    createPage({
      path: `/categories/${slugifiedCategory}`,
      component: require.resolve("./src/templates/category.js"),
      context: { standards: values, slug: slugifiedCategory, category },
      defer: false,
    })

  })

  fs.writeFileSync('./data/standards.json', JSON.stringify(standardsFileData, null, 4));

}
