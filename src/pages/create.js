import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import StandardHtml from "../templates/standardHtml"

import parse from "../utility/stdParser.js";
import clean from '../utility/stdCleaner.js';

const example = `
<head>
   <tag>Testing</tag>
   <tag>Example</tag>
</head>

# Title Here

The main focus of the software is to blah blah blah blah.
`;

function CreatePage() {

    const [ data, setData ] = React.useState(example);

    const stdData = parse(data);
    const cleanedData = clean(stdData);

    return (
        <Layout>
            <section class="w-screen h-screen flex flex-row">
                <div class="w-1/2 h-full">
                    <textarea class="w-full h-full bg-slate-100 outline-0 p-2" onChange={(e) => { setData(e.target.value) }}>{data}</textarea>
                </div>
                <div class="w-1/2 h-full bg-white overflow-scroll">
                    <StandardHtml pageContext={cleanedData} />
                </div>
            </section>
        </Layout>
    )

}

export const Head = () => <Seo title="Create" />

export default CreatePage
