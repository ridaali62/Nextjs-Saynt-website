import React from "react";
import "../globals.css";

const SayntBlog: React.FC = () => {
  return (
    <div className="bg-[#020617] overflow-clip relative z-40 h-full">
      <div className="flex flex-col items-center ">
        <img
          src="/Productline1.png"
          alt="line1"
          className="absolute top-0 left-auto right-auto mblres:hidden block  "
        />
      </div>
      <section className="flex justify-between mx-[10%]  mblres:mx-0 bg-gradient-to-bl from-[#204b4d]  via-[#124c5b]  to-[#133452]  rounded-[30px] pt-5 pl-5 mt-32 h-[400px] mblres:justify-start relative z-42">
        <p className="text-[61px] text-gray-400 font-body font-medium  ">
          Article Banner
        </p>
      </section>
      <section className="mx-[280px] mblres:mx-10 my-16 text-pretty">
        <h1 className="text-[64px] text-white font-bold font-body leading-[70px] mb-10 mblres:text-[30px] mblres:leading-[30px]">
          Is Saynt AI safe for making payments to freelancers
        </h1>
        <div className="flex place-items-center gap-3">
          <img src="logo.png" alt="Log" />
          <div>
            <p className="text-[32px] text-gray-400 font-body font-bold leading-[32px]">
              Team Saynt AI
            </p>
            <p className="text-[24px] text-gray-400 font-body font-medium ">
              July 10,2024
            </p>
          </div>
        </div>
        <p className="text-[24px] text-gray-400 font-body font-medium my-10 mblres:my-5">
          Sadabiz allows freelancers to work with international clients and get
          paid in USD. However, some clients might worry before making the
          payment and ask, “Is SadaBiz safe?”
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium ">
          With all the promises made, this is a healthy dose of skepticimblres. We
          understand your hesitation—trusting a new platform with your
          hard-earned money is a tough call.
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium my-10 mblres:my-5">
          Well, we want you to feel confident about using SadaBiz to pay
          freelancers. In this read, let's jump into details and explore
          everything that makes SadaBiz one of the safest platforms to work
          with.
        </p>
        <p className="text-[32px] text-white font-body font-semibold mblres:leading-[36px]">
          How we're making SadaBiz safe Regulation
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium ">
          SadaPay operates under the eagle eye of Pakistan's most trusted
          financial authority, the State Bank of Pakistan. As a licensed EMI, we
          adhere to all regulatory standards, ensuring your funds and financial
          information are always secure.
        </p>
        <p className="text-[32px] text-white font-body font-semibold my-10 mblres:my-5">
          Data Security
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium ">
          We utilize industry-standard data encryption practices to protect your
          sensitive information. This ensures that your personal and financial
          data is encrypted during tranmblresission and storage, making it
          unreadable to unauthorized parties. Additionally, we have implemented
          robust security measures to prevent unauthorized access to our
          systems, keeping your data safe from any potential threats.
        </p>
        <p className="text-[32px] text-white font-body font-semibold my-10 mblres:my-5">
          3D Secure
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium ">
          SadaBiz uses 3D Secure, an industry-standard protocol that adds an
          extra layer of security to online transactions. During payment, you
          may be redirected to your bank's verification page to enter a
          password, PIN, or one-time code sent to your phone. This additional
          step ensures that only authorized individuals can complete
          transactions, protecting your funds from unauthorized use.
        </p>
        <p className="text-[32px] text-white font-body font-semibold my-10 mblres:my-5">
          Transaction Monitoring
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium ">
          We employ sophisticated fraud detection systems to monitor
          transactions for suspicious activity continuously. This allows you to
          use SadaBiz with peace of mind, knowing we're vigilant in detecting
          any unusual behavior. In the unlikely event of unauthorized activity,
          we promptly investigate and resolve the issue.
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium ">
          Well, what if I get in a conflict with the freelancer I hired?
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium ">
          SadaBiz aims to provide a seamless experience for all parties
          involved. However, you might occasionally encounter a freelancer who
          goes missing while the project is underway. Or what you might get
          delivered is not what you were promised. While we can't guarantee a
          perfect outcome every time, we are here to mediate and help resolve
          issues.
        </p>
        <p className="text-[32px] text-white font-body font-semibold my-10 mblres:my-5">
          Here's what you can expect if a problem arises:
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium ">
          Dispute Resolution Process if a disagreement arises with a freelancer
          regarding service delivery, we have a clear dispute-resolution process
          in place.
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium ">
          If you wish to request a refund for payment, especially in cases where
          services have not been rendered on time, or there are other valid
          reasons for the refund, you can initiate the process by sending an
          email to invoicing.support@sadapay.pk. Clearly explain the reason for
          your refund request and include all relevant details, such as the
          payment link, invoice number, payment date, and any supporting
          documentation.Your email will be routed to the SadaBiz team, who'll
          respond right away—on the same day.{" "}
        </p>
        <div className="flex justify-between  bg-gradient-to-bl from-[#204b4d]  via-[#124c5b]  to-[#133452]  rounded-[30px] pt-5 pl-5 mt-10 h-[400px]"></div>
        <p className="text-[32px] text-white font-body font-semibold my-10 mblres:my-5">
          Refunds and Chargebacks
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium ">
          If a project is canceled after some work has been completed, you may
          consider a chargeback. Not all disputes qualify, and rules can vary
          depending on your bank and situation.
        </p>
        <p className="text-[32px] text-white font-body font-semibold my-10 mblres:my-5">
          Here's what to do:
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium ">
          Check for valid reasons: Valid reasons include unauthorized charges,
          missing items, misleading advertising, or unresolved disagreements
          with the seller. Gather evidence:Collect any proof related to the
          project, such as receipts, order confirmations, invoices, or other
          supporting documentation.
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium ">
          Act quickly: Banks often have deadlines for initiating chargebacks, so
          contact your bank as soon as possible if you believe you have a valid
          reason.
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium ">
          Attempt resolution: Before initiating a chargeback, try to resolve the
          issue directly with the seller. A simple conversation can sometimes
          fix the problem, saving time and hassle for both parties.
        </p>
        <p className="text-[32px] text-white font-body font-semibold mt-10">
          Understand consequences:
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium ">
          Chargebacks can negatively impact merchants, leading to fees and
          reputational damage. Only initiate a chargeback if you have a strong
          case and other avenues for resolution have failed.
        </p>
        <p className="text-[32px] text-white font-body font-semibold my-10 mblres:my-5">
          How do I trust you'll deliver?
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium ">
          We have built a transparent and supportive environment for our
          users—with countless clients making seamless payments to freelancers
          over SadaBiz.{" "}
        </p>
      </section>
      <div>
        <img src="/Footer.png" alt="Footer" className="w-full" />
      </div>
    </div>
);
};
export default SayntBlog;
