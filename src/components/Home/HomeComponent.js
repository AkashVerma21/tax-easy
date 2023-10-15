import React from "react";
import Classes from "./home.module.scss";
import {
  CitiesData,
  AssociatedWithData,
  itrStepList,
  HOME_FAQ,
  itrCustomerInfo,
  itrCustomerReview,
  Home_Services,
} from "../../utils/constants/constantData";
import {
  CitiesSection,
  AssociatedWithSection,
  ImagesComponent,
} from "../commonComponents/SomeCommonComponents/SomeCommonCompoents";
import { FileYourITRComponent } from "../ITR/ITRComponent";
import StepsComponent from "../commonComponents/Steps/StepsComponent";
import ContactUs from "../commonComponents/ContactUs/ContactUs";
import FAQComponent from "../commonComponents/FAQ/FAQComponent";
import CustomerReviewComponent from "../commonComponents/CustomerReviews/CustomerReviewComponent";
import WhyTaxEasyComponent from "../commonComponents/WhytaxEasy/WhyTaxEasyComponent";
import ITRComponent from "../ITR/ITRComponent";
import Services from "../commonComponents/Services/Services";

const Homecomponent = () => {
  return (
    <div>
      <CitiesSection info={CitiesData} />
      <AssociatedWithSection
        heading={"We Associated With"}
        info={AssociatedWithData}
      />
      <FileYourITRComponent />
      <StepsComponent stepList={itrStepList} />
      <Services services={Home_Services} />
      <WhyTaxEasyComponent
        heading={"Why TaxEasy?"}
        description={
          "We are admired by people for our Exceptional Customer Satisfaction !"
        }
        customerInfo={itrCustomerInfo}
      />
      <ImagesComponent />
      <CustomerReviewComponent customerReview={itrCustomerReview} />
      <FAQComponent
        heading={"Frequently Asked Questions"}
        description={"We have got you covered ! Call Now !"}
        QuestionsList={HOME_FAQ}
      />
      <ContactUs stepInfo={itrStepList} />
      {/* <ITRComponent/> */}
    </div>
  );
};

export default Homecomponent;
