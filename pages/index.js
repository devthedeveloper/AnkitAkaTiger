import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Ankit Aka Tiger" />
        <div
  loading="lazy"
  data-mc-src="940dfaab-ec4e-4bc7-83b4-b0bc70703347#instagram"></div>
      </main>
   
        
<script 
  src="https://cdn2.woxo.tech/a.js#62156f5906ee92002f988ab4" 
  async data-usrc>
</script>
      <Footer />
    </div>
  )
}
