import BelieveManifesto from './components/believe-manifesto/BelieveManifesto';
import MobileBelieveManifesto from './components/believe-manifesto/MobileBelieveManifesto';
import Believe from './components/Believe/Believe';
import Cards from './components/Card/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import Summary from './components/Summary/Summary';
import Hero from './hero/Hero';
import SmoothScroll from './components/SmoothScroll/SmoothScroll.tsx';

function App() {
    return (
        <SmoothScroll>
            <section className='container'>
                <div className='df jcc' id="home">
                    <Header />
                </div>
            </section>
            <section className='hero'>
                <Hero />
            </section>
            <section className='container'>
                <div className='believe_manifesto '>
                    <div className='container' id="manifesto">
                        <BelieveManifesto />
                    </div>
                </div>
            </section>
            <MobileBelieveManifesto />
            <div className='container'>
                <Questions />
                <Summary />
            </div>
            <Cards />
            <div className='container'>
                <div className='believe df jcc '>
                    <Believe />
                </div>
                <Footer />
            </div>
        </SmoothScroll>
    );
}

export default App;
