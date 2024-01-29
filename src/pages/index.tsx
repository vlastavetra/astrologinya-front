import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Form from "../components/Form"

export default function Home() {
  return (
    <div className="main-wrapper">
      <Head>
        <title>Astrologinya</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Form />
      </main>
      <Footer />
    </div>
  )
}
