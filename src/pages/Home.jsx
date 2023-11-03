import { useLocation } from 'react-router-dom/dist';
import { BASE_URL } from '../App';
import Product from '../components/Product';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function Home({ updateTopLoadingBar }) {
  const { pathname } = useLocation();
  const [page, setPage] = useState(0);
  const fetchProducts = async () => {
    updateTopLoadingBar(70);
    let url = `${BASE_URL}/products`;
    if (pathname !== '/') {
      url = `${BASE_URL}/products/category${pathname}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    console.log({ url, data });
    updateTopLoadingBar(100);
    return data;
  };

  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ['products' + pathname],
    queryFn: () => fetchProducts(),
    keepPreviousData: true,
  });

  return (
    <>
      <Product products={data} isError={isError} isLoading={isLoading} />
      {/* <span>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>{' '}
      <button
        onClick={() => {
          if (data.hasMore) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={data?.hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{' '} */}
    </>
  );
}

/*
   <section className="w-full h-[80vh]">
        <img
          src="https://th.bing.com/th/id/OIG.WV05nUKdvdZmQMXDu5tw?pid=ImgGn&w=1024&h=1024&rs=1"
          alt=""
          className="w-full h-3/4 object-contain"
        />
      </section> 

 https://th.bing.com/th/id/OIG.rXBGEv.vX_Tn2WvhS5Vk?pid=ImgGn
 */
