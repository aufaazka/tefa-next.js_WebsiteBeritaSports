import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/footer.module.css";
import Link from "next/link";
import img from '../../../public/photo/logo.png'

const NAV_LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/Product",
    display: "News",
  },
  {
    path: "/About",
    display: "History",
  },
  {
    path: "/Contact",
    display: "Matches",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          {/* ========= footer top =========== */}
          <Col lg="6" className={`${classes.footer_top}`}>
            <div className="flex gap-2 items-center justify-between ml-5">
              <div className="flex">
                <Image
                  width={90}
                  height={80}
                  src={img}
                  alt=""
                  className="w-full mt-6 md:w-fit h-full object-cover"
                />
                <div className="mt-5 ml-2">
                <a
                  href="/"
                  className="flex items-center justify-start uppercase text-2xl md:text-5xl text-blue-900 font-bold "
                >
                  G
                  <span className="w-60 text-rose-500 hover:text-blue-900">
                    Arena
                  </span>
                </a>
              </div>
              </div>
           
            <div className={`${classes.footer_creator}`}>
                <h6>
                  Created by
                  <ul className="flex space-x-5 justify-end">
                    <li>~Maharani</li>
                    <li>~Maskharor</li>
                    <li>~Aufa</li>
                    <li>~Andini</li>
                  </ul>
                </h6>
            </div>
            </div>
          </Col>

          

          {/* ========= footer bottom ========= */}
          <Col lg="12">
            <div className={`${classes.footer_copyright}`}>
              <p>
                &copy; Copyright {year} - Developed by Kelompok 4.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

