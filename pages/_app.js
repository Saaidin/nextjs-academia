import Layout from "../components/Layout"
import "../styles/globals.css"
import "../components/common/header/header.css"
import "../components/common/footer/footer.css"
import "../components/home/hero/Hero.css"
import "../components/about/about.css"
import "../components/allcourses/courses.css"
import "../components/home/testimonal/style.css"
import "../components/blog/blog.css"
import "../components/pricing/price.css"
import "../components/contact/contact.css"
import "../components/team/team.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
