import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { BackToWorkLink } from "@/components/case-study/BackToWorkLink";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudyImage } from "@/components/case-study/CaseStudyImage";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { CaseStudyLinksGroup } from "@/components/case-study/CaseStudyLinksGroup";

const liveUrl = "https://tatweer-employment.amerqussad2.workers.dev";

const proseClass = "max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground";

const description =
  "Case study of Tatweer Employment, a bilingual Arabic/English recruitment web application built with React, TypeScript, Supabase, PostgreSQL, and Cloudflare Workers.";

export const metadata: Metadata = {
  title: "Tatweer Employment Case Study",
  description,
  openGraph: {
    title: "Tatweer Employment Case Study | Amer Kussad",
    description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tatweer Employment Case Study | Amer Kussad",
    description,
  },
};

export default function TatweerEmploymentPage() {
  return (
    <>
      <div className="pt-10 sm:pt-14">
        <Container>
          <BackToWorkLink />
          <div className="mt-8">
            <CaseStudyHeader
              name="Tatweer Employment"
              type="Bilingual Recruitment Web Application"
              status="Deployed"
              description="Tatweer Employment is a bilingual Arabic/English recruitment web application for a UAE employment services company, featuring job listings, CV and application submissions, employer recruitment requests, and a secure Admin area."
              techStack={[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Supabase",
                "PostgreSQL",
                "Vite",
                "Cloudflare Workers",
              ]}
              liveUrl={liveUrl}
            />
          </div>
        </Container>

        <Container className="mt-10 sm:mt-14">
          <CaseStudyImage
            src="/images/tatweer/Tatweer_Jobs_Hero_Desktop.png"
            alt="Tatweer Employment jobs page hero showing the Current Job Opportunities heading and introduction, shown on desktop"
            width={1352}
            height={609}
          />
        </Container>
      </div>

      <CaseStudySection title="Overview">
        <div className={proseClass}>
          <p>
            Tatweer Employment is a bilingual recruitment web application and
            company website built for a recruitment and employment services
            company based in Ras Al Khaimah, UAE, publicly presented as
            Tatweer for Employment. It serves three groups: job seekers
            browsing and applying for roles, employers submitting recruitment
            requests, and Tatweer&apos;s own admin staff managing that
            activity.
          </p>
          <p>
            The system combines a public recruitment website, recruitment and
            contact forms, a real Supabase backend, and an authenticated
            Admin area, rather than a static marketing site.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Project Goals">
        <div className={proseClass}>
          <p>The application was built to help Tatweer:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Present its recruitment services to visitors</li>
            <li>Publish job opportunities</li>
            <li>Let users search and filter available jobs</li>
            <li>Collect CV submissions from candidates</li>
            <li>Collect job-specific applications</li>
            <li>Collect employer recruitment requests</li>
            <li>Collect general contact messages</li>
            <li>Give Tatweer staff a way to manage recruitment data internally</li>
            <li>Support both Arabic and English users</li>
          </ul>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Public Experience">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <CaseStudyImage
            src="/images/tatweer/Tatweer_Jobs_Listing_Desktop.png"
            alt="Tatweer Employment job listings page with keyword, location, employment type, and experience level filters, shown on desktop"
            width={1351}
            height={609}
          />
          <CaseStudyImage
            src="/images/tatweer/Tatweer_Job_Detail_Desktop.png"
            alt="Tatweer Employment job detail page for a Senior Planning Engineer role, showing vacancies, location, salary range, and job description, shown on desktop"
            width={1351}
            height={606}
          />
        </div>
        <div className={proseClass}>
          <ul className="list-disc space-y-2 pl-5">
            <li>Job listings with keyword search</li>
            <li>Filtering by location, employment type, and experience level</li>
            <li>Dynamic job detail pages loaded by job ID</li>
            <li>Candidate CV submissions</li>
            <li>Job-specific applications</li>
            <li>
              Employer recruitment requests, including an optional job
              description file upload
            </li>
            <li>A general contact form</li>
            <li>A privacy policy page</li>
          </ul>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Bilingual / RTL Experience">
        <CaseStudyImage
          src="/images/tatweer/Tatweer_Arabic_RTL_Desktop.png"
          alt="Tatweer Employment job opportunities page in Arabic with a right-to-left layout and an English language toggle, shown on desktop"
          width={1353}
          height={608}
        />
        <div className={proseClass}>
          <p>
            The public site is available in Arabic and English, with dynamic
            right-to-left (RTL) and left-to-right (LTR) layout depending on
            the selected language. Routes are language-prefixed, for example{" "}
            <code>/en/...</code> and <code>/ar/...</code>, so each language
            has its own addressable URLs.
          </p>
          <p>The Admin area is currently English-only.</p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Mobile Experience">
        <div className="max-w-xs">
          <CaseStudyImage
            src="/images/tatweer/Tatweer_Jobs_Mobile.png"
            alt="Tatweer Employment jobs page hero and introduction shown on a mobile screen"
            width={219}
            height={478}
          />
        </div>
        <div className={proseClass}>
          <p>
            Responsive behavior was implemented across the public site using
            Tailwind CSS, including responsive navigation and components, a
            mobile-adapted jobs experience, and usable mobile forms.
          </p>
          <p>
            Final mobile and cross-browser QA is still pending, so some
            device-specific refinement may still be needed.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Technical Implementation">
        <div className={proseClass}>
          <p>
            The front end is built with React, TypeScript, and Vite, styled
            with Tailwind CSS. Routing is handled with Wouter, forms are
            built with React Hook Form and validated with Zod, data fetching
            and caching use TanStack React Query, and lucide-react provides
            the interface icons.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Backend / Data Architecture">
        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">Database</h3>
          <p>
            Data is stored in Supabase PostgreSQL. Confirmed tables include{" "}
            <code>jobs</code>, <code>candidates</code>,{" "}
            <code>job_applications</code>, <code>employer_requests</code>,{" "}
            <code>contact_messages</code>, <code>admin_profiles</code>, and{" "}
            <code>page_views</code>.
          </p>
        </div>

        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">Storage</h3>
          <p>
            Candidate CVs and employer job files are stored in two private
            Supabase Storage buckets, <code>candidate-cvs</code> and{" "}
            <code>employer-job-files</code>. Admin access to these files uses
            temporary signed URLs rather than public links.
          </p>
        </div>

        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">
            Authentication &amp; Access
          </h3>
          <p>
            Authentication is handled by Supabase Auth. Role-based Admin
            access is controlled through the <code>admin_profiles</code>{" "}
            table, an active admin role, and an{" "}
            <code>is_super_admin()</code> helper.
          </p>
        </div>

        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">
            How Public Forms Submit Data
          </h3>
          <p>
            Public forms submit directly from the browser to Supabase under
            Row Level Security policies and grants, rather than through a
            custom server-side API or submission gateway.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Admin Area">
        <CaseStudyImage
          src="/images/tatweer/Tatweer_Admin_Dashboard.png"
          alt="Tatweer Employment admin dashboard showing job, candidate, and application totals alongside visitor analytics"
          width={1352}
          height={606}
        />
        <div className={proseClass}>
          <p>
            The Admin area is authenticated and English-only. It includes
            Login, a Dashboard, and dedicated views for Jobs, Candidates, Job
            Applications, Employer Requests, and Contact Messages.
          </p>
          <p>
            From the Admin area, an authenticated admin can create and edit
            jobs, manage job status, view candidate submissions, view
            applications, view employer requests, view contact messages, and
            access private files through signed URLs.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Analytics">
        <div className={proseClass}>
          <p>
            The Admin Dashboard includes first-party visitor analytics:
            unique visitors today, yesterday, over the last 7 days, and over
            the last 30 days, along with a 30-day visitor trend. This is
            first-party tracking built into the application itself, not a
            third-party analytics provider such as Google Analytics.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Challenges & Solutions">
        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">
            Supabase Role &amp; Session Behavior
          </h3>
          <p>
            <strong className="text-foreground">Problem:</strong> Public
            forms behaved differently when the browser already had an
            authenticated Admin session.
          </p>
          <p>
            <strong className="text-foreground">Solution:</strong> The
            required policies and grants were expanded appropriately for
            both anonymous and authenticated contexts, while keeping public
            UPDATE and DELETE access restricted.
          </p>
        </div>

        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">
            CV &amp; Storage Permissions
          </h3>
          <p>
            <strong className="text-foreground">Problem:</strong> Candidate
            CV uploads and the related candidate and job-application inserts
            initially failed because of Storage, RLS, and grant
            configuration.
          </p>
          <p>
            <strong className="text-foreground">Solution:</strong> Supabase
            permissions, Storage policies, and database access rules were
            corrected and re-tested against the real backend.
          </p>
        </div>

        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">
            Cloudflare / pnpm Build
          </h3>
          <p>
            <strong className="text-foreground">Problem:</strong>{" "}
            Cloudflare&apos;s build encountered an{" "}
            <code className="break-all">ERR_PNPM_LOCKFILE_CONFIG_MISMATCH</code>{" "}
            error.
          </p>
          <p>
            <strong className="text-foreground">Solution:</strong> The
            package manager was pinned to pnpm@10.33.0.
          </p>
        </div>

        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">
            Static Deployment &amp; SPA Routing
          </h3>
          <p>
            <strong className="text-foreground">Problem:</strong> Cloudflare
            needed the correct static output, and direct client-side routes
            had to keep working on refresh.
          </p>
          <p>
            <strong className="text-foreground">Solution:</strong>{" "}
            <code>wrangler.jsonc</code> was configured for the Vite output,
            with SPA fallback enabled.
          </p>
        </div>

        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">
            Anti-Spam &amp; Security Limitation
          </h3>
          <p>
            <strong className="text-foreground">Problem:</strong> Public
            forms write directly to Supabase, so client-side honeypot and
            timing checks alone can&apos;t fully prevent direct API abuse.
          </p>
          <p>
            <strong className="text-foreground">Solution:</strong> A first
            phase of protection was implemented using a honeypot field and a
            minimum four-second form completion time. Server-side protection
            remains future hardening work.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="QA / Deployment / SEO">
        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">QA</h3>
          <p>
            Major flows, including public forms, authentication behavior,
            storage, and deployed routes, were manually tested against the
            real Supabase backend rather than a full automated browser test
            suite.
          </p>
        </div>

        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">Deployment</h3>
          <p>
            The application is deployed on Cloudflare Workers (Static
            Assets) at{" "}
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              tatweer-employment.amerqussad2.workers.dev
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            . It is built with <code>pnpm run build</code>, with Vite
            outputting to <code>dist/public</code>, and Cloudflare
            configured through <code>wrangler.jsonc</code> with SPA fallback
            enabled.
          </p>
        </div>

        <div className={proseClass}>
          <h3 className="font-serif text-lg text-foreground">SEO</h3>
          <p>
            Base SEO metadata and localized Home page SEO are in place.
            Final canonical URL, sitemap, and domain-dependent SEO work are
            not yet complete.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Result">
        <div className={proseClass}>
          <p>
            Tatweer Employment is a deployed, publicly reachable recruitment
            application with a working public job experience, a real
            Supabase database, authentication, private file storage, an
            Admin area, working forms, and role-based access. It is not
            presented as a fully finished, production-hardened system, and
            the section below outlines what remains.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Current Limitations">
        <div className={proseClass}>
          <p>Final production hardening still remains in a few areas:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Security: server-side anti-spam protection, rate limiting, and
              Turnstile or equivalent verification
            </li>
            <li>
              Storage: size and file-type restrictions on employer
              job-description uploads
            </li>
            <li>
              Infrastructure: a final production domain and a formal
              Supabase migration workflow
            </li>
            <li>SEO: final canonical URL, sitemap, and related work</li>
            <li>
              Quality: test-data cleanup, final mobile/cross-browser QA, an
              accessibility audit, a performance/Core Web Vitals audit, and
              automated browser/E2E testing
            </li>
          </ul>
        </div>
      </CaseStudySection>

      <CaseStudySection title="What I Learned">
        <div className={proseClass}>
          <p>
            This project was a practical introduction to shipping a real
            application end to end: React and TypeScript application
            development, building bilingual Arabic/English interfaces with
            RTL/LTR support, wiring forms to a real database, and working
            directly with Supabase Database, Auth, and Storage, PostgreSQL
            and SQL, Row Level Security, and database grants.
          </p>
          <p>
            It also meant debugging real permission issues rather than
            theoretical ones, handling private files and signed URLs safely,
            managing environment variables, implementing SPA routing, and
            working through actual Cloudflare deployment problems. Alongside
            the technical work, first-party analytics and AI-assisted
            development with human verification were both part of how this
            was built.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Project Links">
        <CaseStudyLinksGroup projectName="Tatweer Employment" liveUrl={liveUrl} />
      </CaseStudySection>

      <div className="border-t border-border py-12 sm:py-16">
        <Container>
          <BackToWorkLink />
        </Container>
      </div>
    </>
  );
}
