import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Collection from '../components/Collection'
import CustomOrders from '../components/CustomOrders'
import OurStory from '../components/OurStory'
import ForBusiness from '../components/ForBusiness'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Copper section divider */}
        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, #B87333 40%, #B87333 60%, transparent 100%)',
            opacity: 0.2,
          }}
        />

        <Collection />

        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, #B87333 40%, #B87333 60%, transparent 100%)',
            opacity: 0.2,
          }}
        />

        <CustomOrders />

        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, #B87333 40%, #B87333 60%, transparent 100%)',
            opacity: 0.2,
          }}
        />

        <OurStory />

        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, #B87333 40%, #B87333 60%, transparent 100%)',
            opacity: 0.2,
          }}
        />

        <ForBusiness />

        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, #B87333 40%, #B87333 60%, transparent 100%)',
            opacity: 0.2,
          }}
        />

        <Contact />
      </main>
      <Footer />
    </>
  )
}
