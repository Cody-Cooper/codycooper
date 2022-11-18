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
          <span className="bg-neutral-100 before:bg-neutral-100 after:bg-neutral-100"></span>
        </button>

        <ul>
          <>
            {headerNavLinks.map((link) => (
              <li key={link.title}>
                <Link href={link.href} className="text-neutral-100 hover:text-neutral-300">
                  {link.title}
                </Link>
              </li>
            ))}
          </>
        </ul>
      </div>
    </section>
  )
}

export default Hamburger
