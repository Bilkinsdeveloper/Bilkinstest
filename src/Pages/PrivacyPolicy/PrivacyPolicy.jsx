import React, { useRef } from "react";
import Animate from "../../Components/Animation/Animate";

export const PrivacyPolicy = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const data = [
    {
      category: "A. Identifiers",
      examples:
        "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name",
      collected: "NO",
    },
    {
      category:
        "B. Personal information as defined in the California Customer Records statute",
      examples:
        "Name, contact information, education, employment, employment history, and financial information",
      collected: "YES",
    },
    {
      category:
        "C. Protected classification characteristics under state or federal law",
      examples:
        "Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data",
      collected: "",
    },
    {
      category: "D. Commercial information",
      examples:
        "Transaction information, purchase history, financial details, and payment information",
      collected: "",
    },
    {
      category: "E. Biometric information",
      examples: "Fingerprints and voiceprints",
      collected: "",
    },
    {
      category: "F. Internet or other similar network activity",
      examples:
        "Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements",
      collected: "",
    },
    {
      category: "G. Geolocation data",
      examples: "Device location",
      collected: "",
    },
    {
      category: "H. Audio, electronic, sensory, or similar information",
      examples:
        "Images and audio, video or call recordings created in connection with our business activities",
      collected: "",
    },
    {
      category: "I. Professional or employment-related information",
      examples:
        "Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us",
      collected: "",
    },
    {
      category: "J. Education Information",
      examples: "Student records and directory information",
      collected: "",
    },
    {
      category: "K. Inferences drawn from collected personal information",
      examples:
        "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics",
      collected: "NO",
    },
    {
      category: "L. Sensitive personal Information",
      examples: "",
      collected: "NO",
    },
  ];

  return (
    <div className="container-xxl">
      <div>
        <div className="aboutBanner-container">
          <div className="row">
            <div className="service-banner-right col-md-6 col-xs-12">
              <div className="AboutBanner-text">
                <Animate>
                  <h1>Privacy Policy</h1>
                </Animate>
              </div>
            </div>
          </div>
        </div>
        <div className="container privacy-policy-text">
          <h1>Privacy Policy</h1>
          <p>Last updated: November 29, 2024</p>

          <p>
            This Privacy Notice for <strong>Bilkins Inc</strong> ("we," "us," or
            "our") describes how and why we might access, collect, store, use,
            and/or share ("process") your personal information when you use our
            services ("Services"), including when you:
          </p>
          <ul>
            <li>
              Visit our website at{" "}
              <a href="https://bilkins.com/">https://bilkins.com/</a>, or any
              website of ours that links to this Privacy Notice
            </li>
            <li>
              Engage with us in other related ways, including any sales,
              marketing, or events
            </li>
          </ul>

          <p>
            Questions or concerns? Reading this Privacy Notice will help you
            understand your privacy rights and choices. If you do not agree with
            our policies and practices, please do not use our Services. If you
            still have any questions or concerns, please contact us at{" "}
            <a href="mailto:info@bilkins.com">info@bilkins.com</a>.
          </p>

          <h2>SUMMARY OF KEY POINTS</h2>
          <p>
            This summary provides key points from our Privacy Notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our{" "}
            <strong>table of contents</strong> below to find the section you are
            looking for.
          </p>
          <ul style={{ listStyle: "none" }}>
            <li>
              <strong>What personal information do we process?</strong> When you
              visit, use, or navigate our Services, we may process personal
              information depending on how you interact with us and the
              Services, the choices you make, and the products and features you
              use. .Learn more about {" "}
              <button className="terms-and-conditions-link" onClick={() => scrollToSection("how-do-we-process-your-information?")}>personal information you disclose to us.</button>              
            </li>
            <br />
            <li>
              <strong>Do we process any sensitive personal information?</strong>{" "}
              Some of the information may be considered "special" or "sensitive"
              in certain jurisdictions, for example your racial or ethnic
              origins, sexual orientation, and religious beliefs. We do not
              process sensitive personal information
            </li>
            <br />
            <li>
              <strong>Do we collect any information from third parties?</strong>{" "}
              We do not collect any information from third parties.
            </li>
            <br />
            <li>
              <strong>How do we process your information?</strong> We process
              your information to provide, improve, and administer our Services,
              communicate with you, for security and fraud prevention, and to
              comply with law. We may also process your information for other
              purposes with your consent. We process your information only when
              we have a valid legal reason to do so. Learn more about{" "}
              <button className="terms-and-conditions-link" onClick={() => scrollToSection("how-do-we-process-your-information?")}>how we process your information</button>              
            </li>
            <br />
            <li>
              <strong>
                In what situations and with which parties do we share personal
                information?
              </strong>{" "}
              We may share information in specific situations and with specific
              third parties.Learn more about{" "}
              <button className="terms-and-conditions-link" onClick={() => scrollToSection("when-and-with-whom-do-we-share-your-personal-information?")}>when and with whom we share your personal information</button>              
            </li>
            <br />
            <li>
              <strong>What are your rights?</strong> Depending on where you are
              located geographically, the applicable privacy law may mean you
              have certain rights regarding your personal information.Learn more
              about 
              <button className="terms-and-conditions-link" onClick={() => scrollToSection("what-are-your-privacy-rights?")}> your privacy rights</button>              
            </li>
            <br />
            <li>
              <strong>How do you exercise your rights?</strong> The easiest way
              to exercise your rights is by visiting{" "}
              <a href="https://bilkins.com/contact">
                https://bilkins.com/contact
              </a>
              , or by contacting us. We will consider and act upon any request
              in accordance with applicable data protection laws.
            </li>
            <br />
            <li>
              Want to learn more about what we do with any information we
              collect?
              <button className="terms-and-conditions-link" onClick={() => scrollToSection("what-are-your-privacy-rights?")}>Review privacy note in full</button>              
            </li>
            <br />
          </ul>

          <div>
            <h2>TABLE OF CONTENTS</h2>
            <ul>
              {[
                "WHAT INFORMATION DO WE COLLECT?",
                "HOW DO WE PROCESS YOUR INFORMATION?",
                "WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?",
                "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
                "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
                "HOW LONG DO WE KEEP YOUR INFORMATION?",
                "DO WE COLLECT INFORMATION FROM MINORS?",
                "WHAT ARE YOUR PRIVACY RIGHTS?",
                "CONTROLS FOR DO-NOT-TRACK FEATURES",
                "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
                "DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?",
                "DO WE MAKE UPDATES TO THIS NOTICE?",
                "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
              ].map((section) => (
                <li key={section}>
                  <button
                    className="terms-and-conditions-link"
                    onClick={() =>
                      scrollToSection(section.toLowerCase().replace(/ /g, "-"))
                    }
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <section id="what-information-do-we-collect?">
            <h1>1. WHAT INFORMATION DO WE COLLECT?</h1>
            <h2>Personal information you disclose to us</h2>
            <p>
              <strong>In Short:</strong> We collect personal information that
              you provide to us.
            </p>
            <p>
              We collect personal information that you voluntarily provide to us
              when you express an interest in obtaining information about us or
              our products and Services, when you participate in activities on
              the Services, or otherwise when you contact us.
            </p>
            <h3>Personal Information Provided by You</h3>
            <p>
              The personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
            </p>
            <h3>Sensitive Information</h3>
            <p>We do not process sensitive information.</p>
            <p>
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </p>

            <h2>Information automatically collected</h2>
            <p>
              <strong>In Short:</strong> Some information — such as your
              Internet Protocol (IP) address and/or browser and device
              characteristics — is collected automatically when you visit our
              Services.
            </p>
            <p>
              We automatically collect certain information when you visit, use,
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services, and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our
              internal analytics and reporting purposes.
            </p>
            <p>
              Like many businesses, we also collect information through cookies
              and similar technologies. You can find out more about this in our
              Cookie Notice:{" "}
              <a href="https://bilkins.com/cookie-policy">
                https://bilkins.com/cookie-policy
              </a>
              .
            </p>

            <h3>The information we collect includes:</h3>
            <ul>
              <li>
                <strong>Log and Usage Data:</strong> Log and usage data is
                service-related, diagnostic, usage, and performance information
                our servers automatically collect when you access or use our
                Services and which we record in log files. Depending on how you
                interact with us, this log data may include your IP address,
                device information, browser type, and settings and information
                about your activity in the Services (such as the date/time
                stamps associated with your usage, pages and files viewed,
                searches, and other actions you take such as which features you
                use), device event information (such as system activity, error
                reports (sometimes called "crash dumps"), and hardware
                settings).
              </li>
              <li>
                <strong>Google API:</strong> Our use of information received
                from Google APIs will adhere to Google API Services User Data
                Policy, including the Limited Use requirements.
              </li>
            </ul>
          </section>
          <section id="how-do-we-process-your-information?">
            <h1>2. HOW DO WE PROCESS YOUR INFORMATION?</h1>
            <p>
              <strong>In Short:</strong> We process your information to provide,
              improve, and administer our Services, communicate with you, for
              security and fraud prevention, and to comply with law. We may also
              process your information for other purposes with your consent.
            </p>
            <p>
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </p>
            <ul>
              <li>
                <strong>
                  To save or protect an individual's vital interest:
                </strong>{" "}
                We may process your information when necessary to save or
                protect an individual’s vital interest, such as to prevent harm.
              </li>
            </ul>
          </section>
          <section id="what-legal-bases-do-we-rely-on-to-process-your-information?">
            <h1>
              3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
            </h1>
            <p>
              <strong>In Short:</strong> We only process your personal
              information when we believe it is necessary and we have a valid
              legal reason (i.e., legal basis) to do so under applicable law,
              like with your consent, to comply with laws, to provide you with
              services to enter into or fulfill our contractual obligations, to
              protect your rights, or to fulfill our legitimate business
              interests.
            </p>

            <h2>
              If you are located in the EU or UK, this section applies to you.
            </h2>
            <p>
              The General Data Protection Regulation (GDPR) and UK GDPR require
              us to explain the valid legal bases we rely on in order to process
              your personal information. As such, we may rely on the following
              legal bases to process your personal information:
            </p>
            <ul>
              <li>
                <strong>Consent:</strong> We may process your information if you
                have given us permission (i.e., consent) to use your personal
                information for a specific purpose. You can withdraw your
                consent at any time. Learn more about withdrawing your consent.
              </li>
              <li>
                <strong>Legal Obligations:</strong> We may process your
                information where we believe it is necessary for compliance with
                our legal obligations, such as to cooperate with a law
                enforcement body or regulatory agency, exercise or defend our
                legal rights, or disclose your information as evidence in
                litigation in which we are involved.
              </li>
              <li>
                <strong>Vital Interests:</strong> We may process your
                information where we believe it is necessary to protect your
                vital interests or the vital interests of a third party, such as
                situations involving potential threats to the safety of any
                person.
              </li>
            </ul>

            <h2>If you are located in Canada, this section applies to you.</h2>
            <p>
              We may process your information if you have given us specific
              permission (i.e., express consent) to use your personal
              information for a specific purpose, or in situations where your
              permission can be inferred (i.e., implied consent). You can
              withdraw your consent at any time.
            </p>
            <p>
              In some exceptional cases, we may be legally permitted under
              applicable law to process your information without your consent,
              including, for example:
            </p>
            <ul>
              <li>
                If collection is clearly in the interests of an individual and
                consent cannot be obtained in a timely way
              </li>
              <li>For investigations and fraud detection and prevention</li>
              <li>
                For business transactions provided certain conditions are met
              </li>
              <li>
                If it is contained in a witness statement and the collection is
                necessary to assess, process, or settle an insurance claim
              </li>
              <li>
                For identifying injured, ill, or deceased persons and
                communicating with next of kin
              </li>
              <li>
                If we have reasonable grounds to believe an individual has been,
                is, or may be victim of financial abuse
              </li>
              <li>
                If it is reasonable to expect collection and use with consent
                would compromise the availability or the accuracy of the
                information and the collection is reasonable for purposes
                related to investigating a breach of an agreement or a
                contravention of the laws of Canada or a province
              </li>
              <li>
                If disclosure is required to comply with a subpoena, warrant,
                court order, or rules of the court relating to the production of
                records
              </li>
              <li>
                If it was produced by an individual in the course of their
                employment, business, or profession and the collection is
                consistent with the purposes for which the information was
                produced
              </li>
              <li>
                If the collection is solely for journalistic, artistic, or
                literary purposes
              </li>
              <li>
                If the information is publicly available and is specified by the
                regulations
              </li>
            </ul>
          </section>
          <section id="when-and-with-whom-do-we-share-your-personal-information?">
            <h2>
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h2>
            <p>
              In Short: We may share information in specific situations
              described in this section and/or with the following third parties.
            </p>
            <p>
              We may need to share your personal information in the following
              situations:
            </p>
            <ul>
              <li>
                <strong>Business Transfers.</strong> We may share or transfer
                your information in connection with, or during negotiations of,
                any merger, sale of company assets, financing, or acquisition of
                all or a portion of our business to another company.
              </li>
              <li>
                <strong>When we use Google Maps Platform APIs.</strong> We may
                share your information with certain Google Maps Platform APIs
                (e.g., Google Maps API, Places API). Google Maps uses GPS,
                Wi-Fi, and cell towers to estimate your location. GPS is
                accurate to about 20 meters, while Wi-Fi and cell towers help
                improve accuracy when GPS signals are weak, like indoors. This
                data helps Google Maps provide directions, but it is not always
                perfectly precise.
              </li>
            </ul>
          </section>
          <section id="do-we-use-cookies-and-other-tracking-technologies?">
            <h2>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
            <p>
              In Short: We may use cookies and other tracking technologies to
              collect and store your information.
            </p>
            <p>
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to gather information when you interact with
              our Services. Some online tracking technologies help us maintain
              the security of our Services, prevent crashes, fix bugs, save your
              preferences, and assist with basic site functions.
            </p>
            <p>
              We also permit third parties and service providers to use online
              tracking technologies on our Services for analytics and
              advertising, including to help manage and display advertisements,
              to tailor advertisements to your interests, or to send abandoned
              shopping cart reminders (depending on your communication
              preferences). The third parties and service providers use their
              technology to provide advertising about products and services
              tailored to your interests which may appear either on our Services
              or on other websites.
            </p>
            <p>
              To the extent these online tracking technologies are deemed to be
              a "sale"/"sharing" (which includes targeted advertising, as
              defined under the applicable laws) under applicable US state laws,
              you can opt out of these online tracking technologies by
              submitting a request as described below under section "DO UNITED
              STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"
            </p>
            <p>
              Specific information about how we use such technologies and how
              you can refuse certain cookies is set out in our Cookie Notice:{" "}
              <a href="https://bilkins.com/cookie-policy">
                https://bilkins.com/cookie-policy
              </a>
              .
            </p>

            <h3>Google Analytics</h3>
            <p>
              We may share your information with Google Analytics to track and
              analyze the use of the Services. The Google Analytics Advertising
              Features that we may use include: Google Display Network
              Impressions Reporting. To opt out of being tracked by Google
              Analytics across the Services, visit{" "}
              <a href="https://tools.google.com/dlpage/gaoptout">
                https://tools.google.com/dlpage/gaoptout
              </a>
              . You can opt out of Google Analytics Advertising Features through
              Ads Settings and Ad Settings for mobile apps. Other opt out means
              include{" "}
              <a href="http://optout.networkadvertising.org/">
                http://optout.networkadvertising.org/
              </a>
              and{" "}
              <a href="http://www.networkadvertising.org/mobile-choice">
                http://www.networkadvertising.org/mobile-choice
              </a>
              . For more information on the privacy practices of Google, please
              visit the Google Privacy & Terms page.
            </p>
          </section>
          <section id="how-long-do-we-keep-your-information?">
            <h2>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
            <p>
              In Short: We keep your information for as long as necessary to
              fulfill the purposes outlined in this Privacy Notice unless
              otherwise required by law.
            </p>
            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this Privacy Notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements). No purpose in this
              notice will require us keeping your personal information for
              longer than 6 months.
            </p>
            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
          </section>
          <section id="do-we-collect-information-from-minors?">
            <h2>7. DO WE COLLECT INFORMATION FROM MINORS?</h2>
            <p>
              In Short: We do not knowingly collect data from or market to
              children under 18 years of age.
            </p>
            <p>
              We do not knowingly collect, solicit data from, or market to
              children under 18 years of age, nor do we knowingly sell such
              personal information. By using the Services, you represent that
              you are at least 18 or that you are the parent or guardian of such
              a minor and consent to such minor dependent’s use of the Services.
              If we learn that personal information from users less than 18
              years of age has been collected, we will deactivate the account
              and take reasonable measures to promptly delete such data from our
              records. If you become aware of any data we may have collected
              from children under age 18, please contact us at{" "}
              <a href="mailto:info@bilkins.com">info@bilkins.com</a>.
            </p>
          </section>
          <section id="what-are-your-privacy-rights?">
            <h2>8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
            <p>
              In Short: Depending on your state of residence in the US or in
              some regions, such as the European Economic Area (EEA), United
              Kingdom (UK), Switzerland, and Canada, you have rights that allow
              you greater access to and control over your personal information.
              You may review, change, or terminate your account at any time,
              depending on your country, province, or state of residence.
            </p>
            <p>
              In some regions (like the EEA, UK, Switzerland, and Canada), you
              have certain rights under applicable data protection laws. These
              may include the right (i) to request access and obtain a copy of
              your personal information, (ii) to request rectification or
              erasure; (iii) to restrict the processing of your personal
              information; (iv) if applicable, to data portability; and (v) not
              to be subject to automated decision-making. In certain
              circumstances, you may also have the right to object to the
              processing of your personal information. You can make such a
              request by contacting us by using the contact details provided in
              the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
            </p>
            <p>
              We will consider and act upon any request in accordance with
              applicable data protection laws.
            </p>
            <p>
              If you are located in the EEA or UK and you believe we are
              unlawfully processing your personal information, you also have the
              right to complain to your Member State data protection authority
              or UK data protection authority.
            </p>
            <p>
              If you are located in Switzerland, you may contact the Federal
              Data Protection and Information Commissioner.
            </p>
            <p>
              Withdrawing your consent: If we are relying on your consent to
              process your personal information, which may be express and/or
              implied consent depending on the applicable law, you have the
              right to withdraw your consent at any time. You can withdraw your
              consent at any time by contacting us by using the contact details
              provided in the section "HOW CAN YOU CONTACT US ABOUT THIS
              NOTICE?" below.
            </p>
            <p>
              However, please note that this will not affect the lawfulness of
              the processing before its withdrawal nor, when applicable law
              allows, will it affect the processing of your personal information
              conducted in reliance on lawful processing grounds other than
              consent.
            </p>
            <p>
              Opting out of marketing and promotional communications: You can
              unsubscribe from our marketing and promotional communications at
              any time by clicking on the unsubscribe link in the emails that we
              send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we
              send, or by contacting us using the details provided in the
              section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You
              will then be removed from the marketing lists. However, we may
              still communicate with you — for example, to send you
              service-related messages that are necessary for the administration
              and use of your account, to respond to your requests, or for other
              non-marketing purposes.
            </p>
            <p>
              Cookies and similar technologies: Most Web browsers are set to
              accept cookies by default. If you prefer, you can usually choose
              to set your browser to remove cookies and to reject cookies. If
              you choose to remove cookies or reject cookies, this could affect
              certain features or services of our Services.{" "}
            </p>
          </section>

          <section id="controls-for-do-not-track-features">
            <h1>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h1>
            <p>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ("DNT") feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage, no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this Privacy Notice.
            </p>
            <p>
              California law requires us to let you know how we respond to web
              browser DNT signals. Because there currently is not an industry or
              legal standard for recognizing or honoring DNT signals, we do not
              respond to them at this time.
            </p>
          </section>
          <section id="do-united-states-residents-have-specific-privacy-rights?">
            <h1>
              10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </h1>
            <p>
              In Short: If you are a resident of California, Colorado,
              Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky,
              Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon,
              Tennessee, Texas, Utah, or Virginia, you may have the right to
              request access to and receive details about the personal
              information we maintain about you and how we have processed it,
              correct inaccuracies, get a copy of, or delete your personal
              information. You may also have the right to withdraw your consent
              to our processing of your personal information. These rights may
              be limited in some circumstances by applicable law. More
              information is provided below.
            </p>

            <h1>Categories of Personal Information We Collect</h1>
            <p>
              We have collected the following categories of personal information
              in the past twelve (12) months:
            </p>
          </section>
          <section id="categories-of-personal-information-we-collect">
            <h1>Categories of Personal Information We Collect</h1>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "20px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      textAlign: "left",
                    }}
                  >
                    Category
                  </th>
                  <th
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      textAlign: "left",
                    }}
                  >
                    Examples
                  </th>
                  <th
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      textAlign: "left",
                    }}
                  >
                    Collected
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid black", padding: "10px" }}>
                      {row.category}
                    </td>
                    <td style={{ border: "1px solid black", padding: "10px" }}>
                      {row.examples}
                    </td>
                    <td style={{ border: "1px solid black", padding: "10px" }}>
                      {row.collected}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              We may also collect other personal information outside of these
              categories through instances where you interact with us in person,
              online, or by phone or mail in the context of:
            </p>
            <ul>
              <li>Receiving help through our customer support channels;</li>
              <li>Participation in customer surveys or contests; and</li>
              <li>
                Facilitation in the delivery of our Services and to respond to
                your inquiries.
              </li>
            </ul>
            <p>
              We will use and retain the collected personal information as
              needed to provide the Services or for:
            </p>
            <ul>
              <li>Category B - 6 months</li>
              <li>Category H - 6 months</li>
            </ul>

            <h2>Sources of Personal Information</h2>
            <p>
              Learn more about the sources of personal information we collect in
              "WHAT INFORMATION DO WE COLLECT?"
            </p>

            <h2>How We Use and Share Personal Information</h2>
            <p>
              Learn more about how we use your personal information in the
              section, "HOW DO WE PROCESS YOUR INFORMATION?"
            </p>

            <h2>Will your information be shared with anyone else?</h2>
            <p>
              We may disclose your personal information with our service
              providers pursuant to a written contract between us and each
              service provider. Learn more about how we disclose personal
              information in the section, "WHEN AND WITH WHOM DO WE SHARE YOUR
              PERSONAL INFORMATION?"
            </p>
            <p>
              We may use your personal information for our own business
              purposes, such as for undertaking internal research for
              technological development and demonstration. This is not
              considered to be "selling" of your personal information.
            </p>
            <p>
              We have not disclosed, sold, or shared any personal information to
              third parties for a business or commercial purpose in the
              preceding twelve (12) months. We will not sell or share personal
              information in the future belonging to website visitors, users,
              and other consumers.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have rights under certain US state data protection laws.
              However, these rights are not absolute, and in certain cases, we
              may decline your request as permitted by law. These rights
              include:
            </p>
            <ul>
              <li>
                Right to know whether or not we are processing your personal
                data
              </li>
              <li>Right to access your personal data</li>
              <li>Right to correct inaccuracies in your personal data</li>
              <li>Right to request the deletion of your personal data</li>
              <li>
                Right to obtain a copy of the personal data you previously
                shared with us
              </li>
              <li>Right to non-discrimination for exercising your rights</li>
              <li>
                Right to opt out of the processing of your personal data if it
                is used for targeted advertising (or sharing as defined under
                California’s privacy law), the sale of personal data, or
                profiling in furtherance of decisions that produce legal or
                similarly significant effects ("profiling")
              </li>
            </ul>

            <p>
              Depending upon the state where you live, you may also have the
              following rights:
            </p>
            <ul>
              <li>
                Right to access the categories of personal data being processed
                (as permitted by applicable law, including Minnesota’s privacy
                law)
              </li>
              <li>
                Right to obtain a list of the categories of third parties to
                which we have disclosed personal data (as permitted by
                applicable law, including California's and Delaware's privacy
                law)
              </li>
              <li>
                Right to obtain a list of specific third parties to which we
                have disclosed personal data (as permitted by applicable law,
                including Minnesota's and Oregon's privacy law)
              </li>
              <li>
                Right to review, understand, question, and correct how personal
                data has been profiled (as permitted by applicable law,
                including Minnesota’s privacy law)
              </li>
              <li>
                Right to limit use and disclosure of sensitive personal data (as
                permitted by applicable law, including California’s privacy law)
              </li>
              <li>
                Right to opt out of the collection of sensitive data and
                personal data collected through the operation of a voice or
                facial recognition feature (as permitted by applicable law,
                including Florida’s privacy law)
              </li>
            </ul>

            <h2>How to Exercise Your Rights</h2>
            <p>
              To exercise these rights, you can contact us by visiting{" "}
              <a href="https://bilkins.com/contact">
                https://bilkins.com/contact
              </a>
              , by emailing us at{" "}
              <a href="mailto:info@bilkins.com">info@bilkins.com</a>, by calling
              toll-free at +1-703-349-1777, by visiting{" "}
              <a href="https://bilkins.com/contact">
                https://bilkins.com/contact
              </a>
              , or by referring to the contact details at the bottom of this
              document.
            </p>
            <p>
              We will honor your opt-out preferences if you enact the Global
              Privacy Control (GPC) opt-out signal on your browser.
            </p>

            <h2>
              Under certain US state data protection laws, you can designate an
              authorized agent to make a request on your behalf.
            </h2>
            <p>
              We may deny a request from an authorized agent that does not
              submit proof that they have been validly authorized to act on your
              behalf in accordance with applicable laws.
            </p>

            <h2>Request Verification</h2>
            <p>
              Upon receiving your request, we will need to verify your identity
              to determine you are the same person about whom we have the
              information in our system. We will only use personal information
              provided in your request to verify your identity or authority to
              make the request. However, if we cannot verify your identity from
              the information already maintained by us, we may request that you
              provide additional information for the purposes of verifying your
              identity and for security or fraud-prevention purposes.
            </p>
            <p>
              If you submit the request through an authorized agent, we may need
              to collect additional information to verify your identity before
              processing your request and the agent will need to provide a
              written and signed permission from you to submit such request on
              your behalf.
            </p>

            <h2>Appeals</h2>
            <p>
              Under certain US state data protection laws, if we decline to take
              action regarding your request, you may appeal our decision by
              emailing us at{" "}
              <a href="mailto:info@bilkins.com">info@bilkins.com</a>. We will
              inform you in writing of any action taken or not taken in response
              to the appeal, including a written explanation of the reasons for
              the decisions. If your appeal is denied, you may submit a
              complaint to your state attorney general.
            </p>

            <h2>California "Shine The Light" Law</h2>
            <p>
              California Civil Code Section 1798.83, also known as the "Shine
              The Light" law, permits our users who are California residents to
              request and obtain from us, once a year and free of charge,
              information about categories of personal information (if any) we
              disclosed to third parties for direct marketing purposes and the
              names and addresses of all third parties with which we shared
              personal information in the immediately preceding calendar year.
              If you are a California resident and would like to make such a
              request, please submit your request in writing to us by using the
              contact details provided in the section "HOW CAN YOU CONTACT US
              ABOUT THIS NOTICE?"
            </p>
          </section>
          <section id="do-other-regions-have-specific-privacy-rights?">
            <h2>11. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
            <p>
              <strong>In Short: </strong>You may have additional rights based on
              the country you reside in.
            </p>

            <h3>Australia and New Zealand</h3>
            <p>
              We collect and process your personal information under the
              obligations and conditions set by Australia's Privacy Act 1988 and
              New Zealand's Privacy Act 2020 (Privacy Act).
            </p>
            <p>
              This Privacy Notice satisfies the notice requirements defined in
              both Privacy Acts, in particular: what personal information we
              collect from you, from which sources, for which purposes, and
              other recipients of your personal information.
            </p>
            <p>
              If you do not wish to provide the personal information necessary
              to fulfill their applicable purpose, it may affect our ability to
              provide our services, in particular:
            </p>
            <ul>
              <li>offer you the products or services that you want</li>
              <li>respond to or help with your requests</li>
            </ul>
            <p>
              At any time, you have the right to request access to or correction
              of your personal information. You can make such a request by
              contacting us by using the contact details provided in the section{" "}
              <strong>
                "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                YOU?"
              </strong>
            </p>
            <p>
              If you believe we are unlawfully processing your personal
              information, you have the right to submit a complaint about a
              breach of the Australian Privacy Principles to the Office of the
              Australian Information Commissioner and a breach of New Zealand's
              Privacy Principles to the Office of New Zealand Privacy
              Commissioner.
            </p>

            <h3>Republic of South Africa</h3>
            <p>
              At any time, you have the right to request access to or correction
              of your personal information. You can make such a request by
              contacting us by using the contact details provided in the section{" "}
              <strong>
                "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                YOU?"
              </strong>
            </p>
            <p>
              If you are unsatisfied with the manner in which we address any
              complaint with regard to our processing of personal information,
              you can contact the office of the regulator, the details of which
              are:
            </p>
            <ul>
              <li>The Information Regulator (South Africa)</li>
              <li>
                General enquiries:{" "}
                <a href="mailto:enquiries@inforegulator.org.za">
                  enquiries@inforegulator.org.za
                </a>
              </li>
              <li>
                Complaints (complete POPIA/PAIA form 5):
                <a href="mailto:PAIAComplaints@inforegulator.org.za">
                  PAIAComplaints@inforegulator.org.za
                </a>{" "}
                &
                <a href="mailto:POPIAComplaints@inforegulator.org.za">
                  POPIAComplaints@inforegulator.org.za
                </a>
              </li>
            </ul>
          </section>
          <section id="do-we-make-updates-to-this-notice?">
            <h2>12. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
            <p>
              <strong>In Short:</strong> Yes, we will update this notice as
              necessary to stay compliant with relevant laws.
            </p>
            <p>
              We may update this Privacy Notice from time to time. The updated
              version will be indicated by an updated "Revised" date at the top
              of this Privacy Notice. If we make material changes to this
              Privacy Notice, we may notify you either by prominently posting a
              notice of such changes or by directly sending you a notification.
              We encourage you to review this Privacy Notice frequently to be
              informed of how we are protecting your information.
            </p>
          </section>
          <section id="how-can-you-contact-us-about-this-notice?">
            <h2>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
            <p>
              If you have questions or comments about this notice, you may email
              us at <a href="mailto:info@bilkins.com">info@bilkins.com</a> or
              contact us by post at:
            </p>
            <address>
              BilkinsInc
              <br />
              44031 Pipeline Plaza STE 300
              <br />
              Ashburn, VA 20147 USA
            </address>
          </section>
          <section id=""></section>
        </div>
      </div>
    </div>
  );
};
