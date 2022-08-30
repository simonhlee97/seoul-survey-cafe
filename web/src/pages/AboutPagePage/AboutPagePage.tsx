import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPagePage = () => {
  return (
    <>
      <MetaTags title="AboutPage" description="AboutPage page" />

      <h1>AboutPagePage</h1>
      <p>
        Find me in <code>./web/src/pages/AboutPagePage/AboutPagePage.tsx</code>
      </p>
      <p>
        My default route is named <code>aboutPage</code>, link to me with `
        <Link to={routes.aboutPage()}>AboutPage</Link>`
      </p>
    </>
  )
}

export default AboutPagePage
