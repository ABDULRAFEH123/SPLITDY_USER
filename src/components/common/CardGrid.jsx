import Image from "next/image"
export default function CardGrid({ icon, title, description }) {
  return (
    <div className="  flex flex-col items-left text-left h-auto">
      <div className=" mb-2">

        <div className="">
          <Image src={icon} alt={title} width={70} height={70} />

        </div>
      </div>
      <h2 className="text-2xl font-bold mt-8">{title}</h2>
      <p className="text-xs text-gray-600 mt-2">{description}</p>
    </div>
  );
}