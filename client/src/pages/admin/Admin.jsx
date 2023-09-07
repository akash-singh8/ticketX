import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import Adminsection from "../../components/adminsection/Adminsection";

export default function Admin(props) {
  const cat=props.cat
  return (
    <>
      <NavBar />
      <Adminsection cat={cat} />
      <Footer />
    </>
  );
}
