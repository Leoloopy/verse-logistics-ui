import { Fragment } from "react";
import truck from "../../assets/truck.jpg";
import plane from "../../assets/plane.png";
import ship from "../../assets/ship.png";
import Freight from "./freight-images.component";
import "./main.style.css";

const Main = () => {
  const images = [
    {
      id: 1,
      imageUrl: truck,
      title: "trucks",
    },
    {
      id: 2,
      imageUrl: plane,
      title: "plane",
    },
    {
      id: 3,
      imageUrl: ship,
      title: "ship",
    },
  ];

  return (
    <Fragment>
      <p className="freight-title">Freight Mode</p>
      <p className="freight-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        omnis praesentium voluptate enim? Labore velit quos illo delectus, quasi
        mollitia laudantium qui voluptas repellendus cumque corrupti similique
        quidem eaque adipisci harum magnam optio fugiat. Architecto veniam
        molestias ea necessitatibus animi iusto maiores quas vitae! Nisi
        similique atque facilis in ex?
      </p>
      <Freight images={images} />
    </Fragment>
  );
};

export default Main;
