// import { notFound } from "next/navigation";

const blogs = {
  "innovations-transforming-paper-cup-machines-2025": {
    title: "10 Innovations Transforming Paper Cup Machines in 2025",
    date: "September 12, 2025",
    content: `
      <p>The global demand for paper cups has surged in 2025 due to growing consumer awareness of sustainability and the shift away from plastics. Here are 10 innovations shaping the future...</p>
      <ul>
        <li>Smart automation in manufacturing</li>
        <li>Eco-friendly biodegradable coatings</li>
        <li>Faster production lines with AI optimization</li>
      </ul>
    `,
    image: "/blog1.jpg",
  },
  "start-your-paper-cup-manufacturing-business": {
    title: "10 Steps to Start Your Own Paper Cup Manufacturing Business",
    date: "September 5, 2025",
    content: `
      <p>Starting a paper cup manufacturing business can be highly profitable if done right. Here are the 10 steps you need to follow...</p>
      <ol>
        <li>Research the market</li>
        <li>Arrange initial capital</li>
        <li>Choose the right machinery</li>
        <li>Setup production facility</li>
      </ol>
    `,
    image: "/blog2.jpg",
  },
  "tips-for-maintaining-and-optimizing-paper-cutting-machine": {
    title:
      "Maximize Your Investment: Tips for Maintaining and Optimizing Your Paper Cutting Machine",
    date: "August 29, 2025",
    content: `
      <p>Paper-cutting machines are essential in printing and packaging. To maximize efficiency, follow these maintenance tips...</p>
      <ul>
        <li>Regular lubrication of moving parts</li>
        <li>Sharpening and replacing blades timely</li>
        <li>Routine inspection and calibration</li>
      </ul>
    `,
    image: "/blog3.jpg",
  },
};

export default function BlogDetail({ params }) {
  const blog = blogs[params.slug];

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-6">{blog.date}</p>
      <div
        className="prose prose-lg text-gray-800"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
