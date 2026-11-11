import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refund & Return Policy — ${site.name}`,
  description: `How returns, replacements and refunds work at ${site.name}.`,
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund & Return Policy"
      updated="November 11, 2026"
      intro={`We want you to be happy with your purchase. This policy explains when and how you can return a product to ${site.name} and get a replacement or refund.`}
      sections={[
        {
          heading: "Damaged, defective or wrong items",
          bullets: [
            "If you receive an item that is damaged, defective or not what you ordered, contact us within 7 days of delivery.",
            "Include your order number, a description of the problem, and photos or a video of the item and its packaging.",
            "Once we confirm the issue, we will replace the item or issue a full refund, including the shipping fee.",
          ],
        },
        {
          heading: "Change-of-mind returns",
          bullets: [
            "Unused hardware in its original, sealed packaging may be returned within 7 days of delivery.",
            "The customer pays the return shipping fee for change-of-mind returns.",
            "Items that have been opened, used, installed or damaged by the customer cannot be returned for change of mind.",
          ],
        },
        {
          heading: "Non-returnable items",
          bullets: [
            "Software licenses and license keys that have been delivered or activated.",
            "SaaS subscription periods that have already started (see below for cancellations).",
            "Items specially ordered or configured at your request.",
            "Cables cut to length and consumable accessories once opened.",
          ],
        },
        {
          heading: "Software and SaaS subscriptions",
          bullets: [
            "You may cancel a subscription at any time. Cancellation stops the next renewal; the current paid period stays active until it ends.",
            "If you cannot access a software product because of a problem on our side that we cannot fix, we will refund the unused portion of your payment.",
          ],
        },
        {
          heading: "Warranty claims",
          paragraphs: [
            "Defects that appear after the 7-day return window are handled under the product warranty. We will help you process the claim with the manufacturer or supplier, which may result in repair or replacement of the unit.",
          ],
        },
        {
          heading: "How to request a return or refund",
          bullets: [
            `Email ${site.email} or call ${site.phone} with your order number and the reason for your request.`,
            "We will reply within 2 business days with return instructions.",
            "Returned items are inspected once we receive them. Approved refunds go back to your original payment method within 7–14 business days, depending on your bank or e-wallet.",
          ],
        },
        {
          heading: "Order cancellations",
          paragraphs: [
            "You may cancel an order for a full refund any time before it is shipped or, for software, before the license is delivered.",
          ],
        },
      ]}
    />
  );
}
