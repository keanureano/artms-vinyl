import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { H1, H3, H4 } from "@/components/ui/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <SectionOne />

      <SectionTwo />
    </Container>
  );
}

function SectionOne() {
  const carouselImages = [
    { src: "/vinyl1.avif", alt: "Vinyl 1" },
    { src: "/vinyl2.avif", alt: "Vinyl 2" },
    { src: "/vinyl3.avif", alt: "Vinyl 3" },
  ];
  return (
    <>
      <div className="flex">
        <div className="lg:w-1/2 py-12">
          <H1>Welcome to</H1>
          <H1 className="mb-12">ARTMS Vinyl.</H1>
          <H3 className="mb-16">
            Founded in 2024, ARTMS Vinyl is here to bring a fresh spin to your
            music experience. We focus on curating an exceptional selection of
            vinyl records that add a touch of nostalgia and elegance to any
            collection. Discover our catalog and see how ARTMS Vinyl can elevate
            your listening experience with our unique and timeless music.
          </H3>
          <Button size="lg">
            <H4>See More</H4> <MoveRight />
          </Button>
        </div>
        <div className="w-0 lg:w-1/2 lg:p-12 relative">
          <Carousel>
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <AspectRatio ratio={1 / 1}>
                    <Image
                      src={image.src}
                      layout="fill"
                      objectFit="cover"
                      alt={image.alt}
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <Separator />
    </>
  );
}

function SectionTwo() {
  return <>TODO: SECTION TWO</>;
}
