import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Next sections will go here */}
      </main>
    </>
  );
}

// Optional: add metadata for SEO
export const metadata: Metadata = {
  title: "LXII - Empowering Africa Through Strategic Investments",
  description:
    "LXII is committed to creating robust investment solutions tailored for the African landscape.",
  openGraph: {
    images: ["/og-image.jpg"], // replace with real image later
  },
};
