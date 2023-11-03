import { useEffect, useState } from 'react';
import Product from '../components/Product';
import { useLocation } from 'react-router-dom';
let BASE_URL = 'https://fakestoreapi.com';

export default function Home() {
  const { pathname } = useLocation();
  const [products, setProducts] = useState([]);
  const getProducts = async (endpoint) => {
    const response = await fetch(BASE_URL + endpoint);
    const data = await response.json();
    let trendingProducts = [];
    if (pathname === '/') {
      trendingProducts.push(...data.slice(2, 3));
      trendingProducts.push(...data.slice(6, 7));
      trendingProducts.push(...data.slice(12, 13));
      setProducts(trendingProducts);
    }
    setProducts(data);
  };
  useEffect(() => {
    getProducts(
      pathname === '/' ? '/products' : `/products/category${pathname}`
    );
    console.log(pathname);
  }, [pathname]);

  return (
    <>
      {/* <section className="w-full h-[80vh]">
        <img
          src="https://th.bing.com/th/id/OIG.WV05nUKdvdZmQMXDu5tw?pid=ImgGn&w=1024&h=1024&rs=1"
          alt=""
          className="w-full h-3/4 object-contain"
        />
      </section> */}
      <Product products={products} />
    </>
  );
}

/*
 https://th.bing.com/th/id/OIG.rXBGEv.vX_Tn2WvhS5Vk?pid=ImgGn
 */
