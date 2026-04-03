import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Courses from "@/components/Courses";
import Trial from "@/components/Trial";
import Referral from "@/components/Referral";
import Members from "@/components/Members";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <Courses />
      <Trial />
      <Referral />
      <Members />
      <FAQ />
      <Footer />
    </main>
  );
}
