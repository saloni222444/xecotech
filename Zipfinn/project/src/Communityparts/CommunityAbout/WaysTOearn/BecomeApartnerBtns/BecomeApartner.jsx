import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './BecomeApartner.css'
const BecomeAPartner = () => {
    const tableData = [
        { plan: "Essential", monthly: "$10", annually: "$60" },
        { plan: "Essential", monthly: "$10", annually: "$60" },
        { plan: "Royles", monthly: "$40", annually: "$70" },
    ];

    const benefits = [
        "Referred user benefit. The person you refer will get $15 to put toward the cost of their new TradingView plan.",
        "Partner tools. Gain access to dedicated support, detailed reports, real-time tracking, and high-quality creatives.",
        "Timely payments. Payments are made within 30 day after the end of the month.",
        "90-day conversion window. Referrals that sign up within 90 day, and then subscribe within a further 90 day, will be assigned to you.",
        "Attractive returns. $17.5 EPC - the average earn per 100 clicks.",
    ];

    return (
        <div className="become-partner-container">
            <div className="become-partner-section">
                <h1 className="become-partner-section-heading">Earn with Zepfinn</h1>
                <p className="become-partner-section-para">
                    Become an affiliate partner and make cash by promoting a product your
                    followers will love.
                </p>
                <div className="become-partner-column-section">
                    <div className="become-partner-column">
                        <h1>#1</h1>
                        <p>
                            The biggest website in the world when it comes to all things
                            investing.
                        </p>
                    </div>
                    <div className="become-partner-column">
                        <h1>
                            <FontAwesomeIcon icon={faGlobe} /> 20
                        </h1>
                        <p>
                            The biggest website in the world when it comes to all things
                            investing.
                        </p>
                    </div>
                    <div className="become-partner-column">
                        <h1>$10M+</h1>
                        <p>
                            The biggest website in the world when it comes to all things
                            investing.
                        </p>
                    </div>
                </div>
                <div className="become-partner-commissions">
                    <h3 className="become-commissions">Commissions you get</h3>
                    <p className="become-commissions-para">
                        You earn cash for every first-time subscriber you refer.
                    </p>

                    <div className="become-commissions-table">
                        <div className="section-plans-table">
                            <div className="table-plans">Plans</div>
                            <div className="table-plans">Monthly</div>
                            <div className="table-plans">Annually</div>
                        </div>

                        {tableData.map((row, index) => (
                            <div key={index} className="section-plans-table">
                                <div className="table-plans">{row.plan}</div>
                                <div className="table-plans">{row.monthly}</div>
                                <div className="table-plans">{row.annually}</div>
                            </div>
                        ))}
                    </div>
                    <h3 className="become-commission-alsoget">Also you get</h3>
                    <div className="become-commission-alsoget-li">
                        {benefits.map((item, idx) => (
                            <section key={idx} className="benefit-item">
                                <p>{item}</p>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
            <div className="become-partner-deshoard">
                <button className="open-partner-link">Open Partner Dashboard</button>
                <p className="partner-terms-condition">
                    Complete details in our{" "}
                    <a href="#">Partner program rules</a>
                </p>
            </div>
        </div>
    );
};

export default BecomeAPartner;
