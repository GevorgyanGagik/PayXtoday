import React from "react";
import SecurityComp from "./SecurityComp/SecurityComp";
import Secure from "./Secure/Secure";
import DNASec from "./DNASec/DNASec";
import SecureAccess from "./SecureAccess/SecureAccess";
import Poverful from "./Poverful/Poverful";
import FullSecure from "./FullSecure/FullSecure";
import Explore from "./Explore/Explore";
import SecurePayment from "./SecurePayment/SecurePayment";

const Security = () => {
  return (
    <>
      <SecurityComp />
      <Secure />
      <DNASec />
      <SecureAccess />
      <Poverful />
      <FullSecure />
      <Explore />
      <SecurePayment />
    </>
  );
};

export default Security;
