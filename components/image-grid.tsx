import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function ImageGrid() {
  const images = [
    { src: "/images/team/Son.jpg", alt: "Team member portrait" },
    { src: "/images/logo.png", alt: "Company logo" },
    { src: "/images/team/Bharath.jpg", alt: "Team member portrait" },
    { src: "/images/team/Tung&DA.jpg", alt: "Team members portrait" },
    { src: "/images/team/Tri.jpg", alt: "Team member portrait" },
    { src: "/images/team/Sebastian.jpg", alt: "Team member portrait" },
    { src: "/images/team/Tuan.jpg", alt: "Team member portrait" },
    { src: "/images/team/Tung&Son.jpg", alt: "Portrait with child" },
    { src: "/images/team/Dang.jpg", alt: "Team member portrait" },
  ];

  return (
    <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {images.map((image, index) => (
        <Card
          key={index}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-lg transform transition-all duration-300 overflow-hidden hover:scale-105"
        >
          <div className="relative aspect-square">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>
        </Card>
      ))}
    </div>
  );
}
