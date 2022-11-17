import { useState } from 'react'
import Link from './Link'
import { Helmet } from 'react-helmet'
import headerNavLinks from '@/data/headerNavLinks'

const Hamburger = () => {
  return (
    <section>
      <Helmet>
        <script src="/script.js" type="text/javascript" async />
      </Helmet>
      <div id="hamburger" className="fixed top-0.5 right-0.5 z-50 mix-blend-difference">
        <button id="nav-icon">
          <span class="bg-neutral-100 before:bg-neutral-100 after:bg-neutral-100"></span>
        </button>
        <ul>
          <li>
            <Link href="/" class="text-neutral-100">
              home
            </Link>
          </li>
          <li>
            <Link href="/about" class="text-neutral-100">
              about
            </Link>
          </li>
          <li>
            <Link href="#blog" class="text-neutral-100">
              blog
            </Link>
          </li>
          <li>
            <Link href="#contact" class="text-neutral-100">
              contact
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Hamburger
