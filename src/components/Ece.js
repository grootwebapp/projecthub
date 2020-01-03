import React from "react";
import ece from "../Model/ece.json";
import { Link } from "react-router-dom";

export default function Ece() {
  console.log(ece);
  return (
    <div className="text-center" style={{ padding: 60 }}>
      <h1 className="animated fadeInDown delay-1s">
        Electronics and Communicaton Engineering - Project Centers
      </h1>

      <div className="container text-center" style={{ padding: 60 }}>
        <div className="row">
          {ece.map(data => (
            <div className="col-sm animated bounceIn delay-2s">
              <div
                className="card shadow p-3 mb-5 bg-white rounded"
                style={{ width: "20rem" }}
              >
                <div className="card-body">
                  <h6 className="card-title">
                    <b>{data.ProjectCentre}</b>
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {data.Place}
                  </h6>
                  <br />
                  <p className="card-text">
                    <b>Projects Complete: </b>
                    {data.Projectsfinished}
                  </p>
                  <p className="card-text">
                    <b>Year of experience: </b>
                    {data.Yearsofexperience}
                  </p>
                  <Link
                    to={{ pathname: `/shop/ece/${data.id}` }}
                    className="card-link btn btn-primary"
                  >
                    Visit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
