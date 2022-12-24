import * as React from "react"
import { Link } from "gatsby"

function Person({ name, github, email }) {

    let slug = `https://github.com/${github}`;

    return <a className="block w-full h-full" href={slug}>
        <div className="rounded shadow p-4 h-full flex flex-row gap-4">
            <div class="w-20">
                <img src={`https://github.com/${github}.png`} class="rounded-full w-20 mb-4" />
            </div>
            <div class="w-full">
                <h3 className="text-lg font-bold">{name}</h3>
                <p class="text-sm">{email}</p>
                <p class="text-sm">@{github} on Github</p>
            </div>
        </div>
    </a>

}
export default Person
