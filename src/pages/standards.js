import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Standard from "../components/standard"
import Search from "../components/search"

function filterStandard(standards, searchTerm) {
  searchTerm = searchTerm.toLowerCase()
  return standards.filter(standard => {
    if (searchTerm === "") {
      return true
    } else if (standard.title.toString().toLowerCase().includes(searchTerm)) {
      return true
    } else if (
      standard.authors.filter(author =>
        author.name.toLowerCase().includes(searchTerm)
      ).length > 0
    ) {
      return true
    } else if (
      standard.tags.filter(tag => tag.toLowerCase().includes(searchTerm))
        .length > 0
    ) {
      return true
    } else return false
  })
}

function ProgramsPage() {
  let standards = require("../../data/standards.json")
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <Layout>
      <section className="mt-8">
        <div class="mx-auto max-w-screen-xl px-4 py-4">
          <h2 className="font-bold text-4xl mb-4">Standards</h2>
          <p className="text-xl mb-3 max-w-2xl">
            Below is a list of all the standards that are stored in the Vault.
            These standards are labeled with their current status.
          </p>
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          ></Search>
          <div class="grid gap-4 grid-cols-1 md:grid-cols-2 mt-6">
            {filterStandard(standards, searchTerm).map(item => Standard(item))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Standards" description="Standards" />

export default ProgramsPage
