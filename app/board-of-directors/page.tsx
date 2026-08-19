import Image from 'next/image'
import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Board of Directors — JP4SM',
  description:
    'Meet the Board of Directors of Jesus\' Passion for Souls Movement (JP4SM).',
}

const directors = [
  // {
  //   name: 'Name Here',
  //   role: 'Position Here',
  //   image: '/placeholder.svg',
  //   bio: 'Bio details to be added soon.',
  //   profile: {
  //     positions: [
  //       'Position 1',
  //       'Position 2',
  //     ],
  //     education: [
  //       'Education 1',
  //       'Education 2',
  //     ],
  //     overview: [
  //       'Overview paragraph 1.',
  //       'Overview paragraph 2.',
  //     ],
  //   },
  // },
]

export default function BoardOfDirectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Board of Directors"
        title="Stewarding the vision with wisdom"
        subtitle="A dedicated board committed to guiding the mission, ensuring integrity, and advancing the work of the Gospel through Jesus' Passion for Souls Movement."
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Reveal>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                Our Governance
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                Leaders called to serve the mission
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                The Board of Directors brings spiritual oversight, strategic wisdom, and faithful stewardship to every area of JP4SM&rsquo;s work.
              </p>
            </Reveal>
          </div>

          {directors.length > 0 ? (
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {directors.map((member, i) => (
                <Reveal key={member.name} delay={(i % 3) as 0 | 1 | 2} as="article">
                  <div className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={member.image || '/placeholder.svg'}
                        alt={`Portrait of ${member.name}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold">
                        {member.role}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {member.bio}
                      </p>
                      <details className="mt-5 text-left">
                        <summary className="cursor-pointer list-none rounded-full border border-primary/15 bg-secondary px-4 py-2 text-center text-sm font-semibold text-primary transition-colors hover:bg-secondary/80">
                          Read Profile
                        </summary>
                        <div className="mt-4 rounded-2xl border border-border bg-background p-4 text-sm leading-relaxed text-muted-foreground">
                          {member.profile ? (
                            <div className="space-y-4">
                              {member.profile.positions ? (
                                <div>
                                  <p className="font-semibold uppercase tracking-wider text-gold">
                                    Leadership Roles
                                  </p>
                                  <ul className="mt-2 space-y-2">
                                    {member.profile.positions.map((position) => (
                                      <li key={position} className="flex gap-2">
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                                        <span>{position}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : null}
                              {member.profile.education ? (
                                <div>
                                  <p className="font-semibold uppercase tracking-wider text-gold">
                                    Education
                                  </p>
                                  <ol className="mt-2 space-y-2">
                                    {member.profile.education.map((item, index) => (
                                      <li key={item} className="flex gap-2">
                                        <span className="font-semibold text-foreground">
                                          {index + 1}.
                                        </span>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ol>
                                </div>
                              ) : null}
                              {member.profile.overview ? (
                                <div>
                                  <p className="font-semibold uppercase tracking-wider text-gold">
                                    Profile
                                  </p>
                                  <div className="mt-2 space-y-3">
                                    {member.profile.overview.map((paragraph) => (
                                      <p key={paragraph}>{paragraph}</p>
                                    ))}
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          ) : (
                            <p>Full profile details will be added soon.</p>
                          )}
                        </div>
                      </details>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-16 rounded-3xl border-2 border-dashed border-border bg-card/50 py-20 text-center">
              <div className="mx-auto max-w-xl px-6">
                <Reveal>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Board member profiles coming soon
                  </h3>
                </Reveal>
                <Reveal delay={1}>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Information about the JP4SM Board of Directors will be published here shortly. Please check back soon to learn more about the men and women serving on our board.
                  </p>
                </Reveal>
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
