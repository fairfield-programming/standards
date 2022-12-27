import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Standard from "../components/standard"

const Category = ({ pageContext }) => {

    const { slug, category, standards } = pageContext;

    return <Layout>
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-16">
                <span>With {standards.length} Standard{(standards.length > 1) ? 's' : ''}</span>
                <h1 className="font-bold text-4xl">{category}</h1>
                <div class="grid gap-4 grid-cols-1 md:grid-cols-2 mt-4">
                    {
                        standards.map(item => Standard(item))
                    }
                </div>
            </div>
        </section>
    </Layout> 

}

export const Head = ({ pageContext }) => <Seo 
    title={`${pageContext.category}`} 
    description={pageContext.description} />

export default Category
