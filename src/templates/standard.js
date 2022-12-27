import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Person from "../components/person"

const Standard = ({ pageContext }) => {

    const { slug, title, description, authors, version, sections } = pageContext;

    const { purpose } = sections;

  return <Layout>
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16">
            <span>Version {version}</span>
            <h1 className="font-bold text-4xl">{title}</h1>
            <div className=" mb-4">
                <a class="text-sky-400 hover:underline hover:text-sky-500" href={`/standards/${slug}.html`}>View as HTML</a> 
                {/* &nbsp; &bull; &nbsp;
                <a class="text-sky-400 hover:underline hover:text-sky-500" href={`/standards/pdf/standards-${slug}-html.pdf`}>View as PDF</a> */}
            </div>
            <p className="text-xl mb-16 max-w-2xl">{description}</p>
            
            {/* Purpose Section */}
            {
                purpose && <>
                    <h2 className="font-bold text-3xl mb-4">Purpose</h2>
                    <div class="mb-16"> 
                        {purpose.map(item => <p className="text-xl mb-2">{item}</p>)}
                    </div>
                </>
            }

            {/* Joining Section */}
            {
                authors && <>
                    <h2 className="font-bold text-3xl mb-4">Authors</h2>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        {authors.map(author => Person(author))}
                    </div>
                </>
            }
        </div>
      </section>
  </Layout> 
}

export const Head = ({ pageContext }) => <Seo 
    title={`${pageContext.title}`} 
    description={pageContext.description} />

export default Standard
