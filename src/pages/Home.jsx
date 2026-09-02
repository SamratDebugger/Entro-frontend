import About from "../components/homepage/About";
import Business from "../components/homepage/Business";
import Hero from "../components/homepage/Hero";
import Solution from "../components/homepage/Solution";
import Team from "../components/homepage/Team";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="py-20 px-5">
        <Solution />
      </section>
      <section>
        <Team />
      </section>
      <section className="py-20">
        <About />
      </section>
      <section>
        <Business />
      </section>
    </>
  );
}
