import * as React from "react"
import '../components/application.scss'

// markup
const IndexPage = () => {
  return (
    <main>
      <section class='sky'>
        <div class='stars'></div>
        <div class='closer-stars'></div>
        <div class='closest-stars'></div>
          <section class='title'>
            <div>
              <h1>
                <span>CODY COOPER</span>
              </h1>
              <h2>
                <span>design & development</span>
              </h2>
              <div class='social-icons'>
                <a href="https://github.com/cody-cooper"><span class='icon icon-github'></span></a>
                <a href="https://www.linkedin.com/in/cascodia/"><span class='icon icon-linkedin'></span></a>
              </div>
            </div>
          </section>
      </section>      
    </main>
  )
}

export default IndexPage
