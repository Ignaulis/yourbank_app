import arrow from '../../../assets/home/arrowside.svg';

const OnlineBanking = [
    { head: '24/7 Account Access', text: 'Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.' },
    { head: 'Mobile Banking App', text: 'Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.' },
    { head: 'Secure Transactions', text: 'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.' },
    { head: 'Bill Pay and Transfers', text: 'Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.' },
]

const FinancialTools = [
    { head: 'Budgeting Tools', text: 'Take control of your finances with our intuitive budgeting tools. Track your spending, set savings goals, and monitor your progress with ease.' },
    { head: 'Financial Insights', text: 'Gain valuable insights into your financial habits with personalized reports and analytics. Make informed decisions to help you achieve your financial goals.' },
    { head: 'Loan Calculators', text: 'Estimate your monthly payments and compare loan options with our easy-to-use calculators. Plan ahead and make confident borrowing decisions.' },
    { head: 'Investment Tracking', text: 'Keep an eye on your portfolio and track market trends in real time. Stay informed and make smarter investment choices.' },
];

const CustomerSupport = [
    { head: '24/7 Support', text: 'Get assistance whenever you need it. Our support team is available 24/7 to answer your questions and resolve any issues.' },
    { head: 'Live Chat', text: 'Chat with a support representative in real-time for quick answers to your questions. Convenient and hassle-free support at your fingertips.' },
    { head: 'Knowledge Base', text: 'Browse our comprehensive knowledge base for answers to common questions, helpful guides, and step-by-step tutorials.' },
    { head: 'Feedback & Suggestions', text: 'We value your feedback. Share your thoughts and suggestions to help us improve your banking experience.' },
];

export default function OurFeaturesCards({ data }) {

    return (
        <div className="feautures-con">
            {
                data.map((i, k) => (

                    <div className="features-card" key={k}>
                        <div className="card-top">
                            <span>{i.head}</span>
                            <a href="#"><img src={arrow} alt="arrow" /></a>
                        </div>
                        <div className="card-bot">
                            <p>{i.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export { OnlineBanking, FinancialTools, CustomerSupport }