import Hero from "../components/homepage/Hero";
import Solution from "../components/homepage/Solution";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="py-20 px-5">
        <Solution />
      </section>
    </>
  );
}
