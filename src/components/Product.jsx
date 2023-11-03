import Filter from './Filter';
import Rating from './Rating';
import Sort from './Sort';
import Spinner from './Spinner';

export default function Product({ isError, isLoading, products }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5  pt-7 pb-24 mx-auto">
        <h1 className="sm:text-3xl text-center text-2xl font-medium title-font mb-3 text-gray-800">
          Shop Nest - Trending Products
        </h1>
        <div className="flex items-center justify-between mb-4">
          <Filter />
          <Sort />
        </div>
        {isLoading && !isError && <Spinner />}
        <div className="flex flex-wrap -m-4">
          {products?.map((item) => {
            return (
              <div key={item.id} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-72 md:h-52 w-full object-contain object-center p-3"
                    src={item?.image}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest capitalize text-xs title-font font-medium text-gray-500 mb-1">
                      CATEGORY - {item?.category}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {item?.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {item?.description.slice(0, 132)}
                    </p>
                    <div className="flex items-center justify-between flex-wrap ">
                      <a className="text-indigo-500 text-xl inline-flex items-center md:mb-2 lg:mb-0">
                        ${item.price}
                      </a>
                      <Rating
                        rating={item.rating.rate}
                        count={item.rating.count}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
