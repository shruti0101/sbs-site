import Location from "./Location";

export async function generateMetadata({ params }) {
  const city =
    params.location.split("-")[params.location.split("-").length - 1];

  return {
    title: city && `Paper Cup making machine manufacturer in ${city}`,
    description: `Find the best paper cup making machine manufacturer in ${city}. SBS Machinery offers high-speed, fully automatic paper cup machines with pan-India delivery.`,
  };
}

const Page = ({ params }) => {
  return <Location />;
};

export default Page;
