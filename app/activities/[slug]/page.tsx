import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowLeft, CheckCircle2, Quote, Download, BookOpen } from 'lucide-react'
import ctyHeroImage from '../../../images/CTY/CTY1.jpeg'
import ctyImage2 from '../../../images/CTY/cty2.jpeg'
import ctyImage3 from '../../../images/CTY/cty3.jpeg'
import ctyImage4 from '../../../images/CTY/cty4.jpeg'
import ctyImage5 from '../../../images/CTY/cty5.jpeg'
import ctyImage6 from '../../../images/CTY/cty6.jpeg'
import ctyImage7 from '../../../images/CTY/cty7.jpeg'
import ctyImage8 from '../../../images/CTY/cty8.jpeg'
import ctyImage9 from '../../../images/CTY/cty9.jpeg'
import ctyImage10 from '../../../images/CTY/cty10.jpeg'
import crusadeSlide1 from '../../../images/slides/slide1.jpeg'
import crusadeSlide2 from '../../../images/slides/slide2.jpeg'
import crusadeSlide3 from '../../../images/slides/slide3.jpeg'
import crusadeSlide4 from '../../../images/slides/slide4.jpeg'
import crusadeSlide5 from '../../../images/slides/slide5.jpeg'
import crusadeSlide6 from '../../../images/slides/slide6.jpeg'
import translationHeroImage from '../../../images/B translation/transaction activities.jpeg'
import translationImage1 from '../../../images/B translation/0064d69a-3a7a-4928-b9f6-02e10fe17257.jpeg'
import translationImage2 from '../../../images/B translation/258b5bb4-72e0-4311-aa7b-3ce76fa13e57.jpeg'
import translationImage3 from '../../../images/B translation/455e5ce1-1b29-4e6e-83ca-4b8773f0c74f.jpeg'
import translationImage4 from '../../../images/B translation/73cce9f5-1e80-46ca-a215-6ceffdca8abd.jpeg'
import translationImage5 from '../../../images/B translation/7529e887-4c32-4ea9-ae37-bdb03f416e35.jpeg'
import translationImage6 from '../../../images/B translation/d27677e6-a81b-4b3e-8eb0-59ef56daf91c.jpeg'
import translationImage7 from '../../../images/B translation/d4b1d011-a726-419b-a485-675cf99b1fb1.jpeg'
import translationImage8 from '../../../images/B translation/e1657da1-1fa4-4324-8533-7c5e4057031a.jpeg'
import translationImage9 from '../../../images/B translation/efe8bb8e-916b-414a-bc46-0c4f276f7ee8.jpeg'
import translationImage10 from '../../../images/B translation/f45bd437-203b-4ebe-afb2-419d4de1e270.jpeg'
import { ActivityImageSlideshow } from '@/components/activity-image-slideshow'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { Button } from '@/components/ui/button'
import { activities, getActivity } from '@/lib/nav'

const statementOfFaithDownload = '/documents/the-basic-statement-of-faith.docx'

const ctyGallery = [
  ctyHeroImage,
  ctyImage2,
  ctyImage3,
  ctyImage4,
  ctyImage5,
  ctyImage6,
  ctyImage7,
  ctyImage8,
  ctyImage9,
  ctyImage10,
]

const crusadeSlides = [
  { src: crusadeSlide1, alt: 'People gathered during a large outdoor crusade' },
  { src: crusadeSlide2, alt: 'Crusade worship and ministry moment with attendees' },
  { src: crusadeSlide3, alt: 'Open-air crusade audience listening to the gospel' },
  { src: crusadeSlide4, alt: 'Prayer and response during a crusade meeting' },
  { src: crusadeSlide5, alt: 'Crusade crowd taking part in worship together' },
  { src: crusadeSlide6, alt: 'Another powerful moment from a JP4SM crusade gathering' },
]

