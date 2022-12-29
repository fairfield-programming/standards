import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

function CategoriesPage() {
  let standards = require("../../data/standards.json")
  let standardCategories = []
  standards.forEach(standard => {
    standard.tags.forEach(tag => {
      if (standardCategories.indexOf(tag) === -1) {
        standardCategories.push(tag)
      }
    })
  })

  function slugify(name) {
    return name
      .replace(/ /g, "-")
      .replace(/(?![a-zA-Z\-])/g, "")
      .toLowerCase()
  }

  return (
    <Layout>
      <section>
        <div class="mx-auto max-w-6xl px-4 pb-16 flex flex-col mt-8">
          <h2 className="font-bold text-4xl mb-4">Categories</h2>
          <p className="text-xl mb-3 max-w-2xl">
            Below is a list of all the categories of standards stored in the
            Vault. Click a category to view all standards in this category.
          </p>
          <div class="grid gap-4 grid-cols-2 md:grid-cols-4 mt-6">
            {standardCategories.map(standardCategory => (
              <div className="text-center hover:underline hover:decoration-sky-700 hover:scale-125 duration-300">
                <Link to={"/categories/" + slugify(standardCategory)}>
                  {standardCategory}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Categories" />

export default CategoriesPage
