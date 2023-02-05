/* eslint-disable jsx-a11y/no-redundant-roles */
import { MegaphoneIcon } from "@heroicons/react/24/outline";

const contactDetails = [
  {
    name: "Collaborate",
    email: "support@example.com",
    telephone: "+1 (555) 123-4567",
  },
  {
    name: "Press",
    email: "support@example.com",
    telephone: "+1 (555) 123-4567",
  },
  {
    name: "Join our team",
    email: "support@example.com",
    telephone: "+1 (555) 123-4567",
  },
  {
    name: "Fax Us",
    email: "support@example.com",
    telephone: "+1 (555) 123-4567",
  },
];
const locations = [
  {
    city: "Postal Address : Los Angeles",
    address: ["4556 Brendan Ferry", "Los Angeles, CA 90210"],
  },
  { city: "New York", address: ["886 Walter Streets", "New York, NY 12345"] },
  {
    city: "Postal Address : Toronto",
    address: ["7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
  },
  { city: "Chicago", address: ["726 Mavis Island", "Chicago, IL 60601"] },
];

function Donate() {
  return (
    <div className="bg-white pt-16 lg:pt-0">
      <section className="bg-[#f4ce15]">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <span className="flex rounded-lg bg-yellow-800 p-2">
                <MegaphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 truncate text-[1rem] font-medium text-teal-800">
                <span className="md:hidden">
                  {" "}
                  Big news! You can join us to create a better world by your
                  minimal donations
                </span>
                <span className="hidden md:inline">
                  Big news! You can join us to create a better world by your
                  minimal donations
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="!#"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-yellow-900 shadow-sm hover:bg-yellow-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      <main>
        {/* Side-by-side grid */}
        <div className="bg-white">
          <div className="mx-auto max-w-md py-24 px-6 sm:max-w-3xl sm:py-32 lg:max-w-7xl lg:px-8">
            <div className="divide-y divide-warm-gray-200">
              <section
                className="lg:grid lg:grid-cols-3 lg:gap-8"
                aria-labelledby="contact-heading"
              >
                <h2
                  id="contact-heading"
                  className="text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight"
                >
                  Get in touch
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                  {contactDetails.map((item) => (
                    <div key={item.name}>
                      <h3 className="text-lg font-medium text-warm-gray-900">
                        {item.name}
                      </h3>
                      <dl className="mt-2 text-base text-warm-gray-500">
                        <div>
                          <dt className="sr-only">Email</dt>
                          <dd>{item.email}</dd>
                        </div>
                        <div className="mt-1">
                          <dt className="sr-only">Phone number</dt>
                          <dd>{item.telephone}</dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
              </section>
              <section
                className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8"
                aria-labelledby="location-heading"
              >
                <h2
                  id="location-heading"
                  className="text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight"
                >
                  Locations
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                  {locations.map((location) => (
                    <div key={location.city}>
                      <h3 className="text-lg font-medium text-warm-gray-900">
                        {location.city}
                      </h3>
                      <div className="mt-2 space-y-1 text-base text-warm-gray-500">
                        {location.address.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="relative">
          <div
            className="absolute left-0 right-0 h-1/2 bg-warm-gray-50"
            aria-hidden="true"
          />
          <div className="relative mx-auto  my-6 px-6  lg:px-8">
            <div className="rounded-3xl bg-gradient-to-l from-emerald-400 to-[#f4ce15] py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-bold tracking-tight text-teal-900">
                  Join us for our newsletter
                </h2>
                <p className="mt-4 max-w-3xl text-lg font-[600] text-teal-800">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui Lorem cupidatat commodo. Elit sunt amet fugiat.
                </p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-md border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-900"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-slate-800 px-5 py-3 text-base font-medium text-white hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-teal-900 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  >
                    Notify me
                  </button>
                </form>
                <p className="mt-3 text-sm text-slate-50">
                  We care about the protection of your data. Read our{" "}
                  <a href="!#" className="font-medium text-white underline">
                    Privacy Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Donate;
