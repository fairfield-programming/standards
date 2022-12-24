function parseHtml(htmlData) {

    let tagName = "";

    let paramName = "";
    let paramValue = "";

    let params = {};
    let children = {};

    let i = 0;
    let state = 0;
    while (i < htmlData.length) {

        switch (state) {

            case 0:
                // Opening

                if (htmlData[i] == '<') {

                    state = 1;
                    break;

                } else {

                    throw new Error("Unexpected Token at Start of HTML! '" + htmlData[i] + "'");

                }

                break;

            case 1:
                // Tag Type

                if (htmlData[i] == ' ') {

                    state = 2;
                    break;

                }

                if (htmlData[i] == '>') {

                    state = 4;
                    break;

                }

                tagName += htmlData[i];

                break;
            case 2:
                // Parameter Name

                if (htmlData[i] == '=') {
                    
                    state = 3;
                    break;

                }

                if (htmlData[i].trim() != "")
                    paramName += htmlData[i];

                break;
            case 3:
                // Parameter Value
                
                if (htmlData[i] == ' ' && paramValue.endsWith('"')) {

                    state = 2;
                    params[paramName] = paramValue.slice(1, -1);
                    paramName = "";
                    paramValue = "";
                    break;

                }

                if (htmlData[i] == '>' && paramValue.endsWith('"')) {

                    state = 4;
                    params[paramName] = paramValue.slice(1, -1);
                    paramName = "";
                    paramValue = "";
                    break;

                }

                paramValue += htmlData[i];

                break;
            case 4:

                let [ _children, _i ] = Parse(htmlData.slice(i), '</');

                children = _children;
                i += _i;

                state = 5;

                break;

            case 5:

                if (htmlData[i] == '<') {

                    state = 6;
                    break;

                }

                break;
            case 6:

                if (htmlData[i] == '/') {

                    state = 7;
                    break;

                }

                break;
            case 7:

                if (htmlData[i] == '>') {

                    i++;
                    return [ {
                        type: `html_${tagName.toLowerCase()}`,
                        parameters: params,
                        children: children
                    }, i ];

                }

                break;
            
        }

        i++;
        
    }

    i++;

    return [ {
        type: `html_${tagName.toLowerCase()}`,
        parameters: params,
        children: children
    }, i ];

}

function Parse(fileData, until) {

    let body = [];

    let buffer = "";

    let state = 0;
    let i = 0;
    while (i < fileData.length) {

        let curChar = fileData[i];

        if (fileData[i] == '<' && fileData[i + 1] == '/') {

            if (buffer.trim() != "") body.push({ type: 'p', data: buffer.trim() });

            return [
                body,
                i - 1
            ]

        }

        switch (state) {

            case 0:
                // P

                if (curChar == '#' && buffer == "") { 
                    
                    buffer += "#";
                    state = 1;
                    break;

                }

                if (curChar == '<') {
                    
                    if (buffer.trim() != "") body.push({ type: "p", data: buffer });
                    buffer = "";
                    const [ htmlData, _i ] = parseHtml(fileData.slice(i));
                    body.push(htmlData);
                    i += _i - 1; // -1 bc we add one later
                    break;

                }

                if (curChar == '\n') {

                    state = 0;
                    if (buffer.trim() != "") body.push({ type: "p", data: buffer });
                    buffer = "";
                    break;

                }

                buffer += curChar;

                break;

            case 1:
                // H1
                
                // Check if line is ##
                if (curChar == "#" && buffer == "#") {

                    buffer += "#";
                    state = 2;
                    break;

                }

                if (curChar == '\n') {

                    state = 0;
                    body.push({ type: "h1", data: buffer.slice(1).trim() });
                    buffer = "";
                    break;

                }

                buffer += curChar;

                break;

            case 2:
                // H2
                
                // Check if line is ###
                if (curChar == "#" && buffer == "##") {

                    buffer += "#";
                    state = 3;
                    break;

                }

                if (curChar == '\n') {

                    state = 0;
                    body.push({ type: "h2", data: buffer.slice(2).trim() });
                    buffer = "";
                    break;

                }

                buffer += curChar;

                break;

            case 3:
                // H3
                
                // Check if line is ####
                if (curChar == "#" && buffer == "###") {

                    buffer += "#";
                    state = 4;
                    break;

                }

                if (curChar == '\n') {

                    state = 0;
                    body.push({ type: "h3", data: buffer.slice(3).trim() });
                    buffer = "";
                    break;

                }

                buffer += curChar;

                break;

            case 4:
                // H4
                
                // Check if line is #####
                if (curChar == "#" && buffer == "####") {

                    buffer += "#";
                    state = 5;
                    break;

                }

                if (curChar == '\n') {

                    state = 0;
                    body.push({ type: "h4", data: buffer.slice(4).trim() });
                    buffer = "";
                    break;

                }

                buffer += curChar;

                break;

            case 5:
                // H5
                
                if (curChar == '\n') {

                    state = 0;
                    body.push({ type: "h5", data: buffer.slice(5).trim() });
                    buffer = "";
                    break;

                }

                buffer += curChar;

                break;

        }

        i++;

    }
    
    return [
        body,
        i
    ]

}

module.exports = Parse;