const bibleTranslationGallery = [
  {
    src: translationHeroImage,
    caption: 'The Bible Translation Program at work among the communities we serve.',
  },
  {
    src: translationImage1,
    caption: 'Translators working carefully through the text, weighing every word.',
  },
  {
    src: translationImage2,
    caption: 'A time of prayer and preparation before translation work begins.',
  },
  {
    src: translationImage3,
    caption: 'Reviewing a draft together so the meaning stays faithful and clear.',
  },
  {
    src: translationImage4,
    caption: 'Checking the translation with mother-tongue speakers from the community.',
  },
  {
    src: translationImage5,
    caption: 'Local church leaders helping to confirm the text reads naturally.',
  },
  {
    src: translationImage6,
    caption: 'Discussing how best to express key biblical terms in the local language.',
  },
  {
    src: translationImage7,
    caption: 'Listening back to the reading to test how the Word sounds in the ear.',
  },
  {
    src: translationImage8,
    caption: 'Cross-checking the draft against the source text for accuracy.',
  },
  {
    src: translationImage9,
    caption: 'People hearing Scripture in their own heart language for the first time.',
  },
  {
    src: translationImage10,
    caption: 'Giving thanks for another step forward in the translation project.',
  },
]

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const activity = getActivity(slug)
  if (!activity) return { title: 'Activity — JP4SM' }
  return {
    title: `${activity.title} — JP4SM`,
    description: activity.short,
  }
}

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const activity = getActivity(slug)
  if (!activity) notFound()

  const others = activities.filter((a) => a.slug !== slug).slice(0, 3)
  const isCatchThemYoung = slug === 'catch-them-young'
  const isCrusade = slug === 'crusade'
  const isVbs = slug === 'vocational-bible-studies'
  const isMission = slug === 'mission'
  const isBibleTranslation = slug === 'bible-translation-program'

  return (
    <>
      <PageHero
        eyebrow="Activity"
        title={activity.title}
        subtitle={activity.tagline}
        image={activity.image}
      />

      {/* Intro */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={activity.image || '/placeholder.svg'}
                alt={activity.title}
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                About this ministry
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                {activity.tagline}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {activity.intro}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {isCrusade ? (
        <section className="bg-secondary/40 py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Reveal>
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                  Crusade Gallery
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                  A living picture of revival, worship, and Gospel response
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  These images capture the atmosphere of our crusade ministry:
                  people gathering in faith, hearing the word of God, responding
                  in worship, and encountering Jesus Christ in powerful ways.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <ActivityImageSlideshow slides={crusadeSlides} />
            </Reveal>
          </div>
        </section>
      ) : null}

      {isMission ? (
        <section className="bg-secondary/40 py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
                <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <BookOpen className="h-7 w-7" />
                    </span>
                    <div>
                      <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                        Our Beliefs
                      </p>
                      <h2 className="mt-2 font-heading text-2xl font-bold text-foreground text-balance sm:text-3xl">
                        The Basic Statement of Faith
                      </h2>
                      <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                        Download our statement of faith to learn the biblical
                        convictions that guide JP4SM&apos;s mission work in
                        remote, rural, and unreached areas.
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="shrink-0 rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
                  >
                    <a
                      href={statementOfFaithDownload}
                      download="The Basic Statement of Faith.docx"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Statement of Faith
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Scripture */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <Quote className="mx-auto h-10 w-10 text-gold" />
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-6 font-heading text-2xl font-medium leading-relaxed text-primary-foreground text-balance sm:text-3xl">
              &ldquo;{activity.scripture}&rdquo;
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-gold">
              {activity.scriptureRef}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Reveal>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                How We Serve
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                What this looks like in action
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {activity.highlights.map((h, i) => (
              <Reveal key={h.title} delay={(i % 3) as 0 | 1 | 2}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CheckCircle2 className="h-8 w-8 text-gold" />
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                    {h.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {h.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {isBibleTranslation ? (
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Reveal>
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                  Translation Gallery
                </p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                  The Word of God taking root in every language
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  These moments come from the ongoing work of the Bible
                  Translation Program — translating, checking, and the joy of
                  seeing Scripture read and understood in a heart language.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bibleTranslationGallery.map((item, index) => (
                <Reveal
                  key={`translation-gallery-${index}`}
                  delay={(index % 3) as 0 | 1 | 2}
                  as="article"
                >
                  <figure className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.caption}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="flex-1 p-5 text-sm leading-relaxed text-muted-foreground">
                      {item.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {isVbs ? (
        <section className="bg-background py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <Reveal>
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                  VBS Focus
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                  Community evangelism and discipleship for children and youth
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  VBS reaches children and young people from different communities
                  with practical love and clear Gospel teaching. We create a joyful
                  environment where children are cared for, taught the Bible, and
                  shown that Jesus loves them, sees them, and has a purpose for their lives.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                  Every VBS Season
                </p>
                <ul className="mt-5 space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span>We feed 500+ kids from different communities as an expression of Christ’s care.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span>We teach Bible fundamentals with a clear focus on salvation through Christ.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span>We use Bible storytelling that is simple, engaging, and memorable so truth sticks for life.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {isVbs ? (
        <section className="bg-secondary/30 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-primary/10 bg-primary px-8 py-10 text-primary-foreground shadow-xl sm:px-10">
              <Reveal>
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                  Our Goal
                </p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-3 font-heading text-3xl font-bold text-balance sm:text-4xl">
                  Plant seeds of faith early in every young heart we can reach
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-5 max-w-4xl text-lg leading-relaxed text-primary-foreground/85">
                  Through VBS, children learn that Jesus loves them, sees them,
                  and has a purpose for them. We believe that when truth is planted
                  early, lives can be shaped for Christ for generations to come.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      ) : null}

      {isCatchThemYoung ? (
        <section className="bg-background py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <Reveal>
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                  CTY Vision
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                  Reaching campuses, schools, and young people with direction and hope
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Catch Them Young is focused on students in universities,
                  vocational schools, and high schools, as well as out-of-school
                  youth with the potential to pursue education. We intentionally
                  walk with young people who lack guidance and financial support,
                  helping them grow in Christ and move toward a hopeful future.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                  Who We Reach
                </p>
                <ul className="mt-5 space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span>University students seeking spiritual grounding and wise direction.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span>Students in vocational schools preparing for work and life.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span>High school students navigating identity, purpose, and growth.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span>Out-of-school youth with the potential to return to learning and thrive.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {isCatchThemYoung ? (
        <section className="bg-secondary/30 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-primary/10 bg-primary px-8 py-10 text-primary-foreground shadow-xl sm:px-10">
              <Reveal>
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                  Our Goal
                </p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-3 font-heading text-3xl font-bold text-balance sm:text-4xl">
                  Raise Christ-centered leaders who know who they are and where they are going
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-5 max-w-4xl text-lg leading-relaxed text-primary-foreground/85">
                  CTY exists to shape a generation of young leaders on campus and
                  in their communities who are rooted in Christ, confident in
                  their identity, and prepared to lead with wisdom, faith, and purpose.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      ) : null}

      {isCatchThemYoung ? (
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Reveal>
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                  CTY Moments
                </p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                  Catch Them Young in action
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  These moments reflect how JP4SM walks with students and young
                  people through discipleship, guidance, support, and the kind
                  of encouragement that helps them grow with clarity and purpose.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ctyGallery.map((image, index) => (
                <Reveal key={`cty-gallery-${index}`} delay={(index % 3) as 0 | 1 | 2} as="article">
                  <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image}
                        alt={`Catch Them Young ministry moment ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Other activities */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Reveal>
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Explore other activities
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <Button
                asChild
                variant="ghost"
                className="rounded-full text-primary hover:bg-secondary"
              >
                <Link href="/activities">
                  View all
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) as 0 | 1 | 2} as="article">
                <Link
                  href={`/activities/${a.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={a.image || '/placeholder.svg'}
                      alt={a.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {a.short}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-border bg-transparent"
            >
              <Link href="/activities">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to all activities
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
