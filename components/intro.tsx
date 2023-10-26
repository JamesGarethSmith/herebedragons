const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between md:mt-8 md:mb-8">
      <div className="md:flex-row flex items-center">
        <img src="/assets/images/dragon.svg" width="150px" className="-ml-5" />
        <h1 className="text-5xl font-bold tracking-tighter leading-tight md:pr-8">
          Here Be Dragons.
        </h1>
      </div>
    </section>
  );
};

export default Intro;
