import * as React from "react"
import { Link } from "gatsby"

import Logo from "../res/logo.svg";

const Footer = ({ siteTitle }) => {

  return <footer aria-label="Site Footer" class="bg-gray-100">
  <div
    class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"
  >
    <div class="lg:flex lg:items-end lg:justify-between">
      <div>
        <div class="flex justify-center text-teal-600 lg:justify-start">
          <img class="h-16" src={Logo} alt="FPA Vault Logo" />
        </div>

        <p
          class="mx-auto mt-2 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
        >
          The Fairfield Programming Association Standards website provides open access to anyone who would like to adapt standards put forth by the FPA.
        </p>
      </div>
      <nav aria-label="Footer Nav">
        <ul
          class="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
        >
          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="https://about.fairfieldprogramming.org">
              About the FPA
            </a>
          </li>
          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="https://about.fairfieldprogramming.org/terms">
              Terms
            </a>
          </li>
          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="https://about.fairfieldprogramming.org/privacy">
              Privacy
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <p class="mt-12 text-center text-sm text-gray-500 lg:text-right">
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    </p>
  </div>
</footer>

}

export default Footer
