import Navbar from "../utils/Navbar";
import BookCab from "./BookCab";
import Contact from "./Contact";
import Main from "./Main";
import OurPackage from "./OurPackage";
import OurVehicle from "./OurVehicle";
import PassengerFeed from "./PassengerFeed";
import PickApp from "./PickApp";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <BookCab />
      <OurVehicle />
      <OurPackage />
      <PickApp />
      <PassengerFeed />
      <Contact />
    </>
  );
}

export default Home;
