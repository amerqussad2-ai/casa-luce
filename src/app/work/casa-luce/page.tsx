import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { BackToWorkLink } from "@/components/case-study/BackToWorkLink";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudyImage } from "@/components/case-study/CaseStudyImage";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { CaseStudyLinksGroup } from "@/components/case-study/CaseStudyLinksGroup";

const liveUrl = "https://casa-luce-nine.vercel.app";
const githubUrl = "https://github.com/amerqussad2-ai/casa-luce";

const description =
  "Case study of Casa Luce, a responsive multi-page restaurant website built with Next.js, React, TypeScript, Tailwind CSS, and deployed on Vercel.";

export const metadata: Metadata = {
  title: "Casa Luce Case Study",
  description,
  openGraph: {
    title: "Casa Luce Case Study | Amer Kussad",
    description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Luce Case Study | Amer Kussad",
    description,
  },
};

const proseClass = "max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground";
const listClass = "space-y-2 text-base text-muted-foreground";

const keyFeaturesA = [
  "Multi-page responsive website",
  "Fixed site-wide navigation",
  "Responsive mobile navigation",
  "Keyboard-accessible mobile menu",
  "Menu page",
  "Our Story page",
  "Responsive Gallery",
  "Reservation forms",
  "Contact form",
];

const keyFeaturesB = [
  "Native HTML validation",
  "Past-date blocking",
  "Accessible form success states",
  "Skip to Main Content",
  "Visible keyboard focus states",
  "Responsive optimized images",
  "Canonical URLs",
  "Open Graph / Twitter metadata",
  "sitemap.xml and robots.txt",
  "Vercel deployment",
];

