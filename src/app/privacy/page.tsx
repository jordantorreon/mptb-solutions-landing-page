import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
  description: `How ${site.name} collects, uses and protects your personal information.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="November 11, 2026"
      intro={`${site.name} respects your privacy. This policy explains what personal information we collect, how we use it, and your rights under the Data Privacy Act of 2012 (Republic Act No. 10173).`}
      sections={[
        {
          heading: "Information we collect",
          bullets: [
            "Contact details you give us: name, email address, phone number and company name.",
            "Order details: products ordered, delivery address and billing information.",
            "Messages you send through our contact form, email or phone.",
            "Payment confirmations from our payment partner. We do not receive or store your full card or e-wallet details.",
          ],
        },
        {
          heading: "How we use your information",
          bullets: [
            "To prepare quotations and process and deliver your orders.",
            "To activate software licenses and SaaS accounts.",
            "To provide warranty and after-sales assistance.",
            "To reply to your questions and send order updates.",
            "To meet our legal, tax and accounting obligations.",
          ],
        },
        {
          heading: "Sharing your information",
          paragraphs: [
            "We do not sell your personal information. We share it only as needed to complete your order:",
          ],
          bullets: [
            "Payment processors, to handle your payment securely.",
            "Couriers, to deliver your products.",
            "Manufacturers or suppliers, when processing a warranty claim.",
            "Government authorities, when required by law.",
          ],
        },
        {
          heading: "Data security and retention",
          paragraphs: [
            "We use reasonable organizational, physical and technical measures to protect your information. We keep your information only as long as needed for the purposes above or as required by law.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "Under the Data Privacy Act, you have the right to be informed, to access, to correct, to object, to have your data erased or blocked, to data portability, and to file a complaint with the National Privacy Commission.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Our website may use basic cookies needed for it to work properly. You can disable cookies in your browser settings.",
          ],
        },
        {
          heading: "Contact us",
          paragraphs: [
            `To use any of your rights or ask about this policy, email ${site.email} or call ${site.phone}.`,
          ],
        },
      ]}
    />
  );
}
