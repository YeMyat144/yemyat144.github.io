import React, { useState, useCallback, useEffect } from 'react';
import { Box, Typography, Button, Stack, Link, Chip } from '@mui/material';
import { Download, ArrowForward, OpenInNew } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { projects } from '../data/projects';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography
    component="h2"
    sx={{
      fontSize: { xs: '1.1rem', md: '1.2rem' },
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      mb: 3,
      pb: 1.5,
      borderBottom: '2px solid var(--signal)',
      display: 'inline-block',
    }}
  >
    {children}
  </Typography>
);

const skills: { label: string; items: string[] }[] = [
  {
    label: 'Languages & Frameworks',
    items: ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node', 'Express', 'Angular', 'C#', '.NET'],
  },
  {
    label: 'ML & Computer Vision',
    items: ['TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'YOLOv5'],
  },
  {
    label: 'Databases',
    items: ['MongoDB', 'Firestore', 'PostgreSQL'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Git', 'WebSocket', 'Flask', 'Streamlit', 'Unity', 'Supabase', 'Vercel', 'Firebase', 'Docker', 'n8n'],
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
    title: 'Software Developer Intern',
    org: 'TechCreative LTD',
    period: 'Nov 2025 — Present',
    mode: 'Remote · Internship',
    body: 'Supporting a core product in a flexible, project-based role through feature development, research, testing, and iteration — shipping and improving real product functionality.',
  },
  {
    logo: 'logos/salesmind_ai_logo.jpeg',
    title: 'Prompt Engineer Intern',
    org: 'SalesMind AI',
    period: 'Jan 2026 — Mar 2026',
    mode: 'Hybrid · Completed',
    body: 'Designed n8n workflows, wrote JavaScript for custom automations, connected LLMs with CRMs through APIs and webhooks — with a strong focus on prompt design and testing.',
  },
  {
    logo: 'logos/sumo.png',
    title: 'Software Engineer',
    org: 'foodloft.me',
    link: 'https://foodloft.me',
    period: 'Jul 2025 — Oct 2025',
    mode: 'Thailand · Contract',
    body: 'Built a SaaS restaurant management platform featuring interactive 3D floor planning. Developed an advanced booking system with LINE bot integration, optimistic concurrency control, and dual payment processing.',
  },
  {
    logo: 'logos/netmonitoring.png',
    title: 'WordPress Developer',
    org: 'NetMonitoringTech.com',
    link: 'https://NetMonitoringTech.com',
    period: 'Aug 2025 — Sep 2025',
    mode: 'United States · Remote',
    body: 'Collaborated on a 3-week project focused on network performance monitoring. Built and formatted web pages using WordPress and Elementor.',
  },
];

const certificates = [
  {
    img: 'certificates/microsoft.png',
    title: 'Foundation C# with Microsoft',
    org: 'Microsoft',
    date: 'July 31, 2025',
  },
  {
    img: 'certificates/unity.png',
    title: 'Unity Essentials Pathway',
    org: 'Unity Technologies',
    date: 'June 30, 2025',
  },
  {
    img: 'certificates/aws.png',
    title: 'AWS Academy Cloud Foundations',
    org: 'Amazon Web Services',
    date: 'September 20, 2023',
  },
  {
    img: 'certificates/parami.png',
    title: 'Management Skills',
    org: 'Parami University',
    date: 'October 8, 2021',
  },
  {
    img: 'certificates/physics.png',
    title: 'Physics Behind Internet',
    org: 'Parami University',
    date: 'October 8, 2021',
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
        <title>Ye Myat Moe — Portfolio</title>
      </Helmet>

      <Box
        sx={{
          maxWidth: 900,
          mx: 'auto',
          px: { xs: 2.5, md: 4 },
          py: { xs: 5, md: 8 },
        }}
      >
        {/* HERO */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4rem' },
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              mb: 2,
            }}
          >
            Ye Myat Moe
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              color: 'var(--signal)',
              fontWeight: 500,
              mb: 2.5,
            }}
          >
            Software Engineer · AI & Web
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.05rem' },
              lineHeight: 1.7,
              maxWidth: 620,
              color: 'var(--ink-soft)',
              mb: 4,
            }}
          >
            I build real products — from AI automations to full-stack web apps.
            Currently interning at <strong style={{ color: 'inherit' }}>TechCreative LTD</strong> and
            previously a Prompt Engineer intern at <strong style={{ color: 'inherit' }}>SalesMind AI</strong>.
            Based in Bangkok, open to opportunities.
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap" gap={1.5}>
            <Button
              variant="contained"
              startIcon={<Download />}
              component="a"
              href="https://drive.google.com/uc?export=download&id=1Rb-0uCEHEL278yQRpIXE6AgAd6bJm4O-"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
            >
              Download CV
            </Button>
            <Button
              variant="outlined"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/contact')}
              size="large"
            >
              Get in touch
            </Button>
          </Stack>
        </Box>

        {/* EXPERIENCE */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <SectionTitle>Experience</SectionTitle>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {experience.map((e, idx) => (
              <Box
                key={e.title + e.org}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '56px 1fr' },
                  gap: { xs: 1.5, sm: 3 },
                  py: 3.5,
                  borderBottom: '1px solid var(--rule-strong)',
                  ...(idx === 0 && { borderTop: '1px solid var(--rule-strong)' }),
                }}
              >
                {/* Logo */}
                <Box
                  component="img"
                  src={e.logo}
                  alt={e.org}
                  sx={{
                    width: 48,
                    height: 48,
                    objectFit: 'contain',
                    objectPosition: 'center',
                    filter: 'grayscale(1) contrast(1.05)',
                    mixBlendMode: 'multiply',
                    display: { xs: 'none', sm: 'block' },
                    mt: 0.5,
                  }}
                />

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.3 }}>
                        {e.title}
                      </Typography>
                      <Typography sx={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--signal)' }}>
                        {e.link ? (
                          <Link href={e.link} target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
                            {e.org} <OpenInNew sx={{ fontSize: '0.75rem', verticalAlign: 'middle' }} />
                          </Link>
                        ) : e.org}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: { sm: 'right' } }}>
                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          color: 'var(--ink-soft)',
                          fontFamily: 'JetBrains Mono, monospace',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {e.period}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.75rem',
                          color: 'var(--ink-soft)',
                          fontFamily: 'JetBrains Mono, monospace',
                        }}
                      >
                        {e.mode}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
                      color: 'var(--ink-soft)',
                    }}
                  >
                    {e.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* FEATURED PROJECTS */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', mb: 3 }}>
            <SectionTitle>Projects</SectionTitle>
            <Button
              size="small"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/projects')}
              sx={{ mb: 1.5 }}
            >
              View all
            </Button>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {projects.filter((p) => p.featured).slice(0, 4).map((project) => (
              <Box
                key={project.id}
                onClick={() => navigate(`/projects/${project.slug}`)}
                className="is-interactive"
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '200px 1fr' },
                  gap: { xs: 2, sm: 3 },
                  p: 2.5,
                  border: '1px solid var(--rule-strong)',
                  cursor: 'pointer',
                  transition: 'border-color 160ms ease, background 160ms ease',
                  '&:hover': {
                    borderColor: 'var(--signal)',
                    background: 'var(--paper-deep)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    aspectRatio: '16/9',
                    objectFit: 'cover',
                    filter: 'grayscale(0.3)',
                    display: { xs: 'none', sm: 'block' },
                  }}
                />

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.3 }}>
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--ink-soft)' }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto', pt: 1 }}>
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          fontSize: '0.7rem',
                          height: 22,
                          bgcolor: 'var(--paper-deep)',
                          color: 'var(--ink-soft)',
                          border: '1px solid var(--rule-strong)',
                          borderRadius: '4px',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* SKILLS */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <SectionTitle>Skills</SectionTitle>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            {skills.map((s) => (
              <Box key={s.label}>
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--ink-soft)',
                    mb: 1,
                  }}
                >
                  {s.label}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {s.items.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      sx={{
                        fontSize: '0.8rem',
                        height: 26,
                        bgcolor: 'transparent',
                        border: '1px solid var(--rule-strong)',
                        color: 'var(--ink)',
                        borderRadius: '4px',
                        '&:hover': { borderColor: 'var(--signal)', color: 'var(--signal)' },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* EDUCATION + LANGUAGES */}
        <Box
          sx={{
            mb: { xs: 8, md: 10 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: { xs: 6, sm: 6 },
          }}
        >
          <Box>
            <SectionTitle>Education</SectionTitle>
            <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>
              Bachelor of Computer Science
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: 'var(--ink-soft)', mt: 0.5 }}>
              Assumption University of Thailand
            </Typography>
            <Typography
              sx={{
                fontSize: '0.8rem',
                color: 'var(--ink-soft)',
                fontFamily: 'JetBrains Mono, monospace',
                mt: 0.5,
              }}
            >
              Jun 2022 — Oct 2025
            </Typography>
          </Box>

          <Box>
            <SectionTitle>Languages</SectionTitle>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                { name: 'English', level: 'Proficient' },
                { name: 'Burmese', level: 'Native' },
              ].map((l) => (
                <Box
                  key={l.name}
                  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>{l.name}</Typography>
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      color: 'var(--ink-soft)',
                      fontFamily: 'JetBrains Mono, monospace',
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
        <Box>
          <SectionTitle>Certificates</SectionTitle>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 2,
            }}
          >
            {certificates.map((c) => (
              <Box
                key={c.title}
                onClick={() => setEnlargedImgSrc(c.img)}
                className="is-interactive"
                sx={{
                  cursor: 'pointer',
                  border: '1px solid var(--rule-strong)',
                  overflow: 'hidden',
                  transition: 'border-color 160ms ease',
                  '&:hover': { borderColor: 'var(--signal)' },
                }}
              >
                <Box
                  component="img"
                  src={c.img}
                  alt={c.title}
                  sx={{
                    width: '100%',
                    height: 110,
                    objectFit: 'cover',
                    filter: 'grayscale(0.4)',
                    display: 'block',
                  }}
                />
                <Box sx={{ p: 1.5 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.85rem', lineHeight: 1.3 }}>
                    {c.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'var(--ink-soft)', mt: 0.25 }}>
                    {c.org} · {c.date}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Image modal */}
      {enlargedImgSrc && (
        <Box
          onClick={() => setEnlargedImgSrc(null)}
          sx={{
            position: 'fixed',
            inset: 0,
            bgcolor: 'rgba(0,0,0,0.85)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Box
            component="img"
            src={enlargedImgSrc}
            alt="Certificate"
            onClick={(e) => e.stopPropagation()}
            sx={{
              maxWidth: '90vw',
              maxHeight: '88vh',
              background: '#fff',
              cursor: 'default',
            }}
          />
        </Box>
      )}
    </>
  );
};

export default ProfilePage;
