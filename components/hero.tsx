import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="absolute top-0 z-[-10] w-full h-screen">
      <Image src="/hero.jpg" alt="HeroSection" fill={true} objectFit="cover" />
    </div>
  );
}
