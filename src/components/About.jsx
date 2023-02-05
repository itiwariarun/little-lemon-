/* eslint-disable jsx-a11y/no-redundant-roles */
import Dessert3 from "../components/assets/about.jpg";

const faqs = [
  {
    id: 1,
    question: "How do you make breuschetta?",
    answer:
      "These things only knows our great chefs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "What's the best thing about salads?",
    answer:
      "I don't know, but the health conscious things is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "How we can know about receipe",
    answer:
      "Joinning out news letter. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "Why do you to be late?",
    answer:
      "Because we're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

function About() {
  return (
    <div className="bg-white pt-16 lg:pt-0">
      <header className="relative bg-sky-800 pb-24 sm:pb-32">
        <div className="absolute inset-0">
          <img className="h-full w-full object-cover" src={Dessert3} alt="" />
          <div
            className="absolute inset-0 bg-gradient-to-l from-yellow-800 to-yellow-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto py-4 max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-cyan-100">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
            consectetur. Sit justo viverra non adipisicing elit distinctio.
          </p>
        </div>
      </header>

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
                  About us in brief
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12  sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                  <div>
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatum, maxime fuga qui, deserunt labore perspiciatis
                      iste laborum quaerat quod sit velit odit explicabo
                      perferendis cumque ipsa? Doloremque nobis illo ipsam fuga
                      repudiandae, suscipit eligendi officiis sed ea
                      perspiciatis pariatur odit culpa! Vero tempora impedit
                      molestias ut ex! Dolore beatae ratione unde asperiores
                      minus corrupti provident magni quibusdam. Ea illo numquam,
                      voluptatem quibusdam officiis a! Sit temporibus architecto
                      necessitatibus dolorum deleniti unde, eius vero totam nemo
                      omnis ab similique laborum mollitia dolores facere et
                      illum perferendis ipsa rem harum incidunt. Itaque veniam
                      necessitatibus, ullam exercitationem dolore amet aut
                      corporis dolorem dolorum. Provident ipsa alias molestiae
                      voluptates explicabo voluptatem! Voluptatum ullam ex harum
                      nemo reiciendis veritatis non quod veniam. Aut repellat,
                      maiores ducimus ab exercitationem corporis sequi eaque
                      perspiciatis magni. Distinctio ex ad odit aperiam,
                      laudantium impedit quam repellendus, exercitationem eum
                      accusamus officiis eveniet esse suscipit eius officia
                      velit error corporis ea. Doloribus, non aperiam. Sapiente
                      distinctio dolorum rerum et, qui dicta in ducimus sit
                      architecto eligendi? Expedita corrupti cumque non tempora
                      illum aut eum quos omnis pariatur, amet consectetur
                      voluptas adipisci voluptatum explicabo corporis quae,
                      debitis repellat accusantium error vitae! Minus eius
                      magnam autem officiis, culpa rerum tempore quas cum
                      tempora perferendis asperiores voluptatum ipsum
                      consectetur, incidunt ea ad alias repellendus nisi? Nulla
                      magnam ullam corporis, perspiciatis assumenda, ipsa,
                      obcaecati mollitia minus consequatur molestias quaerat
                      nemo.
                    </h3>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-warm-gray-50">
          <div className="mx-auto max-w-md py-24 px-6 sm:max-w-3xl sm:py-32 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-warm-gray-900">
                  Frequently asked questions
                </h2>
                <p className="mt-4 text-lg text-warm-gray-500">
                  Can’t find the answer you’re looking for? Reach out to our{" "}
                  <a
                    href="!#"
                    className="font-medium text-cyan-700 hover:text-cyan-600"
                  >
                    customer support
                  </a>{" "}
                  team.
                </p>
              </div>
              <div className="mt-12 lg:col-span-2 lg:mt-0">
                <dl className="space-y-12">
                  {faqs.map((faq) => (
                    <div key={faq.id}>
                      <dt className="text-lg font-medium text-warm-gray-900">
                        {faq.question}
                      </dt>
                      <dd className="mt-2 text-base text-warm-gray-500">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default About;
