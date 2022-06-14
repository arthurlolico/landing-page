import Layout from '../src/components/layout'
import Header from '../src/components/header';
import Hero from '../src/components/hero';
import Feature from '../src/components/feature';
import Service from '../src/components/service';
import About from '../src/components/about';
import Footer from '../src/components/footer';

const Index = () => (
  <Layout pageTitle="Landing Page Nextjs">
    <Header />
    <Hero />
    <Feature />
    <Service />
    <About />
    <Footer />
  </Layout>
)
export default Index;