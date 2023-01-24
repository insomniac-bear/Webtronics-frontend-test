import Head from 'next/head'
import { Header } from '../components/header/header'
import { Main } from '../components/main/main'
import { Intro } from '../components/intro/intro'
import { About } from '../components/about/about'
import { Programming } from '../components/programming/programming'
import { Steps } from '../components/steps/steps'
import { Questions } from '../components/questions/questions'
import { Review } from '../components/review/review'
import { Gallery } from '../components/gallery/gallery'
import { Contact } from '../components/contact/contact'
import { Footer } from '../components/footer/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Test task</title>
        <meta name="description" content="Test task for webtronics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Main>
        <Intro />
        <About />
        <Programming />
        <Steps />
        <Questions />
        <Review />
        <Gallery />
        <Contact />
      </Main>
      <Footer/>
    </>
  )
}
