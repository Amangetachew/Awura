import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-white py-20 md:py-32 text-center md:text-left"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center">
        {/* Text Content */}
        <div className="max-w-2xl mb-12 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900">
            Every problem is an opportunity for a solution
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 md:mt-6">
            Awura is a tech company that is focused on finding tech solutions
            based on innovation and creativity.
          </p>
        </div>

        {/* Single Image Section */}
        <div className="relative w-full max-w-3xl h-[350px] flex justify-center items-center">
          <Image
            src="/Untitled design.png"
            width={420}
            height={550}
            className="rounded-lg shadow-xl ring-1 ring-indigo-600 ring-offset-2"
            alt="Web3 Marketing"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
