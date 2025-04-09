import { Advantages } from "./components/Advantages"
import { Catalog } from "./components/Catalog"
import { Cryptocurrencies } from "./components/Cryptocurrencies"
import { Discover } from "./components/Discover"
import {EmailForm} from "./components/EmailForm"
import { Footer } from "./components/Footer"
import Header from "./components/Header"
import { HowToUpload } from "./components/HowToUpload"

function App() {

  return (
    <>
      <Header />
      <Cryptocurrencies />
      <Discover />
      <Advantages />
      <Catalog />
      <HowToUpload />
      <EmailForm />
      <Footer />
    </>
  )
}

export default App
