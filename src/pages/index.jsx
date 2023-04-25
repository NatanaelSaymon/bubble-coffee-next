import About from '@/Components/About/About'
import Details from '@/Components/Details/Details'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import Navbar from '@/Components/Navbar/Navbar'
import Products from '@/Components/Products/Products'
import Reviews from '@/Components/Reviews/Reviews'
import Social from '@/Components/Social/Social'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bubble Coffee</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Header />
        <Details />
        <Products />
        <About />
        <Social />
        <Reviews />
        <Footer />
      </main>
    </>
  )
}