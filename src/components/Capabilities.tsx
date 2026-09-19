import { Container } from "@/components/Container";

const capabilityGroups = [
  {
    title: "Front-End Development",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Web Development",
      "Component-Based UI Development",
    ],
  },
  {
    title: "UI Quality",
    items: [
      "Accessibility-Conscious Development",
      "Keyboard Accessibility",
      "Responsive Image Handling",
      "Forms & Validation",
      "SEO Implementation",
      "Responsive UI / UX Implementation",
    ],
  },
  {
    title: "Application Integration",
    items: [
      "Supabase",
      "PostgreSQL / SQL",
      "Authentication Integration",
      "Private Storage",
      "Row Level Security (RLS)",
      "Role-Based Access",
    ],
  },
  {
    title: "Delivery & QA",
    items: [
      "Git / GitHub",
      "Vercel",
      "Cloudflare Workers",
      "Browser / Responsive QA",
      "Debugging",
      "Deployment Troubleshooting",
    ],
  },
];

export function Capabilities() {
  return (
    <section id="skills" className="border-t border-border py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">Capabilities</h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Demonstrated through the two deployed projects above, Casa Luce and
          Tatweer Employment.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {capabilityGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-serif text-lg text-foreground">{group.title}</h3>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
