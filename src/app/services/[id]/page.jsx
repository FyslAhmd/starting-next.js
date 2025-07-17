export default function ServiceDetailPage({ params }) {
  const data = [
    {
      _id: "1",
      service_name: "Web Development",
      service_description:
        "Custom websites designed to meet your business needs, from basic landing pages to full-featured e-commerce sites.",
      service_price: 1500,
    },
    {
      _id: "2",
      service_name: "Mobile App Development",
      service_description:
        "Building responsive and high-performance mobile applications for both Android and iOS platforms.",
      service_price: 2000,
    },
    {
      _id: "3",
      service_name: "SEO Optimization",
      service_description:
        "Comprehensive search engine optimization services to improve website visibility and ranking on search engines.",
      service_price: 800,
    },
    {
      _id: "4",
      service_name: "Digital Marketing",
      service_description:
        "End-to-end digital marketing solutions, including social media management, content creation, and online advertising campaigns.",
      service_price: 1200,
    },
    {
      _id: "5",
      service_name: "Branding and Design",
      service_description:
        "Professional branding services, including logo design, visual identity, and marketing materials.",
      service_price: 1000,
    },
  ];
  const id = params.id;
  const singleData = data.find((d) => d._id == id);
  console.log(singleData);
  return (
    <div>
      <h1>ID: {singleData._id}</h1>
      <p>{singleData.service_description}</p>
      <p>{singleData.service_price}</p>
    </div>
  );
}
