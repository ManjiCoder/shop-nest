import { Link } from 'react-router-dom';
import { BuildingStorefrontIcon } from '@heroicons/react/20/solid';
import { useLocation } from 'react-router-dom/dist';

const categories = [
  'electronics',
  'jewelery',
  "men's clothing",
  "women's clothing",
];

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to="/"
        >
          <BuildingStorefrontIcon />
          <span className="ml-3 text-xl">Shop Nest</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {categories.map((category) => {
            return (
              <Link
                key={category}
                className={`capitalize mr-5 ${
                  decodeURIComponent(pathname).includes(category) &&
                  'text-gray-950'
                } hover:text-gray-950`}
                to={`/${category}`}
              >
                {category}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
