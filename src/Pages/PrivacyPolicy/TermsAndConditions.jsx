import React from "react";
import Animate from "../../Components/Animation/Animate";

export const TermsAndConditions = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="container-xxl">
      <div>
        <div className="aboutBanner-container">
          <div className="row">
            <div className="service-banner-right col-md-6 col-xs-12">
              <div className="AboutBanner-text">
                <Animate>
                  <h1>Terms & Conditions</h1>
                  {/* <h4>Holidays at Bilkins Inc.</h4> */}
                </Animate>
              </div>
            </div>
          </div>
        </div>
        <div className="container privacy-policy-text">
          <h1>Legal Terms</h1>
          <p>
            We are BilkinsInc ("Company," "we," "us," "our"), a company
            registered in Virginia, United States at 44031 Pipeline Plaza STE
            300, Ashburn, VA 20147.
          </p>
          <p>
            We operate the website{" "}
            <a href="https://bilkins.com/">https://bilkins.com/</a> (the
            "Site"), as well as any other related products and services that
            refer or link to these legal terms (the "Legal Terms")
            (collectively, the "Services").
          </p>
          <p>
            You can contact us by phone at{" "}
            <a href="tel:+1-703-349-1777">+1-703-349-1777</a>, email at{" "}
            <a href="mailto:info@bilkins.com">info@bilkins.com</a>, or by mail
            to 44031 Pipeline Plaza STE 300, Ashburn, VA 20147, United States.
          </p>
          <p>
            These Legal Terms constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity ("you"),
            and BilkinsInc, concerning your access to and use of the Services.
            You agree that by accessing the Services, you have read, understood,
            and agreed to be bound by all of these Legal Terms. IF YOU DO NOT
            AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY
            PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE
            IMMEDIATELY.
          </p>
          <p>
            Supplemental terms and conditions or documents that may be posted on
            the Services from time to time are hereby expressly incorporated
            herein by reference. We reserve the right, in our sole discretion,
            to make changes or modifications to these Legal Terms from time to
            time. We will alert you about any changes by updating the "Last
            updated" date of these Legal Terms, and you waive any right to
            receive specific notice of each such change. It is your
            responsibility to periodically review these Legal Terms to stay
            informed of updates. You will be subject to, and will be deemed to
            have been made aware of and to have accepted, the changes in any
            revised Legal Terms by your continued use of the Services after the
            date such revised Legal Terms are posted.
          </p>
          <p>
            The Services are intended for users who are at least 18 years old.
            Persons under the age of 18 are not permitted to use or register for
            the Services.
          </p>
          <p>
            We recommend that you print a copy of these Legal Terms for your
            records.
          </p>

          <h1>Table of Contents</h1>
          <ul>
            {[
              "OUR SERVICES",
              "INTELLECTUAL PROPERTY RIGHTS",
              "USER REPRESENTATIONS",
              "PROHIBITED ACTIVITIES",
              //   "USER GENERATED CONTRIBUTIONS",
              //   "CONTRIBUTION LICENSE",
              "THIRD-PARTY WEBSITES AND CONTENT",
              "ADVERTISERS",
              "SERVICES MANAGEMENT",
              "PRIVACY POLICY",
              "TERM AND TERMINATION",
              "MODIFICATIONS AND INTERRUPTIONS",
              "GOVERNING LAW",
              "DISPUTE RESOLUTION",
              "CORRECTIONS",
              "DISCLAIMER",
              "LIMITATIONS OF LIABILITY",
              "INDEMNIFICATION",
              "USER DATA",
              "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
              "CALIFORNIA USERS AND RESIDENTS",
              "MISCELLANEOUS",
              "CONTACT US",
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

          <section id="our-services">
            <h1>1. OUR SERVICES</h1>
            <p>
              The information provided when using the Services is not intended
              for distribution to or use by any person or entity in any
              jurisdiction or country where such distribution or use would be
              contrary to law or regulation or which would subject us to any
              registration requirement within such jurisdiction or country.
              Accordingly, those persons who choose to access the Services from
              other locations do so on their own initiative and are solely
              responsible for compliance with local laws, if and to the extent
              local laws are applicable. The Services are not tailored to comply
              with industry-specific regulations (Health Insurance Portability
              and Accountability Act (HIPAA), Federal Information Security
              Management Act (FISMA), etc.), so if your interactions would be
              subjected to such laws, you may not use the Services. You may not
              use the Services in a way that would violate the
              Gramm-Leach-Bliley Act (GLBA).
            </p>
          </section>
          <section id="intellectual-property-rights">
            <h1>2. Intellectual Property Rights</h1>
            <h2>Our Intellectual Property</h2>
            <p>
              We are the owner or the licensee of all intellectual property
              rights in our Services, including all source code, databases,
              functionality, software, website designs, audio, video, text,
              photographs, and graphics in the Services (collectively, the
              "Content"), as well as the trademarks, service marks, and logos
              contained therein (the "Marks").
            </p>
            <p>
              Our Content and Marks are protected by copyright and trademark
              laws (and various other intellectual property rights and unfair
              competition laws) and treaties in the United States and around the
              world.
            </p>
            <p>
              The Content and Marks are provided in or through the Services "AS
              IS" for your personal, non-commercial use or internal business
              purpose only.
            </p>

            <h2>Your Use of Our Services</h2>
            <p>
              Subject to your compliance with these Legal Terms, including the
              "PROHIBITED ACTIVITIES" section below, we grant you a
              non-exclusive, non-transferable, revocable license to:
            </p>
            <ul>
              <li>Access the Services; and</li>
              <li>
                Download or print a copy of any portion of the Content to which
                you have properly gained access, solely for your personal,
                non-commercial use or internal business purpose.
              </li>
            </ul>
            <p>
              Except as set out in this section or elsewhere in our Legal Terms,
              no part of the Services and no Content or Marks may be copied,
              reproduced, aggregated, republished, uploaded, posted, publicly
              displayed, encoded, translated, transmitted, distributed, sold,
              licensed, or otherwise exploited for any commercial purpose
              whatsoever, without our express prior written permission.
            </p>
            <p>
              If you wish to make any use of the Services, Content, or Marks
              other than as set out in this section or elsewhere in our Legal
              Terms, please address your request to: info@bilkins.com. If we
              ever grant you the permission to post, reproduce, or publicly
              display any part of our Services or Content, you must identify us
              as the owners or licensors of the Services, Content, or Marks and
              ensure that any copyright or proprietary notice appears or is
              visible on posting, reproducing, or displaying our Content.
            </p>
            <p>
              We reserve all rights not expressly granted to you in and to the
              Services, Content, and Marks.
            </p>
            <p>
              Any breach of these Intellectual Property Rights will constitute a
              material breach of our Legal Terms and your right to use our
              Services will terminate immediately.
            </p>

            <h2>Your Submissions</h2>
            <p>
              Please review this section and the "PROHIBITED ACTIVITIES" section
              carefully prior to using our Services to understand the (a) rights
              you give us and (b) obligations you have when you post or upload
              any content through the Services.
            </p>
            <h3>Submissions</h3>
            <p>
              By directly sending us any question, comment, suggestion, idea,
              feedback, or other information about the Services ("Submissions"),
              you agree to assign to us all intellectual property rights in such
              Submission. You agree that we shall own this Submission and be
              entitled to its unrestricted use and dissemination for any lawful
              purpose, commercial or otherwise, without acknowledgment or
              compensation to you.
            </p>
            <h3>You Are Responsible for What You Post or Upload</h3>
            <p>
              By sending us Submissions through any part of the Services you:
            </p>
            <ul>
              <li>
                Confirm that you have read and agree with our "PROHIBITED
                ACTIVITIES" and will not post, send, publish, upload, or
                transmit through the Services any Submission that is illegal,
                harassing, hateful, harmful, defamatory, obscene, bullying,
                abusive, discriminatory, threatening to any person or group,
                sexually explicit, false, inaccurate, deceitful, or misleading.
              </li>
              <li>
                To the extent permissible by applicable law, waive any and all
                moral rights to any such Submission.
              </li>
              <li>
                Warrant that any such Submission is original to you or that you
                have the necessary rights and licenses to submit such
                Submissions and that you have full authority to grant us the
                above-mentioned rights in relation to your Submissions.
              </li>
              <li>
                Warrant and represent that your Submissions do not constitute
                confidential information.
              </li>
            </ul>
            <p>
              You are solely responsible for your Submissions and you expressly
              agree to reimburse us for any and all losses that we may suffer
              because of your breach of (a) this section, (b) any third party’s
              intellectual property rights, or (c) applicable law.
            </p>
          </section>
          <section id="user-representations">
            <h1>3. USER REPRESENTATIONS</h1>
            <p>
              <b>By using the Services, you represent and warrant that:</b>
              <br />
              If you provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to suspend or terminate
              your account and refuse any and all current or future use of the
              Services (or any portion thereof).
            </p>
          </section>
          <section id="prohibited-activities">
            <h1>4.Prohibited Activities</h1>
            <p>
              You may not access or use the Services for any purpose other than
              that for which we make the Services available. The Services may
              not be used in connection with any commercial endeavors except
              those that are specifically endorsed or approved by us.
            </p>
            <p>As a user of the Services, you agree not to:</p>
            <ul>
              <li>
                Systematically retrieve data or other content from the Services
                to create or compile, directly or indirectly, a collection,
                compilation, database, or directory without written permission
                from us.
              </li>
              <li>
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information such as user
                passwords.
              </li>
              <li>
                Circumvent, disable, or otherwise interfere with
                security-related features of the Services, including features
                that prevent or restrict the use or copying of any Content or
                enforce limitations on the use of the Services and/or the
                Content contained therein.
              </li>
              <li>
                Disparage, tarnish, or otherwise harm, in our opinion, us and/or
                the Services.
              </li>
              <li>
                Use any information obtained from the Services in order to
                harass, abuse, or harm another person.
              </li>
              <li>
                Make improper use of our support services or submit false
                reports of abuse or misconduct.
              </li>
              <li>
                Use the Services in a manner inconsistent with any applicable
                laws or regulations.
              </li>
              <li>
                Engage in unauthorized framing of or linking to the Services.
              </li>
              <li>
                Upload or transmit (or attempt to upload or to transmit)
                viruses, Trojan horses, or other material, including excessive
                use of capital letters and spamming, that interferes with any
                party’s uninterrupted use and enjoyment of the Services or
                modifies, impairs, disrupts, alters, or interferes with the use,
                features, functions, operation, or maintenance of the Services.
              </li>
              <li>
                Engage in any automated use of the system, such as using scripts
                to send comments or messages, or using any data mining, robots,
                or similar data gathering and extraction tools.
              </li>
              <li>
                Delete the copyright or other proprietary rights notice from any
                Content.
              </li>
              <li>
                Attempt to impersonate another user or person or use the
                username of another user.
              </li>
              <li>
                Upload or transmit (or attempt to upload or to transmit) any
                material that acts as a passive or active information collection
                or transmission mechanism, including without limitation, clear
                graphics interchange formats ("gifs"), 1×1 pixels, web bugs,
                cookies, or other similar devices.
              </li>
              <li>
                Interfere with, disrupt, or create an undue burden on the
                Services or the networks or services connected to the Services.
              </li>
              <li>
                Harass, annoy, intimidate, or threaten any of our employees or
                agents engaged in providing any portion of the Services to you.
              </li>
              <li>
                Attempt to bypass any measures of the Services designed to
                prevent or restrict access to the Services, or any portion of
                the Services.
              </li>
              <li>
                Copy or adapt the Services' software, including but not limited
                to Flash, PHP, HTML, JavaScript, or other code.
              </li>
              <li>
                Except as permitted by applicable law, decipher, decompile,
                disassemble, or reverse engineer any of the software comprising
                or in any way making up a part of the Services.
              </li>
              <li>
                Except as may be the result of standard search engine or
                Internet browser usage, use, launch, develop, or distribute any
                automated system, including without limitation, any spider,
                robot, cheat utility, scraper, or offline reader that accesses
                the Services, or use or launch any unauthorized script or other
                software.
              </li>
              <li>
                Use a buying agent or purchasing agent to make purchases on the
                Services.
              </li>
              <li>
                Make any unauthorized use of the Services, including collecting
                usernames and/or email addresses of users by electronic or other
                means for the purpose of sending unsolicited email, or creating
                user accounts by automated means or under false pretenses.
              </li>
              <li>
                Use the Services as part of any effort to compete with us or
                otherwise use the Services and/or the Content for any
                revenue-generating endeavor or commercial enterprise.
              </li>
            </ul>
            <p>
              You and Services agree that we may access, store, process, and use
              any information and personal data that you provide following the
              terms of the Privacy Policy and your choices (including settings).
            </p>
            <p>
              By submitting suggestions or other feedback regarding the
              Services, you agree that we can use and share such feedback for
              any purpose without compensation to you.
            </p>
          </section>
          <section id="third-party-websites-and-content">
            <h1>5. THIRD-PARTY WEBSITES AND CONTENT</h1>
            <p>
              The Services may contain (or you may be sent via the Site) links
              to other websites ("Third-Party Websites") as well as articles,
              photographs, text, graphics, pictures, designs, music, sound,
              video, information, applications, software, and other content or
              items belonging to or originating from third parties ("Third-Party
              Content"). Such Third-Party Websites and Third-Party Content are
              not investigated, monitored, or checked for accuracy,
              appropriateness, or completeness by us, and we are not responsible
              for any Third-Party Websites accessed through the Services or any
              Third-Party Content posted on, available through, or installed
              from the Services, including the content, accuracy, offensiveness,
              opinions, reliability, privacy practices, or other policies of or
              contained in the Third-Party Websites or the Third-Party Content.
              Inclusion of, linking to, or permitting the use or installation of
              any Third-Party Websites or any Third-Party Content does not imply
              approval or endorsement thereof by us. If you decide to leave the
              Services and access the Third-Party Websites or to use or install
              any Third-Party Content, you do so at your own risk, and you
              should be aware these Legal Terms no longer govern. You should
              review the applicable terms and policies, including privacy and
              data gathering practices, of any website to which you navigate
              from the Services or relating to any applications you use or
              install from the Services. Any purchases you make through
              Third-Party Websites will be through other websites and from other
              companies, and we take no responsibility whatsoever in relation to
              such purchases which are exclusively between you and the
              applicable third party. You agree and acknowledge that we do not
              endorse the products or services offered on Third-Party Websites
              and you shall hold us blameless from any harm caused by your
              purchase of such products or services. Additionally, you shall
              hold us blameless from any losses sustained by you or harm caused
              to you relating to or resulting in any way from any Third-Party
              Content or any contact with Third-Party Websites.
            </p>
          </section>
          <section id="advertisers">
            <h1>6.ADVERTISERS</h1>
            <p>
              We allow advertisers to display their advertisements and other
              information in certain areas of the Services, such as sidebar
              advertisements or banner advertisements. We simply provide the
              space to place such advertisements, and we have no other
              relationship with advertisers.{" "}
            </p>
          </section>
          <section id="services-management">
            <h1>7.SERVICES MANAGEMENT</h1>
            <p>
              We reserve the right, but not the obligation, to: (1) monitor the
              Services for violations of these Legal Terms; (2) take appropriate
              legal action against anyone who, in our sole discretion, violates
              the law or these Legal Terms, including without limitation,
              reporting such user to law enforcement authorities; (3) in our
              sole discretion and without limitation, refuse, restrict access
              to, limit the availability of, or disable (to the extent
              technologically feasible) any of your Contributions or any portion
              thereof; (4) in our sole discretion and without limitation,
              notice, or liability, to remove from the Services or otherwise
              disable all files and content that are excessive in size or are in
              any way burdensome to our systems; and (5) otherwise manage the
              Services in a manner designed to protect our rights and property
              and to facilitate the proper functioning of the Services.
            </p>
          </section>
          <section id="privacy-policy">
            <h1>8.Privacy Policy</h1>
            <p>
              We care about data privacy and security. Please review our Privacy
              Policy:
              <a href="https://bilkins.com/privacy-policy">
                https://bilkins.com/privacy-policy
              </a>{" "}
              . By using the Services, you agree to be bound by our Privacy
              Policy, which is incorporated into these Legal Terms. Please be
              advised the Services are hosted in the United States. If you
              access the Services from any other region of the world with laws
              or other requirements governing personal data collection, use, or
              disclosure that differ from applicable laws in the United States,
              then through your continued use of the Services, you are
              transferring your data to the United States, and you expressly
              consent to have your data transferred to and processed in the
              United States.
            </p>
          </section>
          <section id="term-and-termination">
            <h2>9.Term and Termination</h2>
            <p>
              These Legal Terms shall remain in full force and effect while you
              use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
              LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
              WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE
              SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON
              FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR
              BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN
              THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
              TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY
              CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT
              WARNING, IN OUR SOLE DISCRETION.
            </p>
            <p>
              If we terminate or suspend your account for any reason, you are
              prohibited from registering and creating a new account under your
              name, a fake or borrowed name, or the name of any third party,
              even if you may be acting on behalf of the third party. In
              addition to terminating or suspending your account, we reserve the
              right to take appropriate legal action, including without
              limitation pursuing civil, criminal, and injunctive redress.
            </p>
          </section>

          <section id="modifications-and-interruptions">
            <h2>10. Modifications and Interruptions</h2>
            <p>
              We reserve the right to change, modify, or remove the contents of
              the Services at any time or for any reason at our sole discretion
              without notice. However, we have no obligation to update any
              information on our Services. We will not be liable to you or any
              third party for any modification, price change, suspension, or
              discontinuance of the Services.
            </p>
            <p>
              We cannot guarantee the Services will be available at all times.
              We may experience hardware, software, or other problems or need to
              perform maintenance related to the Services, resulting in
              interruptions, delays, or errors. We reserve the right to change,
              revise, update, suspend, discontinue, or otherwise modify the
              Services at any time or for any reason without notice to you. You
              agree that we have no liability whatsoever for any loss, damage,
              or inconvenience caused by your inability to access or use the
              Services during any downtime or discontinuance of the Services.
              Nothing in these Legal Terms will be construed to obligate us to
              maintain and support the Services or to supply any corrections,
              updates, or releases in connection therewith.
            </p>
          </section>

          <section id="governing-law">
            <h2>11. Governing Law</h2>
            <p>
              These Legal Terms and your use of the Services are governed by and
              construed in accordance with the laws of the Commonwealth of
              Virginia applicable to agreements made and to be entirely
              performed within the Commonwealth of Virginia, without regard to
              its conflict of law principles.
            </p>
          </section>

          <section id="dispute-resolution">
            <h2>12. Dispute Resolution</h2>
            <h3>Informal Negotiations</h3>
            <p>
              To expedite resolution and control the cost of any dispute,
              controversy, or claim related to these Legal Terms (each a
              "Dispute" and collectively, the "Disputes") brought by either you
              or us (individually, a "Party" and collectively, the "Parties"),
              the Parties agree to first attempt to negotiate any Dispute
              (except those Disputes expressly provided below) informally for at
              least thirty (30) days before initiating arbitration. Such
              informal negotiations commence upon written notice from one Party
              to the other Party.
            </p>
            <h3>Binding Arbitration</h3>
            <p>
              If the Parties are unable to resolve a Dispute through informal
              negotiations, the Dispute (except those Disputes expressly
              excluded below) will be finally and exclusively resolved by
              binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION,
              YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL.
              The arbitration shall be commenced and conducted under the
              Commercial Arbitration Rules of the American Arbitration
              Association ("AAA") and, where appropriate, the AAA’s
              Supplementary Procedures for Consumer Related Disputes ("AAA
              Consumer Rules"), both of which are available at the American
              Arbitration Association (AAA) website. Your arbitration fees and
              your share of arbitrator compensation shall be governed by the AAA
              Consumer Rules and, where appropriate, limited by the AAA Consumer
              Rules. The arbitration may be conducted in person, through the
              submission of documents, by phone, or online. The arbitrator will
              make a decision in writing, but need not provide a statement of
              reasons unless requested by either Party. The arbitrator must
              follow applicable law, and any award may be challenged if the
              arbitrator fails to do so. Except where otherwise required by the
              applicable AAA rules or applicable law, the arbitration will take
              place in United States of America, Virginia. Except as otherwise
              provided herein, the Parties may litigate in court to compel
              arbitration, stay proceedings pending arbitration, or to confirm,
              modify, vacate, or enter judgment on the award entered by the
              arbitrator.
            </p>
            <p>
              If for any reason, a Dispute proceeds in court rather than
              arbitration, the Dispute shall be commenced or prosecuted in the
              state and federal courts located in United States of America,
              Virginia, and the Parties hereby consent to, and waive all
              defenses of lack of personal jurisdiction, and forum non
              conveniens with respect to venue and jurisdiction in such state
              and federal courts. Application of the United Nations Convention
              on Contracts for the International Sale of Goods and the Uniform
              Computer Information Transaction Act (UCITA) are excluded from
              these Legal Terms.
            </p>
            <h3>Restrictions</h3>
            <p>
              The Parties agree that any arbitration shall be limited to the
              Dispute between the Parties individually. To the full extent
              permitted by law, (a) no arbitration shall be joined with any
              other proceeding; (b) there is no right or authority for any
              Dispute to be arbitrated on a class-action basis or to utilize
              class action procedures; and (c) there is no right or authority
              for any Dispute to be brought in a purported representative
              capacity on behalf of the general public or any other persons.
            </p>
            <h3>Exceptions to Informal Negotiations and Arbitration</h3>
            <p>
              The Parties agree that the following Disputes are not subject to
              the above provisions concerning informal negotiations binding
              arbitration: (a) any Disputes seeking to enforce or protect, or
              concerning the validity of, any of the intellectual property
              rights of a Party; (b) any Dispute related to, or arising from,
              allegations of theft, piracy, invasion of privacy, or unauthorized
              use; and (c) any claim for injunctive relief. If this provision is
              found to be illegal or unenforceable, then neither Party will
              elect to arbitrate any Dispute falling within that portion of this
              provision found to be illegal or unenforceable and such Dispute
              shall be decided by a court of competent jurisdiction within the
              courts listed for jurisdiction above, and the Parties agree to
              submit to the personal jurisdiction of that court.
            </p>
          </section>
          <section id="corrections">
            <h2>13. CORRECTIONS</h2>
            <p>
              There may be information on the Services that contains
              typographical errors, inaccuracies, or omissions, including
              descriptions, pricing, availability, and various other
              information. We reserve the right to correct any errors,
              inaccuracies, or omissions and to change or update the information
              on the Services at any time, without prior notice.
            </p>
          </section>

          <section id="disclaimer">
            <h2>14. DISCLAIMER</h2>
            <p>
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
              AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
              THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
              EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
              THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT
              THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE
              CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE
              SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
              (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,
              (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
              RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY
              UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND
              ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED
              THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR
              FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE
              LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY
              THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND
              MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A
              RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE
              MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE,
              GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE
              ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY
              HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED
              IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO
              OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION
              BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
              AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR
              IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
              CAUTION WHERE APPROPRIATE.
            </p>
          </section>

          <section id="limitations-of-liability">
            <h2>15. LIMITATIONS OF LIABILITY</h2>
            <p>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. CERTAIN US
              STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON
              IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN
              DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
              DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE
              ADDITIONAL RIGHTS.
            </p>
          </section>

          <section id="indemnification">
            <h2>16. INDEMNIFICATION</h2>
            <p>
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys’ fees and expenses, made by any third party due to or
              arising out of:
            </p>
          </section>

          <section id="user-data">
            <h2>17. USER DATA</h2>
            <p>
              We will maintain certain data that you transmit to the Services
              for the purpose of managing the performance of the Services, as
              well as data relating to your use of the Services. Although we
              perform regular routine backups of data, you are solely
              responsible for all data that you transmit or that relates to any
              activity you have undertaken using the Services. You agree that we
              shall have no liability to you for any loss or corruption of any
              such data, and you hereby waive any right of action against us
              arising from any such loss or corruption of such data.
            </p>
          </section>

          <section id="electronic-communications">
            <h2>18. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
            <p>
              Visiting the Services, sending us emails, and completing online
              forms constitute electronic communications. You consent to receive
              electronic communications, and you agree that all agreements,
              notices, disclosures, and other communications we provide to you
              electronically, via email and on the Services, satisfy any legal
              requirement that such communication be in writing. YOU HEREBY
              AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND
              OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES,
              AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA
              THE SERVICES. You hereby waive any rights or requirements under
              any statutes, regulations, rules, ordinances, or other laws in any
              jurisdiction which require an original signature or delivery or
              retention of non-electronic records, or to payments or the
              granting of credits by any means other than electronic means.
            </p>
          </section>

          <section id="california-users">
            <h2>19. CALIFORNIA USERS AND RESIDENTS</h2>
            <p>
              If any complaint with us is not satisfactorily resolved, you can
              contact the Complaint Assistance Unit of the Division of Consumer
              Services of the California Department of Consumer Affairs in
              writing at 1625 North Market Blvd., Suite N 112, Sacramento,
              California 95834 or by telephone at (800) 952-5210 or (916)
              445-1254.
            </p>
          </section>

          <section id="miscellaneous">
            <h2>20. MISCELLANEOUS</h2>
            <p>
              These Legal Terms and any policies or operating rules posted by us
              on the Services or in respect to the Services constitute the
              entire agreement and understanding between you and us. Our failure
              to exercise or enforce any right or provision of these Legal Terms
              shall not operate as a waiver of such right or provision. These
              Legal Terms operate to the fullest extent permissible by law. We
              may assign any or all of our rights and obligations to others at
              any time. We shall not be responsible or liable for any loss,
              damage, delay, or failure to act caused by any cause beyond our
              reasonable control. If any provision or part of a provision of
              these Legal Terms is determined to be unlawful, void, or
              unenforceable, that provision or part of the provision is deemed
              severable from these Legal Terms and does not affect the validity
              and enforceability of any remaining provisions. There is no joint
              venture, partnership, employment or agency relationship created
              between you and us as a result of these Legal Terms or use of the
              Services. You agree that these Legal Terms will not be construed
              against us by virtue of having drafted them. You hereby waive any
              and all defenses you may have based on the electronic form of
              these Legal Terms and the lack of signing by the parties hereto to
              execute these Legal Terms.
            </p>
          </section>

          <section id="contact-us">
            <h2>21. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Services or to
              receive further information regarding use of the Services, please
              contact us at:
            </p>
            <p>
              BilkinsInc
              <br />
              44031 Pipeline Plaza STE 300
              <br />
              Ashburn VA 20147
              <br />
              United States
              <br />
              Phone: +1-703-349-1777
              <br />
              Fax: +1-571-520-0318
              <br />
              info@bilkins.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
