import React, { useState, useCallback, useEffect, Suspense } from 'react';
import { Box, Typography, Button, Stack, Link, Collapse, Portal } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Download, ArrowForward, OpenInNew, KeyboardArrowDown, KeyboardArrowUp, Lock, Campaign } from '@mui/icons-material';
import type { SvgIconComponent } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Seo } from '../components/seo/Seo';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { SectionHeader } from '../components/ui/SectionHeader';

const HeroCanvas = React.lazy(() => import('../components/hero/HeroCanvas'));

const StatusBadge: React.FC<{ status: string; year?: string }> = ({ status, year }) => {
  const live = status === 'Live';
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}>
      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: live ? 'var(--success)' : 'var(--muted)' }} />
      <Typography sx={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>
        {status}{year ? ` · ${year}` : ''}
      </Typography>
    </Box>
  );
};

const skills: { label: string; items: string[] }[] = [
  { label: 'Languages & Frameworks', items: ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node', 'Express', 'Angular', 'C#', '.NET'] },
  { label: 'ML & Computer Vision', items: ['TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'YOLOv5'] },
  { label: 'Databases', items: ['MongoDB', 'Firestore', 'PostgreSQL'] },
  { label: 'Tools & Platforms', items: ['Git', 'WebSocket', 'Flask', 'Streamlit', 'Unity', 'Vercel', 'Firebase', 'Docker', 'n8n', 'Make'] },
];

type ExpItem = {
  logo?: string;
  icon?: SvgIconComponent;
  title: string;
  org: string;
  period: string;
  mode: string;
  body: string;
  link?: string;
  certificate?: string;
  badge?: string;
};

const experience: ExpItem[] = [
  {
    icon: Campaign,
    title: 'Guest Speaker / Workshop Instructor',
    org: 'RiseUp Organization',
    period: 'Jul 11–12, 2026',
    mode: 'Virtual · Zoom',
    badge: 'n8n Playground',
    body: 'Day 1: shared knowledge on AI automation and career pathways to 75–100 participants. Day 2: led a hands-on n8n workshop building AI-powered workflows from scratch.',
    certificate: 'certificates/Certificate for Guest Speaker.jpg',
  },
  {
    logo: 'logos/salesmind_ai_logo.jpeg',
    title: 'AI Automation Engineer',
    org: 'SalesMind AI',
    period: 'Jan 2026 - Jun 2026',
    mode: 'Hybrid · Completed',
    badge: 'Intern → Full-time',
    body: 'Built n8n workflows, LLM integrations, and CRM automations. Scaled lead intelligence pipelines and refined prompt systems in a full-time role after internship.',
  },
  {
    logo: 'logos/tech_creative_ltd.png',
    title: 'Software Developer',
    org: 'TechCreative LTD',
    period: 'Nov 2025 - Apr 2026',
    mode: 'Remote · Completed',
    badge: 'Intern',
    body: 'Feature development, research, testing, and iteration on a core product across the full engagement.',
  },
  {
    logo: 'logos/sumo.png',
    title: 'Software Engineer',
    org: 'Sumo Shabu Buffet',
    period: 'Jul 2025 - Oct 2025',
    mode: 'Thailand · Contract',
    badge: 'Contract',
    body: 'SaaS restaurant platform with 3D floor planning, LINE bot reservations, optimistic concurrency, and Stripe billing.',
  },
];

const certificates = [
  { img: 'certificates/microsoft.png', title: 'Foundation C# with Microsoft', org: 'Microsoft', date: 'July 31, 2025' },
  { img: 'certificates/unity.png', title: 'Unity Essentials Pathway', org: 'Unity Technologies', date: 'June 30, 2025' },
  { img: 'certificates/aws.png', title: 'AWS Academy Cloud Foundations', org: 'Amazon Web Services', date: 'September 20, 2023' },
  { img: 'certificates/parami.png', title: 'Management Skills', org: 'Parami University', date: 'October 8, 2021' },
  { img: 'certificates/physics.png', title: 'Physics Behind Internet', org: 'Parami University', date: 'October 8, 2021' },
];

type ProjectFilter = 'AI & Automation' | 'Full-Stack' | 'AR' | 'Game';

const aiProjects = [
  {
    id: 'salesmind',
    title: 'SalesMind AI: Lead Intelligence Automation',
    impact: 'Cut manual lead review and LLM costs by ~30% with a production pipeline that scores, classifies, and routes inbound leads automatically.',
    summary: 'Multi-stage LLM pipeline for lead scoring, classification, and AI-generated microsites, integrated into a live CRM via webhooks.',
    role: 'AI Automation Engineer · Jan 2026 – Jun 2026',
    stack: ['n8n', 'Google Vertex AI (Gemini)', 'JavaScript', 'GHL CRM APIs', 'Webhooks'],
    confidential: true,
    year: '2026',
    status: 'Completed',
    problem: 'Manual lead qualification, high misclassification rates, and no visibility into LLM token costs per workflow run.',
    solution: 'Two-stage pipeline with a pre-classifier gate before Gemini, plus an 11-tag enum system standardising lead signals across n8n workflows.',
    myRole: [
      'Designed lead scoring & status classification with a pre-classifier LLM gate (~30% token cost reduction)',
      'Built 11-tag canonical enum + intentQualifier taxonomy for consistent lead signal extraction',
      'Created n8n workflows for AI-generated buyer/seller microsites',
      'Developed conversation reply prompt system with natural tone and rejection handling',
      'Built execution tracker logging token cost per workflow run',
    ],
    result: 'Reduced misclassified leads and improved CRM handover quality with structured, consistent lead context.',
  },
];

const testimonials = [
  {
    quote:
      'Ye Myat Moe was assigned tasks related to prompt design and AI-related workflows. Throughout his internship, he maintained a professional attitude and communicated appropriately with team members.',
    source: 'Letter of Recommendation, SalesMind AI',
    note: 'Full document available — ',
  },
  {
    quote:
      'The Day-2 session gave me valuable hands-on experience with n8n. I learned how to build workflows, connect different tools, and automate tasks. It increased my confidence in using n8n for real-world projects.',
    source: 'Workshop participant, n8n Playground',
    note: 'Full workshop feedback available — ',
  },
];

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [enlargedImgSrc, setEnlargedImgSrc] = useState<string | null>(null);
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<string | null>(null);
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>('AI & Automation');
  const [showHero3d, setShowHero3d] = useState(true);

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setShowHero3d(!coarse && !reduced);
  }, []);

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
      <Seo
        title="Ye Myat Moe"
        description="AI automation engineer in Bangkok building production LLM workflows, n8n systems, and full-stack products."
        path="/"
        type="profile"
      />

      {/* Hero */}
      <Box
        component="section"
        aria-label="Introduction"
        sx={{
          position: 'relative',
          minHeight: { xs: '72vh', md: '82vh' },
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {showHero3d && (
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        )}
        <Box
          className="page-shell"
          sx={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            pb: { xs: 6, md: 8 },
            pt: { xs: 6, md: 10 },
          }}
        >
          {/* <Reveal>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                mb: 3,
                px: 1.25,
                py: 0.65,
                borderRadius: '999px',
                border: '1px solid rgba(22, 163, 74, 0.25)',
                bgcolor: 'rgba(22, 163, 74, 0.06)',
              }}
            >
              <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: 'var(--success)' }} />
              <Typography sx={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--fg-secondary)' }}>
                Available from July 2026
              </Typography>
            </Box>
          </Reveal> */}

          <Reveal delay={0.05}>
            <Typography
              component="h1"
              className="text-display"
              sx={{ fontSize: { xs: '3rem', sm: '4.5rem', md: '5.75rem' }, maxWidth: 900, mb: 2 }}
            >
              Building systems that people actually rely on.
            </Typography>
          </Reveal>

          <Reveal delay={0.1}>
            <Typography sx={{ fontSize: { xs: '1.05rem', md: '1.2rem' }, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 560, mb: 4 }}>
              I&apos;m Ye Myat Moe, an AI automation engineer in Bangkok. I design LLM pipelines, n8n workflows, and full-stack products for real teams.
            </Typography>
          </Reveal>

          <Reveal delay={0.15}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} sx={{ mb: 6 }}>
              <Button
                variant="contained"
                startIcon={<Download />}
                component="a"
                href="https://drive.google.com/uc?export=download&id=1JGdYT-T3XsmeqMlff0uObBj4N6yh1cil"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Button>
              <Button variant="outlined" endIcon={<ArrowForward />} onClick={() => navigate('/contact')}>
                Get in touch
              </Button>
            </Stack>
          </Reveal>

          <Reveal delay={0.2}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, sm: 4 } }}>
              {[
                { label: 'n8n Playground Event', sub: 'Guest Speaker' },
                { label: 'SalesMind AI', sub: 'Production LLM system' },
                { label: 'ABAC × MG – SAIC Motor', sub: 'Industry event' },
                { label: 'Sumo Shabu Buffet', sub: 'Live SaaS client' },
              ].map((item) => (
                <Box key={item.label}>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '-0.01em' }}>{item.label}</Typography>
                  <Typography sx={{ fontSize: '0.8125rem', color: 'var(--muted)', mt: 0.25 }}>{item.sub}</Typography>
                </Box>
              ))}
            </Box>
          </Reveal>
        </Box>
      </Box>

      {/* Experience */}
      <Box component="section" className="section-block page-shell" aria-labelledby="experience-heading">
        <Reveal>
          <SectionHeader
            label="Experience"
            title="Where I've shipped"
            description="From production AI pipelines to guest workshops and client SaaS."
          />
        </Reveal>
        <Stagger className="experience-list" stagger={0.06}>
          {experience.map((e) => (
            <StaggerItem key={e.title + e.org}>
              <Box
                className="surface-card"
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '48px 1fr auto' },
                  gap: { xs: 2, sm: 2.5 },
                  p: { xs: 2, md: 2.5 },
                  mb: 1.5,
                  alignItems: 'start',
                }}
              >
                {(() => {
                  const Icon = e.icon;
                  return (
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border)',
                        bgcolor: 'var(--bg-subtle)',
                        p: 0.75,
                        color: 'var(--fg)',
                      }}
                    >
                      {Icon ? (
                        <Icon sx={{ fontSize: '1.35rem' }} />
                      ) : e.logo ? (
                        <Box component="img" src={e.logo} alt="" sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      ) : (
                        <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--muted)' }}>
                          {e.org.split(' ').map((w) => w[0]).join('').slice(0, 3)}
                        </Typography>
                      )}
                    </Box>
                  );
                })()}

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
                    <Typography id="experience-heading" component="h3" sx={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '-0.02em' }}>
                      {e.title}
                    </Typography>
                    {e.badge && <span className="chip">{e.badge}</span>}
                  </Box>
                  <Typography sx={{ fontSize: '0.9375rem', color: 'var(--highlight)', fontWeight: 500, mb: 1 }}>
                    {e.certificate ? (
                      <Link
                        component="button"
                        type="button"
                        onClick={() => setEnlargedImgSrc(encodeURI(e.certificate!))}
                        underline="hover"
                        color="inherit"
                        sx={{
                          font: 'inherit',
                          fontWeight: 500,
                          cursor: 'pointer',
                          background: 'none',
                          border: 0,
                          p: 0,
                          verticalAlign: 'baseline',
                        }}
                      >
                        {e.org} <OpenInNew sx={{ fontSize: '0.75rem', verticalAlign: 'middle' }} />
                      </Link>
                    ) : e.link ? (
                      <Link href={e.link} target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
                        {e.org} <OpenInNew sx={{ fontSize: '0.75rem', verticalAlign: 'middle' }} />
                      </Link>
                    ) : e.org}
                  </Typography>
                  <Typography sx={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--muted)' }}>{e.body}</Typography>
                </Box>

                <Box sx={{ textAlign: { sm: 'right' } }}>
                  <Typography sx={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--fg-secondary)', whiteSpace: 'nowrap' }}>{e.period}</Typography>
                  <Typography sx={{ fontSize: '0.8125rem', color: 'var(--muted)', mt: 0.25 }}>{e.mode}</Typography>
                </Box>
              </Box>
            </StaggerItem>
          ))}
        </Stagger>
      </Box>

      {/* Testimonial */}
      <Box component="section" className="section-block page-shell">
        <Reveal>
          <SectionHeader
            label="Testimonial"
            title="What teams and participants say"
            description="From production work at SalesMind AI to guest speaking at RiseUp's n8n Playground workshop."
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {testimonials.map((t) => (
              <Box
                key={t.source + t.quote.slice(0, 24)}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  borderRadius: 'var(--radius-lg)',
                  bgcolor: 'var(--bg-subtle)',
                  border: '1px solid var(--border)',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    lineHeight: 1.55,
                    letterSpacing: '-0.02em',
                    color: 'var(--fg)',
                    mb: 2,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </Typography>
                <Typography sx={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
                  {t.source}
                </Typography>
                {t.note && (
                  <Typography sx={{ fontSize: '0.8125rem', color: 'var(--muted)', mt: 1, opacity: 0.8 }}>
                    {t.note}
                    <Box
                      component={RouterLink}
                      to="/contact"
                      sx={{
                        color: 'var(--highlight)',
                        textDecoration: 'none',
                        fontWeight: 500,
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      reach out
                    </Box>
                    .
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Reveal>
      </Box>

      {/* Projects */}
      <Box component="section" className="section-block page-shell" aria-labelledby="projects-heading">
        <Reveal>
          <SectionHeader
            label="Selected work"
            title="Projects"
            action={
              <Button variant="text" endIcon={<ArrowForward />} onClick={() => navigate('/work')} sx={{ color: 'var(--muted)', '&:hover': { color: 'var(--fg)' } }}>
                View all
              </Button>
            }
          />
        </Reveal>

        <Box sx={{ display: 'flex', gap: 0.75, mb: 4, flexWrap: 'wrap' }} role="tablist" aria-label="Project categories">
          {(['AI & Automation', 'Full-Stack', 'AR', 'Game'] as const).map((tab) => (
            <Box
              key={tab}
              component="button"
              type="button"
              role="tab"
              aria-selected={projectFilter === tab}
              onClick={() => setProjectFilter(tab)}
              className={projectFilter === tab ? 'chip chip-active' : 'chip'}
              sx={{ cursor: 'pointer', border: '1px solid var(--border)', fontFamily: 'inherit' }}
            >
              {tab}
            </Box>
          ))}
        </Box>

        <AnimatePresence mode="wait">
          <motion.div
            key={projectFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {projectFilter === 'AI & Automation' && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {aiProjects.map((ap) => (
                  <Box key={ap.id} className="surface-card" sx={{ p: { xs: 2, md: 3 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, flexWrap: 'wrap' }}>
                      <StatusBadge status={ap.status} year={ap.year} />
                      {ap.confidential && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Lock sx={{ fontSize: '0.875rem', color: 'var(--muted)' }} />
                          <Typography sx={{ fontSize: '0.75rem', color: 'var(--muted)' }}>NDA</Typography>
                        </Box>
                      )}
                    </Box>
                    <Typography component="h3" sx={{ fontWeight: 600, fontSize: '1.25rem', letterSpacing: '-0.02em', mb: 0.5 }}>
                      {ap.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8125rem', color: 'var(--muted)', mb: 2 }}>{ap.role}</Typography>
                    <Typography sx={{ fontSize: '1rem', lineHeight: 1.65, color: 'var(--fg-secondary)', mb: 2 }}>{ap.impact}</Typography>
                    <Typography sx={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--muted)', mb: 2 }}>{ap.summary}</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                      {ap.stack.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                      ))}
                    </Box>
                    <Button
                      variant="text"
                      onClick={() => setExpandedCaseStudy(expandedCaseStudy === ap.id ? null : ap.id)}
                      endIcon={expandedCaseStudy === ap.id ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                      sx={{ px: 0, color: 'var(--highlight)' }}
                    >
                      {expandedCaseStudy === ap.id ? 'Hide details' : 'Read case study'}
                    </Button>
                    <Collapse in={expandedCaseStudy === ap.id} timeout="auto" unmountOnExit>
                      <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid var(--border)' }}>
                        {[
                          { key: 'Problem', content: ap.problem },
                          { key: 'Solution', content: ap.solution },
                          { key: 'Result', content: ap.result },
                        ].map((section) => (
                          <Box key={section.key} sx={{ mb: 2.5 }}>
                            <Typography className="text-label" sx={{ mb: 0.75 }}>{section.key}</Typography>
                            <Typography sx={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--muted)' }}>{section.content}</Typography>
                          </Box>
                        ))}
                        <Typography className="text-label" sx={{ mb: 1 }}>My role</Typography>
                        <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                          {ap.myRole.map((item) => (
                            <Box component="li" key={item} sx={{ mb: 0.75 }}>
                              <Typography sx={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--muted)' }}>{item}</Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Collapse>
                  </Box>
                ))}
              </Box>
            )}

            {(projectFilter === 'Full-Stack' || projectFilter === 'AR' || projectFilter === 'Game') && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {projects
                  .filter((p) => p.category === projectFilter)
                  .map((project) => (
                    <Box
                      key={project.id}
                      component={motion.div}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => navigate(`/work/${project.slug}`)}
                      className="surface-card"
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '220px 1fr' },
                        gap: 2.5,
                        p: 2,
                        cursor: 'pointer',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        alt=""
                        sx={{
                          width: '100%',
                          aspectRatio: '16/10',
                          objectFit: 'cover',
                          borderRadius: 'var(--radius-md)',
                          display: { xs: 'none', sm: 'block' },
                        }}
                      />
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, flexWrap: 'wrap' }}>
                          <span className="chip">{project.category}</span>
                          {project.status && <StatusBadge status={project.status} year={project.year} />}
                        </Box>
                        <Typography sx={{ fontWeight: 600, fontSize: '1.125rem', letterSpacing: '-0.02em', mb: 0.75 }}>
                          {project.title}
                        </Typography>
                        {project.impact && (
                          <Typography sx={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--fg-secondary)', mb: 1 }}>
                            {project.impact}
                          </Typography>
                        )}
                        <Typography sx={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--muted)' }}>
                          {project.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
              </Box>
            )}
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Skills */}
      <Box component="section" className="section-block page-shell">
        <Reveal>
          <SectionHeader label="Skills" title="Tools I work with" />
        </Reveal>
        <Stagger stagger={0.05}>
          {skills.map((s) => (
            <StaggerItem key={s.label}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '200px 1fr' }, gap: 2, mb: 3, alignItems: 'start' }}>
                <Typography className="text-label">{s.label}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {s.items.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </Box>
              </Box>
            </StaggerItem>
          ))}
        </Stagger>
      </Box>

      {/* Education + Certificates */}
      <Box component="section" className="section-block page-shell">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.2fr' }, gap: { xs: 6, md: 8 } }}>
          <Reveal>
            <SectionHeader label="Education" title="Background" />
            <Typography sx={{ fontWeight: 600, fontSize: '1.05rem' }}>Bachelor of Computer Science</Typography>
            <Typography sx={{ color: 'var(--muted)', mt: 0.5 }}>Assumption University of Thailand</Typography>
            <Typography sx={{ color: 'var(--muted)', fontSize: '0.875rem', mt: 0.5 }}>Jun 2022 - Oct 2025</Typography>
            <Box sx={{ mt: 4 }}>
              <Typography className="text-label" sx={{ mb: 1.5 }}>Languages</Typography>
              {[{ name: 'English', level: 'Proficient' }, { name: 'Burmese', level: 'Native' }].map((l) => (
                <Box key={l.name} sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: 280, mb: 1 }}>
                  <Typography sx={{ fontWeight: 500 }}>{l.name}</Typography>
                  <Typography sx={{ color: 'var(--muted)', fontSize: '0.875rem' }}>{l.level}</Typography>
                </Box>
              ))}
            </Box>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeader label="Certificates" />
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 1.5 }}>
              {certificates.map((c) => (
                <Box
                  key={c.title}
                  component="button"
                  type="button"
                  onClick={() => setEnlargedImgSrc(c.img)}
                  className="surface-card"
                  sx={{
                    cursor: 'pointer',
                    p: 0,
                    textAlign: 'left',
                    overflow: 'hidden',
                    bgcolor: 'var(--bg-elevated)',
                  }}
                >
                  <Box component="img" src={c.img} alt={c.title} sx={{ width: '100%', height: 100, objectFit: 'cover', display: 'block' }} />
                  <Box sx={{ p: 1.5 }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.35, color: 'var(--fg)' }}>{c.title}</Typography>
                    <Typography sx={{ fontSize: '0.8125rem', color: 'var(--muted)', mt: 0.35 }}>{c.org}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Reveal>
        </Box>
      </Box>

      {enlargedImgSrc && (
        <Portal>
          <Box
            onClick={() => setEnlargedImgSrc(null)}
            sx={{
              position: 'fixed',
              inset: 0,
              bgcolor: 'rgba(9, 9, 11, 0.72)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
            }}
          >
            <Box
              component="img"
              src={enlargedImgSrc}
              alt="Certificate"
              onClick={(e) => e.stopPropagation()}
              sx={{ maxWidth: 'min(90vw, 720px)', maxHeight: '88vh', borderRadius: 'var(--radius-md)', bgcolor: '#fff' }}
            />
          </Box>
        </Portal>
      )}
    </>
  );
};

export default ProfilePage;
