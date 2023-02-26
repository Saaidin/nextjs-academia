import Header from "../components/common/header/Header"
import Footer from "../components/common/footer/Footer"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
