import React, { useState } from 'react';
import logo from '../images/Group.png';
import './css/faq.css';

function Faq1() {
  const [expanded, setExpanded] = useState(null);

  const faqData = [
    { question: 'What is EXPRESSbase, and who can use it?',
      answer: 'EXPRESSbase is an open-source, low-code rapid application development and delivery platform on the cloud targeting small and mid-sized businesses that helps build business process applications (some people call it ERP, some call it business automation). Businesses having their own IT team can use our cloud-based platform to build and host apps for their requirements. Businesses without their own IT team could hire a developer and get the work done, or get in touch with us - we have an implementation team who can do it for you.' },
    { question: 'What is the benefit of using a platform like EXPRESSbase vis-a-vis custom developing applications from scratch?', 
      answer: 'Developing applications from scratch takes a lot of time and effort, and it is a pain to maintain if the requirements change often. EXPRESSbase is a development platform on the cloud, with web-based builders for Forms, Visualizations, PDF Reports, APIs, Chatbots, and Document Management. After each change made, there is no compiling, building, packaging, or deploying required - everything is automatic, saving you loads of time and effort. There are pre-built application templates in our app-store, which you can download and customize - saving you more time.' },
    { question: 'Why do you say EXPRESSbase is Low-Code, and not No-Code? ',
      answer: 'No-Code development platforms target novices or non-developers - absolutely no coding/programming is required to build applications. Because you don\'t write code, the apps that you can build with No-code platforms are often simplistic. When the business requirements are complex, these platforms struggle. Our philosophy is different - we don\'t believe coding or programming can ever be avoided completely, or rather it shouldn\'t be. When the business requirements are complex, you will need to flex your brain muscles. But you needn\'t strain too much - that is the idea, cut down the human effort involved in software development. Low-code means you can certainly write code, but "low" code.' },
    { question: 'I am not a developer. Can I use EXPRESSbase to develop apps for my requirements?',
      answer: 'Hmm... Yes and No. If you are a developer, you will certainly enjoy working with EXPRESSbase. If you are not a developer, and also not tech-savvy, chances are that you will struggle. It is built that way, and we would like to keep it that way. EXPRESSbase is a development platform for developers & tech-savvy people. If you are adventurous, just try it - we have application templates that can help you start with.' },
    { question: 'As a business owner, I am worried about my data. Am I safe?',
      answer: 'We allow connecting your existing database (that is being used by your existing/legacy applications) to our infrastructure and build new applications. That doesn\'t mean that we read your data. No, we don\'t. We will just keep the credentials (in a very secure format) to connect to your database, and we don\'t eavesdrop. You own your data - you could take it away anytime. But you will not, once you start enjoying the benefits of EXPRESSbase. That\'s for sure!' },
    { question: 'I do not want to start from scratch. Do I have templates to start with?',
      answer: 'Yes. We have an app-store, which is nothing but an application templates repository. You can download any app, install it, and customize it as you like. You could also monetize the app that you built by pushing it into the app-store. The idea is to encourage more and more developers to contribute to the ecosystem.' },
    { question: 'Is there a FREE-FOR-EVER option? ',
      answer: 'Yes. The Free-forever package is for 5 users in a solution.' }
  ];

  const toggleAnswer = index => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div>
      <div className="container pt-5">
        <div className="text-md-center mb-4 mb-md-0">
          <h3 className="head" style={{ color: '#193054' }}>FAQs</h3>
          <p className="para1 pt-4">
            Connect your database and turn your data into attractive tables, charts, or portable reports using our futuristic Drag-n-Drop builders on the Cloud.
          </p>
        </div>
      </div>
      <div className="faq">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              <span className="toggle-icon">{expanded === index ? '-' : '+'}</span>
            </div>
            {expanded === index && <div className="answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq1;
