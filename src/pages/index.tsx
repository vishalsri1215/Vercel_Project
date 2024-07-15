import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>FAQ Application</title>
        <meta name="description" content="A simple FAQ application built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main style={{ flex: '1 0 auto' }}>
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
