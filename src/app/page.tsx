import Hero from "@/components/Hero";
import homeImg from "/public/home.jpg";

export default function Home() {
  return (
    <div>
      Home Page
      <Hero
        imgData={homeImg}
        imgAlt="car-factory"
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
