import BelieveManifesto from './components/believe-manifesto/BelieveManifesto';
import MobileBelieveManifesto from './components/believe-manifesto/MobileBelieveManifesto';
import Believe from './components/Believe/Believe';
import Cards from './components/Card/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import Summary from './components/Summary/Summary';
import Hero from './hero/Hero';

function App() {
    return (
        <>
            <div className='container'>
                <div className='df jcc'>
                    <Header />
                </div>
            </div>
            <div className='hero'>
                <Hero />
            </div>
            <div className='container'>
                <div className='believe_manifesto '>
                    <div className='container'>
                        <BelieveManifesto />
                    </div>
                </div>
            </div>
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
        </>
    );
}

export default App;
