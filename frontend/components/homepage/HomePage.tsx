import HomeHero from "../hero/HomeHero";
import HomeMain from "../main/HomeMain";
import HomeHowitWorks from "../additional/HomeHowitWorks";
import Reviews from "../additional/Reviews";


export default function HomePage() {
    return(
        <>
        <HomeHero/>
        <HomeMain/>
        <HomeHowitWorks/>
        <Reviews/>
        </>
    );
};