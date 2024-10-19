import { useEffect } from "react";
import Approve from "./Approve/Approve";
import Experience from "./Experiance/Experience";
import Faq from "./Faq/Faq";
import FullPayment from "./FullPayment/FullPayment";
import Manage from "./Manage/Manage";
import Modular from "./Modular/Modular";
import Optimize from "./Optimize/Optimize";
import PaymentsSection from "./PaymentsSection/PaymentsSection";
import Proud from "./Proud/Proud";
import FewWords from "./FewWords/FewWords";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <PaymentsSection />
      <Experience />
      <Manage />
      <Approve />
      <Optimize />
      <FullPayment />
      <Modular />
      <Proud />
      <FewWords />
      <Faq />
    </>
  );
};

export default Home;
