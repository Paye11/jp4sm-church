'use client'

import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { Volume2, VolumeX, Play, Pause, Video as VideoIcon } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import faithImage from '../../board/Director Faith Teewon Gleekia.jpeg'
import jeremiahImage from '../../board/Director Jeremiah T. Burgess.jpeg'
import pescoeImage from '../../board/Director Pescoe G. Menscoe.jpeg'
import charlesImage from '../../board/Rev. Charles J. R. Wion.jpeg'
import sylvesterImage from '../../board/Rev. Sylvester Gleekia.jpg'

const directors = [
  {
    name: 'Director Faith Teewon Gleekia (Pastor)',
    role: 'Non-independent Director — Strategic Planning & Development Officer',
    image: faithImage,
    bio: 'A distinguished leader blending professional excellence at the Central Bank of Liberia with unwavering ministry commitment to JP4SM\'s mission of advancing both economic development and spiritual impact.',
    profile: {
      positions: [
        'Non-independent Director, Jesus Passion for Souls Movement (JP4SM)',
        'Strategic Planning & Development Officer, JP4SM',
        'Officer in Charge, Policy and Regulation Section — Regulation and Supervision Department, Central Bank of Liberia',
        'Former Assistant Director of Surveillance and Supervision, Central Bank of Liberia',
        'Former Principal Examiner, Central Bank of Liberia',
      ],
      education: [
        'Master of Arts in Policy Economics — Center of Development Economics, Williams College, Massachusetts, USA',
        'Master of Business Administration in Banking and Finance — Cottington University, Monrovia, Liberia',
        'Bachelor of Science in Economics — United Methodist University, Monrovia, Liberia',
        'Certified Fraud Examiner (CFE)',
        'Certified Anti-Money Laundering Specialist (CAMS)',
      ],
      overview: [
        'Director Faith Teewon Gleekia (Pastor) is a non-independent Director at Jesus Passion for Souls Movement (JP4SM) and serves as Strategic Planning & Development Officer of the institution, where she leads organizational growth and sustainability initiatives.',
        'Alongside her ministry leadership role, she holds a distinguished career at the Central Bank of Liberia, currently serving as Officer in Charge of the Policy and Regulation Section of the Regulation and Supervision Department. Over the years, she has advanced through key positions at the bank including Assistant Director of Surveillance and Supervision, Principal Examiner, and Examiner Levels I & II, demonstrating her commitment to strengthening Liberia’s financial systems and regulatory oversight.',
        'Her blend of professional excellence and ministry commitment strengthens JP4SM’s mission and assures donors of sound stewardship. By combining global training, national service, and ministry leadership, Director Gleekia embodies JP4SM’s vision of advancing both economic development and spiritual mission, offering donors confidence in the organization’s accountability and long-term impact.',
      ],
    },
  },
  {
    name: 'Rev. Sylvester Gleekia',
    role: 'Non-independent Director — Founder & Executive Director',
    image: sylvesterImage,
    bio: 'The founding visionary of JP4SM and General Overseer of Christ Brazen Assembly Church, dedicated to evangelism, discipleship, and church planting across Liberia.',
    profile: {
      positions: [
        'Non-independent Director, Jesus Passion for Souls Movement (JP4SM)',
        'Founder & General Overseer, Christ Brazen Assembly (CBA) Church',
        'Executive Director, Jesus Passion for Souls Movement (JP4SM)',
        'Senior Pastor, CBA Central Church — Bardnersville, Monrovia',
      ],
      education: [
        'Bachelor of Theology (B.Th.) — Monrovia Bible College–Brainerd Johnson College of Theology (now Carver Christian University), Paynesville, Liberia',
        'Advanced Diploma in Theology — Monrovia Bible Training Center (MBTC)',
      ],
      overview: [
        'Rev. Sylvester Gleekia is a non-independent Director of JP4SM and he is the Founder and General Overseer of Christ Brazen Assembly (CBA) Church and serves as the Executive Director of Jesus Passion for Souls Movement (JP4SM). With a strong commitment to evangelism, discipleship, and church planting, he has dedicated his life to advancing the Gospel and nurturing spiritual growth across Liberia.',
        'His leadership journey includes serving as Senior Pastor of CBA Central Church in Bardnersville, Monrovia. Through these roles, Rev. Gleekia has demonstrated a passion for building Christ-centered communities and equipping believers for effective ministry.',
        'His theological training has provided a solid foundation for his pastoral and organizational leadership, enabling him to combine sound biblical teaching with practical ministry strategies. Today, he continues to inspire and lead through Christ Brazen Assembly and JP4SM, fostering partnerships and initiatives that strengthen the church’s mission and impact in Liberia and beyond.',
      ],
    },
  },
  {
    name: 'Rev. Charles J. R. Wion (Direction)',
    role: 'Independent Director — Lead Pastor & Administrative Leader',
    image: charlesImage,
    bio: 'Pioneer and Lead Pastor of Missio Dei Assembly of God Church, bringing spiritual insight and administrative excellence through theological education and organizational stewardship.',
    profile: {
      positions: [
        'Independent Director, Jesus Passion for Souls Movement (JP4SM)',
        'Pioneer & Lead Pastor, Missio Dei Assembly of God Church',
        'Dean of Records and Admissions, Liberia Assemblies of Bible College (now Assemblies of God University), Brewerville',
        'Lecturer, Assemblies of God University',
        'Former Youth Pastor, Assistant Pastor, and Lead Pastor — Ghana',
      ],
      education: [
        'Master’s Degree in Educational Administration and Supervision — University of Liberia',
        'Master of Arts Candidate in Biblical Studies — Assemblies of God Graduate School of Theology',
      ],
      overview: [
        'Rev. Charles J. R. Wion (Direction) is an independent Director of JP4SM and he is the Pioneer and Lead Pastor of Missio Dei Assembly of God Church. Rev. Wion’s pastoral journey has included service as youth pastor, assistant pastor, and lead pastor in Ghana.',
        'His academic and ministerial background reflects a deep dedication to equipping believers and building Christ-centered communities. In addition to his pastoral calling, Rev. Wion has made significant contributions to theological education and organizational leadership.',
        'Since his appointment as Dean of Records and Admissions at the Liberia Assemblies of Bible College (now Assemblies of God University), Brewerville, he has combined administrative excellence with spiritual mentorship, serving also as a lecturer. As a board member of Jesus’ Passion for Souls Movement (JP4SM), Rev. Wion brings both spiritual insight and administrative expertise, helping to guide the movement in its mission of evangelism, discipleship, church planting and other ministry services. His blend of pastoral leadership, academic achievement, and organizational stewardship continues to inspire trust and strengthen the impact of JP4SM across Liberia.',
      ],
    },
  },
  {
    name: 'Director Jeremiah T. Burgess',
    role: 'Independent Director — Executive Director, SHIFSD Liberia',
    image: jeremiahImage,
    bio: 'Executive Director of Self Help Initiative for Sustainable Development and Founder of Light Up The Bible Ministries, bringing strategic expertise in development, education management, and donor stewardship.',
    profile: {
      positions: [
        'Independent Director, Jesus Passion for Souls Movement (JP4SM)',
        'Executive Director, Self Help Initiative for Sustainable Development (SHIFSD Liberia), Inc.',
        'Founder, Light Up The Bible Ministries, Inc.',
      ],
      education: [
        'Bachelor of Science in Economics — University of Liberia',
        'Graduate Studies in Education Management (in progress)',
        'Professional Diploma in Project Management',
        'Professional Diploma in Organizational Development (OD)',
        'Professional Diploma in Development Education & Leadership Training in Action (DELTA)',
        'Professional Certification in Church & Community Mobilization Process (CCMP)',
      ],
      overview: [
        'Director Jeremiah T. Burgess is an independent Director at Jesus Passion for Souls Movement (JP4SM) and Executive Director of Self Help Initiative for Sustainable Development (SHIFSD Liberia), Inc. Under his leadership, SHIFSD oversees transformative subsidiaries including the Hummingbird Academy (HAC) and the Holy Hands Institute (HHI).',
        'He is also the Founder of Light Up The Bible Ministries, Inc. currently pursuing graduate studies in Education Management. His academic foundation includes a Bachelor of Science in Economics from the University of Liberia, complemented by professional diplomas and certifications in Project Management, Organizational Development (OD), Development Education & Leadership Training in Action (DELTA), and Church & Community Mobilization Process (CCMP).',
        'His blend of professional expertise and ministry leadership assures donors of sound stewardship and long-term impact. As a board member of Jesus Passion for Souls Movement (JP4SM), Mr. Burgess has made a significant impact by leveraging his expertise to shape strategic direction, attract donors, and provide them with confidence in the organization’s accountability and stewardship. His ability to merge professional excellence with ministry vision has strengthened JP4SM’s credibility and broadened its donor base, ensuring sustainable support for its mission.',
      ],
    },
  },
  {
    name: 'Director Pescoe G. Menscoe',
    role: 'Independent Director — Forestry Professional & Ministry Leader',
    image: pescoeImage,
    bio: 'Dedicated forestry professional at the FDA with international training in conservation, combined with a deep heart for youth and children’s ministry and donor engagement.',
    profile: {
      positions: [
        'Independent Director, Jesus Passion for Souls Movement (JP4SM)',
        'Data Processor, Forestry Development Authority (FDA) of Liberia',
        'Ministry Leader, Youth & Children’s Ministry',
        'Ministry Leader, Music Ministry',
      ],
      education: [
        'International Forestry Training — Ghana',
        'International Forestry Training — China',
        'Contributions to Liberia National Forest Inventory (World Bank Collaboration)',
      ],
      overview: [
        'Director Pescoe G. Menscoe is an independent Director of Jesus Passion for Souls Movement (JP4SM) and a dedicated forestry professional with strong expertise in forest data processing, inventory management, and community engagement. Serving as a Data Processor at the Forestry Development Authority (FDA) of Liberia, she has contributed to national forest initiatives, including the Liberia National Forest Inventory in collaboration with the World Bank.',
        'With international training in Ghana and China, she has advanced conservation awareness and sustainable forest management, combining technical knowledge with practical field experience to strengthen Liberia’s forestry sector.',
        'Alongside her professional career, Mrs. Menscoe has made a lasting impact in ministry, particularly in youth and children’s work. She has faithfully served in the music ministry and children’s ministry, nurturing young minds and supporting less-fortunate youth with compassion and guidance. Her ability to attract donors to children’s programs has increased trust and expanded opportunities for outreach. As a JP4SM board member, she brings spiritual insight, organizational strength, and donor engagement, helping to guide the movement’s mission of evangelism, discipleship, and church planting across Liberia.',
      ],
    },
  },
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

      <BoardVideoSection />

      <CtaBand />
    </>
  )
}

function BoardVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (video.paused) {
              video.play().catch(() => {})
              setHasAutoPlayed(true)
            }
          } else if (hasAutoPlayed && !video.paused) {
            video.pause()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [hasAutoPlayed])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return

    const nextMuted = !video.muted
    video.muted = nextMuted
    setIsMuted(nextMuted)

    if (!nextMuted && video.paused) {
      video.play()
      setIsPlaying(true)
    }
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-primary py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/70" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
              <VideoIcon className="h-3.5 w-3.5" />
              Board Video
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-heading text-3xl font-bold text-primary-foreground text-balance sm:text-4xl lg:text-5xl">
              The Board in Action
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80">
              Watch the leadership of Jesus Passion for Souls Movement at work —
              stewarding the vision, guiding the mission, and serving the Gospel with wisdom and dedication.
            </p>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div className="group relative mx-auto mt-12 max-w-4xl">
            <div className="pointer-events-none absolute -inset-1 rounded-[2.25rem] bg-gradient-to-tr from-gold/60 via-gold/10 to-transparent opacity-70 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-black shadow-2xl">
              <div className="relative">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="relative block w-full cursor-pointer"
                >
                  <video
                    ref={videoRef}
                    className="aspect-video w-full object-cover"
                    src="/vid/board-video.mp4"
                    muted={isMuted}
                    loop
                    playsInline
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {!isPlaying ? (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/95 text-gold-foreground shadow-2xl transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-8 w-8 translate-x-0.5" fill="currentColor" />
                      </span>
                    </span>
                  ) : (
                    <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/55 text-primary-foreground shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <Pause className="h-5 w-5" />
                    </span>
                  )}

                  {!isPlaying ? (
                    <span className="pointer-events-none absolute bottom-5 left-20 inline-flex items-center gap-2 rounded-full bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
                      <Play className="h-3.5 w-3.5 text-gold" fill="currentColor" />
                      Tap to play
                    </span>
                  ) : isMuted ? (
                    <span className="pointer-events-none absolute bottom-5 left-20 inline-flex items-center gap-2 rounded-full bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
                      <Volume2 className="h-3.5 w-3.5 text-gold" />
                      Tap for sound
                    </span>
                  ) : null}
                </button>

                <button
                  type="button"
                  onClick={toggleSound}
                  aria-label={isMuted ? 'Turn sound on' : 'Turn sound off'}
                  className="absolute bottom-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-lg transition-transform duration-300 hover:scale-110"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
