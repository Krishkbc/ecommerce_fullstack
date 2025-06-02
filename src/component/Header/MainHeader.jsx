import OfferHeader from "./OfferHeader";
import NavBar from "./UpperNavbar";
import MiddleNavBar from "./MiddleNavBar";
import LowerNavBar from "./LowerNavBar";
import BreadCrumb from "./BreadCrumb";

export default function MainHeader() {
  return (
    <>
      <OfferHeader />
      <NavBar />
      <hr></hr>
      <MiddleNavBar />
      <LowerNavBar />
      <BreadCrumb />
      <hr></hr>
    </>
  );
}
