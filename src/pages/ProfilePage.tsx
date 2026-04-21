import React, { useState, useCallback, useEffect } from 'react';
import { Box, Typography, Button, Stack, Link, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Download, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { projects } from '../data/projects';

const MotionBox = motion(Box);

type SectionHeaderProps = {
  num: string;
  label: string;
  kicker?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ num, label, kicker }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: '160px 1fr' },
      alignItems: 'baseline',
      gap: { xs: 1, md: 4 },
      pt: 1,
      pb: 2,
      borderTop: '1px solid var(--ink)',
    }}
  >
    <Typography
      sx={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.72rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--signal)',
      }}
    >
      § {num}
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'baseline' }, justifyContent: 'space-between', gap: 2 }}>
      <Typography
        sx={{
          fontFamily: 'Fraunces, serif',
          fontSize: { xs: '1.8rem', md: '2.6rem' },
          lineHeight: 1,
          fontWeight: 400,
          letterSpacing: '-0.02em',
        }}
      >
        {label}
      </Typography>
      {kicker && (
        <Typography
          variant="caption"
          sx={{ fontFamily: 'JetBrains Mono, monospace', opacity: 0.7 }}
        >
          {kicker}
        </Typography>
      )}
    </Box>
  </Box>
);

const skills: { label: string; items: string }[] = [
  {
    label: 'Languages & Frameworks',
    items:
      'Python · JavaScript · TypeScript · React · Next.js · Node · Express · Angular · C# · .NET',
  },
  {
    label: 'ML & Computer Vision',
    items: 'TensorFlow · PyTorch · OpenCV · Scikit-learn · YOLOv5',
  },
  {
    label: 'Databases',
    items: 'MongoDB · Firestore · PostgreSQL',
  },
  {
    label: 'Tools & Platforms',
    items:
      'Git · WebSocket · Flask · Streamlit · Unity · Supabase · Vercel · Firebase · Docker · n8n',
  },
  {
    label: 'Soft',
    items:
      'Problem-solving · Team collaboration · Adaptability · Communication · Project management',
  },
];

type ExpItem = {
  logo: string;
  title: string;
  org: string;
  period: string;
  mode: string;
  body: string;
  link?: string;
};

const experience: ExpItem[] = [
  {
    logo: 'logos/tech_creative_ltd.png',
    title: 'Software Developer (Intern)',
    org: 'TechCreative LTD',
    period: 'Nov 2025 — Present',
    mode: 'Remote · Internship',
    body:
      'Supporting a core product in a flexible, project-based role through feature development, research, testing, and iteration — shipping and improving real product functionality.',
  },
  {
    logo: 'logos/salesmind_ai_logo.jpeg',
    title: 'Former Prompt Engineer (Intern)',
    org: 'SalesMind AI',
    period: 'Jan 2026 — Mar 2026',
    mode: 'Hybrid · Completed Internship',
    body:
      'AI-driven automation and internal tools — designing n8n workflows, writing JavaScript for custom automations, connecting LLMs with CRMs through APIs and webhooks, with a strong focus on prompt design and testing.',
  },
  {
    logo: 'logos/sumo.png',
    title: 'Software Engineer',
    org: 'foodloft.me',
    link: 'https://foodloft.me',
    period: 'Jul 2025 — Oct 2025',
    mode: 'Thailand · Contract',
    body:
      'Built a SaaS restaurant management platform featuring interactive 3D floor planning. Developed an advanced booking system with LINE bot integration, optimistic concurrency control, and dual payment processing.',
  },
  {
    logo: 'logos/netmonitoring.png',
    title: 'WordPress Developer',
    org: 'NetMonitoringTech.com',
    link: 'https://NetMonitoringTech.com',
    period: 'Aug 2025 — Sep 2025',
    mode: 'United States · Remote',
    body:
      'Collaborated on a 3-week live project focused on network performance monitoring and diagnostics. Built and formatted web pages using WordPress and Elementor.',
  },
];

