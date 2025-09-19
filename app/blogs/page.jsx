import React from 'react'
import Link from 'next/link';
const page = () => {



const blogs = [
  {
    id: 1,
    title: "10 Innovations Transforming Paper Cup Machines in 2025",
    date: "September 12, 2025",
    slug: "innovations-transforming-paper-cup-machines-2025",
    excerpt:
      "The global demand for paper cups has surged in 2025 due to growing consumer awareness of sustainability and the shift away from plastics...",
    image: "/blog1.jpg",
  },
  {
    id: 2,
    title: "10 Steps to Start Your Own Paper Cup Manufacturing Business",
    date: "September 5, 2025",
    slug: "start-your-paper-cup-manufacturing-business",
    excerpt:
      "Why Paper Cup Manufacturing is a Golden Business Opportunity. The world is changing fast, and one of the most significant shifts is...",
    image: "/blog2.jpg",
  },
  {
    id: 3,
    title:
      "Maximize Your Investment: Tips for Maintaining and Optimizing Your Paper Cutting Machine",
    date: "August 29, 2025",
    slug: "tips-for-maintaining-and-optimizing-paper-cutting-machine",
    excerpt:
      "Paper-cutting machines are used in the printing, publishing, and packaging sectors. A properly serviced paper cutter gives precise cuts...",
    image: "/blog3.jpg",
  },
];

  return (
    <div>
         <section
        style={{ backgroundImage: "url('/testimonialbg.webp')" }}
        className=" w-full   bg-cover h-[80vh] bg-cover -rotate-180 "
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-6xl font-bold z-10 rotate-180 ">
          Our Blogs
          </h2>
        </div>
      </section>

    <div className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{blog.date}</p>
              <p className="text-gray-700 text-sm">{blog.excerpt}</p>
              <Link
                href={`/our-blogs/${blog.slug}`}
                className="text-blue-600 font-medium hover:underline mt-3 block"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default page