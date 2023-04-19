import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div id="footer" className="container-fluid my-5 mx-0 px-0 w-100 ">
      <footer
        className="text-center text-lg-start text-white "
        style={{ backgroundColor: "rgb(50 50 50)" }}
      >
        <div className="container-fluid p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  World News
                </h6>
                <p>
                  Get the latest breaking news from around the world with World
                  News. Our comprehensive coverage includes politics, business,
                  technology, sports, entertainment, and more. Trustworthy
                  sources like The Washington Post, Al Jazeera, and BBC News.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Channels
                </h6>
                <p>
                  <a className="text-white" href="/">
                    Washington News
                  </a>
                </p>
                <p>
                  <a className="text-white" href="/aljazeera">
                    Aljazeera News
                  </a>
                </p>
                <p>
                  <a className="text-white" href="/bbcnews">
                    BBC News
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i> Amman, Jordan
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> WorldNews@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 962 7 7777 6666
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 962 7 7777 5555
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Follow us
                </h6>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                >
                  <FaFacebook />
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#55acee" }}
                  href="#!"
                  role="button"
                >
                  <FaTwitter />
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="#!"
                  role="button"
                >
                  <FaInstagram />
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#0082ca" }}
                  href="#!"
                  role="button"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#333333" }}
                  href="#!"
                  role="button"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "#212529" }}>
          © 2023 Copyright : All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
