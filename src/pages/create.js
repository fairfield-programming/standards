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
    <version>1.0.0</version>
    <author github="william-mcgonagle" email="mcgonaglew@fairfieldprogramming.org">
        William McGonagle
    </author>
</head>

# Example Title

This is a short description of what the standard is all about. You can write one or two sentences about it!

## Purpose

We recommend adding a few paragraphs about the purpose of the standard so that people understand what you are talking about. All of these paragraphs will be added to the about page of your standard so that people understand better before reading.

### Inspiration or Past Standards

You can write about ideas, documents, or past standards that may have led to this standard.

### For use with XYZ

Here, you can include some sections for what your standard should be used with.

## Behavior

## Architecture

## Measurable Characteristics

## Policy/ Management Requirements

## Examples

## Confirmation Tests

`;

function CreatePage() {

    const [ data, setData ] = React.useState(example);

    const stdData = parse(data);
    const cleanedData = clean(stdData);

    return (
        <Layout>
            <section class="w-screen h-screen flex flex-row border-y-2">
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
