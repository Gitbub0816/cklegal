export const CO  = "ClearKey Solutions LLC";
export const PROD = "ClearKey Connect";
export const EFF  = "June 19, 2026";
export const ADR  = "Silicon Valley, California";
export const LEG  = "legal@clearkey.solutions";
export const YR   = "2026";

// ─── All Policies ────────────────────────────────────────────────
export const POLICIES = [

  // ── 1. Terms of Service ──────────────────────────────────────
  {
    slug:"terms-of-service",title:"Terms of Service",
    description:`The primary agreement governing access to ${PROD}.`,
    category:"Agreements",
    sections:[
      {h:"1. Acceptance of Terms",c:[
        `These Terms of Service ("Agreement") constitute a legally binding contract between ${CO} ("${CO}," "we," "us," or "our") and you, the individual or entity accessing or using the ${PROD} platform and related services (collectively, the "Services"). By clicking "I Agree," creating an account, or otherwise accessing the Services, you represent that (a) you have read and understood this Agreement; (b) you are of legal age to form a binding contract; and (c) you have authority to bind yourself or the organization you represent.`,
        `If you do not agree to these Terms, you must not access or use the Services. We reserve the right to update these Terms at any time. Continued use of the Services after notice of any change constitutes your acceptance of the revised Terms.`,
      ]},
      {h:"2. Definitions",c:[
        `"Account" means your registered profile granting access to the Services.`,
        `"Authorized User" means any individual granted access to the Services under a Customer's subscription.`,
        `"Customer" or "you" means the organization or individual who has entered into this Agreement.`,
        `"Customer Data" means all data, content, and information submitted by Customer or Authorized Users through the Services.`,
        `"Documentation" means the technical and user documentation made available by ${CO}.`,
        `"Order Form" means a separately executed ordering document referencing this Agreement.`,
        `"Subscription" means the right to access the Services during the applicable Subscription Term.`,
        `"Subscription Term" means the period specified in the applicable Order Form or as selected during registration.`,
      ]},
      {h:"3. Account Registration and Security",c:[
        `To access the Services, you must register for an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your Account.`,
        `You agree to notify ${CO} immediately at ${LEG} of any actual or suspected unauthorized use of your Account. ${CO} will not be liable for any loss or damage arising from unauthorized use of your credentials.`,
        `You may not share Account credentials or allow any third party to access the Services using your credentials except as expressly permitted by this Agreement.`,
      ]},
      {h:"4. License Grant",c:[
        `Subject to your compliance with this Agreement and timely payment of all applicable Subscription fees, ${CO} grants you a limited, non-exclusive, non-transferable, non-sublicensable right to access and use the Services during the Subscription Term solely for your internal business purposes.`,
        `This license does not include: (a) any right to sublicense, sell, resell, or commercialize the Services; (b) access to source code; (c) rights to create derivative works; or (d) use of the Services for the benefit of any third party except as expressly permitted in an applicable Order Form.`,
      ]},
      {h:"5. Restrictions",c:[
        `You shall not: (a) reverse engineer, decompile, disassemble, or attempt to derive the source code of the Services; (b) copy, modify, or create derivative works based on the Services; (c) use the Services to build a competitive product; (d) access the Services for benchmarking or competitive analysis purposes; (e) introduce malicious code, viruses, or harmful data; (f) bypass, disable, or interfere with security features; (g) use automated scraping, crawling, or data extraction tools without prior written consent; (h) impersonate any person or entity or misrepresent your affiliation; (i) use the Services in violation of applicable law, regulation, or third-party rights; or (j) attempt to gain unauthorized access to any system or network.`,
      ]},
      {h:"6. Customer Data",c:[
        `As between ${CO} and Customer, Customer retains all right, title, and interest in Customer Data. Customer grants ${CO} a limited, non-exclusive license to use, process, and store Customer Data solely to provide the Services and as described in our Privacy Policy.`,
        `Customer represents and warrants that: (a) it has the legal right to submit Customer Data; (b) Customer Data does not infringe any third-party intellectual property, privacy, or other rights; and (c) Customer Data complies with all applicable laws and regulations.`,
        `${CO} will maintain appropriate administrative, physical, and technical safeguards for the protection of Customer Data, as described in the Security Statement and applicable Data Processing Addendum.`,
      ]},
      {h:"7. Intellectual Property",c:[
        `${CO} and its licensors retain all right, title, and interest in and to the Services, including all intellectual property rights therein. Nothing in this Agreement transfers any intellectual property rights to Customer.`,
        `Customer grants ${CO} a non-exclusive, worldwide, royalty-free license to use any feedback, suggestions, or improvement requests provided by Customer solely to improve the Services.`,
        `The ${CO} name, logo, ${PROD} mark, and all related names, logos, product and service names, designs, and slogans are trademarks of ${CO}. You must not use such marks without prior written permission.`,
      ]},
      {h:"8. Payment Obligations",c:[
        `Customer agrees to pay all fees specified in the applicable Order Form or as displayed during registration ("Fees"). Fees are non-refundable except as expressly set forth in the Refund Policy.`,
        `${CO} reserves the right to modify Fees upon thirty (30) days' prior written notice. Continued use of the Services after the Fee change takes effect constitutes acceptance of the new Fees.`,
        `All Fees are exclusive of taxes. Customer is responsible for all applicable taxes, levies, or duties imposed by taxing authorities, excluding taxes on ${CO}'s net income.`,
      ]},
      {h:"9. Confidentiality",c:[
        `Each party ("Receiving Party") may receive non-public, proprietary, or confidential information of the other party ("Disclosing Party") ("Confidential Information"). Each Receiving Party shall: (a) maintain such Confidential Information in strict confidence using at least the same degree of care used for its own confidential information, but no less than reasonable care; (b) not disclose it to any third party without the prior written consent of the Disclosing Party; and (c) use it solely to exercise its rights or perform its obligations under this Agreement.`,
        `Confidential Information does not include information that: (a) is or becomes publicly available through no fault of the Receiving Party; (b) was known to the Receiving Party before disclosure; (c) is independently developed without use of Confidential Information; or (d) is required to be disclosed by law or court order, provided the Receiving Party provides prompt notice where legally permitted.`,
      ]},
      {h:"10. Warranties and Disclaimers",c:[
        `${CO} warrants that the Services will perform materially in accordance with the Documentation during the Subscription Term. ${CO}'s sole obligation and Customer's exclusive remedy for breach of this warranty is for ${CO} to use commercially reasonable efforts to correct the non-conformance.`,
        `EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." ${CO.toUpperCase()} EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. ${CO.toUpperCase()} DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.`,
      ]},
      {h:"11. Limitation of Liability",c:[
        `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER PARTY SHALL BE LIABLE TO THE OTHER FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS INTERRUPTION, HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.`,
        `EACH PARTY'S TOTAL CUMULATIVE LIABILITY TO THE OTHER ARISING OUT OF OR RELATED TO THIS AGREEMENT SHALL NOT EXCEED THE TOTAL FEES PAID OR PAYABLE BY CUSTOMER IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.`,
        `The foregoing limitations shall not apply to breaches of confidentiality, intellectual property misappropriation, indemnification obligations, or damages arising from gross negligence or willful misconduct.`,
      ]},
      {h:"12. Indemnification",c:[
        `Customer shall indemnify, defend, and hold harmless ${CO} and its officers, directors, employees, agents, and successors from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to: (a) Customer Data; (b) Customer's breach of this Agreement; (c) Customer's violation of any applicable law; or (d) Customer's negligence or willful misconduct.`,
        `${CO} shall indemnify, defend, and hold harmless Customer from any third-party claims alleging that the Services, as provided by ${CO} and used in accordance with this Agreement, infringe any patent, copyright, or trademark. This obligation shall not apply if the alleged infringement arises from Customer's modifications, combination with third-party products, or use contrary to ${CO}'s instructions.`,
      ]},
      {h:"13. Term and Termination",c:[
        `This Agreement commences on the date Customer first accesses the Services and continues until the end of the applicable Subscription Term, unless earlier terminated.`,
        `Either party may terminate this Agreement upon written notice if the other party materially breaches this Agreement and fails to cure such breach within thirty (30) days after receiving written notice specifying the breach.`,
        `${CO} may immediately suspend or terminate your Account: (a) for non-payment of Fees; (b) upon reasonable belief of illegal activity; (c) for violation of the Acceptable Use Policy; or (d) to comply with law.`,
        `Upon termination: (a) all licenses granted hereunder immediately terminate; (b) you shall cease all use of the Services; (c) ${CO} will retain Customer Data for thirty (30) days, during which Customer may request export. After this period, ${CO} may delete Customer Data in accordance with the Data Retention Policy.`,
      ]},
      {h:"14. Governing Law and Dispute Resolution",c:[
        `This Agreement shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. The parties agree that the United Nations Convention on Contracts for the International Sale of Goods does not apply.`,
        `Any dispute arising out of or relating to this Agreement shall first be subject to good-faith negotiation between senior representatives of the parties for a period of thirty (30) days. If unresolved, disputes shall be resolved by binding arbitration administered by JAMS in Santa Clara County, California, in accordance with its then-current Commercial Arbitration Rules.`,
        `Notwithstanding the foregoing, either party may seek injunctive or other equitable relief from any court of competent jurisdiction to prevent actual or threatened infringement, misappropriation, or violation of its intellectual property rights.`,
      ]},
      {h:"15. General Provisions",c:[
        `This Agreement, together with all Order Forms, schedules, and addenda, constitutes the entire agreement between the parties with respect to its subject matter and supersedes all prior agreements, understandings, and representations.`,
        `If any provision of this Agreement is found invalid or unenforceable, the remaining provisions shall remain in full force and effect. No waiver of any breach shall constitute a waiver of any subsequent breach.`,
        `Customer may not assign this Agreement without ${CO}'s prior written consent. ${CO} may assign this Agreement in connection with a merger, acquisition, or sale of all or substantially all of its assets.`,
        `All notices under this Agreement shall be in writing and delivered by email or certified mail to the addresses on file. Notices to ${CO} shall be sent to ${LEG}.`,
      ]},
    ]
  },

  // ── 2. Privacy Policy ────────────────────────────────────────
  {
    slug:"privacy-policy",title:"Privacy Policy",
    description:`How ${CO} collects, uses, shares, secures, retains, and deletes personal information.`,
    category:"Privacy & Data",
    sections:[
      {h:"1. Introduction",c:[
        `${CO} ("we," "us," or "our") is committed to protecting the privacy of individuals who interact with our website, products, and services, including ${PROD}. This Privacy Policy explains how we collect, use, disclose, and safeguard personal information in connection with our business operations.`,
        `This Policy applies to all personal information we process, whether collected through our website, our Services, marketing communications, or other business activities. By using our Services, you acknowledge that you have read and understood this Policy.`,
      ]},
      {h:"2. Information We Collect",c:[
        `We collect personal information in several ways:`,
        `**Information You Provide:** Name, email address, phone number, billing information, company name, job title, and any other information you provide when creating an account, placing an order, contacting support, or otherwise communicating with us.`,
        `**Usage Data:** Log files, IP addresses, browser type and version, operating system, referring URLs, device identifiers, session data, pages visited, features accessed, and other information about how you use the Services.`,
        `**Cookies and Tracking:** We use cookies, web beacons, pixels, and similar tracking technologies. See our Cookie Policy for details.`,
        `**Transactional Data:** Payment method details (processed by third-party payment processors who are PCI-DSS compliant; we do not store full payment card data), billing address, transaction history, and subscription records.`,
        `**Communications:** Records of emails, support tickets, chat messages, and other communications you send to us.`,
      ]},
      {h:"3. How We Use Personal Information",c:[
        `We use personal information to: (a) provide, maintain, and improve the Services; (b) process transactions and send related information; (c) send administrative notices, product updates, and security alerts; (d) respond to comments and questions; (e) monitor and analyze usage and trends; (f) detect and prevent fraud and abuse; (g) comply with legal obligations; (h) send marketing communications where you have consented or where otherwise permitted by law; and (i) enforce our agreements.`,
      ]},
      {h:"4. Legal Bases for Processing (GDPR)",c:[
        `For users in the European Economic Area and United Kingdom, our legal bases for processing personal information are: (a) **Contract:** Processing necessary to perform the Services you have requested; (b) **Legitimate Interest:** Processing necessary for our legitimate business interests, such as preventing fraud, improving our products, and sending service-related communications; (c) **Consent:** Where you have expressly consented; and (d) **Legal Obligation:** Processing necessary to comply with applicable law.`,
      ]},
      {h:"5. How We Share Personal Information",c:[
        `We do not sell personal information. We may share personal information with: (a) **Service Providers:** Third-party vendors who perform services on our behalf, such as hosting, payment processing, analytics, email delivery, and customer support, under written data processing agreements; (b) **Business Transfers:** In connection with a merger, acquisition, sale of assets, or other business transaction; (c) **Legal Requirements:** To comply with applicable law, court order, or government request; (d) **Protection of Rights:** To protect the rights, property, or safety of ${CO}, our customers, or others; and (e) **With Your Consent:** For any other purpose with your explicit consent.`,
        `See our Subprocessor List for a current list of third-party service providers who process personal data on our behalf.`,
      ]},
      {h:"6. Data Retention",c:[
        `We retain personal information for as long as necessary to provide the Services, comply with legal obligations, resolve disputes, and enforce our agreements. When a subscription ends, we retain Customer Data for thirty (30) days, after which it is deleted or anonymized in accordance with our Data Retention Policy. Specific retention periods for various categories of data are set forth in the Data Retention Policy.`,
      ]},
      {h:"7. Your Privacy Rights",c:[
        `Depending on your location, you may have the following rights: (a) **Access:** Request a copy of personal information we hold about you; (b) **Correction:** Request correction of inaccurate information; (c) **Deletion:** Request deletion of your personal information; (d) **Portability:** Request transfer of your information in a machine-readable format; (e) **Restriction:** Request that we restrict processing of your information; (f) **Objection:** Object to processing of your information; and (g) **Withdrawal of Consent:** Where processing is based on consent, withdraw it at any time.`,
        `**California Residents (CCPA/CPRA):** You have the right to know what personal information we collect, use, disclose, or sell; to delete personal information; to opt out of sale (we do not sell personal information); and to non-discrimination for exercising your rights.`,
        `To exercise these rights, contact us at ${LEG} or through our designated GDPR/CCPA request form. We will respond within the timeframes required by applicable law.`,
      ]},
      {h:"8. International Data Transfers",c:[
        `${CO} operates from the United States. If you are located outside the United States, your personal information will be transferred to and processed in the United States. We ensure appropriate safeguards are in place for cross-border transfers, including Standard Contractual Clauses approved by the European Commission where required.`,
      ]},
      {h:"9. Security",c:[
        `We implement industry-standard administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, disclosure, alteration, or destruction. These measures include encryption at rest and in transit (TLS 1.2+, AES-256), access controls, multi-factor authentication, audit logging, and regular security assessments. No system is completely secure; you transmit personal information at your own risk.`,
      ]},
      {h:"10. Children's Privacy",c:[
        `The Services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that a child under 16 has provided personal information, we will delete it promptly.`,
      ]},
      {h:"11. Third-Party Links",c:[
        `The Services may contain links to third-party websites or services. This Policy does not apply to those third parties. We encourage you to review the privacy policies of any third-party sites you visit.`,
      ]},
      {h:"12. Changes to This Policy",c:[
        `We may update this Privacy Policy periodically. We will notify you of material changes by posting the revised Policy on our website and updating the effective date. Your continued use of the Services after the effective date constitutes acceptance of the revised Policy.`,
      ]},
      {h:"13. Contact Us",c:[
        `If you have questions or concerns about this Privacy Policy, or to exercise your privacy rights, contact our Privacy Team at: ${LEG} | ${CO}, ${ADR}.`,
      ]},
    ]
  },

  // ── 3. Cookie Policy ─────────────────────────────────────────
  {
    slug:"cookie-policy",title:"Cookie Policy",
    description:`Cookies and similar technologies used by ${CO}.`,
    category:"Privacy & Data",
    sections:[
      {h:"1. What Are Cookies",c:[
        `Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work, function more efficiently, and provide information to site owners. Similar technologies include web beacons, pixels, local storage, and session storage.`,
      ]},
      {h:"2. Categories of Cookies We Use",c:[
        `**Strictly Necessary Cookies:** Required for the Services to function. They include session management, authentication, and security cookies. These cannot be disabled.`,
        `**Performance and Analytics Cookies:** We use analytics tools (including third-party providers) to understand how visitors use the Services. These cookies collect anonymized data about pages visited, errors encountered, and usage patterns.`,
        `**Functional Cookies:** Remember your preferences and settings, such as language preferences, login state, and interface customizations.`,
        `**Marketing and Advertising Cookies:** Used to deliver relevant advertisements and track the effectiveness of marketing campaigns. These are only deployed with your explicit consent where required by law.`,
      ]},
      {h:"3. Specific Cookies We Use",c:[
        `A detailed list of cookies used on our platform is available in the Cookie Consent Banner and updated whenever we deploy new tracking technologies. Generally, we use: session identifiers, CSRF protection tokens, analytics cookies (e.g., Google Analytics with IP anonymization enabled), and preference cookies.`,
      ]},
      {h:"4. Your Cookie Choices",c:[
        `You may manage cookie preferences through: (a) our cookie consent banner displayed on first visit; (b) your browser settings; or (c) third-party opt-out tools. Note that disabling certain cookies may affect Services functionality. To opt out of Google Analytics, use the Google Analytics Opt-out Browser Add-on.`,
      ]},
      {h:"5. Changes",c:[`We update this Cookie Policy when we change our cookie practices. Check the effective date above for the most recent version.`]},
    ]
  },

  // ── 4. Acceptable Use Policy ─────────────────────────────────
  {
    slug:"acceptable-use-policy",title:"Acceptable Use Policy",
    description:`Rules protecting customers, ${CO}, providers, and the public from misuse.`,
    category:"Agreements",
    sections:[
      {h:"1. Purpose",c:[
        `This Acceptable Use Policy ("AUP") describes permitted and prohibited uses of ${PROD} and related services. Violations may result in immediate suspension or termination of access without refund. This AUP is incorporated into and forms part of the Terms of Service.`,
      ]},
      {h:"2. Prohibited Content and Conduct",c:[
        `You may not use the Services to: (a) post, transmit, or store content that is illegal, defamatory, obscene, or infringes third-party rights; (b) engage in spamming, phishing, or distribution of malware; (c) conduct unauthorized network scanning or penetration testing; (d) circumvent security controls or access unauthorized systems; (e) collect personal data without proper authorization or consent; (f) operate any botnet, denial-of-service attack, or similar disruptive mechanism; (g) violate export control laws or sanctions; (h) infringe any intellectual property rights; (i) impersonate another person or entity; (j) engage in any form of harassment, bullying, or threatening conduct; or (k) facilitate any illegal activity.`,
      ]},
      {h:"3. Resource Usage",c:[
        `You must not use the Services in a manner that places excessive or disproportionate load on our infrastructure, interferes with other customers, or disrupts the integrity or performance of the Services. Automated bulk actions, API abuse, or excessive storage consumption may result in throttling or suspension.`,
      ]},
      {h:"4. Reporting Violations",c:[
        `If you become aware of a violation of this AUP, report it to ${LEG}. We will investigate and take appropriate action.`,
      ]},
      {h:"5. Enforcement",c:[
        `${CO} reserves the right to investigate suspected violations and to take any action we deem appropriate, including suspending or terminating access, removing content, and reporting activity to law enforcement authorities.`,
      ]},
    ]
  },

  // ── 5. Subscription Agreement ────────────────────────────────
  {
    slug:"subscription-agreement",title:"Subscription Agreement",
    description:`Commercial terms for monthly and annual ${CO} plans.`,
    category:"Agreements",
    sections:[
      {h:"1. Subscription Plans",c:[
        `${CO} offers ${PROD} on a subscription basis. Plans are described on our pricing page and may include Starter, Professional, Business, and Enterprise tiers. Each plan specifies included features, storage limits, API call allotments, and the number of Authorized Users.`,
      ]},
      {h:"2. Subscription Term",c:[
        `Subscriptions are available on a monthly or annual basis. Monthly subscriptions renew automatically on the same calendar day each month. Annual subscriptions renew automatically on the anniversary of the subscription start date, unless either party provides written notice of non-renewal at least thirty (30) days before the renewal date.`,
      ]},
      {h:"3. Auto-Renewal and Cancellation",c:[
        `By subscribing, you authorize ${CO} to charge your payment method on file at each renewal date. To cancel, you must provide notice through your Account dashboard or by contacting ${LEG} at least five (5) business days before the renewal date. Cancellation takes effect at the end of the then-current Subscription Term. Cancellation does not entitle you to a refund for amounts already paid, except as set forth in the Refund Policy.`,
      ]},
      {h:"4. Upgrades and Downgrades",c:[
        `You may upgrade your subscription at any time, with the additional fees prorated for the remainder of the then-current billing period. Downgrades take effect at the start of the next billing period. Downgrading may result in loss of features or reduction of limits.`,
      ]},
      {h:"5. Free Trials",c:[
        `If you begin with a free trial, you will not be charged until the trial period ends. Unless you cancel before the trial ends, your subscription will convert to a paid plan at the rates then in effect. ${CO} reserves the right to modify or terminate free trials at any time.`,
      ]},
      {h:"6. Enterprise Agreements",c:[
        `Enterprise subscriptions are governed by a separately executed Enterprise Order Form and, where applicable, a custom Master Service Agreement. In the event of a conflict between this Subscription Agreement and an Enterprise Order Form, the Order Form controls.`,
      ]},
    ]
  },

  // ── 6. Billing Policy ────────────────────────────────────────
  {
    slug:"billing-policy",title:"Billing Policy",
    description:`How subscription charges, payment methods, credits, collections, and disputes are handled.`,
    category:"Billing & Payments",
    sections:[
      {h:"1. Billing Cycle",c:[
        `Fees are billed in advance at the beginning of each billing period. For monthly plans, billing occurs on the same day of each calendar month. For annual plans, billing occurs annually on the anniversary of your subscription start date.`,
      ]},
      {h:"2. Payment Methods",c:[
        `We accept major credit and debit cards (Visa, Mastercard, American Express, Discover) and ACH bank transfers for eligible accounts. Payment processing is handled by our third-party payment processor. ${CO} does not store full payment card information. You authorize us to charge your payment method on file for all applicable Fees.`,
      ]},
      {h:"3. Failed Payments",c:[
        `If payment fails, we will retry the charge up to three (3) times over ten (10) days. During this period, a notice will be sent to your billing email. If payment is not received after retries, we may suspend access to the Services. Access will be restored upon receipt of the overdue amount plus any applicable late fees.`,
      ]},
      {h:"4. Disputes",c:[
        `If you believe a charge is incorrect, you must notify us at ${LEG} within thirty (30) days of the charge date. We will investigate and, if the charge is found to be in error, issue a credit or refund. Initiating a chargeback without first contacting us is a breach of this Policy and may result in immediate account suspension.`,
      ]},
      {h:"5. Credits",c:[
        `Credits issued by ${CO} (e.g., for service credits or promotional purposes) will be applied to your next invoice. Credits have no cash value, are non-transferable, and expire upon termination of the subscription.`,
      ]},
      {h:"6. Taxes",c:[
        `Displayed prices exclude taxes. ${CO} will calculate and add applicable taxes to your invoice based on your billing address and applicable law. You are responsible for all taxes on Fees charged.`,
      ]},
    ]
  },

  // ── 7. Customer Payment Terms ────────────────────────────────
  {
    slug:"customer-payment-terms",title:"Customer Payment Terms",
    description:`Terms governing tenant customer payments orchestrated through connected providers.`,
    category:"Billing & Payments",
    sections:[
      {h:"1. Scope",c:[
        `These Customer Payment Terms apply when ${PROD} is used by a Customer to process payments from or on behalf of the Customer's own end customers ("Tenant Customers") through connected payment providers integrated with ${PROD}.`,
      ]},
      {h:"2. Customer Responsibility",c:[
        `Customer is solely responsible for: (a) the accuracy of all payment instructions submitted through ${PROD}; (b) maintaining proper authorization from Tenant Customers to initiate charges; (c) compliance with all applicable payment network rules (Visa, Mastercard, ACH Network, etc.); (d) compliance with the Payment Card Industry Data Security Standard (PCI-DSS); and (e) handling all Tenant Customer refund, chargeback, and dispute inquiries.`,
      ]},
      {h:"3. Role of ${CO}",c:[
        `${CO} is a software platform provider, not a payment processor, money transmitter, or bank. All payment processing is performed by Customer's connected third-party payment processors. ${CO} facilitates data transmission between Customer and those processors but does not hold, transfer, or control funds.`,
      ]},
      {h:"4. Prohibited Payment Activities",c:[
        `Customer may not use ${PROD} to process payments for activities that violate applicable law, the Terms of Service, or the rules of any connected payment network, including processing for illegal goods or services, circumventing transaction monitoring, or processing for sanctioned entities.`,
      ]},
      {h:"5. Liability for Payment Errors",c:[
        `${CO} is not liable for any errors, failures, or delays by third-party payment processors. Customer assumes all risk associated with payment disputes, chargebacks, fraud, and payment failures. ${CO}'s liability, if any, is limited as set forth in the Terms of Service.`,
      ]},
    ]
  },

  // ── 8. Refund Policy ─────────────────────────────────────────
  {
    slug:"refund-policy",title:"Refund Policy",
    description:`Eligibility and procedures for requesting subscription refunds.`,
    category:"Billing & Payments",
    sections:[
      {h:"1. General Policy",c:[
        `All subscription fees are non-refundable except as expressly provided in this Policy. ${CO} does not provide prorated refunds for unused portions of a subscription period.`,
      ]},
      {h:"2. Satisfaction Guarantee",c:[
        `New customers may request a full refund within fourteen (14) calendar days of their initial subscription purchase if they are not satisfied with the Services for any reason ("Satisfaction Guarantee"). To request a refund under the Satisfaction Guarantee, contact ${LEG} within the 14-day window. This guarantee applies only to the initial purchase and not to renewals.`,
      ]},
      {h:"3. Service Credits for Downtime",c:[
        `If ${PROD} fails to meet the Service Level commitments set forth in the Service Level Policy, Customer may be entitled to service credits as described therein. Service credits are not cash refunds.`,
      ]},
      {h:"4. Exceptional Circumstances",c:[
        `${CO} may, in its sole discretion, issue partial or full refunds in exceptional circumstances, including: (a) technical errors resulting in duplicate charges; (b) charges made after a timely and properly submitted cancellation request; or (c) other extraordinary circumstances at ${CO}'s discretion.`,
      ]},
      {h:"5. Refund Process",c:[
        `Approved refunds are issued to the original payment method within five (5) to ten (10) business days. Processing times may vary depending on your financial institution. Contact ${LEG} to initiate a refund request.`,
      ]},
    ]
  },

  // ── 9. Data Processing Addendum ──────────────────────────────
  {
    slug:"data-processing-addendum",title:"Data Processing Addendum",
    description:`Business customer terms for processing personal data.`,
    category:"Privacy & Data",
    sections:[
      {h:"1. Introduction",c:[
        `This Data Processing Addendum ("DPA") is incorporated into and forms part of the Terms of Service between ${CO} ("Processor") and Customer ("Controller"). This DPA governs ${CO}'s processing of personal data on behalf of Customer in connection with the Services. In the event of a conflict between this DPA and the Terms of Service, this DPA controls with respect to data protection matters.`,
      ]},
      {h:"2. Definitions",c:[
        `Terms not defined herein have the meanings given in applicable Data Protection Laws. "Controller" means the Customer that determines the purposes and means of processing Personal Data. "Processor" means ${CO} that processes Personal Data on behalf of the Controller. "Personal Data" means information relating to an identified or identifiable natural person. "Data Protection Laws" means all applicable data protection and privacy laws, including the GDPR, UK GDPR, CCPA/CPRA, and California Privacy Rights Act.`,
      ]},
      {h:"3. Details of Processing",c:[
        `Subject Matter: Provision of the ${PROD} Services. Duration: The term of the applicable subscription agreement. Nature and Purpose: Processing necessary to deliver the Services per the Terms of Service and Documentation. Types of Personal Data: Name, email, phone number, business contact information, transaction records, usage data, and any other personal data included in Customer Data. Categories of Data Subjects: Customer's employees, contractors, customers, and other individuals whose personal data is submitted to the Services.`,
      ]},
      {h:"4. Controller's Obligations",c:[
        `Controller warrants that it has a lawful basis under applicable Data Protection Laws to transfer Personal Data to ${CO} and to instruct ${CO}'s processing. Controller is responsible for compliance with Data Protection Laws with respect to its collection and use of Personal Data.`,
      ]},
      {h:"5. Processor's Obligations",c:[
        `${CO} shall: (a) process Personal Data only on documented instructions from Customer; (b) ensure that personnel authorized to process Personal Data are subject to confidentiality obligations; (c) implement appropriate technical and organizational measures; (d) not engage sub-processors without prior written consent from Customer (general authorization is hereby given for sub-processors on the Subprocessor List); (e) assist Customer in fulfilling data subject rights requests; (f) delete or return Personal Data at termination; and (g) provide information necessary to demonstrate compliance.`,
      ]},
      {h:"6. Security Measures",c:[
        `${CO} implements appropriate technical and organizational measures including: encryption at rest (AES-256) and in transit (TLS 1.2+); access controls and multi-factor authentication; regular security testing; incident response procedures; data minimization; and personnel training.`,
      ]},
      {h:"7. Sub-processors",c:[
        `${CO} maintains a current list of sub-processors at the Subprocessor List page. ${CO} will notify Customer of any intended changes to the sub-processor list with at least thirty (30) days' notice. Customer may object to new sub-processors within fifteen (15) days of notice. If Customer objects and ${CO} cannot accommodate the objection, Customer may terminate the applicable subscription.`,
      ]},
      {h:"8. Data Subject Rights",c:[
        `${CO} will promptly notify Customer of any data subject requests received and will assist Customer in responding to such requests to the extent technically feasible. Customer is responsible for responding to data subjects.`,
      ]},
      {h:"9. Personal Data Breach",c:[
        `${CO} will notify Customer without undue delay, and in any event within seventy-two (72) hours, upon becoming aware of a personal data breach affecting Customer's Personal Data. Notifications will include: the nature of the breach; categories and approximate number of data subjects affected; likely consequences; and measures taken or proposed.`,
      ]},
      {h:"10. International Transfers",c:[
        `Where Personal Data is transferred to a country not providing adequate protection under applicable law, such transfer will be subject to appropriate safeguards, including Standard Contractual Clauses (SCCs) as approved by the European Commission, or other valid transfer mechanisms.`,
      ]},
      {h:"11. Audit Rights",c:[
        `Upon reasonable prior written notice, ${CO} will provide Customer with information reasonably necessary to demonstrate compliance with this DPA. Customer may request audits no more than once per calendar year, at Customer's expense, subject to reasonable confidentiality obligations.`,
      ]},
    ]
  },

  // ── 10. Security Statement ───────────────────────────────────
  {
    slug:"security-statement",title:"Security Statement",
    description:`${CO}'s security and reliability practices.`,
    category:"Security & Compliance",
    sections:[
      {h:"1. Security Program",c:[
        `${CO} maintains a formal Information Security Program designed to protect the confidentiality, integrity, and availability of Customer Data. Our security program is informed by industry frameworks including ISO/IEC 27001 and the SOC 2 Trust Service Criteria.`,
      ]},
      {h:"2. Infrastructure Security",c:[
        `Services are hosted on leading cloud infrastructure providers with SOC 2 Type II and ISO 27001 certifications. All data is stored in data centers with physical security controls including biometric access, CCTV monitoring, and 24/7 security personnel. We operate redundant systems with automated failover to maintain high availability.`,
      ]},
      {h:"3. Data Encryption",c:[
        `All data at rest is encrypted using AES-256 encryption. All data in transit is protected using TLS 1.2 or higher. Encryption keys are managed using industry-standard key management services with periodic rotation.`,
      ]},
      {h:"4. Access Controls",c:[
        `Access to Customer Data is restricted on a least-privilege basis. Multi-factor authentication (MFA) is required for all ${CO} employee access to production systems. Access reviews are conducted quarterly. All access events are logged and retained for a minimum of twelve (12) months.`,
      ]},
      {h:"5. Vulnerability Management",c:[
        `We conduct regular vulnerability scans and annual third-party penetration tests. Critical vulnerabilities are remediated within fourteen (14) days; high vulnerabilities within thirty (30) days. We maintain a responsible disclosure program for security researchers.`,
      ]},
      {h:"6. Incident Response",c:[
        `We maintain a documented incident response plan tested annually. In the event of a security incident affecting Customer Data, we will notify affected customers in accordance with the timelines specified in the Data Processing Addendum and applicable law.`,
      ]},
      {h:"7. Business Continuity",c:[
        `${CO} maintains disaster recovery and business continuity plans with defined recovery time objectives (RTOs) and recovery point objectives (RPOs). Customer Data is backed up daily with encrypted offsite backups retained for thirty (30) days.`,
      ]},
    ]
  },

  // ── 11. Compliance Statement ─────────────────────────────────
  {
    slug:"compliance-statement",title:"Compliance Statement",
    description:`${CO}'s product-aligned readiness approach for SOC 2, ISO 27001, GDPR, and EU AI Act obligations.`,
    category:"Security & Compliance",
    sections:[
      {h:"1. Overview",c:[
        `${CO} is committed to maintaining compliance with applicable legal, regulatory, and industry standards. This Compliance Statement summarizes our current compliance posture and ongoing readiness activities.`,
      ]},
      {h:"2. SOC 2 Type II",c:[
        `${CO} undergoes annual SOC 2 Type II audits conducted by an independent AICPA-registered accounting firm. Our SOC 2 report covers the Security, Availability, and Confidentiality Trust Service Criteria. Customers under a Business or Enterprise plan may request a copy of our most recent SOC 2 report under NDA.`,
      ]},
      {h:"3. ISO 27001",c:[
        `${CO} aligns its Information Security Management System (ISMS) with the ISO/IEC 27001:2022 standard. Our ISO 27001 Control Statement provides detailed mapping of our controls to the standard's Annex A requirements.`,
      ]},
      {h:"4. GDPR and UK GDPR",c:[
        `${CO} operates as a Data Processor under the GDPR and UK GDPR. We have implemented technical and organizational measures to support Controller compliance, including our Data Processing Addendum, GDPR Data Subject Rights Procedure, and appointment of a designated data protection contact reachable at ${LEG}.`,
      ]},
      {h:"5. CCPA / CPRA",c:[
        `${CO} complies with the California Consumer Privacy Act (as amended by the California Privacy Rights Act). We do not sell personal information. We support Consumer Rights Requests in accordance with our Privacy Policy.`,
      ]},
      {h:"6. EU AI Act",c:[
        `${CO} actively monitors obligations under the EU Artificial Intelligence Act as it enters into force. AI-enabled features of ${PROD} are assessed for risk classification. Our AI Governance Policy describes our current framework for responsible AI development and deployment.`,
      ]},
      {h:"7. PCI-DSS",c:[
        `Payment card data submitted through our platform is processed by PCI-DSS Level 1 compliant payment processors. ${CO} does not store, process, or transmit full payment card data and therefore does not require PCI-DSS merchant certification.`,
      ]},
    ]
  },

  // ── 12. Subprocessor List ────────────────────────────────────
  {
    slug:"subprocessor-list",title:"Subprocessor List",
    description:`Providers that may process customer data when enabled or required to operate ${PROD}.`,
    category:"Privacy & Data",
    sections:[
      {h:"1. Overview",c:[
        `${CO} engages the following third-party sub-processors to assist in delivering the Services. All sub-processors are contractually obligated to maintain appropriate security and privacy protections consistent with our Data Processing Addendum. This list is updated when sub-processors are added or removed, with thirty (30) days' advance notice to Customers.`,
        `Last Updated: ${EFF}`,
      ]},
      {h:"2. Infrastructure and Hosting",c:[],table:{
        cols:["Provider","Purpose","Location"],
        rows:[
          ["Amazon Web Services (AWS)","Cloud infrastructure, compute, storage","United States, EU (where applicable)"],
          ["Cloudflare, Inc.","CDN, DDoS protection, DNS","United States, Global"],
        ]
      }},
      {h:"3. Analytics and Monitoring",c:[],table:{
        cols:["Provider","Purpose","Location"],
        rows:[
          ["Google LLC (Analytics)","Product usage analytics (anonymized)","United States"],
          ["Datadog, Inc.","Application performance monitoring, logging","United States"],
          ["Sentry, Inc.","Error tracking and diagnostics","United States"],
        ]
      }},
      {h:"4. Communications",c:[],table:{
        cols:["Provider","Purpose","Location"],
        rows:[
          ["Twilio Inc.","SMS and voice communication delivery","United States"],
          ["SendGrid (Twilio)","Transactional and marketing email delivery","United States"],
          ["Intercom, Inc.","Customer support chat","United States"],
        ]
      }},
      {h:"5. Payments",c:[],table:{
        cols:["Provider","Purpose","Location"],
        rows:[
          ["Stripe, Inc.","Payment processing, billing","United States"],
        ]
      }},
      {h:"6. Authentication and Security",c:[],table:{
        cols:["Provider","Purpose","Location"],
        rows:[
          ["Auth0 (Okta)","Identity management, SSO","United States"],
        ]
      }},
    ]
  },

  // ── 13. GDPR Data Subject Rights Procedure ───────────────────
  {
    slug:"gdpr-data-subject-rights",title:"GDPR Data Subject Rights Procedure",
    description:`How access, deletion, rectification, portability, objection, and restriction requests are received and handled.`,
    category:"Privacy & Data",
    sections:[
      {h:"1. Purpose",c:[
        `This procedure describes how ${CO} processes Data Subject Rights Requests ("DSRRs") submitted under the General Data Protection Regulation (EU) 2016/679 ("GDPR"), the UK GDPR, and equivalent legislation.`,
      ]},
      {h:"2. Applicable Rights",c:[
        `Data subjects within the EEA, UK, and other qualifying jurisdictions have the following rights: (a) Right of Access (Article 15): obtain confirmation of processing and a copy of personal data; (b) Right to Rectification (Article 16): correct inaccurate or incomplete data; (c) Right to Erasure (Article 17): request deletion in applicable circumstances; (d) Right to Restriction (Article 18): restrict processing in certain circumstances; (e) Right to Data Portability (Article 20): receive personal data in a structured, machine-readable format; (f) Right to Object (Article 21): object to processing on grounds of legitimate interest; and (g) Rights related to automated decision-making (Article 22).`,
      ]},
      {h:"3. Submitting a Request",c:[
        `Data subjects may submit requests by emailing ${LEG} with the subject line "Data Subject Rights Request." Requests should include: (a) your full name and email address; (b) the type of request; (c) sufficient information to verify your identity; and (d) any additional context to help us locate your data.`,
      ]},
      {h:"4. Identity Verification",c:[
        `To protect privacy and prevent unauthorized access, we require identity verification before processing requests. We will request documentation sufficient to verify your identity, commensurate with the sensitivity of the requested action.`,
      ]},
      {h:"5. Response Timeline",c:[
        `We will acknowledge receipt of your DSRR within five (5) business days. We will complete valid requests within thirty (30) calendar days of receipt, unless the request is complex or numerous, in which case we may extend by an additional sixty (60) days with notice.`,
      ]},
      {h:"6. Where ${CO} Is a Processor",c:[
        `Where ${CO} processes data solely on behalf of a Customer (Controller), we will forward data subject requests to the relevant Controller within seventy-two (72) hours and assist the Controller in fulfilling the request as required by the DPA.`,
      ]},
      {h:"7. Right to Lodge a Complaint",c:[
        `If you believe your rights have not been adequately respected, you may lodge a complaint with your local supervisory authority. In the EU, you may find your supervisory authority at https://edpb.europa.eu/. In the UK, contact the Information Commissioner's Office (ICO) at https://ico.org.uk/.`,
      ]},
    ]
  },

  // ── 14. AI Governance Policy ─────────────────────────────────
  {
    slug:"ai-governance-policy",title:"AI Governance Policy",
    description:`Governance for AI-assisted product features and EU AI Act readiness.`,
    category:"AI & Technology",
    sections:[
      {h:"1. Purpose and Scope",c:[
        `This AI Governance Policy describes how ${CO} develops, deploys, and oversees artificial intelligence and machine learning ("AI") features within ${PROD}. It applies to all AI features offered as part of the Services and governs our internal AI development practices.`,
      ]},
      {h:"2. Principles",c:[
        `Our AI development is guided by: (a) **Transparency:** We disclose when features are AI-assisted and explain how AI contributes to outputs; (b) **Accuracy:** We strive for high-quality outputs and acknowledge limitations; (c) **Fairness:** We evaluate AI systems for bias and take corrective action; (d) **Privacy:** AI systems are designed with data minimization principles; (e) **Human Oversight:** Significant AI-driven outputs affecting customers require human review options; (f) **Safety:** AI systems undergo risk assessment before deployment.`,
      ]},
      {h:"3. AI Risk Classification",c:[
        `Consistent with the EU AI Act, we classify AI features by risk: (a) **Unacceptable Risk:** Prohibited. We do not deploy AI systems in prohibited categories; (b) **High Risk:** Subject to mandatory conformity assessment, registration, and ongoing monitoring; (c) **Limited Risk:** Transparency obligations apply; (d) **Minimal Risk:** Standard development and monitoring practices apply.`,
      ]},
      {h:"4. Prohibited AI Practices",c:[
        `${CO} does not use AI for: (a) subliminal manipulation of individuals; (b) exploitation of vulnerable individuals; (c) real-time biometric identification in public spaces (except as permitted by law); (d) social scoring; or (e) any purpose prohibited by the EU AI Act or other applicable law.`,
      ]},
      {h:"5. Human Oversight",c:[
        `All AI-generated outputs that materially affect Customer operations—including financial reporting, compliance alerts, and customer communications—are flagged as AI-generated and subject to Customer review before finalization.`,
      ]},
      {h:"6. Incident and Error Reporting",c:[
        `Customers who observe unexpected, biased, or harmful AI outputs should report them to ${LEG}. We will investigate reports, take corrective action, and notify affected customers where appropriate.`,
      ]},
    ]
  },

  // ── 15. ISO 27001 Control Statement ──────────────────────────
  {
    slug:"iso-27001-control-statement",title:"ISO 27001 Control Statement",
    description:`How ${CO} maps product and organizational practices to ISO 27001-style controls.`,
    category:"Security & Compliance",
    sections:[
      {h:"1. Scope of ISMS",c:[
        `${CO}'s Information Security Management System ("ISMS") covers all production systems, customer data processing activities, and internal business operations supporting the ${PROD} platform. The ISMS is aligned with the requirements of ISO/IEC 27001:2022.`,
      ]},
      {h:"2. Information Security Policies",c:[
        `${CO} maintains a comprehensive suite of internal information security policies, reviewed annually and approved by executive leadership. These policies address: acceptable use, access control, asset management, cryptography, physical security, operations security, communications security, supplier relationships, incident management, business continuity, and compliance.`,
      ]},
      {h:"3. Risk Assessment and Treatment",c:[
        `We conduct formal risk assessments at least annually and in response to significant changes. Identified risks are documented in our risk register with assigned owners, likelihood/impact ratings, and treatment plans. Risk treatment includes avoidance, mitigation, transfer, or acceptance.`,
      ]},
      {h:"4. Key Control Domains",c:[
        `Our controls address Annex A domains including: organizational controls (policies, roles, segregation of duties), people controls (screening, training, disciplinary process), physical controls (secure areas, equipment protection), and technological controls (access management, encryption, logging, malware protection, network security, SDLC security, configuration management).`,
      ]},
      {h:"5. Internal Audit",c:[
        `Internal ISMS audits are conducted annually by personnel independent of the areas being audited. Findings are tracked to remediation. Management review of the ISMS is conducted at least annually.`,
      ]},
      {h:"6. Certification",c:[
        `${CO} is pursuing ISO 27001:2022 certification and anticipates completion of Stage 2 audit within the next twelve (12) months. Customers may request our current ISMS summary documentation under NDA by contacting ${LEG}.`,
      ]},
    ]
  },

  // ── 16. SOC 2 Control Statement ──────────────────────────────
  {
    slug:"soc-2-control-statement",title:"SOC 2 Control Statement",
    description:`How ${CO} maps product and organizational practices to SOC 2 trust service criteria.`,
    category:"Security & Compliance",
    sections:[
      {h:"1. Trust Service Criteria in Scope",c:[
        `${CO}'s SOC 2 examination covers the following Trust Service Criteria: Security (CC), Availability (A), and Confidentiality (C). Processing Integrity and Privacy criteria are addressed through separate policies and may be included in future examinations.`,
      ]},
      {h:"2. Security (Common Criteria)",c:[
        `Our Security program addresses logical and physical access controls, system monitoring, change management, risk management, and incident response. Access to production systems requires MFA and is reviewed quarterly. All administrative actions are logged.`,
      ]},
      {h:"3. Availability",c:[
        `${CO} commits to a monthly availability target of 99.9% (excluding scheduled maintenance) as described in the Service Level Policy. We maintain redundant infrastructure, automated health checks, and an incident response process to restore service within defined recovery time objectives.`,
      ]},
      {h:"4. Confidentiality",c:[
        `Customer Data is classified as Confidential. Access is restricted to personnel with a business need to know. Customer Data is not used for purposes other than delivering the Services. Employees with access to confidential information are bound by confidentiality obligations.`,
      ]},
      {h:"5. Report Availability",c:[
        `${CO} undergoes annual SOC 2 Type II examinations by a PCAOB-registered accounting firm. Business and Enterprise plan customers may request the most recent report under NDA by contacting ${LEG}.`,
      ]},
    ]
  },

  // ── 17. AI Feature Disclosure ────────────────────────────────
  {
    slug:"ai-feature-disclosure",title:"AI Feature Disclosure",
    description:`Important limitations for AI-assisted features.`,
    category:"AI & Technology",
    sections:[
      {h:"1. General Disclosure",c:[
        `${PROD} includes features that use artificial intelligence and machine learning to assist users in completing business tasks. This disclosure describes the nature, limitations, and appropriate use of those features.`,
      ]},
      {h:"2. AI-Assisted Features",c:[
        `AI features may include: automated data categorization, financial reporting assistance, compliance monitoring alerts, natural language querying, document summarization, anomaly detection, and workflow automation suggestions. These features are clearly labeled within the product interface.`,
      ]},
      {h:"3. Known Limitations",c:[
        `AI-generated outputs may contain errors, omissions, or inaccuracies. Outputs are probabilistic, not determinative. AI features are not a substitute for professional judgment, including legal, financial, tax, or accounting advice. Users should independently verify AI-generated outputs before relying on them for significant decisions.`,
      ]},
      {h:"4. No Professional Advice",c:[
        `No AI-generated output constitutes legal, financial, accounting, tax, or other professional advice. ${CO} is not a licensed professional in any such field. See also our Accounting Disclaimer and Tax Document Disclaimer.`,
      ]},
      {h:"5. Data Use",c:[
        `AI features process Customer Data to generate outputs. AI features do not train ${CO}'s foundation models on Customer Data without explicit Customer consent. Customers may opt out of AI feature data use by contacting ${LEG}.`,
      ]},
      {h:"6. Feedback",c:[
        `Users may rate and provide feedback on AI-generated outputs within the product. This feedback helps us improve accuracy and relevance. Feedback data is anonymized before use in model improvement.`,
      ]},
    ]
  },

  // ── 18. Accounting Disclaimer ────────────────────────────────
  {
    slug:"accounting-disclaimer",title:"Accounting Disclaimer",
    description:`${CO} provides accounting software tools, not professional accounting services.`,
    category:"Disclaimers",
    sections:[
      {h:"1. Software Tool, Not Accounting Services",c:[
        `${PROD} provides software tools designed to assist businesses in organizing, tracking, and reporting financial information. ${CO} is a technology company, not an accounting firm, and does not provide accounting, auditing, tax preparation, or financial advisory services.`,
      ]},
      {h:"2. No CPA or Professional Certification",c:[
        `${CO} and its employees are not Certified Public Accountants (CPAs), Certified Management Accountants (CMAs), or licensed in any accounting profession. Nothing in the Services or related documentation constitutes an accounting opinion, audit, or professional financial recommendation.`,
      ]},
      {h:"3. Accuracy of Financial Data",c:[
        `The accuracy of financial data, reports, and calculations within ${PROD} depends entirely on the accuracy of information entered by users. ${CO} makes no representation that reports generated by the Services comply with any accounting standard (e.g., GAAP, IFRS) or are suitable for audit, regulatory filing, or financial statement purposes.`,
      ]},
      {h:"4. Professional Consultation Required",c:[
        `For financial decisions, tax filings, audits, regulatory compliance, or any matter with material financial consequences, you should consult a qualified accounting professional, CPA, or financial advisor licensed in the relevant jurisdiction.`,
      ]},
      {h:"5. Limitation of Liability",c:[
        `${CO} expressly disclaims any liability arising from reliance on financial outputs generated by the Services. See the Limitation of Liability section in the Terms of Service.`,
      ]},
    ]
  },

  // ── 19. Tax Document Disclaimer ──────────────────────────────
  {
    slug:"tax-document-disclaimer",title:"Tax Document Disclaimer",
    description:`Limitations applying to tax summaries, exports, and generated documents.`,
    category:"Disclaimers",
    sections:[
      {h:"1. Not Tax Advice",c:[
        `${PROD} may generate tax-related summaries, reports, and document exports ("Tax Documents"). These Tax Documents are provided for informational and organizational purposes only and do not constitute tax advice, tax return preparation, or tax filing services.`,
      ]},
      {h:"2. No Tax Professional Relationship",c:[
        `Use of ${PROD} does not establish a tax professional-client relationship between you and ${CO}. ${CO} does not employ licensed tax professionals, CPAs, Enrolled Agents, or tax attorneys in connection with the Services.`,
      ]},
      {h:"3. User Responsibility",c:[
        `You are solely responsible for determining the accuracy and completeness of any Tax Documents generated by ${PROD} before submitting to any tax authority. Tax laws vary by jurisdiction and change frequently. You must verify that Tax Documents comply with applicable tax laws before use.`,
      ]},
      {h:"4. Required Professional Consultation",c:[
        `You should engage a qualified tax professional (CPA, Enrolled Agent, or tax attorney) for all tax filing, tax planning, and tax compliance matters. ${CO} is not responsible for any tax liabilities, penalties, or deficiencies resulting from reliance on Tax Documents.`,
      ]},
      {h:"5. Limitation of Liability",c:[
        `TO THE MAXIMUM EXTENT PERMITTED BY LAW, ${CO.toUpperCase()} SHALL NOT BE LIABLE FOR ANY TAXES, PENALTIES, INTEREST, OR RELATED COSTS ARISING FROM USE OF TAX DOCUMENTS GENERATED BY THE SERVICES.`,
      ]},
    ]
  },

  // ── 20. API Terms ─────────────────────────────────────────────
  {
    slug:"api-terms",title:"API Terms",
    description:`Terms for using ${CO} public APIs, keys, webhooks, and SDKs.`,
    category:"Technical",
    sections:[
      {h:"1. Scope",c:[
        `These API Terms govern your use of the ${CO} Application Programming Interface ("API"), including REST endpoints, webhooks, SDKs, API keys, and related developer tools. API use is subject to these terms in addition to the Terms of Service.`,
      ]},
      {h:"2. API Keys",c:[
        `API access requires a valid API key issued by ${CO}. You must: (a) keep API keys confidential and not embed them in client-side code or public repositories; (b) use API keys solely for your authorized integration; (c) immediately revoke and regenerate keys that may have been compromised; and (d) not share keys across multiple customers or products.`,
      ]},
      {h:"3. Rate Limits and Quotas",c:[
        `API usage is subject to rate limits and monthly quotas based on your subscription plan. Exceeding rate limits will result in HTTP 429 responses. Persistent or intentional rate limit abuse may result in API key revocation or account suspension. Quotas and limits are published in the Documentation.`,
      ]},
      {h:"4. Permitted Use",c:[
        `The API may be used to: (a) integrate ${PROD} with your internal systems; (b) build authorized automations; and (c) develop integrations for distribution on the ${CO} partner marketplace, subject to a separate partner agreement. The API may not be used to replicate Services functionality as a competing product or to circumvent subscription limits.`,
      ]},
      {h:"5. Webhooks",c:[
        `If you subscribe to webhook notifications, you must ensure your endpoint processes events in a timely manner. ${CO} will retry failed deliveries up to five (5) times with exponential backoff. Webhook payloads should be validated using the signature header included in each request.`,
      ]},
      {h:"6. API Versioning and Deprecation",c:[
        `${CO} maintains stable API versions and provides at least ninety (90) days' deprecation notice before removing or making breaking changes to a supported API version. We recommend monitoring the Developer Changelog for updates.`,
      ]},
      {h:"7. SLAs",c:[
        `API availability is subject to the same uptime commitments in the Service Level Policy. ${CO} is not responsible for third-party connectivity failures or latency external to our infrastructure.`,
      ]},
    ]
  },

  // ── 21. Integration Terms ─────────────────────────────────────
  {
    slug:"integration-terms",title:"Integration Terms",
    description:`Terms governing connections to third-party providers.`,
    category:"Technical",
    sections:[
      {h:"1. Third-Party Integrations",c:[
        `${PROD} allows customers to connect third-party applications and services ("Third-Party Services") through native integrations or the API. These Integration Terms apply to such connections in addition to the Terms of Service.`,
      ]},
      {h:"2. Authorization",c:[
        `When you connect a Third-Party Service, you authorize ${CO} to access, transmit, and process data from that Third-Party Service solely to provide the integrated functionality. You represent that you have the authority and authorization to grant this access.`,
      ]},
      {h:"3. Third-Party Terms",c:[
        `Your use of Third-Party Services is governed by those services' own terms and privacy policies. ${CO} is not responsible for the availability, accuracy, or privacy practices of any Third-Party Service.`,
      ]},
      {h:"4. Data Flow and Responsibility",c:[
        `When data flows between ${PROD} and a Third-Party Service, you are responsible for ensuring: (a) you have the legal right to share that data with ${CO} and the Third-Party Service; (b) appropriate consents have been obtained from affected individuals; and (c) the integration does not violate any applicable law.`,
      ]},
      {h:"5. Liability",c:[
        `${CO} is not liable for any errors, outages, data loss, or security incidents arising from a Third-Party Service. Integration failures that originate in a Third-Party Service are excluded from our Service Level commitments.`,
      ]},
      {h:"6. Marketplace Integrations",c:[
        `Integrations published on the ${CO} marketplace by third-party developers are subject to the ${CO} Partner Program Agreement and are reviewed but not warranted by ${CO}. Customers use marketplace integrations at their own risk.`,
      ]},
    ]
  },

  // ── 22. Intellectual Property Policy ─────────────────────────
  {
    slug:"intellectual-property-policy",title:"Intellectual Property Policy",
    description:`Ownership and permitted use of platform and customer content.`,
    category:"Legal",
    sections:[
      {h:"1. ${CO} Intellectual Property",c:[
        `All right, title, and interest in and to the Services, including all software, algorithms, user interfaces, designs, documentation, trademarks, logos, and proprietary methodologies, are and shall remain the exclusive property of ${CO} or its licensors. No rights are transferred to Customer except the limited license expressly granted in the Terms of Service.`,
      ]},
      {h:"2. Customer Intellectual Property",c:[
        `Customer retains all right, title, and interest in Customer Data and any content, materials, or information submitted by Customer or Authorized Users. ${CO} acquires no intellectual property rights in Customer Data.`,
      ]},
      {h:"3. Feedback",c:[
        `If Customer provides ${CO} with suggestions, enhancement requests, or other feedback regarding the Services ("Feedback"), ${CO} may freely use, reproduce, and incorporate Feedback without restriction or compensation. Customer hereby assigns to ${CO} all rights in Feedback.`,
      ]},
      {h:"4. License to Customer Data",c:[
        `Customer grants ${CO} a non-exclusive, worldwide, royalty-free license to access, process, store, and transmit Customer Data solely as necessary to provide the Services and as described in this Policy and the Privacy Policy.`,
      ]},
      {h:"5. Aggregate Data",c:[
        `${CO} may collect and use de-identified, aggregated data derived from Customer Data ("Aggregate Data") for product improvement, research, and business intelligence purposes. Aggregate Data does not identify Customer or individual users. ${CO} owns all rights to Aggregate Data.`,
      ]},
      {h:"6. Open Source Components",c:[
        `The Services may incorporate open source software components. A list of open source components and applicable licenses is available in the Documentation. Open source licenses do not affect Customer's rights under this Policy.`,
      ]},
    ]
  },

  // ── 23. DMCA and Copyright Policy ────────────────────────────
  {
    slug:"dmca-and-copyright-policy",title:"DMCA and Copyright Policy",
    description:`How copyright owners and users may submit notices and counter-notices.`,
    category:"Legal",
    sections:[
      {h:"1. Respect for Copyright",c:[
        `${CO} respects the intellectual property rights of others and expects users of the Services to do the same. We comply with the Digital Millennium Copyright Act of 1998 ("DMCA") and respond to properly submitted DMCA notices.`,
      ]},
      {h:"2. Submitting a DMCA Takedown Notice",c:[
        `If you believe that material accessible through the Services infringes your copyright, you may submit a written notice ("Takedown Notice") to our Designated Agent containing: (a) a physical or electronic signature of the copyright owner or authorized agent; (b) identification of the copyrighted work claimed to be infringed; (c) identification of the allegedly infringing material and information reasonably sufficient to locate it; (d) your contact information; (e) a statement that you have a good faith belief that use of the material is not authorized; and (f) a statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized agent.`,
        `DMCA Designated Agent: ${LEG} | Subject line: "DMCA Takedown Notice" | ${CO}, ${ADR}`,
      ]},
      {h:"3. Counter-Notices",c:[
        `If material was removed in response to a Takedown Notice that you believe was submitted in error, you may submit a Counter-Notice containing: (a) your physical or electronic signature; (b) identification of the removed material and its former location; (c) a statement under penalty of perjury that you believe the material was removed by mistake or misidentification; and (d) your name, address, telephone number, and consent to jurisdiction in federal court in the judicial district where you reside.`,
      ]},
      {h:"4. Repeat Infringers",c:[
        `${CO} will terminate, in appropriate circumstances, the accounts of users who are found to be repeat infringers of others' copyright rights.`,
      ]},
      {h:"5. Limitation of Liability",c:[
        `${CO} is not liable for any damage resulting from the takedown or restoration of content pursuant to good-faith compliance with DMCA procedures.`,
      ]},
    ]
  },

  // ── 24. Law Enforcement Request Policy ───────────────────────
  {
    slug:"law-enforcement-request-policy",title:"Law Enforcement Request Policy",
    description:`How ${CO} evaluates government and law enforcement requests.`,
    category:"Legal",
    sections:[
      {h:"1. Commitment to Customer Privacy",c:[
        `${CO} is committed to protecting the privacy of our customers and will only disclose Customer Data to government or law enforcement agencies ("Requesting Authorities") when legally compelled to do so or when required to prevent imminent harm.`,
      ]},
      {h:"2. Requirements for Valid Requests",c:[
        `We require that all requests from Requesting Authorities: (a) be submitted in writing on official letterhead or through official channels; (b) identify the specific account, user, or data sought; (c) specify the legal authority for the request (e.g., subpoena, court order, search warrant); and (d) identify the specific offense or matter under investigation.`,
      ]},
      {h:"3. Review Process",c:[
        `All government requests are reviewed by our legal team. We may refuse or limit requests that: (a) are overly broad or lack specificity; (b) relate to data we do not possess; (c) conflict with applicable law or our legal obligations; or (d) seek to compel user content without a properly issued warrant.`,
      ]},
      {h:"4. Customer Notification",c:[
        `Where legally permitted, we will notify affected customers before disclosing their data. Where notification is prohibited by law (e.g., by a non-disclosure order), we will provide notice as soon as legally permissible. We may seek to lift non-disclosure orders where appropriate.`,
      ]},
      {h:"5. Emergency Requests",c:[
        `We may disclose Customer Data without legal process in circumstances involving an imminent threat to the life or safety of any person. Such disclosures will be documented and disclosed to affected customers when legally permissible.`,
      ]},
      {h:"6. Submitting Requests",c:[
        `Law enforcement requests should be submitted to: ${LEG} with subject line "Law Enforcement Request." Emergency requests may be submitted to the same address with subject line "EMERGENCY – Law Enforcement Request."`,
      ]},
    ]
  },

  // ── 25. Accessibility Statement ──────────────────────────────
  {
    slug:"accessibility-statement",title:"Accessibility Statement",
    description:`${CO}'s commitment to accessible product experiences.`,
    category:"Legal",
    sections:[
      {h:"1. Our Commitment",c:[
        `${CO} is committed to making ${PROD} accessible to all users, including those with disabilities. We strive to conform to Level AA of the Web Content Accessibility Guidelines (WCAG) 2.1 published by the World Wide Web Consortium (W3C).`,
      ]},
      {h:"2. Current Status",c:[
        `We conduct periodic accessibility audits of the ${PROD} interface and work to remediate identified issues on an ongoing basis. We acknowledge that accessibility is an ongoing effort and there may be areas where we continue to improve.`,
      ]},
      {h:"3. Supported Assistive Technologies",c:[
        `${PROD} is designed to work with: (a) screen readers (including NVDA, JAWS, and VoiceOver); (b) keyboard-only navigation; (c) browser zoom up to 200%; (d) Windows High Contrast mode; and (e) screen magnification software.`,
      ]},
      {h:"4. Feedback and Contact",c:[
        `If you experience accessibility barriers or have suggestions for improvement, please contact us at ${LEG} with subject line "Accessibility Feedback." We will acknowledge receipt within five (5) business days and work to address issues promptly.`,
      ]},
      {h:"5. Legal and Regulatory Compliance",c:[
        `We design the Services with the Americans with Disabilities Act (ADA) and Section 508 of the Rehabilitation Act in mind. For enterprise customers with specific accessibility requirements, please contact us to discuss accommodations.`,
      ]},
    ]
  },

  // ── 26. Service Level Policy ──────────────────────────────────
  {
    slug:"service-level-policy",title:"Service Level Policy",
    description:`Availability goals and service communication practices.`,
    category:"Operations",
    sections:[
      {h:"1. Uptime Commitment",c:[
        `${CO} commits to monthly availability of 99.9% ("Uptime Commitment") for the ${PROD} core platform services, measured on a calendar month basis excluding Scheduled Maintenance windows. Availability is calculated as: (Total Minutes in Month – Downtime Minutes) / Total Minutes in Month × 100.`,
      ]},
      {h:"2. Exclusions",c:[
        `The Uptime Commitment does not apply to: (a) periods of Scheduled Maintenance; (b) outages caused by Customer's systems, code, or actions; (c) events of Force Majeure; (d) outages caused by third-party service providers outside ${CO}'s reasonable control; or (e) beta or preview features.`,
      ]},
      {h:"3. Scheduled Maintenance",c:[
        `${CO} will provide at least seventy-two (72) hours' advance notice of Scheduled Maintenance via the Status Page and email notification. Maintenance is typically performed during off-peak hours (12:00 AM – 6:00 AM Pacific Time on Sundays).`,
      ]},
      {h:"4. Incident Communication",c:[
        `Availability incidents are communicated through our Status Page at status.clearkeysolutions.com. During active incidents, we provide updates at minimum every sixty (60) minutes until resolution. Post-incident reports are published within five (5) business days for incidents exceeding two (2) hours.`,
      ]},
      {h:"5. Service Credits",c:[
        `If monthly availability falls below the Uptime Commitment, Customer is eligible for service credits: (a) Below 99.9% but at or above 99.0%: 10% credit of monthly fee; (b) Below 99.0% but at or above 95.0%: 25% credit; (c) Below 95.0%: 50% credit. Credits must be requested within thirty (30) days of the impacted period and are applied to future invoices. Credits are Customer's sole remedy for availability failures.`,
      ]},
      {h:"6. Support Response Times",c:[
        `Support response targets by severity: (a) Critical (service down): initial response within 1 hour; (b) High (major feature unavailable): initial response within 4 hours; (c) Medium (feature degraded): initial response within 1 business day; (d) Low (general inquiry): initial response within 2 business days.`,
      ]},
    ]
  },

  // ── 27. Incident Response Policy ─────────────────────────────
  {
    slug:"incident-response-policy",title:"Incident Response Policy",
    description:`How suspected security incidents are detected, contained, investigated, and communicated.`,
    category:"Security & Compliance",
    sections:[
      {h:"1. Purpose",c:[
        `This policy establishes ${CO}'s approach to detecting, responding to, and communicating security incidents affecting the ${PROD} platform and Customer Data. All personnel with access to production systems are required to comply with this policy.`,
      ]},
      {h:"2. Incident Classification",c:[
        `Security incidents are classified by severity: (a) **Critical:** Confirmed unauthorized access to Customer Data, ransomware, or systemic compromise; (b) **High:** Suspected unauthorized access, significant data integrity concern, or major service disruption with security cause; (c) **Medium:** Isolated policy violation, low-impact vulnerability exploitation; (d) **Low:** Near-miss, minor policy violation, or informational alert.`,
      ]},
      {h:"3. Detection and Reporting",c:[
        `Incidents may be detected through: automated monitoring and alerting, employee reports, third-party threat intelligence, customer reports, or penetration testing. Any employee or contractor who suspects a security incident must immediately report it to the Security Team at ${LEG}.`,
      ]},
      {h:"4. Response Phases",c:[
        `Our incident response follows these phases: (a) **Identification:** Confirm and classify the incident; (b) **Containment:** Limit the spread and impact; (c) **Eradication:** Remove the root cause; (d) **Recovery:** Restore affected systems to normal operation; (e) **Post-Incident Analysis:** Document lessons learned and implement improvements.`,
      ]},
      {h:"5. Customer Notification",c:[
        `For incidents involving Customer Data, we will notify affected Customers without undue delay and in any event within seventy-two (72) hours of confirmed breach, as required under applicable data protection law. Notification will include the nature of the incident, data involved, likely impact, and remediation steps.`,
      ]},
      {h:"6. Regulatory Notification",c:[
        `Where required by applicable law (including GDPR Article 33, CCPA, or state breach notification statutes), ${CO} will notify relevant supervisory authorities within required timeframes.`,
      ]},
    ]
  },

  // ── 28. Data Retention Policy ─────────────────────────────────
  {
    slug:"data-retention-policy",title:"Data Retention Policy",
    description:`Retention standards for customer records and operational data.`,
    category:"Privacy & Data",
    sections:[
      {h:"1. Purpose",c:[
        `This policy describes how ${CO} retains, archives, and deletes data related to the Services. Retention periods are determined by business necessity, contractual obligations, and applicable legal requirements.`,
      ]},
      {h:"2. Customer Data",c:[
        `During the active Subscription Term, Customer Data is retained as configured by the Customer. Upon expiration or termination of the subscription, Customer Data is retained for thirty (30) days in a read-only state during which the Customer may request an export. After thirty (30) days post-termination, Customer Data is permanently deleted from production systems and will be removed from backup media within ninety (90) days.`,
      ]},
      {h:"3. Account and Billing Records",c:[
        `Account registration information and billing records are retained for seven (7) years from the date of last transaction to comply with financial recordkeeping obligations.`,
      ]},
      {h:"4. Operational and Log Data",c:[
        `Application logs are retained for ninety (90) days in production systems and up to twelve (12) months in archived form. Security event logs and audit trails are retained for a minimum of twelve (12) months in production and twenty-four (24) months in archive. Infrastructure monitoring data is retained for thirteen (13) months.`,
      ]},
      {h:"5. Communications",c:[
        `Support tickets and related communications are retained for three (3) years from ticket closure. Marketing communication records are retained for the duration of the relationship plus two (2) years.`,
      ]},
      {h:"6. Legal Hold",c:[
        `Where data is subject to a legal hold, regulatory investigation, or litigation, applicable retention periods are suspended, and data will be retained until the legal hold is released.`,
      ]},
      {h:"7. Deletion Standards",c:[
        `Deleted data is overwritten using industry-standard techniques. Storage media that is decommissioned is degaussed and physically destroyed in accordance with NIST SP 800-88 Guidelines for Media Sanitization.`,
      ]},
    ]
  },

  // ── 29. Account Deletion Policy ───────────────────────────────
  {
    slug:"account-deletion-policy",title:"Account Deletion Policy",
    description:`The process and timing for closing a ${PROD} workspace.`,
    category:"Operations",
    sections:[
      {h:"1. Requesting Account Deletion",c:[
        `Account owners may request deletion of their ${PROD} workspace at any time through the Account Settings → Danger Zone section, or by submitting a written request to ${LEG} from the registered account owner email address.`,
      ]},
      {h:"2. Confirmation and Processing",c:[
        `Upon receiving a deletion request, ${CO} will: (a) send a confirmation email to the registered account owner requiring acknowledgment; (b) allow seventy-two (72) hours for the owner to cancel the deletion request; (c) upon confirmation or expiry of the cancellation window, initiate the deletion process.`,
      ]},
      {h:"3. Data Export",c:[
        `Before deletion, account owners are strongly encouraged to export their Customer Data. Data export can be initiated through Account Settings → Data Export. Exports are available in standard formats (CSV, JSON). ${CO} is not responsible for data loss resulting from failure to export prior to deletion.`,
      ]},
      {h:"4. Deletion Timeline",c:[
        `Following confirmed deletion: (a) account access is terminated immediately; (b) Customer Data is deleted from production systems within thirty (30) days; (c) Customer Data is purged from backup media within ninety (90) days; (d) certain records may be retained as required by law (see Data Retention Policy).`,
      ]},
      {h:"5. Active Subscriptions",c:[
        `Account deletion does not automatically cancel a paid subscription. You must cancel your subscription prior to or alongside the deletion request to avoid further charges. Deletion of an account with an active subscription cancels the subscription effective at the end of the then-current billing period.`,
      ]},
    ]
  },

  // ── 30. Cookie Consent Banner ─────────────────────────────────
  {
    slug:"cookie-consent-banner-text",title:"Cookie Consent Banner",
    description:`Short-form consent language for optional browser technologies.`,
    category:"Privacy & Data",
    sections:[
      {h:"1. Purpose of This Document",c:[
        `This document records the consent language displayed to users upon first visit to the ${CO} website and the ${PROD} platform. It is published as a public record of our cookie consent practices.`,
      ]},
      {h:"2. Banner Text (Short Form)",c:[
        `"We use cookies and similar technologies to operate our platform, understand how it's used, and deliver relevant content. By clicking 'Accept All,' you consent to our use of all cookie categories. Click 'Manage Preferences' to customize your choices. See our Cookie Policy for details."`,
      ]},
      {h:"3. Manage Preferences Options",c:[
        `Users are presented with the following toggle options: (a) **Strictly Necessary** (always on, cannot be disabled) – Required for the platform to function; (b) **Analytics and Performance** (optional) – Helps us understand how you use the platform; (c) **Marketing** (optional) – Used to deliver relevant advertising and measure campaign effectiveness.`,
      ]},
      {h:"4. Consent Recordkeeping",c:[
        `Consent choices are recorded with a timestamp, session identifier, and the version of the consent banner displayed. Consent records are retained for three (3) years. Consent may be withdrawn at any time by clearing cookies or through the Manage Preferences option in the platform footer.`,
      ]},
      {h:"5. Re-Consent",c:[
        `We will request fresh consent when: (a) the Cookie Policy materially changes; (b) we add new cookie categories; or (c) a user's prior consent expires. Consent expiry is set at thirteen (13) months.`,
      ]},
    ]
  },

  // ── 31. Email Communication Consent ──────────────────────────
  {
    slug:"email-communication-consent",title:"Email Communication Consent",
    description:`Rules for transactional, security, product, and marketing communications.`,
    category:"Communications",
    sections:[
      {h:"1. Categories of Email Communications",c:[
        `${CO} sends the following categories of email to registered users and contacts:`,
        `**Transactional:** Order confirmations, invoices, receipts, password reset, account changes, export completions. These are required to maintain the account and cannot be opted out of.`,
        `**Security:** Security alerts, breach notifications, suspicious login warnings, MFA verification. These are required for account security and cannot be opted out of.`,
        `**Product:** Feature announcements, changelog updates, maintenance notices, service disruption alerts. These are sent to all active users by default.`,
        `**Marketing:** Newsletters, promotional offers, webinar invitations, product surveys. These are optional and require explicit consent.`,
      ]},
      {h:"2. Basis for Sending",c:[
        `Transactional and Security emails are sent on the basis of contractual necessity. Product emails are sent on the basis of legitimate interest. Marketing emails are sent only where you have provided explicit consent or where permitted by applicable law (e.g., CAN-SPAM, CASL).`,
      ]},
      {h:"3. Opt-Out Rights",c:[
        `You may unsubscribe from Product or Marketing emails at any time using the "Unsubscribe" link in any such email or by adjusting your notification preferences in Account Settings. Transactional and Security emails cannot be disabled while your account is active.`,
      ]},
      {h:"4. Compliance",c:[
        `All commercial emails comply with the CAN-SPAM Act, including: clear identification of the sender, functional unsubscribe mechanism, and physical postal address of ${CO}. Where applicable, emails comply with Canadian Anti-Spam Legislation (CASL) and the EU ePrivacy Directive.`,
      ]},
    ]
  },

  // ── 32. Electronic Signature and Consent Policy ───────────────
  {
    slug:"electronic-signature-consent",title:"Electronic Signature and Consent Policy",
    description:`Consent to electronic agreements, notices, records, and signatures.`,
    category:"Legal",
    sections:[
      {h:"1. Consent to Electronic Communications",c:[
        `By creating an account and using the Services, you consent to receive all communications, agreements, notices, disclosures, and other information from ${CO} electronically. This includes communications delivered by email, through the Services interface, or posted to our website.`,
      ]},
      {h:"2. Electronic Signatures",c:[
        `When you click "I Agree," "Accept," "Submit," or similar actions within the Services, your action constitutes your electronic signature on any agreement, consent, or acknowledgment presented at that time. Such electronic signatures are legally binding to the same extent as handwritten signatures under the Electronic Signatures in Global and National Commerce Act (E-SIGN), the Uniform Electronic Transactions Act (UETA), and applicable international law.`,
      ]},
      {h:"3. Withdrawal of Consent",c:[
        `You may withdraw consent to electronic communications by contacting ${LEG}. Withdrawal of consent to electronic communications does not affect the validity of electronic agreements entered into prior to withdrawal, and may limit your ability to use the Services, which are primarily delivered electronically.`,
      ]},
      {h:"4. Retention of Records",c:[
        `${CO} retains electronic records of agreements, consents, and electronic signatures in accordance with the Data Retention Policy. You should retain copies of any electronic agreements for your records. A copy of signed agreements may be downloaded from your Account Settings.`,
      ]},
      {h:"5. Hardware and Software Requirements",c:[
        `To access and retain electronic records, you need: a compatible internet browser; enabled JavaScript; a valid email address; and sufficient storage to save electronic communications. If these requirements change materially, we will notify you and provide you with an opportunity to withdraw consent.`,
      ]},
    ]
  },

];


