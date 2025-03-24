
const faqData = [
    { top: 'How do I open an account with YourBank?', text: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.' },
    { top: 'What documents do I need to provide to apply for a loan?', text: 'The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver\'s license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.' },
    { top: 'How can I access my accounts online?', text: 'Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven\'t registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.' },
    { top: 'Are my transactions and personal information secure?', text: 'At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.' },
    { top: 'How do I reset my password?', text: 'If you have forgotten your password or need to reset it, simply click on the "Forgot Password" link on the login page. Follow the instructions to verify your identity, and you will be able to set a new password. If you encounter any issues, our customer support team is ready to assist you.' },
    { top: 'Can I transfer money to another bank account?', text: 'Yes, you can transfer money to accounts at other banks. Simply log in to your online banking or mobile banking app, select the "Transfer Funds" option, and choose the "External Transfer" option. You will need the recipient\'s bank account details. Transfers may take 1-3 business days, depending on the recipient\'s bank.' },
    { top: 'How do I set up direct deposit for my paycheck?', text: 'To set up direct deposit, contact your employer and provide them with your bank account details. You can find this information in your online banking account under the "Account Details" section. Once your employer sets up direct deposit, your paycheck will be deposited automatically into your account each payday.' },
    { top: 'How do I close my account?', text: 'To close your account, please contact our customer support team. They will guide you through the process and ensure that any remaining balance is transferred to another account if necessary. Please note that there may be certain conditions or fees associated with closing an account, depending on the type of account and your account balance.' }
];


export default function FaqCard({ showAll }) {


    const displayAll = showAll ? faqData : faqData.slice(0, 4);

    return (
        <>
            {
                displayAll.map((i, k) => (
                    <div className="faq-card" key={k}>

                        <span>{i.top}</span>
                        <p>{i.text}</p>
                    </div>

                ))
            }
        </>
    );
}

