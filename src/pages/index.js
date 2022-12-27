import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

function IndexPage() {

  return (
    <Layout>
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
            Public Standards,
              <strong class="font-extrabold text-active sm:block">
                &nbsp;Made for All.
              </strong>
            </h1>

            <p class="mt-4 sm:text-xl sm:leading-relaxed">
              We build simple, innovative, and modular standards without layers of bureaucracy and nonsense.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                class="block w-full rounded bg-active px-12 py-3 text-sm font-medium text-white shadow hover:bg-active focus:outline-none focus:ring active:bg-active sm:w-auto"
                to="/standards"
              >
                View Standards
              </Link>

              <Link
                class="block w-full rounded px-12 py-3 text-sm font-medium text-active shadow hover:text-active focus:outline-none focus:ring active:text-active sm:w-auto"
                to="/purpose"
              >
                Our Purpose
              </Link>
            </div>
          </div>
        </div>
      </section> 
      <section>
        {/* <Categories/> */}
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
