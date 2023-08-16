import Header from './components/Header'
import Newsletter from './components/Newsletter'
import Offers from './components/Offers'
import Products from './components/Products'
import Products2 from './components/Products2'
import Timer from './components/Timer'

export default function Home() {
  return (
    <main className="">
      <Header/>
      <Products />
      <Timer />
      <Products2 />
      <Newsletter/>
      <Offers />
    </main>
  )
}
