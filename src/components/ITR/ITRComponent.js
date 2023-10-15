import React, { useRef, useCallback, useState, useEffect } from "react";
import Classes from "./itr.module.scss";
import {
  ITR_FAQ,
  itrCustomerInfo,
  itrFormsData,
  tableData,
  CitiesData,
  AssociatedWithData,
  itrStepList,
  itrDueDatesData,
  itrCustomerReview,
  itrFilingInCities,
  TeamPhotos,
  Home_Services,
} from "../../utils/constants/constantData";
import WhyTaxEasyComponent from "../commonComponents/WhytaxEasy/WhyTaxEasyComponent";
import {
  CitiesSection,
  AssociatedWithSection,
  ImagesComponent,
  TeamPhotoCarouselComponent,
  ThankyouModal,
} from "../commonComponents/SomeCommonComponents/SomeCommonCompoents";
import FAQComponent from "../commonComponents/FAQ/FAQComponent";
import ContactUs from "../commonComponents/ContactUs/ContactUs";
import CustomerReviewComponent from "../commonComponents/CustomerReviews/CustomerReviewComponent";
import classNames from "classnames";
import Table from "react-bootstrap/Table";
import StepsComponent from "../commonComponents/Steps/StepsComponent";
import CallNowGif from "../../utils/images/CallNowGIF.gif";
import WhatsappGif from "../../utils/images/WhatsappGIF.gif";
import CallUsGif from "../../utils/images/CallUsGIF.gif";
import OfferGif from "../../utils/images/OfferGIF.gif";
import { Container, Row, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Services from "../commonComponents/Services/Services";
import { useDispatch } from "react-redux";
import { itrFilingInCitiesUpdate } from "../../utils/utilities/itrFilingInCitiesSlice";
import { Link } from "react-router-dom";

const ITRComponent = () => {
  const observer = useRef();
  const [autoplay, setAutoplay] = useState(0);

  const vedioRef = useCallback(
    (node) => {
      if (observer && observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
          setAutoplay(1);
        } else {
          setAutoplay(0);
        }
      });
      if (node) {
        observer.current?.observe(node);
      }
    },
    [observer]
  );

  return (
    <div>
      <CitiesSection info={CitiesData} />
      {isMobile ? (
        <TeamPhotoCarouselComponent info={TeamPhotos} />
      ) : (
        <AssociatedWithSection
          heading={"We Associated With"}
          info={AssociatedWithData}
        />
      )}
      <FileYourITRComponent vedioRef={vedioRef} autoplay={autoplay} />
      <StepsComponent stepList={itrStepList} />

      <div className={Classes.itrFormsmMainContainer}>
        <h3 className={Classes.mainHeading}>Types of ITR Forms?</h3>
        <p className={Classes.mainDescription}>
          We will guide you as which ITR Form is applicable to you as per your
          details
        </p>
        <div className={Classes.formsCardMainContainer}>
          <ITRFormCard formsData={itrFormsData} />
        </div>
      </div>
      <div className={Classes.tableMainContainer}>
        <h3 className={Classes.mainHeading}>Which Tax Regime is better?</h3>
        <p className={Classes.mainDescription}>
          Old Regime or New Regime (AY 2023-24)
        </p>
        <Table responsive bordered className={Classes.itrTable}>
          <thead>
            <tr>
              {tableData?.head?.map((heading, index) => (
                <th key={`table-heading-${index}`}>
                  {heading.split(" ").map((data, index) => {
                    return (
                      <>
                        <span key={`heading-${index}`}>{data}</span>
                        <br />
                      </>
                    );
                  })}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData?.body?.map((desc, index) => (
              <tr key={`table-row-${index}`}>
                <td className={Classes.verticalHeading}>&#8377; {desc}</td>
                {Array(11)
                  .fill("*")
                  ?.map((info, idx) => (
                    <td
                      className={index === idx ? Classes.bgGreen : ""}
                      key={`table-data-${idx}`}
                    >
                      {index === idx ? (
                        <span>Same</span>
                      ) : index < idx ? (
                        <span className={Classes.blueColor}>Old</span>
                      ) : (
                        <span className={Classes.greenColor}>New</span>
                      )}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className={Classes.calenderComponentContainer}>
        <h3 className={Classes.mainHeading}>
          ITR Filing Due Dates (AY 2023-24)
        </h3>
        <div className={Classes.cardMainContainer}>
          <div>
            <div
              className={classNames(
                Classes.dateContainer,
                Classes.dateContainerFirst
              )}
            >
              31st July 2023
            </div>
            <DateCardContainer
              info={itrDueDatesData[0]}
              key={`itr-date-card-1`}
            />
          </div>
          <div>
            <div
              className={classNames(
                Classes.dateContainer,
                Classes.dateContainerSecond
              )}
            >
              31st October 2023
            </div>
            <DateCardContainer
              info={itrDueDatesData[1]}
              key={`itr-date-card-2`}
            />
          </div>
          <div>
            <div
              className={classNames(
                Classes.dateContainer,
                Classes.dateContainerThird
              )}
            >
              30th November 2023
            </div>
            <DateCardContainer
              info={itrDueDatesData[2]}
              key={`itr-date-card-3`}
            />
          </div>
        </div>
      </div>
      <WhyTaxEasyComponent
        heading={"Why TaxEasy?"}
        description={
          "We are admired by people for our Exceptional Customer Satisfaction !"
        }
        customerInfo={itrCustomerInfo}
      />
      {!isMobile && <ImagesComponent />}
      <CustomerReviewComponent customerReview={itrCustomerReview} />
      <div className={Classes.betterTaxRegimeMainContainer}>
        <p className={Classes.firstDescription}>OLD OR NEW REGIME ?</p>
        <h3 className={Classes.heading}>
          Worry about which Tax Regime is Better for You ?
        </h3>
        <p className={Classes.secondDescription}>
          Need not to worry just, Just Call or Whatsapp and Talk to an Expert !
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="tel:+91-9936818000"
          className={Classes.button}
        >
          CALL NOW
        </a>
      </div>
      <FAQComponent
        heading={"Do you also have any of the following Scenario’s?"}
        description={"We have got you covered ! Call Now !"}
        QuestionsList={ITR_FAQ}
      />
      <ITRFilingInCities />
      <ContactUs stepInfo={itrStepList} />
    </div>
  );
};

export default ITRComponent;

export const FileYourITRComponent = ({ vedioRef, autoplay }) => {
  const [mobileNo, setMobileNo] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  useEffect(() => {
    if (show) {
      setTimeout(() => setShow(false), 3000);
    }
  }, [show]);

  const onSubmitClick = async () => {
    if (mobileNo !== "" && mobileNo?.toString()?.length === 10) {
      try {
        const response = await fetch(
          process.env.REACT_APP_API_BASE_URL + "/contact",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
            },
            body: JSON.stringify({ mobile: mobileNo, page: "ITR" }),
          }
        );

        if (response.ok && response.status === 201) {
          setMobileNo("");
          setShow(true);
          console.log("Data submitted Successfully");
        } else {
          console.log("Some Error occured while submitting the data");
          setMobileNo("");
          setError(
            "Some Error occured. Please Try to submitting the data again or after some time"
          );
        }
      } catch (error) {
        console.log("Some Error occured while submitting the data");
        setMobileNo("");
        setError(
          "Some Error occured. Please Try to submitting the data again or after some time"
        );
      }
    } else {
      setError("Please Enter Valid Mobile No.");
      console.log("Please Enter Valid Mobile No.");
    }
  };

  return (
    <div className={Classes.itrFilingMainContainer} ref={vedioRef}>
      <div className={Classes.vedioContainer}>
        <iframe
          className={Classes.solutionsVedio}
          src={`https://www.youtube.com/embed/XKQpS-28zZE?autoplay=${autoplay}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className={Classes.textContainer}>
        <h2 className={Classes.heading}>File your ITR Today ! </h2>
        <div className={Classes.mobileInputContainer}>
          <input
            type="number"
            name="mobile"
            placeholder="Enter Mobile Number "
            className={classNames(
              Classes.mobileInput,
              error ? Classes.errorBorder : ""
            )}
            value={mobileNo}
            onChange={(e) => {
              setMobileNo(e.target.value);
              setError("");
            }}
          />
          {isMobile && <p className={Classes.errorMsg}>{error}</p>}
          <button className={Classes.mobileInputButton} onClick={onSubmitClick}>
            GET INSTANT
            <br />
            QUOTE!
          </button>
        </div>
        {!isMobile && <p className={Classes.errorMsg}>{error}</p>}
        <ThankyouModal show={show} handleClose={handleClose} />
        <div className={Classes.buttonContainer}>
          <a
            target="_blank"
            rel="noreferrer"
            href="tel:+91-9936818000"
            className={Classes.callNow}
          >
            <img src={CallNowGif} alt="call-now" />
            <span>CALL NOW</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=9310658474"
            className={Classes.whatsapp}
          >
            <img src={WhatsappGif} alt="whatsapp" />
            <span>WHATSAPP</span>
          </a>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="tel:+91-9936818000"
          className={Classes.callingNumber}
        >
          <img src={CallUsGif} alt="call-us" />
          <p>9936818000 ; 9310658474</p>
        </a>
        <div className={Classes.discount}>
          <img src={OfferGif} alt="offer" />
          <div className={Classes.referral}>
            <p>GET 15% DISCOUNT</p>
            <p>ON EVERY ITR REFERRAL !</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ITRFormCard = ({ formsData }) => {
  return (
    <>
      {formsData?.map((info, index) => (
        <div className={Classes.formCard} key={`itr-forms-data-${index}`}>
          <img src={info?.image} alt={info?.heading} />
          <h5 className={Classes.heading}>{info?.heading1}</h5>
          <div className={Classes.cardContainer}>
            {info?.description1?.heading && (
              <h6 className={Classes.cardHeading}>
                {info?.description1?.heading}
              </h6>
            )}
            <ul className={Classes.cardDescription}>
              {info?.description1?.list?.map((list, idx) => (
                <li key={`formsData-description1-${idx}`}>{list}</li>
              ))}
            </ul>
          </div>
          {info?.heading2 && (
            <h5 className={Classes.heading}>{info?.heading2}</h5>
          )}
          {info?.description2 && (
            <div className={Classes.cardContainer}>
              {info?.description2?.heading && (
                <h6 className={Classes.cardHeading}>
                  {info?.description2?.heading}
                </h6>
              )}
              <ul className={Classes.cardDescription}>
                {info?.description2?.list?.map((list, idx) => (
                  <li key={`formsData-description2-${idx}`}>{list}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

const DateCardContainer = ({ info }) => {
  return (
    <div className={Classes.cardContainer}>
      <h6 className={Classes.cardHeading}>{info?.heading}</h6>
      <ul className={Classes.cardDescription}>
        {info?.list?.map((data, index) => (
          <li key={`itr-filling-${index}`}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

const ITRFilingInCities = () => {
  const dispatch = useDispatch();

  const handleClick = (data) => {
    dispatch(itrFilingInCitiesUpdate(data));
    window?.scrollTo(0, 0);
  };

  return (
    <Container className={Classes.itrFilingInCitiesMainContainer} fluid>
      <Row className={Classes.heading}>ITR Filing in Cities</Row>
      <Row className={Classes.descriptionContainer}>
        {itrFilingInCities?.map((dataList, index) => (
          <Col
            key={`itrCitiesCol-${index}`}
            className={Classes.listContainer}
            xs={12}
            sm={6}
            md={6}
          >
            <ul>
              {dataList?.map((data, index) => (
                <li
                  key={`itrCitiesData-${index}`}
                  onClick={() => handleClick(data)}
                >
                  <Link to={`/${data.split(" ").join("-", " ")}`}>{data}</Link>
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
