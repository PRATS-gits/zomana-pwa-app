
import { SectionHeading } from "@/components/ui-components/SectionHeading";
import { Truck, Clock, Globe, PackageCheck, Scan } from "lucide-react";

export default function ShippingPolicy() {
  return (
    <div className="page-container py-12 md:py-16">
      <SectionHeading
        title="Shipping Policy"
        subtitle="Everything you need to know about how we deliver your purchases"
        className="mb-12"
      />
      
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-subtle">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Truck className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Processing Times
            </h2>
            <p className="mb-4">
              All orders are processed within 1-2 business days (excluding weekends and holidays) 
              after receiving your order confirmation email. You will receive another notification 
              when your order has shipped.
            </p>
            <div className="bg-muted p-5 rounded-lg">
              <h3 className="font-medium mb-2">Order Processing Timeline:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Day 0:</strong> Order placed and confirmation email sent</li>
                <li><strong>Days 1-2:</strong> Order processing and preparation</li>
                <li><strong>Days 2-3:</strong> Order shipped and tracking information provided</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Globe className="mr-2 h-5 w-5" />
              Shipping Options & Delivery Times
            </h2>
            <p className="mb-4">
              We offer several shipping options to meet your needs:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border px-4 py-2 text-left">Shipping Method</th>
                    <th className="border px-4 py-2 text-left">Estimated Delivery Time</th>
                    <th className="border px-4 py-2 text-left">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Standard Shipping</td>
                    <td className="border px-4 py-2">5-7 business days</td>
                    <td className="border px-4 py-2">$4.99 (Free on orders over $50)</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border px-4 py-2">Express Shipping</td>
                    <td className="border px-4 py-2">2-3 business days</td>
                    <td className="border px-4 py-2">$9.99</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Overnight Shipping</td>
                    <td className="border px-4 py-2">1 business day</td>
                    <td className="border px-4 py-2">$19.99</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border px-4 py-2">International Shipping</td>
                    <td className="border px-4 py-2">7-21 business days</td>
                    <td className="border px-4 py-2">Varies by location</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              *Delivery times are estimates and are not guaranteed. Delays may occur due to customs, 
              weather conditions, or other unforeseen circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <PackageCheck className="mr-2 h-5 w-5" />
              Shipping Restrictions
            </h2>
            <p className="mb-4">
              While we ship to most locations worldwide, there are some restrictions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We cannot ship to P.O. boxes for Express or Overnight shipments.</li>
              <li>Some products cannot be shipped internationally due to local regulations.</li>
              <li>
                Orders shipping to Alaska, Hawaii, or U.S. territories may incur additional shipping charges 
                and have longer delivery times.
              </li>
              <li>
                International customers are responsible for all duties, taxes, and customs fees that may apply. 
                These are not included in the shipping cost.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Scan className="mr-2 h-5 w-5" />
              Tracking Your Order
            </h2>
            <p className="mb-4">
              Once your order ships, you will receive a shipping confirmation email with a tracking number. 
              You can track your package by:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clicking the tracking link in your shipping confirmation email</li>
              <li>Logging into your Zomana account and viewing your order status</li>
              <li>Contacting our customer service team with your order number</li>
            </ul>
            <div className="bg-muted p-5 rounded-lg mt-4">
              <h3 className="font-medium mb-2">Common Tracking Statuses:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Pre-shipment:</strong> Your order has been processed but hasn't been picked up by the carrier yet.</li>
                <li><strong>In Transit:</strong> Your package is on its way.</li>
                <li><strong>Out for Delivery:</strong> Your package is scheduled for delivery today.</li>
                <li><strong>Delivered:</strong> Your package has been delivered.</li>
                <li><strong>Exception:</strong> There's a delay or issue with your delivery. Contact customer service if this status persists.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about our shipping policy or need help tracking your order, 
              please contact our customer service team at:
            </p>
            <div className="bg-muted p-4 rounded-md mt-4">
              <p><strong>Email:</strong> shipping@zomana.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Hours:</strong> Monday-Friday, 9am-5pm EST</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
