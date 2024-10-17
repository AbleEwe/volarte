import Banner from '../components/Banner';
import { packages } from "../data/packagesData";
import FlightsPrices from '../components/FlightsPrices';
import { Form } from '../components/Form';

const Page = () => {

  return (
    <div>
      <Banner
        image="/testimonies-clients.webp"
        title="RESERVA AHORA"
        description="¡Con nosotros el tiempo se pasa volando!"
      />
      <FlightsPrices packages={packages} />
      <Form/>
    </div>
  );
};

export default Page;

