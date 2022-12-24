import * as React from "react"
import { Link } from "gatsby"

const Standard = ({ title, slug, description }) => {

    return <a className="block w-full h-full" href={`/standards/${slug}`}>
        <div className="rounded shadow p-4">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-md">{description || ""}</p>
        </div>
    </a>

}

export default Standard
