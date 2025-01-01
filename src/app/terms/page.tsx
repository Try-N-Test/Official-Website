import { V2 } from "@/lib/fonts";
import MotionDiv from "@/components/animations/MotionDiv";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Try N Test Foundation",
    description: "Read about how Try N Test Foundation handles and protects your data. Learn about our data collection, storage, usage policies, and your rights as a subscriber.",
    openGraph: {
      title: "Terms of Service | Try N Test Foundation",
      description: "Learn about our data handling practices and your rights as a Try N Test Foundation subscriber.",
      url: "https://tryntest.in/terms",
      siteName: "Try N Test Foundation",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Terms of Service | Try N Test Foundation",
      description: "Learn about our data handling practices and your rights as a Try N Test Foundation subscriber.",
    },
    alternates: {
      canonical: "https://tryntest.in/terms",
    },
  };

export default function Terms() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <div className="relative rounded-[2.5rem] bg-transparent overflow-hidden border-background/20 border-2">
          <div className="relative px-8 py-12 z-30">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className={`text-4xl md:text-6xl font-bold text-center mb-12 ${V2.className} bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-primary-50 to-primary-500`}
              >
                Terms of Service
              </h1>

              <div className="space-y-8 text-white/80">
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary-400">
                    Data Collection
                  </h2>
                  <p>
                    When you subscribe to our organisation updates through the
                    Try N Test Foundation website, we collect your email
                    address. This is the only personal information we request
                    and store from our organisation updates subscribers.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary-400">
                    Data Storage & Security
                  </h2>
                  <p>
                    Your email address is securely stored in our database,
                    protected by industry-standard encryption and Google&apos;s
                    security protocols. Access to this data is strictly limited
                    to authorized Try N Test Foundation team members.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary-400">
                    Use of Information
                  </h2>
                  <p>We use your email address exclusively for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Sending updates about Try N Test Foundation projects
                    </li>
                    <li>Sharing community news and events</li>
                    <li>
                      Providing information about collaboration opportunities
                    </li>
                    <li>Important announcements related to our services</li>
                  </ul>
                  <p>
                    We will never sell, rent, or share your email address with
                    third parties for marketing purposes.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary-400">
                    Your Rights
                  </h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Unsubscribe from our communications at any time</li>
                    <li>Request information about your stored data</li>
                    <li>Request deletion of your data from our database</li>
                    <li>Update your email address</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary-400">
                    Contact Us
                  </h2>
                  <p>
                    If you have any questions about our data handling practices
                    or would like to exercise any of your rights regarding your
                    data, please contact us at{" "}
                    <Link
                      href="mailto:tnt.tryntest@gmail.com"
                      className="text-primary-400 hover:text-primary-300 underline"
                    >
                      tnt.tryntest@gmail.com
                    </Link>
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary-400">
                    Updates to Terms
                  </h2>
                  <p>
                    We may update these terms from time to time. Any changes
                    will be reflected on this page, and significant changes will
                    be communicated directly to our subscribers.
                  </p>
                </section>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </main>
  );
}
