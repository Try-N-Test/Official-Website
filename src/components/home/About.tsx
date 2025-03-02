import Slider from "../shared/Slider";

const About = () => {
  return (
    <section
      id="about"
      className="w-[90vw] m-auto mb-28 lg:px-20 lg:py-16 bg-primary-950 border-primary-500 border-[3px] border-solid lg:rounded-3xl rounded-xl grid grid-cols-1 lg:grid-cols-12 lg:gap-14 gap-8 text-center lg:text-left px-6 py-8 max-w-7xl"
    >
      <div className="lg:col-span-5 max-w-5xl rounded-xl min-h-80">
        <Slider />
      </div>

      <div className="flex flex-col gap-6 lg:col-span-7">
        <div className="space-y-2">
          <h3 className="font-normal md:text-2xl text-xl bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent">
            Discover Our Story
          </h3>
          <h2 className="font-semibold md:text-5xl text-4xl text-primary-50">
            Uncover the TNT Effect
          </h2>
        </div>
        <p className="font-normal md:text-lg text-base text-primary-500">
          TNT brings together the best of both worlds - a professional
          development team creating impactful projects, and a thriving community
          where developers learn and grow together. Whether you&apos;re seeking
          expert developers for your project or looking to expand your skills
          alongside passionate peers, we&apos;re here to make technology
          accessible and innovation possible.
        </p>
      </div>
    </section>
  );
};

export default About;
