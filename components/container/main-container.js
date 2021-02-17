import { useSelector } from 'react-redux';
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Header from '../header';
import Footer from '../Layouts/Footer';
import GoTop from '../Layouts/GoTop';
import ModalComp from '../modal';

const MainContainer = ({ children }) => {

    const isModalOpen = useSelector(({app}) => app.isModalOpen);
    return (
        <NoSSR>
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                {/* Menu */}
                <Header />
                {children}
                <Footer />
                {isModalOpen ? <ModalComp /> : <></>}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        </NoSSR>
    );
}

export default MainContainer;