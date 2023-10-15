import React from 'react'
import Classes from './faq.module.scss'
import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'

const FAQComponent = ({heading, description, QuestionsList, image}) => {
  return (
    <div className={Classes.faqSectionWrapper}>
    <Accordion className={Classes.faqMainContainer}>
    <h3 className={Classes.mainHeading}>{heading}</h3>
    <p className={Classes.mainDescription}>{description}</p>
    {QuestionsList?.map((data, index) =>(
        <Card className={Classes.faqCard} key={`faq-card-${index}`}>
            <Card.Header className={Classes.cardHeader}>
                <ContextAwareToggle eventKey={index} > {data?.heading}</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
                <Card.Body className={Classes.description}>{data?.description}</Card.Body>
            </Accordion.Collapse>
    </Card>
  ))}
  </Accordion>
  </div>
  )
}

export default FAQComponent


const ContextAwareToggle = ({ children, eventKey, callback })=> {
    const { activeEventKey } = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
      <button
        type="button"
        // style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
        className={Classes.heading}
        onClick={decoratedOnClick}
      >
        <>
        {isCurrentEventKey ? <span>< FaMinusCircle/></span>: <span><FaPlusCircle/></span>}
        {children}
        </>
      </button>
    );
  }