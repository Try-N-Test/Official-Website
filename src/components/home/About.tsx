import Slider from "../shared/Slider";

const About = () => {
  return (
    <section className="w-[90vw] m-auto mb-28 lg:px-20 lg:py-16 bg-primary-950  border-primary-500 border-[3px] border-solid lg:rounded-[5.5rem] rounded-xl grid grid-cols-1 lg:grid-cols-12 lg:gap-14 gap-8 lg:max-h-[450px] text-center lg:text-left px-6 py-8">
      <div className="h-80 max-h-[350px] lg:col-span-5 max-w-5xl rounded-xl">
        <Slider />
      </div>

      <div className=" flex flex-col lg:justify-between gap-6 min-h-[100px] lg:col-span-7">

        <h3 className="font-normal md:text-2xl text-xl bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent">
          Discover Our Story
        </h3>
        <h2 className="font-semibold md:text-5xl text-4xl text-primary-50">
          Uncover the TNT Effect
        </h2>
        <p className="font-normal md:text-lg text-base text-primary-400">
          TNT is a dynamic team of of driven individuals who are passionate
          about using our skills and expertise to create positive change in the
          world. We are a constantly evolving team, always learning and growing.
          We embrace new challenges, explore new technologies, and push the
          boundaries of what&apos;s possible. We believe in the power of
          teamwork and the importance of giving back to the community. Through
          our innovative projects and collaborative efforts, we aim to make a
          lasting positive impact on the world around us.
        </p>
      </div>
    </section>
  );
};

export default About;
