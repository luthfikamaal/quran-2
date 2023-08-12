import Link from 'next/link';

const NavbarTop = () => {
  return (
    <>
      <nav className="px-4 py-2 border-b border-solid border-[#09BC8A] bg-blue-dark flex fixed w-full">
        <div className="rounded-lg px-3 py-2 bg-green-dark">
          <Link href="/" className="font-bold text-white">
            Quran
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarTop;
