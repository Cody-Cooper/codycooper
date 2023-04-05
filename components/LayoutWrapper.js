import SectionContainer from './SectionContainer'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'
import { FaAngleDown } from 'react-icons/fa'
import MobileNav from './MobileNav'
import Home from 'pages'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  var rootPage = router.pathname === '/' ? true : false
  var navBarSizes = getNavBarSizes()

  function getNavBarSizes() {
    if (rootPage) {
      return ['h-halvsies mb-halvsies', 'top-[calc(50%-72px)] lg:top-[calc(50%-47px)] ']
    } else {
      return ['h-10', 'top-[-6px] lg:top-[-6px]']
    }
  }

  return (
    <SectionContainer>
      <header className={'bg-stone-900 dark:bg-stone-200'}>
        <nav className={navBarSizes[0] + ' flex items-center justify-end'}>
          {/* <Hamburger /> */}
          <div className="absolute top-0 right-0 z-50 flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-stone-200 dark:text-stone-800 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>

          {/* ==== Center logo ==== */}
          <section
            className={navBarSizes[1] + ' codycooper absolute w-full  text-center font-bold '}
          >
            {/* desktop */}
            <Link
              href="/"
              className={
                'z-0 hidden text-[80px] leading-none text-stone-100 mix-blend-difference md:hidden lg:inline-block'
              }
            >
              codycooper
            </Link>

            {/* mobile */}
            {rootPage ? (
              <div className={'mx-[15%]'}>
                <h1
                  className={
                    'm-0 mb-2 inline-block text-[80px] leading-[1.1]  text-stone-100 mix-blend-difference lg:hidden'
                  }
                >
                  cody
                  <br />
                  cooper
                </h1>
              </div>
            ) : (
              <Link
                href="/"
                className={
                  'm-0 mb-2 inline-block text-[80px] leading-[1.1] text-stone-100 mix-blend-difference lg:hidden'
                }
              >
                cc
              </Link>
            )}

            {rootPage ? <h2 className={'m-0 text-2xl'}>ctf writeups and more</h2> : null}
          </section>
          {rootPage ? (
            <section className={'mx-auto h-screen'}>
              <FaAngleDown
                className={'absolute bottom-6 text-4xl text-stone-100 mix-blend-difference'}
              />
            </section>
          ) : null}
        </nav>
      </header>
      <main className="mx-auto max-w-3xl px-10 sm:px-6 xl:max-w-5xl xl:px-0">{children}</main>
    </SectionContainer>
  )
}

export default LayoutWrapper
