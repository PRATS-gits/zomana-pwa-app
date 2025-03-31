
import { SectionHeading } from "@/components/ui-components/SectionHeading";
import { FileText, Lock, CreditCard, Bookmark, Scale } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="page-container py-12 md:py-16">
      <SectionHeading
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services"
        className="mb-12"
      />
      
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-subtle">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <FileText className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Scale className="mr-2 h-5 w-5" />
              Agreement to Terms
            </h2>
            <p className="mb-4">
              These Terms and Conditions constitute a legally binding agreement made between you, whether 
              personally or on behalf of an entity ("you") and Zomana ("we," "us" or "our"), concerning 
              your access to and use of the Zomana website as well as any other media form, media channel, 
              mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>
            <p>
              You agree that by accessing the Site, you have read, understood, and agree to be bound by all of 
              these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you 
              are expressly prohibited from using the Site and you must discontinue use immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Bookmark className="mr-2 h-5 w-5" />
              Intellectual Property Rights
            </h2>
            <p className="mb-4">
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, 
              functionality, software, website designs, audio, video, text, photographs, and graphics on the Site 
              (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") 
              are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and 
              various other intellectual property rights.
            </p>
            <p>
              The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. 
              Except as expressly provided in these Terms and Conditions, no part of the Site and no Content or Marks 
              may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, 
              translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose 
              whatsoever, without our express prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Lock className="mr-2 h-5 w-5" />
              User Representations
            </h2>
            <p className="mb-4">
              By using the Site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
              <li>You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site.</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
              <li>You will not use the Site for any illegal or unauthorized purpose.</li>
              <li>Your use of the Site will not violate any applicable law or regulation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <CreditCard className="mr-2 h-5 w-5" />
              Purchases and Payment
            </h2>
            <p className="mb-4">
              We accept the following forms of payment:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Visa</li>
              <li>Mastercard</li>
              <li>American Express</li>
              <li>Discover</li>
              <li>PayPal</li>
            </ul>
            <p className="mb-4">
              You agree to provide current, complete and accurate purchase and account information for all purchases 
              made on the Site. You further agree to promptly update account and payment information, including email 
              address, payment method, and payment card expiration date, so that we can complete your transactions 
              and contact you as needed.
            </p>
            <p>
              Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any 
              time. All payments shall be in the currency listed on the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Prohibited Activities</h2>
            <p className="mb-4">
              You may not access or use the Site for any purpose other than that for which we make the Site available. 
              The Site may not be used in connection with any commercial endeavors except those that are specifically 
              endorsed or approved by us.
            </p>
            <p className="mb-4">As a user of the Site, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
              <li>Use a buying agent or purchasing agent to make purchases on the Site.</li>
              <li>Use the Site to advertise or offer to sell goods and services.</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
              <li>Engage in unauthorized framing of or linking to the Site.</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages.</li>
              <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-md mt-4">
              <p><strong>Email:</strong> legal@zomana.com</p>
              <p><strong>Address:</strong> 123 Commerce St, Market City</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
