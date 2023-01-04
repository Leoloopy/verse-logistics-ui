import "./freight.style.css";

const Freight = ({ images }) => {
  return (
    <div className="logistics-options">
      {images.map((vechile) => (
        <div  className="options" key={vechile.id}>
          <img src={vechile.imageUrl} alt="trucks" />
          <div className="freight-tag">{vechile.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Freight;
