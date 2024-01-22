import Link from "next/link";

const Header = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between">
      <div className="md:flex-row flex items-center">
        <img src="/assets/images/dragon.svg" width="150px" className="-ml-5" />
        <Link href="/" className="hover:underline hover:text-brand-blue">
          <h1 className="text-dark text-5xl font-bold tracking-tighter leading-tight md:pr-8">
            Here Be Dragons<span className="text-brand-red">.</span>
          </h1>
        </Link>
      </div>
    </section>
  );
};

export default Header;
