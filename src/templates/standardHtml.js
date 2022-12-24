import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Person from "../components/person"

const GenerateTitle = (pageContext) => {

    const { title, authors, version } = pageContext;
    const formatter =  new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

    return <section id="title" className="h-screen w-full flex flex-col justify-center items-center text-center">
        <h1 class="text-4xl font-black px-4">{title}</h1>
        <span class="text-xl font-bold px-4 mb-16">Version {version}</span>
        <span class="text-lg px-4">Authored by</span>
        <span class="text-lg px-4">{formatter.format(authors.map(author => author?.name || ""))}</span>
    </section>

}

const GenerateTableOfContents = (pageContext) => {

    const { title, authors, version, tableOfContents } = pageContext;
    const formatter =  new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

    console.log(tableOfContents);

    return <section id="table-of-contents" className="max-w-3xl mx-auto px-4 py-8">
        <h2 class="text-3xl font-black">Table of Contents</h2>
        <nav class="px-8 mt-4">
            <ol>
                {
                    tableOfContents.map(item => RenderTableOfContents(item))
                }
            </ol>
        </nav>
    </section>

}

const RenderTableOfContents = (tableOfContents) => {

    return <li class="list-disc">
                {tableOfContents.name}
                <ol class="pl-4">
                    {tableOfContents.contents.map(item => RenderTableOfContents(item))}
                </ol>
            </li>

}

const convertToId = (text) => {
    
    return text.replace(/ /g, '-').replace(/(?![a-zA-Z\-])/, '').toLowerCase();

}

const RenderStd = (pageContext) => {

    const output = [[]];
    const { body } = pageContext;
    console.log(pageContext)

    body.forEach(item => {
        
        if (item.type == "h2") {

            // We want the HTML to be as Semantic as Possible
            output.push([
                <h2 class="text-3xl font-black mt-4 mb-2" id={convertToId(item.data)}>{item.data}</h2>
            ]);

        }

        if (item.type == "h3") {

            // We want the HTML to be as Semantic as Possible
            output[output.length - 1].push(<h3 class="text-2xl font-black mt-4 mb-2" id={convertToId(item.data)}>{item.data}</h3>);

        }

        if (item.type == "p") {

            // We want the HTML to be as Semantic as Possible
            output[output.length - 1].push(<p class="mb-2">{item.data}</p>);

        }

        if (item.type == "html_note") {

            // We want to show a big note on the page
            output[output.length - 1].push(<details open type="note" className="bg-yellow-300 rounded p-4 my-4">
                <summary className="font-bold">{item.parameters["name"] || "Note"}</summary>
                {item.children.map(item => item.data)}
            </details>)

        }

    });

    return <>
        {output.map(item => <section className="max-w-3xl mx-auto px-4 py-4">
            {item}
        </section>)}
    </>

}

const Standard = ({ pageContext }) => {

    const { slug, title, description, authors, version, sections } = pageContext;

    const { purpose } = sections;

    return <main>
        {GenerateTitle(pageContext)}
        {GenerateTableOfContents(pageContext)}
        {RenderStd(pageContext)}
    </main>

}

export const Head = ({ pageContext }) => <Seo 
    title={`${pageContext.title}`} 
    description={pageContext.description} />

export default Standard
