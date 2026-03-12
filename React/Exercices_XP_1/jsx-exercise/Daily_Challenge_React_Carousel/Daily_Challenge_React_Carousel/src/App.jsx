import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import hk from "./assets/hongkong.jpg";
import macao from "./assets/macao.webp";
import japan from "./assets/japan.webp";
import vegas from "./assets/lasvegas.webp";

function App() {
  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <Carousel>

        <div>
          <img src={hk} />
          <p className="legend">Hong Kong</p>
        </div>

        <div>
          <img src={macao} />
          <p className="legend">Macao</p>
        </div>

        <div>
          <img src={japan} />
          <p className="legend">Japan</p>
        </div>

        <div>
          <img src={vegas} />
          <p className="legend">Las Vegas</p>
        </div>

      </Carousel>
    </div>
  );
}

export default App;
