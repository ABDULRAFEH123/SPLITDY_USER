"use client"
import Footer from '../common/Footer';
import Header from '../common/Header';
import SocialMedia from '../common/SocialMedia';
import FirstPlacesToGo from './FirstPlacesToGo';
import { GalleryComponent } from './Gallery';
import MustDo from './MustDo';
import ThingsToDoHeroSection from '../thingstodopage/ThingsToDoHeroSection';
import ThingsToDo from './ThingsToDo';
import northimg from "@/assets/NorthHero.webp";

export default function MainComponent({ firstTitle }) { // Receive the title prop here
    console.log(firstTitle)
    return (
        <>
            <Header />
            {/* Pass the title prop to ThingsToDoHeroSection */}
            <ThingsToDoHeroSection image={northimg} button={"true"} firstTitle={firstTitle} />
            <FirstPlacesToGo />
            <GalleryComponent />
            <ThingsToDo />
            <MustDo />
            <SocialMedia />
            <Footer />
        </>
    );
}
