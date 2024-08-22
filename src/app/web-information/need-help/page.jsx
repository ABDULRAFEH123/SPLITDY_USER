import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import HeroSectionWebInfo from '@/components/webinformation/HeroSectionWebInfo'
import SiteFeedback from '@/components/webinformation/SiteFeedback'
import SiteFeedBackForm from '@/components/webinformation/SiteFeedBackForm'
import WebInformationGrid from '@/components/webinformation/WebInformationGrid'

export default function page() {
    return (
        <div className="flex flex-col overflow-hidden">
            <Header />
            <HeroSectionWebInfo title={"Need Help?"} />
            <WebInformationGrid />
            <Footer />
        </div>
    )
}
