import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Logo from "../res/logo.svg";

const NotFoundPage = () => (
  <>
  <div className="flex flex-wrap flex-row h-screen items-center justify-around">
    <div className="leading-10 px-20">
    <h1 className="text-9xl font-extrabold text-active sm:block ">404</h1>
    <h2 className="text-4xl font-bold">Ooops! You weren't supposed to see this</h2>
    <p className="text-2xl">The page you were looking for no longer exists</p>
    <p className="text-xl">Return to <Link to='/'><u>home page</u></Link>.</p>
    </div>
    <div>
      <img src={Logo} alt="The Fairfield Programming Association Logo" className="w-96"/>
    </div>
  </div>
  </>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
