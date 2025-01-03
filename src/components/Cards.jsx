import Card from "./Card";

const Cards = () => {
  const cards = [
    {
      basis: "basis-1/3",
      cta: false,
      desc: true,
      title: "Who we are",
      subtitle: "Up Next: Culture",
      hover: false,
    },
    {
      basis: "basis-full lg:basis-2/3",
      cta: true,
      desc: false,
      title: "Let's get to it, together",
      subtitle: "Get In Touch",
      hover: true,
    },
  ];
  return (
    <div className="w-full py-28 lg:py-32 px-3">
      <div className="max-w-screen-xl mx-auto flex gap-2">
        {cards.map((card, index) =>
          window.innerWidth < 1024 && index === 0 ? null : (
            <Card key={index} {...card} />
          )
        )}
      </div>
    </div>
  );
};

export default Cards;
