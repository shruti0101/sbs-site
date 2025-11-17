import Location from "./Location";

export async function generateMetadata({ params }) {
  const city =
    params.location.split("-")[params.location.split("-").length - 1];

  return {
    title: city && `Paper Cup Making Machines Manufacturer in ${city}`,
    description: `Looking for a reliable paper cup making machines manufacturer in ${city}? We offer high-performance, durable, and fully automated paper cup machines at competitive prices with fast delivery and expert support`,
  };
}

const Page = ({ params }) => {
  return <Location />;
};

export default Page;
