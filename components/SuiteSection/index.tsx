import { SectionTitle } from "../SectionTitle";
import { SuiteCard } from "./SuiteCard";

const Suites = [
  {
    suitName: "Suite Premium",
    suitType: "Luxo",
  },
  {
    suitName: "Suite Romântica",
    suitType: "Standard",
  },
  {
    suitName: "Suite VIP",
    suitType: "Executiva",
  },
];

export const SuiteSection = () => {
  return (
    <div className="flex flex-col gap-8 w-full text-neutral-900">
      <SectionTitle
        id="suites"
        title="Suítes"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      {/* <Carousel className="w-full max-w-xs flex items-center justify-center">
        <CarouselContent>
          {Suites.map((suite, index) => (
            <CarouselItem key={index}>
              <SuiteCard
                suitName={suite.suitName}
                suitType={suite.suitType}
                description={suite.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}

      <div className="w-full flex justify-center gap-4">
        <SuiteCard suitName="Suíte 08" suitType="Premium" isTrending />
        <SuiteCard suitName="Suíte 08" suitType="Premium" />
        <SuiteCard suitName="Suíte 08" suitType="Premium" />
      </div>
    </div>
  );
};
