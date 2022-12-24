function Clean(stdObject) {

    const body = stdObject[0];

    const titleObject = body.filter(item => item.type == 'h1')[0]
    const title = (titleObject || { data: "Empty Title" }).data

    const descriptionObject = body.filter(item => item.type == 'p' && item.data.length < 200)[0]
    const description = (descriptionObject || { data: "Empty Description" }).data

    const headObject = body.filter(item => item.type == 'html_head')[0]
    const head = (headObject || { children: [] }).children.map(item => {

        if (item.type == "html_tag") {

            return {
                type: "tag",
                data: item.children[0]?.data?.trim()
            };

        }

        if (item.type == "html_version"){ 

            return {
                type: "version",
                data: item.children[0]?.data?.trim()
            }

        }

        if (item.type == "html_slug"){ 

            return {
                type: "slug",
                data: item.children[0]?.data?.trim()
            }

        }

        if (item.type == "html_author"){ 

            return {
                type: "author",
                data: {
                    name: item.children[0]?.data?.trim(),
                    ...item.parameters
                }
            }

        }

    });

    if (head === undefined) head = [];

    const version = head.filter(item => item?.type == "version")[0]?.data
    const slug = head.filter(item => item?.type == "slug")[0]?.data
    const tags = head.filter(item => item?.type == "tag").map(item => item.data)
    const authors = head.filter(item => item?.type == "author").map(item => item.data)

    const cleanedBody = body.filter(item => item?.type != 'html_head')
    let sections = {};
    let curSection = "general";

    let tableOfContents = [];

    cleanedBody.forEach(element => {
        
        if (element.type == 'h2') {

            curSection = element.data.toLowerCase();
            tableOfContents.push({
                name: element.data,
                contents: []
            });
            return;

        }

        if (element.type == 'h3') {

            tableOfContents[tableOfContents.length - 1].contents.push({
                name: element.data,
                contents: []
            });
            return;

        }

        if (element.type == 'h4') {

            let subTable = tableOfContents[tableOfContents.length - 1].contents;

            subTable[subTable.length - 1].contents.push({
                name: element.data,
                contents: []
            });
            return;

        }

        if (element.type == 'h5') {

            let subTable = tableOfContents[tableOfContents.length - 1].contents;
            let subSubTable = subTable[subTable.length - 1].contents;

            subSubTable[subSubTable.length - 1].contents.push({
                name: element.data
            });
            return;

        }

        if (sections[curSection] == undefined) sections[curSection] = [];

        if (element.type == 'p')
            sections[curSection].push(element.data);

    });

    return {
        // head,
        title,
        description,
        version,
        tags,
        slug,
        authors,
        sections,
        tableOfContents,
        body: cleanedBody
    };

}

module.exports = Clean;