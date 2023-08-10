import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "antd";

const gridStyle: React.CSSProperties = {
  width: "16.66667%",
  textAlign: "center",
  height: "10em",
};
const SlideSmart = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slideStyle = {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  };

  return (
    <div>
      <div style={slideStyle}>
        <div>
          <div>
            <Slider {...settings}>
              <img src="../assets/slide/1.png" alt="" />
              <img src="../assets/slide/2.png" alt="" />
              <img src="../assets/slide/3.jpg" alt="" />
              <img src="../assets/slide/4.png" alt="" />
              <img src="../assets/slide/5.png" alt="" />
            </Slider>
          </div>
        </div>
      </div>
      <div style={slideStyle}>
        <Card title="SHOPEE MALL">
          <Card.Grid hoverable={false} style={gridStyle}>
            <img src="../assets/thuonghieusmart/1.jpg" alt="" width={180} />
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <img src="../assets/thuonghieusmart/2.jpg" alt="" width={180} />
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <img src="../assets/thuonghieusmart/3.png" alt="" width={180} />
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <img src="../assets/thuonghieusmart/4.jpg" alt="" width={180} />
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <img src="../assets/thuonghieusmart/5.jpg" alt="" width={180} />
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <img src="../assets/thuonghieusmart/6.jpg" alt="" width={180} />
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <img src="../assets/thuonghieusmart/7.jpg" alt="" width={180} />
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <img src="../assets/thuonghieusmart/8.png" alt="" width={180} />
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <img src="../assets/thuonghieusmart/9.jpg" alt="" width={180} />
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <img src="../assets/thuonghieusmart/10.png" alt="" width={180} />
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <img src="../assets/thuonghieusmart/2.jpg" alt="" width={180} />
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <img src="../assets/thuonghieusmart/3.png" alt="" width={180} />
          </Card.Grid>
        </Card>
      </div>
    </div>
  );
};

export default SlideSmart;