export const SMS_POLICY_SECTIONS = [
  {h:"1. Introduction",c:[
    `This SMS Communication Policy ("Policy") governs the conditions under which ${CO} ("we," "us," "our") sends text messages to individuals who have opted in to receive SMS communications from us. This Policy is designed to comply with the Telephone Consumer Protection Act (TCPA), the CAN-SPAM Act, the FTC's Telemarketing Sales Rule, CTIA Guidelines, and other applicable laws and regulations.`,
  ]},
  {h:"2. Types of SMS Communications",c:[
    `We may send the following categories of text messages: (a) **Transactional:** Account verification codes (OTP), password reset confirmation, security alerts, critical service notifications; (b) **Operational:** Service disruption alerts, maintenance notifications, subscription renewal reminders; (c) **Marketing:** Promotional offers, product updates, and event invitations (only with explicit prior written consent).`,
  ]},
  {h:"3. Opt-In Requirements",c:[
    `Before sending any marketing or promotional SMS, we obtain prior express written consent as required by the TCPA. Consent is obtained via our web-based opt-in form at /policy/sms-policy/opt-in. Consent records include: the date and time of opt-in, the phone number provided, the opt-in language presented, and the IP address. Transactional and security SMS may be sent as part of the account relationship without marketing opt-in.`,
  ]},
  {h:"4. Message Frequency",c:[
    `Message frequency varies by message category: (a) Transactional/Security: as needed (typically one per triggering event); (b) Operational: as needed, typically no more than four (4) per month; (c) Marketing: no more than two (2) per month unless Customer explicitly requests higher frequency.`,
  ]},
  {h:"5. Opt-Out / Unsubscribe",c:[
    `You may opt out of SMS communications at any time by: (a) replying STOP to any message; (b) visiting /policy/sms-policy/unsubscribe; or (c) contacting us at ${LEG}. Upon receiving an opt-out request, we will send a single confirmation message confirming opt-out and will cease sending within ten (10) business days, or immediately where technically feasible. After opting out, you may still receive transactional messages necessary for account security.`,
  ]},
  {h:"6. Help Information",c:[
    `Reply HELP to any SMS message to receive: product name, instructions to unsubscribe, and customer service contact information.`,
  ]},
  {h:"7. Message and Data Rates",c:[
    `Message and data rates may apply. You are responsible for any charges imposed by your mobile carrier for receiving or sending SMS messages. ${CO} is not responsible for carrier charges.`,
  ]},
  {h:"8. Supported Carriers",c:[
    `SMS is available through most major U.S. wireless carriers. Carrier support may vary. ${CO} is not liable for delayed or undelivered messages due to carrier issues.`,
  ]},
  {h:"9. Data Practices",c:[
    `Phone numbers collected for SMS communications are used solely for the purpose of sending the SMS communications you have consented to. We do not sell phone numbers to third parties. Phone numbers are retained in accordance with our Data Retention Policy.`,
  ]},
  {h:"10. Contact",c:[
    `For questions about this Policy or to exercise your rights, contact: ${LEG} | ${CO}, ${ADR}.`,
  ]},
];
