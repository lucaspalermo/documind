import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NewsletterBanner } from "@/components/layout/newsletter-banner";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">{children}</main>
      <NewsletterBanner />
      <Footer />
    </>
  );
}
