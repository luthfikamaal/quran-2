import Link from 'next/link';

const NavbarBottom = () => {
  return (
    <>
      <div className="fixed bg-blue-dark border-t border-solid border-green-dark bottom-0 w-full px-4 py-2">
        <div className="grid grid-cols-2 gap-x-3">
          <Link href="/" className="text-white flex">
            <div className="flex btn btn-navbot w-full">
              <span className="mx-auto">
                <i className="bi bi-house-fill mr-2"></i>
                Home
              </span>
            </div>
          </Link>
          <Link href="/favorite" className="text-white flex">
            <div className="flex btn btn-navbot w-full">
              <span className="mx-auto">
                <i className="bi bi-heart-fill mr-2"></i>
                Favorite
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarBottom;
