import Header from './components/Header'
import Newsletter from './components/Newsletter'
import Products from './components/Products'
import Timer from './components/Timer'

export default function Home() {
  return (
    <main className="">
      <Header/>
      <Products />
      <Timer />
      <Newsletter/>
    </main>
  )
}
