import Footer from '../common/Footer'
import Header from '../common/Header'
import HeroSectionWebInfo from './HeroSectionWebInfo'
import WebInformationGrid from './WebInformationGrid'

export default function WebInfo() {
    return (
        <div>
            <Header />
            <HeroSectionWebInfo title={"Need Help?"} />
            <WebInformationGrid />
            <Footer />
        </div>
    )
}
