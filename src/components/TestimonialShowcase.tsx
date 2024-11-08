import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const TestimonialShowcase = () => {
    return (
        <div className="text-content max-w-7xl">
            <Carousel>
                <CarouselContent>
                    <CarouselItem>1...</CarouselItem>
                    <CarouselItem>2...</CarouselItem>
                    <CarouselItem>3...</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}

export default TestimonialShowcase