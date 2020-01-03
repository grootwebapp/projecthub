import React from "react";
import ece from "../Model/ece.json";

const INITIAL_DATA = {
  ProjectCentre: "",
  Domain: "",
  Technology: "",
  MobileNumer: "",
  Area: ""
};
export default function Csemart(props) {
  const [center, setCenter] = React.useState(INITIAL_DATA);
  const id = props.match.params.id;
  React.useEffect(() => {
    const { ProjectCentre, Domain, Technology, MobileNumer, Area } = ece.find(
      element => element.id === id
    );
    setCenter({ ProjectCentre, Domain, Technology, MobileNumer, Area });
  }, []);

  return (
    <div>
      <div
        className="image rellax animated fadeInDown"
        data-rellax-speed={-5}
        data-rellax-zindex={8}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0bDgnv1cZ2UAFG5SVRuDjDEI25zwIb4-bdNCZ_j1TlBweF3zD"
          style={{ width: "100%", marginTop: "-8%" }}
          alt="img"
        />
      </div>
      <div className="container">
        <div className="container animated fadeInUp delay-1s">
          <div
            className="contains"
            style={{ background: "rgb(255, 255, 255)", marginTop: "-20%" }}
          >
            <div
              className="container rellax"
              data-rellax-speed={10}
              data-rellax-zindex={5}
              style={{
                background: "white",
                borderRadius: "10px",
                padding: "5%",
                boxShadow: "2px 14px 38px 0 rgb(0, 0, 0, 0.2)"
              }}
            >
              <h1>{center.ProjectCentre}</h1>
              <br />
              <p>
                <b>Domain: </b>
                {center.Domain}
              </p>
              <p>
                <b>Technology: </b>
                {center.Technology}
              </p>
              <p>
                <b>Contact: </b>
                {center.MobileNumer}
              </p>
              <p>
                <b>Location: </b>
                {center.Area}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