export default function CasaLucePage() {
  return (
    <>
      <div className="pt-10 sm:pt-14">
        <Container>
          <BackToWorkLink />
          <div className="mt-8">
            <CaseStudyHeader
              name="Casa Luce"
              type="Multi-page Front-end Restaurant Website"
              status="Completed + Deployed v1"
              description="Casa Luce is a responsive multi-page website for a fictional modern Italian restaurant in Dubai Marina, built with Next.js, React, TypeScript and Tailwind CSS. The project combines premium editorial UI, accessibility-conscious interactions, responsive imagery, forms, SEO and a complete deployed user experience."
              techStack={["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"]}
              liveUrl={liveUrl}
              githubUrl={githubUrl}
            />
          </div>
        </Container>

        <Container className="mt-10 sm:mt-14">
          <CaseStudyImage
            src="/images/casa-luce/Casa_Luce_Gallery_Desktop.png"
            alt="Casa Luce restaurant website navigation and photo gallery of the dining room, dishes, and the Dubai Marina skyline, shown on desktop"
            width={1440}
            height={900}
            priority
          />
        </Container>
      </div>

      <CaseStudySection title="Overview">
        <div className={proseClass}>
          <p>
            Casa Luce is a multi-page front-end portfolio project for a
            fictional modern Italian restaurant in Dubai Marina, designed as
            a complete restaurant experience rather than a single landing
            page.
          </p>
          <p>
            Confirmed pages: Home, Menu, Our Story, Gallery, Reservations,
            and Contact.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Project Goal">
        <div className={proseClass}>
          <p>
            The project was designed to let visitors discover the
            restaurant and its identity, explore the menu and prices, see
            the atmosphere through imagery, learn the restaurant&apos;s
            story, submit a front-end reservation request, and find
            location and contact details.
          </p>
          <p>
            From a portfolio perspective, it demonstrates taking a project
            from concept through implementation, responsive development,
            accessibility, QA, SEO, Git workflow, and deployment.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Key Features">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <ul className={listClass}>
            {keyFeaturesA.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className={listClass}>
            {keyFeaturesB.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Visual & UX Direction">
        <div className={proseClass}>
          <p>
            The direction is premium, editorial, warm, and cinematic, with
            a fine-dining, minimal, image-led feel.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-serif text-lg text-foreground">Palette</h3>
            <ul className={`mt-3 ${listClass}`}>
              <li>Cream / Off-white</li>
              <li>Olive</li>
              <li>Terracotta</li>
              <li>Dark charcoal</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg text-foreground">Typography</h3>
            <ul className={`mt-3 ${listClass}`}>
              <li>Playfair Display for major editorial headings</li>
              <li>Sans-serif for body, navigation, and forms</li>
            </ul>
          </div>
        </div>

        <div className={proseClass}>
          <p>
            Photography leans on warm evening lighting, candlelight,
            Italian dishes, restaurant interiors, marble tables, and the
            Dubai Marina waterfront atmosphere.
          </p>
          <p>
            UX highlights include fixed navigation, responsive mobile
            navigation, touch-friendly CTAs, keyboard behavior, visible
            focus, and responsive images. Interactions were kept to simple
            CSS transitions, smooth scrolling, and mobile-menu behavior —
            there is no advanced animation system such as GSAP.
          </p>
        </div>
      </CaseStudySection>

      <div className="border-t border-border py-12 sm:py-16">
        <Container>
          <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
            Full Homepage Experience
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            The strongest visual evidence of the complete site: the full
            deployed Casa Luce homepage, from hero to footer.
          </p>
          <div className="mx-auto mt-8 max-w-lg">
            <CaseStudyImage
              src="/images/casa-luce/Casa_Luce_Home_Desktop.png"
              alt="Full Casa Luce homepage scroll showing the hero, Our Story, Signature Dishes, gallery, reservation form, and contact sections, shown on desktop"
              width={426}
              height={2047}
            />
          </div>
        </Container>
      </div>

      <CaseStudySection title="Technical Implementation">
        <div className={proseClass}>
          <p>
            The site is built with Next.js (App Router), React, and
            TypeScript, styled with Tailwind CSS. It&apos;s composed of reusable
            React components, uses the Next.js Image component and Metadata
            API, next/og / ImageResponse for Open Graph images, and
            next/font/google for typography. The project is version
            controlled with Git/GitHub and deployed on Vercel.
          </p>
          <p>
            A shared, reusable ReservationForm component is used across the
            reservation experience. Responsive imagery relies on Next.js
            Image with responsive sizing, per-image crop tuning, and
            object-position adjustments where needed.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Responsive Experience">
        <div className="max-w-xs">
          <CaseStudyImage
            src="/images/casa-luce/Casa_Luce_Home_Mobile.png"
            alt="Casa Luce homepage hero on a mobile screen, showing the restaurant name, tagline, and Reserve a Table and Explore the Menu buttons"
            width={390}
            height={1400}
          />
        </div>
        <div className={proseClass}>
          <p>
            The site was implemented and checked across desktop, laptop,
            tablet, and mobile, with responsive work covering navigation,
            grids, image cropping, forms, the footer, CTAs, and overflow.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Challenges & Solutions">
        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">Hero Image</h3>
          <p>
            <strong className="text-foreground">Problem:</strong> The
            original hero image was a mockup containing baked-in text and
            buttons, which caused duplicated interface content.
          </p>
          <p>
            <strong className="text-foreground">Solution:</strong> A clean
            background image was prepared while keeping the actual text and
            CTAs as real HTML.
          </p>
        </div>

        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">Git History</h3>
          <p>
            <strong className="text-foreground">Problem:</strong> The
            repository initially did not have a usable main branch, and
            unrelated Git histories created Pull Request issues.
          </p>
          <p>
            <strong className="text-foreground">Solution:</strong> A proper
            main branch was established and feature work was rebased
            appropriately.
          </p>
        </div>

        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">Accessibility</h3>
          <p>
            <strong className="text-foreground">Problem:</strong> Early
            audits identified color contrast, focus, tap-target,
            mobile-menu keyboard, and skip-link issues.
          </p>
          <p>
            <strong className="text-foreground">Solution:</strong>{" "}
            Contrast-safe colors, visible focus states, Escape behavior,
            focus return, improved tap targets, and a working Skip to Main
            Content flow were implemented and re-tested.
          </p>
        </div>

        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">
            Routing / Prefetch
          </h3>
          <p>
            <strong className="text-foreground">Problem:</strong>{" "}
            Navigation to unfinished routes produced 404s and Next.js
            prefetch console errors.
          </p>
          <p>
            <strong className="text-foreground">Solution:</strong>{" "}
            Navigation was kept aligned with valid destinations until final
            routes were implemented.
          </p>
        </div>

        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">
            Open Graph Metadata
          </h3>
          <p>
            <strong className="text-foreground">Problem:</strong> Per-page
            Open Graph metadata caused the inherited og:image to disappear
            because of Next.js metadata merging behavior.
          </p>
          <p>
            <strong className="text-foreground">Solution:</strong> Open
            Graph images were explicitly defined in page metadata.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="QA / Accessibility / SEO">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg text-foreground">QA</h3>
            <ul className={`mt-3 ${listClass}`}>
              <li>Playwright</li>
              <li>Chromium / headless browser testing</li>
              <li>Desktop and mobile screenshots</li>
              <li>Lint</li>
              <li>Production build verification</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg text-foreground">Accessibility</h3>
            <ul className={`mt-3 ${listClass}`}>
              <li>axe-core review</li>
              <li>Color-contrast auditing</li>
              <li>Keyboard navigation</li>
              <li>Focus states</li>
              <li>Escape menu behavior</li>
              <li>Focus return</li>
              <li>Skip to Main Content</li>
              <li>Accessible status messages</li>
              <li>Touch-target improvements</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg text-foreground">SEO</h3>
            <ul className={`mt-3 ${listClass}`}>
              <li>Unique page metadata</li>
              <li>Canonical URLs</li>
              <li>Open Graph metadata</li>
              <li>Twitter Card metadata</li>
              <li>Custom 1200×630 Open Graph image</li>
              <li>sitemap.xml</li>
              <li>robots.txt</li>
            </ul>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Result & Limitations">
        <div className={proseClass}>
          <p>
            <strong className="text-foreground">Result:</strong> Casa Luce
            became a complete, multi-page, deployed front-end portfolio
            project — status: Completed + Deployed v1.
          </p>
          <p>
            <strong className="text-foreground">Limitation:</strong> The
            Reservation and Contact forms are front-end demonstrations
            only. They validate input and show success states, but they do
            not send or store data through a backend.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="What I Learned">
        <div className={proseClass}>
          <p>
            This project reinforced multi-page Next.js App Router
            development, React component composition, and TypeScript,
            alongside responsive UI and image handling, form UI and
            validation, and keyboard accessibility with proper focus
            management. It also involved real accessibility auditing, SEO
            metadata implementation, a Git feature-branch and Pull Request
            workflow, Vercel deployment, production QA, debugging real
            implementation issues, and AI-assisted development with human
            review.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Project Links">
        <CaseStudyLinksGroup
          projectName="Casa Luce"
          liveUrl={liveUrl}
          githubUrl={githubUrl}
        />
      </CaseStudySection>

      <div className="border-t border-border py-12 sm:py-16">
        <Container>
          <BackToWorkLink />
        </Container>
      </div>
    </>
  );
}
