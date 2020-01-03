import React from "react";
import hood from "../img/hood.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light sticky-top"
          id="bg-code"
        >
          <a className="navbar-brand" href="/">
            Project <b>Hub</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#carouselExampleIndicators">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#departments">
                  Departments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#vision">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#invest">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/*Carousel*/}
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade"
          data-ride="carousel"
          data-interval={10000}
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item img-gradient active">
              <div className="carousel-caption">
                <h1 className="carousel-content animated fadeInLeft deplay-2s">
                  India's Online Project Center Hub.
                </h1>
                <section id="section05">
                  <a href="#departments">
                    <span />
                  </a>
                  <a href="#departments">
                    <span />
                  </a>
                </section>
              </div>
              <img src={hood} className="d-block w-100" alt="img" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon d-none"
              aria-hidden="true"
            />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon d-none" />
          </a>
        </div>
        <br />
        <br />
        {/*--project center*/}
        <div
          className="text-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
          id="departments"
        >
          <h2 className="display-4">
            <b>Departments</b>
          </h2>
          <br />
          <br />
          <div className="row text-center ">
            <div className="col-md animated bounceIn delay-10s">
              <div
                className="card shadow p-3 mb-5 bg-white rounded"
                style={{ width: "40rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Computer Science and Engineering</b>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Available Centers
                  </h6>
                  <br />
                  <Link to="/cse">View All</Link>
                </div>
              </div>
            </div>
            <div className="col-md animated bounceIn delay-10s">
              <div
                className="card shadow p-3 mb-5 bg-white rounded"
                style={{ width: "42rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Electronics and Communication Engineering</b>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Available Centers
                  </h6>
                  <br />
                  <Link to="/ece">View All</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md animated bounceIn delay-10s">
              <div
                className="card shadow p-3 mb-5 bg-white rounded"
                style={{ width: "40rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Electrical, Electronics and Engineering</b>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Available Centers
                  </h6>
                  <br />
                  <Link to="/eee">View All</Link>
                </div>
              </div>
            </div>
            <div className="col-md animated bounceIn delay-10s">
              <div
                className="card shadow p-3 mb-5 bg-white rounded"
                style={{ width: "42rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Mechanical Engineering</b>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Available Centers
                  </h6>
                  <br />
                  <Link to="/mech">View All</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*--footer*/}
        <footer id="footer" className="text-center">
          <h1 className="display-6">Project Hub 2020</h1>
        </footer>
      </div>
    </>
  );
}
