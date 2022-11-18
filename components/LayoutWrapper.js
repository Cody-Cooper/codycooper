import SectionContainer from './SectionContainer'
import Hamburger from './Hamburger'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'
import { FaAngleDown } from 'react-icons/fa'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  var rootPage = router.pathname === '/' ? true : false
  var navBarSizes = getNavBarSizes()

  function getNavBarSizes() {
    if (rootPage) {
      return ['h-halvsies mb-halvsies', 'top-[calc(50%-95px)] lg:top-[calc(50%-47px)] ']
    } else {
      return ['h-10', 'top-[-11px] lg:top-[-6px]']
    }
  }

  console.log('NavBar success')

  return (
    <SectionContainer>
      <header clasName={'bg-stone-900 dark:bg-stone-200'}>
        <nav className={navBarSizes[0] + ' flex items-center justify-between'}>
          <ThemeSwitch />
          <Hamburger />

          {/* ==== Center logo ==== */}
          <section
            className={
              navBarSizes[1] +
              ' codycooper pointer-events-none absolute w-full  text-center font-bold '
            }
          >
            {/* desktop */}
            <h1
              className={
                'hidden text-[80px] leading-none text-stone-100 mix-blend-difference md:hidden lg:inline-block'
              }
            >
              codycooper
            </h1>

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
              <h1
                className={
                  'm-0 inline-block text-[80px] leading-[1.1] text-stone-100 mix-blend-difference lg:hidden'
                }
              >
                cc
              </h1>
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
      <main className="mx-12 mb-auto lg:mx-[15vh]">{children}</main>
    </SectionContainer>
  )
}

export default LayoutWrapper
