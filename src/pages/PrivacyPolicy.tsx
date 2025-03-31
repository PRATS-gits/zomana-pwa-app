
import { SectionHeading } from "@/components/ui-components/SectionHeading";
import { Shield, Lock, Eye, Database, Bell } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="page-container py-12 md:py-16">
      <SectionHeading
        title="Privacy Policy"
        subtitle="Your privacy matters to us"
        className="mb-12"
      />
      
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-subtle">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Shield className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Eye className="mr-2 h-5 w-5" />
              Introduction
            </h2>
            <p className="mb-4">
              At Zomana, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy will inform you about how we look after your personal data when you 
              visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            <p>
              We recommend that you read this Privacy Policy carefully so that you fully understand 
              how and why we use your data. By accessing our website, you agree to this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Database className="mr-2 h-5 w-5" />
              Information We Collect
            </h2>
            <p className="mb-4">
              The personal information we collect depends on how you interact with us:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and password.</li>
              <li><strong>Transaction Information:</strong> When you make a purchase, we collect payment details, billing and shipping address, and products purchased.</li>
              <li><strong>Communications:</strong> If you contact our customer service, we record the conversation for quality and training purposes.</li>
              <li><strong>Device Information:</strong> We automatically collect IP address, browser type, operating system, and other technical information.</li>
            </ul>
            <p>
              We do not knowingly collect data relating to children under 16 years of age.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Lock className="mr-2 h-5 w-5" />
              How We Use Your Information
            </h2>
            <p className="mb-4">
              We use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To create and manage your account</li>
              <li>To process and fulfill your orders</li>
              <li>To provide customer support</li>
              <li>To send important notifications about your orders or account</li>
              <li>To improve our website and services</li>
              <li>To detect and prevent fraud</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Your Rights
            </h2>
            <p className="mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> You can ask us to correct any inaccurate or incomplete information.</li>
              <li><strong>Right to Erasure:</strong> You can ask us to delete your personal data in certain circumstances.</li>
              <li><strong>Right to Restrict Processing:</strong> You can ask us to limit how we use your data.</li>
              <li><strong>Right to Data Portability:</strong> You can request a copy of your data in a machine-readable format.</li>
              <li><strong>Right to Object:</strong> You can object to our processing of your data for certain purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-md mt-4">
              <p><strong>Email:</strong> privacy@zomana.com</p>
              <p><strong>Address:</strong> 123 Commerce St, Market City</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
