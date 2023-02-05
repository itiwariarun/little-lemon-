import Dessert from "../components/assets/bruschetta1.jpg";
import Dessert1 from "../components/assets/salad.jpg";
import Dessert2 from "../components/assets/creme.jpg";
import Dessert3 from "../components/assets/about.jpg";
import Dessert4 from "../components/assets/bruschetta.jpg";
import Dessert5 from "../components/assets/cat-csalad.jpg";
import Dessert7 from "../components/assets/gourmet.jpg";
import Dessert6 from "../components/assets/lemon.jpg";
import Dessert8 from "../components/assets/stock.jpg";
import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    name: "Non-veg Bruschetta",
    color: "Rating:8/10",
    href: "/ordernow",
    imageSrc: Dessert,
    imageAlt: "Non-veg Bruschetta",
    price: "$9",
  },
  {
    id: 2,
    name: "Healthy Salad",
    color: "Rating:9/10",
    href: "/ordernow",
    imageSrc: Dessert1,
    imageAlt: "Healthy Salad",
    price: "$10",
  },
  {
    id: 3,
    name: "Tasty Pastries",
    color: "Rating:7/10",
    href: "/ordernow",
    imageSrc: Dessert2,
    imageAlt: "Tasty Pastries",
    price: "$14",
  },
  {
    id: 4,
    name: "Bruschetta Combo",
    color: "Rating:6/10",
    href: "/ordernow",
    imageSrc: Dessert3,
    imageAlt: "Bruschetta Combo",
    price: "$7",
  },
  {
    id: 5,
    name: "Fruit Salad",
    color: "Rating:10/10",
    href: "/ordernow",
    imageSrc: Dessert4,
    imageAlt: "Fruit Salad",
    price: "$11",
  },
  {
    id: 6,
    name: "Lemon Bars",
    color: "Rating:9/10",
    href: "/ordernow",
    imageSrc: Dessert5,
    imageAlt: "Lemon Bars",
    price: "$8.6",
  },
  {
    id: 7,
    name: "Hot Dogs",
    color: "Rating:9/10",
    href: "/ordernow",
    imageSrc: Dessert6,
    imageAlt: "Hot Dogs",
    price: "$9.3",
  },
  {
    id: 8,
    name: "Zip Tote Basket",
    color: "Rating:8/10",
    href: "/ordernow",
    imageSrc: Dessert7,
    imageAlt: "Zip Tote Basket",
    price: "$12.6",
  },
  {
    id: 9,
    name: "Veg Bruschetta",
    color: "Rating:10/10",
    href: "/ordernow",
    imageSrc: Dessert8,
    imageAlt: "Veg Bruschetta",
    price: "$10.5",
  },
  // More products...
];

function Menu() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">
          Today's You Can Taste Our These Tastes
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    {product.price}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to={product.href}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Add to Basket<span className="sr-only">, {product.name}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Menu;