const certificates = [
  {
    img: 'certificates/microsoft.png',
    title: 'Foundation C# with Microsoft',
    org: 'Microsoft',
    date: 'July 31, 2025',
    body:
      'Foundational C# — syntax, data structures, and object-oriented programming principles.',
  },
  {
    img: 'certificates/unity.png',
    title: 'Unity Essentials Pathway',
    org: 'Unity Technologies',
    date: 'June 30, 2025',
    body:
      'Unity fundamentals — scripting, physics, animation, and project management for interactive 3D.',
  },
  {
    img: 'certificates/aws.png',
    title: 'AWS Academy Cloud Foundations',
    org: 'Amazon Web Services',
    date: 'September 20, 2023',
    body:
      'Cloud computing fundamentals — AWS services, security, architecture, and best practices.',
  },
  {
    img: 'certificates/parami.png',
    title: 'Management Skills',
    org: 'Parami University, Yangon',
    date: 'October 8, 2021',
    body:
      'Team coordination, project planning, communication strategies, organizational development.',
  },
  {
    img: 'certificates/physics.png',
    title: 'Physics Behind Internet',
    org: 'Parami University, Yangon',
    date: 'October 8, 2021',
    body:
      'Physical principles behind internet technology — data transmission, protocols, comms systems.',
  },
];

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [enlargedImgSrc, setEnlargedImgSrc] = useState<string | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setEnlargedImgSrc(null);
  }, []);

  useEffect(() => {
    if (enlargedImgSrc) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [enlargedImgSrc, handleKeyDown]);

  return (
    <>
      <Helmet>
        <title>Ye Myat Moe — Field Notes / §01 Profile</title>
      </Helmet>

      <Box
        sx={{
          maxWidth: 1400,
          mx: 'auto',
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
          position: 'relative',
        }}
      >
        {/* COVER */}
        <MotionBox
          className="rise"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 320px' },
            gap: { xs: 4, md: 6 },
            alignItems: 'end',
            pb: { xs: 4, md: 6 },
            borderBottom: '1px solid var(--ink)',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--signal)',
                mb: 2,
              }}
            >
              Cover / §00 / A Software Engineer&apos;s Field Notes
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontFamily: 'Fraunces, serif',
                fontWeight: 300,
                fontSize: { xs: '3rem', sm: '4.5rem', md: '6rem', lg: '8rem' },
                lineHeight: 0.86,
                letterSpacing: '-0.035em',
                fontVariationSettings: '"opsz" 144, "SOFT" 80',
              }}
            >
              Building{' '}
              <Box
                component="em"
                sx={{
                  fontStyle: 'italic',
                  color: 'var(--signal)',
                  fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
                }}
              >
                real
              </Box>{' '}
              products{' '}
              <Box component="br" />
              from prompts to pixels.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              borderLeft: { md: '1px solid var(--ink)' },
              pl: { md: 3 },
            }}
          >
            <Typography variant="caption">LEDE</Typography>
            <Typography
              sx={{
                fontFamily: 'Fraunces, serif',
                fontSize: { xs: '1.05rem', md: '1.15rem' },
                lineHeight: 1.5,
                fontStyle: 'italic',
                fontWeight: 300,
              }}
            >
              I&apos;m a software engineer who likes building real products —
              from AI automations to web apps. I previously worked as a Prompt
              Engineer intern at <b>SalesMind AI</b> and currently work as a
              Software Developer intern at <b>TechCreative LTD</b>, designing
              workflows, shipping features, and improving core product
              functionality.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 2 }}>
              <Button
                variant="contained"
                startIcon={<Download />}
                component="a"
                href="https://drive.google.com/uc?export=download&id=1Rb-0uCEHEL278yQRpIXE6AgAd6bJm4O-"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Button>
              <Button
                variant="outlined"
                endIcon={<ArrowForward />}
                onClick={() => navigate('/contact')}
              >
                Get in touch
              </Button>
            </Stack>

            <Box
              sx={{
                mt: 2,
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                borderTop: '1px solid var(--rule-strong)',
                borderBottom: '1px solid var(--rule-strong)',
                '& > div': {
                  py: 1.5,
                  borderRight: '1px solid var(--rule-strong)',
                  '&:last-child': { borderRight: 0 },
                },
              }}
            >
              <Box>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>BASE</Typography>
                <Typography sx={{ fontFamily: 'Fraunces, serif', fontSize: '1.05rem' }}>
                  Bangkok
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>STATUS</Typography>
                <Typography sx={{ fontFamily: 'Fraunces, serif', fontSize: '1.05rem', color: 'var(--signal)' }}>
                  Available
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>FOCUS</Typography>
                <Typography sx={{ fontFamily: 'Fraunces, serif', fontSize: '1.05rem' }}>
                  AI · Web
                </Typography>
              </Box>
            </Box>
          </Box>
        </MotionBox>

        {/* SKILLS */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <SectionHeader num="01" label="Toolbelt" kicker="↳ The stack I reach for" />

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {skills.map((s, idx) => (
              <Box
                key={s.label}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 3fr 40px' },
                  alignItems: 'center',
                  gap: 2,
                  py: 2.5,
                  borderTop: idx === 0 ? '1px dashed var(--rule-strong)' : 0,
                  borderBottom: '1px dashed var(--rule-strong)',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: { xs: '1.25rem', md: '1.6rem' },
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  {s.label}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.82rem',
                    letterSpacing: '0.04em',
                    color: 'var(--ink-soft)',
                  }}
                >
                  {s.items}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: 'var(--signal)', textAlign: 'right' }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* EXPERIENCE */}
        <Box sx={{ mt: { xs: 6, md: 10 } }}>
          <SectionHeader num="02" label="Dispatches" kicker="↳ Where I've been working" />

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {experience.map((e, idx) => (
              <Box
                key={e.title + e.org}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '80px 220px 1fr' },
                  gap: { xs: 2, md: 4 },
                  py: { xs: 3, md: 4 },
                  borderTop: '1px solid var(--rule-strong)',
                  borderBottom: idx === experience.length - 1 ? '1px solid var(--rule-strong)' : 0,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: { xs: '2rem', md: '2.4rem' },
                    lineHeight: 1,
                    color: 'var(--signal)',
                    fontStyle: 'italic',
                  }}
                >
                  №{String(idx + 1).padStart(2, '0')}
                </Typography>

                <Box>
                  <Box
                    component="img"
                    src={e.logo}
                    alt={`${e.org} logo`}
                    sx={{
                      width: 160,
                      height: 80,
                      objectFit: 'contain',
                      objectPosition: 'center',
                      filter: 'grayscale(1) contrast(1.05)',
                      mixBlendMode: 'multiply',
                    }}
                  />
                </Box>

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: { xs: '1.6rem', md: '2rem' },
                      lineHeight: 1.1,
                      letterSpacing: '-0.01em',
                      fontWeight: 500,
                    }}
                  >
                    {e.title}{' '}
                    <Box component="span" sx={{ color: 'var(--ink-soft)', fontStyle: 'italic', fontWeight: 300 }}>
                      — {e.link ? (
                        <Link href={e.link} target="_blank" rel="noopener noreferrer">
                          {e.org}
                        </Link>
                      ) : e.org}
                    </Box>
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.5,
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.72rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-soft)',
                    }}
                  >
                    {e.period}  ·  {e.mode}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1.5,
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      maxWidth: 640,
                    }}
                  >
                    {e.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* EDUCATION + LANGUAGES */}
        <Box
          sx={{
            mt: { xs: 6, md: 10 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box>
            <SectionHeader num="03" label="Education" />
            <Box sx={{ pt: 2 }}>
              <Typography
                sx={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: { xs: '1.5rem', md: '1.9rem' },
                  fontStyle: 'italic',
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                Bachelor of Computer Science
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-soft)',
                }}
              >
                Assumption University of Thailand · Jun 2022 — Oct 2025
              </Typography>
            </Box>
          </Box>

          <Box>
            <SectionHeader num="04" label="Tongues" />
            <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                { name: 'English', level: 'Proficient' },
                { name: 'Burmese', level: 'Native' },
              ].map((l) => (
                <Box
                  key={l.name}
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 2,
                    pb: 1.5,
                    borderBottom: '1px dashed var(--rule-strong)',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: { xs: '1.5rem', md: '1.9rem' },
                      fontWeight: 500,
                    }}
                  >
                    {l.name}
                  </Typography>
                  <Box sx={{ flex: 1, borderBottom: '1px dotted var(--rule-strong)', mx: 1 }} />
                  <Typography
                    sx={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {l.level}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* CERTIFICATES */}
        <Box sx={{ mt: { xs: 6, md: 10 } }}>
          <SectionHeader num="05" label="Papers & plates" kicker="↳ Certificates · Click to enlarge" />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 0,
            }}
          >
            {certificates.map((c, i) => (
              <Box
                key={c.title}
                onClick={() => setEnlargedImgSrc(c.img)}
                className="is-interactive"
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: 2,
                  alignItems: 'start',
                  p: 2,
                  cursor: 'none',
                  borderRight: { sm: i % 2 === 0 ? '1px solid var(--rule-strong)' : 0 },
                  borderBottom: '1px solid var(--rule-strong)',
                  transition: 'background 160ms ease',
                  '&:hover': {
                    backgroundColor: 'var(--paper-deep)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={c.img}
                  alt={c.title}
                  sx={{
                    width: '100%',
                    height: 90,
                    objectFit: 'cover',
                    filter: 'grayscale(1) contrast(1.02)',
                    border: '1px solid var(--ink)',
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: '1.15rem',
                      fontWeight: 500,
                      lineHeight: 1.15,
                    }}
                  >
                    {c.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      mt: 0.5,
                      color: 'var(--ink-soft)',
                    }}
                  >
                    {c.org}  ·  {c.date}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      fontSize: '0.85rem',
                      lineHeight: 1.45,
                    }}
                  >
                    {c.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Modal */}
        {enlargedImgSrc && (
          <Box
            onClick={() => setEnlargedImgSrc(null)}
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              bgcolor: 'rgba(17,17,17,0.88)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'none',
            }}
          >
            <Box
              component="img"
              src={enlargedImgSrc}
              alt="Enlarged certificate"
              onClick={(e) => e.stopPropagation()}
              sx={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                border: '1px solid var(--paper)',
                background: '#fff',
              }}
            />
          </Box>
        )}

        {/* FEATURED WORK */}
        <Box sx={{ mt: { xs: 6, md: 10 } }}>
          <SectionHeader num="06" label="Featured — selected work" kicker="↳ 03 projects · See all" />

          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mt: 1 }}>
            {projects.filter((p) => p.featured).slice(0, 3).map((project, idx) => (
              <Grid item xs={12} md={4} key={project.id}>
                <Box
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="is-interactive"
                  sx={{
                    cursor: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    '&:hover .cover': {
                      transform: 'scale(1.02)',
                    },
                    '&:hover .title': { color: 'var(--signal)' },
                  }}
                >
                  <Box
                    sx={{
                      borderTop: '1px solid var(--ink)',
                      borderBottom: '1px solid var(--rule-strong)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      py: 1,
                    }}
                  >
                    <Typography variant="caption" sx={{ color: 'var(--signal)' }}>
                      №{String(idx + 1).padStart(2, '0')}
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.6 }}>
                      {project.techStack[0]}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      aspectRatio: '4 / 3',
                      overflow: 'hidden',
                      border: '1px solid var(--ink)',
                      borderTop: 0,
                      background: 'var(--paper-deep)',
                    }}
                  >
                    <Box
                      component="img"
                      className="cover"
                      src={project.image}
                      alt={project.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(1) contrast(1.02)',
                        transition: 'transform 500ms ease',
                      }}
                    />
                  </Box>

                  <Typography
                    className="title"
                    sx={{
                      mt: 2,
                      fontFamily: 'Fraunces, serif',
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      transition: 'color 160ms ease',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 0.5, opacity: 0.85 }}
                  >
                    {project.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="outlined"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/projects')}
            >
              Open full index
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfilePage;
