/* eslint-disable jsx-a11y/no-redundant-roles */

import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Dessert5 from "../components/assets/cat-csalad.jpg";
import Dessert7 from "../components/assets/gourmet.jpg";
import Dessert6 from "../components/assets/lemon.jpg";
import ico from "../components/assets/ico.svg";
import ico1 from "../components/assets/ico1.svg";
import ico2 from "../components/assets/ico2.svg";
import ico3 from "../components/assets/ico3.svg";
const products = [
  {
    id: 1,
    name: "Fruit Salad",
    price: "$12",
    size: "Medium",
    inStock: true,
    imageSrc: Dessert5,
    imageAlt: "Fruit Salad",
  },
  {
    id: 2,
    name: "Bruschetta Zip tote basket",
    price: "$16",
    inStock: false,
    leadTime: "7-8 pm",
    size: "Large",
    imageSrc: Dessert7,
    imageAlt: "Bruschetta",
  },
  {
    id: 3,
    name: "Lemon Bar",
    price: "$22.40",
    inStock: true,
    size: "Large",
    imageSrc: Dessert6,
    imageAlt: "Lemon Bars our special",
  },
];
const policies = [
  {
    name: "Free returns",
    imageUrl: ico,
    description: "Not what you expected? Place it back before delivery",
  },
  {
    name: "Same hour delivery",
    imageUrl: ico1,
    description:
      "We offer a delivery service that has never been done before. Checkout today and receive your products within minutes.",
  },
  {
    name: "All year discount",
    imageUrl: ico2,
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: "For the planet",
    imageUrl: ico3,
    description:
      "We’ve pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

function Carts() {
  return (
    <div className="bg-white">
      {/* Mobile menu */}

      <main>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
          <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Basket
          </h1>

          <form className="mt-12">
            <section aria-labelledby="cart-heading">
              <h2 id="cart-heading" className="sr-only">
                Items in your basket
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 border-t border-b border-gray-200"
              >
                {products.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="flex-shrink-0">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-sm">
                            <p className="font-medium text-gray-700 hover:text-gray-800">
                              {product.name}
                            </p>
                          </h4>
                          <p className="ml-4 text-sm font-medium text-gray-900">
                            {product.price}
                          </p>
                        </div>

                        <p className="mt-1 text-sm text-gray-500">
                          {product.size}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-1 items-end justify-between">
                        <p className="flex items-center space-x-2 text-sm text-gray-700">
                          {product.inStock ? (
                            <CheckIcon
                              className="h-5 w-5 flex-shrink-0 text-green-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <ClockIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-300"
                              aria-hidden="true"
                            />
                          )}

                          <span>
                            {product.inStock
                              ? "In stock"
                              : `available between ${product.leadTime}`}
                          </span>
                        </p>
                        <div className="ml-4">
                          <button
                            type="button"
                            className="text-sm font-medium text-teal-800 hover:text-teal-500"
                          >
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Order summary */}
            <section aria-labelledby="summary-heading" className="mt-10">
              <h2 id="summary-heading" className="sr-only">
                Order summary
              </h2>

              <div>
                <dl className="space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Subtotal
                    </dt>
                    <dd className="ml-4 text-base font-medium text-gray-900">
                      $50.40
                    </dd>
                  </div>
                </dl>
                <p className="mt-1 text-sm text-gray-500">
                  Shipping and taxes will be calculated at checkout.
                </p>
              </div>

              <Link to="/ordered" className="mt-10">
                <button
                  type="button"
                  className="w-full rounded-md border border-transparent bg-teal-800 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Order Now
                </button>
              </Link>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>
                  or
                  <Link
                    to="/menu"
                    className="font-medium text-teal-600 hover:text-teal-500"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </p>
              </div>
            </section>
          </form>
        </div>

        {/* Policy grid */}
        <section
          aria-labelledby="policies-heading"
          className="border-t border-gray-200 bg-gray-50"
        >
          <h2 id="policies-heading" className="sr-only">
            Our policies
          </h2>

          <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
              {policies.map((policy) => (
                <div
                  key={policy.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="-my-1 mx-auto h-24 w-auto"
                        src={policy.imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                    <h3 className="text-base font-medium text-gray-900">
                      {policy.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      {policy.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Carts;
