/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

const styles = {
    "h1": "text-3xl font-extrabold sm:text-5xl",
    "h2": "text-2xl font-extrabold sm:text-3xl mt-4 mb-4",
    "h3": "",
    "h4": "",
    "h5": "",
    "p": "text-lg mb-2",
    "a": "text-sky-400 hover:text-sky-500 hover:underline"
};

const FindInlineTokens = (line) => {

    line = line.replace(/\[([\w\s\d]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+)\)/, function (x) {
        
        let label = x.slice(1, x.indexOf("]"));
        let link = x.slice(x.indexOf("(") + 1, x.length - 1);

        return `<a class="${styles["a"]}" href="${link}">${label}</a>`;

    });


    return line;

}

const Markdown = ({ data }) => {

    const lines = data.split('\n');

    return lines.map((line) => {

        if (line.startsWith('# ')) return <h1 className={styles["h1"]} dangerouslySetInnerHTML={{ __html: FindInlineTokens(line.slice(2)) }} />
        if (line.startsWith('## ')) return <h2 className={styles["h2"]} dangerouslySetInnerHTML={{ __html: FindInlineTokens(line.slice(3)) }} />
        if (line.startsWith('### ')) return <h3 className={styles["h3"]} dangerouslySetInnerHTML={{ __html: FindInlineTokens(line.slice(4)) }} />
        if (line.startsWith('#### ')) return <h4 className={styles["h4"]} dangerouslySetInnerHTML={{ __html: FindInlineTokens(line.slice(5)) }} />
        if (line.startsWith('##### ')) return <h5 className={styles["h5"]} dangerouslySetInnerHTML={{ __html: FindInlineTokens(line.slice(6)) }} />

        if (line == "") return;

        return <p className={styles["p"]} dangerouslySetInnerHTML={{ __html: FindInlineTokens(line) }} />;

    })
}

export default Markdown
