import React, { useState, useEffect } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});
  const [faqItems, setFaqItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch FAQs from API
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('https://zepfinn.xecotech.co/api/faqs');
        
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        
        const data = await response.json();
        
        // Extract FAQs from the nested data structure
        const faqsData = data.data.faqs.data;
        
        // Transform API data to match our format
        const transformedFaqs = faqsData.map((item) => ({
          id: item.id,
          question: item.data_values.question,
          answer: item.data_values.answer
        }));
        
        setFaqItems(transformedFaqs);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
        // Fallback to default FAQs if API fails
        setFaqItems([
          {
            id: 1,
            question: "How does the free trial work?",
            answer: "You get full access to all features for 14 days. No credit card required."
          },
          {
            id: 2,
            question: "Do you offer discounts for startups or non-profits?",
            answer: "Yes, we offer special pricing for startups and non-profit organizations."
          },
          {
            id: 3,
            question: "Can I change my plan later?",
            answer: "You can upgrade or downgrade your plan at any time."
          },
          {
            id: 4,
            question: "What kind of support do you offer?",
            answer: "We offer 24/7 email support and live chat during business hours."
          },
          {
            id: 5,
            question: "Is my data secure?",
            answer: "We use enterprise-grade security with end-to-end encryption."
          },
          {
            id: 6,
            question: "Can I export my data?",
            answer: "Yes, you can export all your data in multiple formats at any time."
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const ChevronDownIcon = ({ isOpen }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`chevron-icon ${isOpen ? 'rotate-180' : ''}`}
    >
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  );

  if (loading) {
    return (
      <section className="faq-section">
        <div className="background-effects">
          <div className="effect effect-amber"></div>
          <div className="effect effect-red"></div>
        </div>

        <div className="container">
          <div className="faq-header">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">
              Have questions? We're here to help. If you don't see your question here, feel free to contact us.
            </p>
          </div>
          
          <div className="faq-content">
            <div className="loading-state">
              <p>Loading FAQs...</p>
            </div>
          </div>

          <div className="faq-footer">
            <p className="footer-text">
              Still have questions?{' '}
              <a href="#contact" className="contact-link">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="faq-section">
      {/* Background Effects */}
      <div className="background-effects">
        <div className="effect effect-amber"></div>
        <div className="effect effect-red"></div>
      </div>

      <div className="container">
        {/* Header */}
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Have questions? We're here to help. If you don't see your question here, feel free to contact us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="faq-content">
          <div className="faq-list">
            {faqItems.map((item) => (
              <div 
                key={item.id}
                className={`faq-item ${openItems[item.id] ? 'open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItems[item.id]}
                >
                  <span className="question-text">{item.question}</span>
                  <ChevronDownIcon isOpen={openItems[item.id]} />
                </button>
                
                <div 
                  className={`faq-answer ${openItems[item.id] ? 'open' : ''}`}
                >
                  <div className="answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="faq-footer">
          <p className="footer-text">
            Still have questions?{' '}
            <a href="#contact" className="contact-link">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;