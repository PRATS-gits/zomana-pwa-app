
import { SectionHeading } from "@/components/ui-components/SectionHeading";
import { RefreshCw, CheckCircle, Package, Calendar, AlertCircle } from "lucide-react";

export default function ReturnsPolicy() {
  return (
    <div className="page-container py-12 md:py-16">
      <SectionHeading
        title="Returns & Refunds Policy"
        subtitle="Easy returns for your peace of mind"
        className="mb-12"
      />
      
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-subtle">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <RefreshCw className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              Return Policy Overview
            </h2>
            <p className="mb-4">
              We want you to be completely satisfied with your purchase. If you're not entirely 
              happy with your order, we're here to help.
            </p>
            <div className="bg-muted p-5 rounded-lg">
              <h3 className="font-medium mb-2">Quick Return Policy Summary:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Return window: 30 days from delivery date</li>
                <li>Items must be unused, unworn, and in original packaging</li>
                <li>Free returns for standard shipping orders</li>
                <li>Exchanges available for size/color issues</li>
                <li>Some items are not eligible for return (see exclusions)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Return Timeframe
            </h2>
            <p className="mb-4">
              You have 30 calendar days from the date you received your order to initiate a return. 
              Returns initiated after 30 days will not be accepted.
            </p>
            <p>
              For seasonal items or items purchased during special promotions, different return timeframes 
              may apply. These will be clearly stated at the time of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Package className="mr-2 h-5 w-5" />
              Return Process
            </h2>
            <p className="mb-4">
              To return an item, please follow these steps:
            </p>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <p className="font-medium">Initiate a return request</p>
                <p className="text-muted-foreground">
                  Log into your Zomana account, find the order you wish to return, and click "Return Items." 
                  Alternatively, contact our customer service team.
                </p>
              </li>
              <li>
                <p className="font-medium">Receive your return label</p>
                <p className="text-muted-foreground">
                  After we approve your return request, we'll send you a prepaid return shipping label 
                  via email (for eligible returns).
                </p>
              </li>
              <li>
                <p className="font-medium">Pack your items</p>
                <p className="text-muted-foreground">
                  Place the item(s) in the original packaging if possible. Include all tags, 
                  accessories, and documentation that came with the item.
                </p>
              </li>
              <li>
                <p className="font-medium">Ship your return</p>
                <p className="text-muted-foreground">
                  Attach the prepaid shipping label to your package and drop it off at the designated 
                  shipping carrier location.
                </p>
              </li>
              <li>
                <p className="font-medium">Refund processing</p>
                <p className="text-muted-foreground">
                  Once we receive and inspect your return, we'll process your refund. This typically 
                  takes 3-5 business days, but may take up to 14 days for international returns.
                </p>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              Return Conditions & Exclusions
            </h2>
            <p className="mb-4">
              To be eligible for a return, your item must meet these conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Item must be unused, unworn, and in the same condition that you received it</li>
              <li>Item must be in the original packaging</li>
              <li>Item must include all tags, accessories, and documentation</li>
              <li>You must have proof of purchase (order number or receipt)</li>
            </ul>
            
            <p className="font-medium mt-6 mb-2">The following items cannot be returned:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gift cards</li>
              <li>Downloadable software products</li>
              <li>Personalized or custom-made items</li>
              <li>Intimate apparel, undergarments, and swimwear</li>
              <li>Health and personal care items (for hygiene reasons)</li>
              <li>Items marked as "Final Sale" or "Non-Returnable"</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Refunds & Exchanges</h2>
            <p className="mb-4">
              Once your return is received and inspected, we will send you an email to notify you that 
              we have received your returned item. We will also notify you of the approval or rejection 
              of your refund.
            </p>
            <p className="mb-4">
              If approved, your refund will be processed, and a credit will automatically be applied to 
              your original method of payment within 3-5 business days. For credit card payments, it may 
              take an additional 5-10 business days for the refund to appear on your statement, depending 
              on your card issuer.
            </p>
            <div className="bg-muted p-5 rounded-lg mt-4">
              <h3 className="font-medium mb-2">Refund Methods:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Original payment method:</strong> This is our default refund method</li>
                <li><strong>Store credit:</strong> Available upon request</li>
                <li><strong>Exchange:</strong> For size or color changes (when available)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Our Returns Department</h2>
            <p>
              If you have any questions about our returns policy or need assistance with a return, 
              please contact our returns department:
            </p>
            <div className="bg-muted p-4 rounded-md mt-4">
              <p><strong>Email:</strong> returns@zomana.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Hours:</strong> Monday-Friday, 9am-5pm EST</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
