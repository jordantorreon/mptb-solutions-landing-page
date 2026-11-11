import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms & Conditions — ${site.name}`,
  description: `Terms and conditions for purchasing products from ${site.name}.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="November 11, 2026"
      intro={`These Terms & Conditions govern your use of the ${site.name} website and any purchase of products from us. By placing an order, you agree to these terms.`}
      sections={[
        {
          heading: "About us",
          paragraphs: [
            `${site.name} is an online retailer based in ${site.address}. We sell biometric devices, CCTV cameras and security systems, networking devices and equipment, and our own software and SaaS products.`,
          ],
        },
        {
          heading: "Products and pricing",
          bullets: [
            "Product descriptions, images and specifications are provided as accurately as possible. Actual products may vary slightly in appearance.",
            "All prices are in Philippine Pesos (PHP). Quoted prices are valid for the period stated in the quotation.",
            "We reserve the right to correct pricing errors and to decline or cancel orders affected by such errors, with a full refund of any amount paid.",
            "Product availability is subject to stock. If an item becomes unavailable after you pay, we will offer a replacement or a full refund.",
          ],
        },
        {
          heading: "Orders",
          bullets: [
            "An order is confirmed only after we send you an order confirmation and receive full payment.",
            "Please make sure your contact details and delivery address are correct. We are not responsible for delays caused by incorrect information.",
          ],
        },
        {
          heading: "Payment",
          paragraphs: [
            "Payments are processed securely online through our third-party payment partner. We do not store your card or e-wallet details on our servers. Your order is processed once payment is successfully completed.",
          ],
        },
        {
          heading: "Shipping and delivery",
          bullets: [
            "Hardware products are shipped to the delivery address you provide. Shipping fees and estimated delivery times are given in your quotation or order confirmation.",
            "Delivery times are estimates and may be affected by courier delays, weather or other events outside our control.",
            "Please inspect your items upon delivery and report any damage or missing items within 48 hours of receipt.",
          ],
        },
        {
          heading: "Software and SaaS products",
          bullets: [
            "Software licenses and SaaS subscriptions are delivered digitally. Access details are sent to the email address on your order.",
            "Licenses are for your own business use and may not be resold, shared or transferred without our written consent.",
            "Subscriptions renew according to the plan you chose, unless you cancel before the next billing period.",
          ],
        },
        {
          heading: "Warranty",
          paragraphs: [
            "Hardware products are covered by the manufacturer's or supplier's warranty. The warranty period is shown in your quotation or on the product documentation. Warranty does not cover damage from misuse, accidents, unauthorized repairs, power surges or normal wear and tear.",
          ],
        },
        {
          heading: "Returns and refunds",
          paragraphs: [
            "Returns, replacements and refunds are handled according to our Refund & Return Policy, available at /refund-policy.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            `To the extent allowed by law, ${site.name}'s total liability for any claim related to a product is limited to the amount you paid for that product. We are not liable for indirect or consequential losses.`,
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of the Republic of the Philippines, including the Consumer Act of the Philippines (RA 7394).",
          ],
        },
        {
          heading: "Changes to these terms",
          paragraphs: [
            "We may update these terms from time to time. The version posted on this page applies to orders placed after the date shown above.",
          ],
        },
        {
          heading: "Contact us",
          paragraphs: [`Questions about these terms? Email ${site.email} or call ${site.phone}.`],
        },
      ]}
    />
  );
}
