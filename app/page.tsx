import { Brain, Briefcase, Cog, MapPin, PenLine, ShieldCheck } from 'lucide-react';
import {
  BentoGrid,
  ContactCard,
  stagger,
  HeroCard,
  InfoCard,
  LocalTime,
  ProjectCard,
  Section,
  SkillsCard,
} from '@/components/bento';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  about,
  contact,
  current,
  education,
  featuredProject,
  footer,
  hero,
  projects,
  site,
  skills,
  thoughtLeadership,
} from '@/lib/content';

const pillarIcons = {
  brain: <Brain className="w-8 h-8" />,
  cog: <Cog className="w-8 h-8" />,
  shield: <ShieldCheck className="w-8 h-8" />,
};

export default function HomePage() {
  return (
    <div id="top" className="max-w-7xl mx-auto">
      <Header name={site.name} nav={site.nav} />

      <main>
        {/* ---------------------------------------------------------------
            Hero bento (the template's 4x3 grid)
            --------------------------------------------------------------- */}
        <BentoGrid>
          {/* 1. Main hero / intro (2 cols, 2 rows) */}
          <HeroCard
            badge={hero.badge}
            headline={hero.headline}
            emphasis={hero.emphasis}
            intro={hero.intro}
            cta={hero.cta}
            className="md:col-span-2 md:row-span-2"
          />

          {/* 2. Location + local time */}
          <InfoCard
            delay={200}
            tone="sand"
            icon={<MapPin className="w-8 h-8" />}
            title="Based in"
            body={site.location.label}
            footer={{ label: 'Local Time', value: <LocalTime timeZone={site.location.timeZone} /> }}
          />

          {/* 3. Featured project */}
          <ProjectCard
            variant="compact"
            project={featuredProject}
            eyebrow="Featured Project"
            delay={300}
          />

          {/* 4. Primary skills (2 cols) */}
          <SkillsCard
            delay={400}
            title={skills.primary.title}
            items={skills.primary.items}
            className="md:col-span-2"
          />

          {/* 5. Contact call to action */}
          <ContactCard
            title="Get in touch."
            subtitle="Send me an email"
            href={`mailto:${site.email}`}
            className="md:col-span-2 lg:col-span-1"
          />

          {/* 6. Current role and studies (fills the last cell) */}
          <InfoCard
            delay={500}
            tone="white"
            align="start"
            icon={<Briefcase className="w-8 h-8" />}
            title={current.title}
            body={current.role}
          >
            <p className="mt-2 text-sm text-forest/60 font-light leading-relaxed">{current.study}</p>
          </InfoCard>
        </BentoGrid>

        {/* ---------------------------------------------------------------
            About
            --------------------------------------------------------------- */}
        <Section id="about" title={about.heading}>
          <InfoCard
            delay={100}
            tone="stone"
            align="start"
            className="md:col-span-2 md:row-span-2"
          >
            <div className="space-y-5 text-lg text-forest/80 font-light leading-relaxed">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </InfoCard>

          {about.pillars.map((pillar, index) => (
            <InfoCard
              key={pillar.text}
              delay={stagger(index + 1)}
              tone={index === 2 ? 'sage' : 'white'}
              icon={pillarIcons[pillar.icon]}
              body={pillar.text}
              className={index === 2 ? 'md:col-span-2' : undefined}
            />
          ))}
        </Section>

        {/* ---------------------------------------------------------------
            Projects
            --------------------------------------------------------------- */}
        <Section id="projects" title="Projects" intro="Featured Projects">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={stagger(index)}
              className="md:col-span-2"
            />
          ))}
        </Section>

        {/* ---------------------------------------------------------------
            Education
            --------------------------------------------------------------- */}
        <Section id="education" title="Education">
          {education.map((entry, index) => (
            <InfoCard
              key={entry.school}
              delay={stagger(index)}
              tone={index === 0 ? 'sand' : 'white'}
              align="start"
              icon={<img src={entry.image.src} alt={entry.image.alt} className="w-12 h-12" />}
              title={entry.school}
              body={entry.degree}
              className={index === 0 ? 'md:col-span-2' : undefined}
            >
              {entry.details.length > 0 && (
                <div className="mt-3 text-sm text-forest/60 font-light">
                  {entry.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
              )}
              {entry.note && (
                <p className="mt-4 text-xs italic text-forest/50 leading-relaxed">{entry.note}</p>
              )}
            </InfoCard>
          ))}
        </Section>

        {/* ---------------------------------------------------------------
            Skills & Expertise (+ Thought Leadership tile)
            --------------------------------------------------------------- */}
        <Section id="skills" title={skills.heading}>
          <SkillsCard
            delay={100}
            tone="forest"
            title={skills.primary.title}
            items={skills.primary.items}
            icon={
              <img
                src={skills.primary.image.src}
                alt={skills.primary.image.alt}
                className="w-10 h-10 invert"
              />
            }
            className="md:col-span-2 md:row-span-2"
          />

          {skills.groups.map((group, index) => (
            <SkillsCard
              key={group.title}
              delay={stagger(index + 1)}
              title={group.title}
              items={group.items}
              icon={<img src={group.image.src} alt={group.image.alt} className="w-10 h-10" />}
              className="!p-8"
            />
          ))}

          <InfoCard
            id="thought-leadership"
            delay={500}
            tone="sand"
            align="start"
            icon={<PenLine className="w-8 h-8" />}
            eyebrow={thoughtLeadership.heading}
            title={thoughtLeadership.status}
            body={thoughtLeadership.intro}
          >
            <p className="mt-4 text-sm text-forest/60 font-light">
              {thoughtLeadership.followText}{' '}
              <a
                href={thoughtLeadership.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-forest hover:text-sage transition-colors duration-300 underline underline-offset-4"
              >
                {thoughtLeadership.link.label}
              </a>
              .
            </p>
          </InfoCard>
        </Section>

        {/* ---------------------------------------------------------------
            Contact
            --------------------------------------------------------------- */}
        <Section id="contact" title={contact.heading} intro={contact.intro}>
          {contact.channels.map((channel, index) => (
            <InfoCard
              key={channel.label}
              delay={stagger(index)}
              tone={index === 0 ? 'sage' : 'white'}
              href={channel.href}
              external={channel.external}
              icon={<img src={channel.image.src} alt="" className="w-12 h-12" />}
              title={channel.label}
              body={<span className="break-all">{channel.value}</span>}
              className={index === 0 ? 'md:col-span-2' : undefined}
            />
          ))}
        </Section>
      </main>

      <Footer copyright={footer.copyright} line={footer.line} links={footer.links} />
    </div>
  );
}
