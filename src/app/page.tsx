import FlightsPrices from "./components/FlightsPrices";
import Header from "./components/Header";
import ImageSection from "./components/ImageSection";
import Pilots from "./components/Pilots";
import Testimonies from "./components/Testimonies";
import { imageSectionsData } from "./data/imagesSection"
import { packages } from "./data/packagesData";
import { pilotsData } from "./data/PilotsData";

export default function Home() {
  return (
    <div>
      <Header/>
        <FlightsPrices packages={packages} />
        {imageSectionsData.map((section, index) => (
          <ImageSection
            key={index}
            title={section.title}
            description={section.description}
            image={section.image}
            reverseLayout={section.reverseLayout}
          />
        ))}
        <Testimonies/>
        <Pilots
        pilots={pilotsData}
        />
    </div>
  );
}
