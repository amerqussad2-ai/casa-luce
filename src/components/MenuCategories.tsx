type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuCategory = {
  name: string;
  items: MenuItem[];
};

const MENU_CATEGORIES: MenuCategory[] = [
  {
    name: "Antipasti",
    items: [
      {
        name: "Burrata & Heritage Tomatoes",
        description: "Creamy burrata, seasonal tomatoes, basil oil.",
        price: "AED 78",
      },
      {
        name: "Beef Carpaccio",
        description: "Truffle dressing, parmesan, rocket, capers.",
        price: "AED 82",
      },
      {
        name: "Calamari Fritti",
        description: "Crisp calamari, lemon, parsley, garlic aioli.",
        price: "AED 72",
      },
    ],
  },
  {
    name: "Pasta",
    items: [
      {
        name: "Truffle Tagliolini",
        description: "Handmade pasta, black truffle, aged parmesan.",
        price: "AED 128",
      },
      {
        name: "Paccheri al Pomodoro",
        description: "San Marzano tomato, basil, parmesan.",
        price: "AED 88",
      },
      {
        name: "Lobster Linguine",
        description: "Lobster, cherry tomatoes, chilli, shellfish bisque.",
        price: "AED 148",
      },
    ],
  },
  {
    name: "Secondi",
    items: [
      {
        name: "Branzino al Limone",
        description: "Mediterranean sea bass, lemon, herbs, olive oil.",
        price: "AED 138",
      },
      {
        name: "Pollo alla Griglia",
        description: "Chargrilled chicken, rosemary, roasted garlic, jus.",
        price: "AED 112",
      },
      {
        name: "Filetto di Manzo",
        description: "Beef tenderloin, truffle jus, potato purée.",
        price: "AED 168",
      },
    ],
  },
  {
    name: "Contorni",
    items: [
      {
        name: "Roasted Potatoes",
        description: "Rosemary, garlic, sea salt.",
        price: "AED 38",
      },
      {
        name: "Grilled Broccolini",
        description: "Lemon, chilli, olive oil.",
        price: "AED 42",
      },
      {
        name: "Rocket & Parmesan",
        description: "Rocket, aged parmesan, balsamic.",
        price: "AED 38",
      },
    ],
  },
  {
    name: "Dolci",
    items: [
      {
        name: "Tiramisu Casa Luce",
        description: "Espresso, mascarpone, cocoa.",
        price: "AED 58",
      },
      {
        name: "Pistachio Panna Cotta",
        description: "Pistachio, vanilla, seasonal berries.",
        price: "AED 62",
      },
      {
        name: "Chocolate Fondant",
        description: "Dark chocolate, hazelnut, vanilla gelato.",
        price: "AED 64",
      },
    ],
  },
];

export default function MenuCategories() {
  return (
    <section className="bg-cream px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-20">
        {MENU_CATEGORIES.map((category) => (
          <div key={category.name}>
            <div className="mb-10 flex items-center gap-4">
              <h2 className="font-serif text-2xl font-semibold text-charcoal sm:text-3xl">
                {category.name}
              </h2>
              <div className="h-px flex-1 bg-olive/30" />
            </div>

            <div className="columns-1 gap-x-12 lg:columns-2">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="mb-8 break-inside-avoid border-b border-dotted border-charcoal/20 pb-8 last:mb-0 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-serif text-lg font-semibold text-charcoal sm:text-xl">
                      {item.name}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="h-px flex-1 border-b border-dotted border-charcoal/25"
                    />
                    <span className="shrink-0 text-sm font-semibold text-terracotta-deep">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70 sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
