import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Standard from "../components/standard"

function ProgramsPage() {

  let standards = require('../../data/standards.json')

  return (
    <Layout>
      <section className="mt-8">
        <div class="mx-auto max-w-screen-xl px-4 py-4">
          <h2 className="font-bold text-4xl mb-4">Standards</h2>
          <p className="text-xl mb-16 max-w-2xl">Below is a list of all the standards that are stored in the Vault. These standards are labeled with their current status.</p>
          <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
            {
                standards.map(item => Standard(item))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Programs" />

export default ProgramsPage
