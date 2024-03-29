import TopGonImg from "../assets/top-gun.jpg";
import MarloweImg from "../assets/Marlowe.jpg";
import Midway from "../assets/midway-movie.jpg";
import { Carousel } from "flowbite-react";

const Carousels = () => {
    return (
        <div className="h-[80vh] w-[75vw] mr-auto ml-auto">
        <Carousel leftControl="" rightControl="">
          <img src={TopGonImg} alt="..." />
          <img src={MarloweImg} alt="..." />
          <img src={Midway} alt="..." />
        </Carousel>
      </div>
    );
}

export default Carousels;
