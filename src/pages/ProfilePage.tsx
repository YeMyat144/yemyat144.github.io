import React, { useState, useCallback, useEffect } from 'react';
import { Box, Typography, Button, Stack, Link, Collapse, Portal } from '@mui/material';
import { Download, ArrowForward, OpenInNew, KeyboardArrowDown, KeyboardArrowUp, Lock } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { projects } from '../data/projects';

// ─────────────────────────────────────────────────────────────────────────────
// Shared primitives
// ─────────────────────────────────────────────────────────────────────────────

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3.5, width: '100%' }}>
    <Typography
      component="h2"
      sx={{
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        fontFamily: 'JetBrains Mono, monospace',
        color: 'var(--ink)',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
    >
      {children}
    </Typography>
    <Box sx={{ flex: 1, height: '1px', bgcolor: 'var(--rule-strong)' }} />
  </Box>
);

const StatusBadge: React.FC<{ status: string; year?: string }> = ({ status, year }) => {
  const color =
    status === 'Live' ? '#2E7D32' :
    status === 'In Development' ? 'var(--signal)' :
    'var(--ink-soft)';
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.6 }}>
      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: color, flexShrink: 0 }} />
      <Typography sx={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color }}>
        {status}{year ? ` · ${year}` : ''}
      </Typography>
    </Box>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Static data
// ─────────────────────────────────────────────────────────────────────────────

const skills: { label: string; items: string[] }[] = [
  { label: 'Languages & Frameworks', items: ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node', 'Express', 'Angular', 'C#', '.NET'] },
  { label: 'ML & Computer Vision', items: ['TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'YOLOv5'] },
  { label: 'Databases', items: ['MongoDB', 'Firestore', 'PostgreSQL'] },
  { label: 'Tools & Platforms', items: ['Git', 'WebSocket', 'Flask', 'Streamlit', 'Unity', 'Vercel', 'Firebase', 'Docker', 'n8n', 'Make'] },
];

type ExpItem = { logo: string; title: string; org: string; period: string; mode: string; body: string; link?: string; badge?: string };

const experience: ExpItem[] = [
  {
    logo: 'logos/salesmind_ai_logo.jpeg',
    title: 'AI Automation Engineer',
    org: 'SalesMind AI',
    period: 'Jan 2026 — Jun 2026',
    mode: 'Hybrid · Completed',
    badge: 'Intern → Full-time',
    body: 'Designed n8n workflows, wrote JavaScript for custom automations, and connected LLMs with CRMs through APIs and webhooks — with a strong focus on prompt design and testing. Continued in a full-time role scaling lead intelligence pipelines, refining prompt systems, and integrating AI tools with CRM infrastructure.',
  },
  {
    logo: 'logos/tech_creative_ltd.png',
    title: 'Software Developer',
    org: 'TechCreative LTD',
    period: 'Nov 2025 — Apr 2026',
    mode: 'Remote · Completed',
    badge: 'Intern',
    body: 'Contributed to a core product through feature development, research, testing, and iteration — shipping and improving real product functionality across the engagement.',
  },
  {
    logo: 'logos/sumo.png',
    title: 'Software Engineer',
    org: 'Sumo Shabu Buffet',
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
  { img: 'certificates/microsoft.png', title: 'Foundation C# with Microsoft', org: 'Microsoft', date: 'July 31, 2025' },
  { img: 'certificates/unity.png', title: 'Unity Essentials Pathway', org: 'Unity Technologies', date: 'June 30, 2025' },
  { img: 'certificates/aws.png', title: 'AWS Academy Cloud Foundations', org: 'Amazon Web Services', date: 'September 20, 2023' },
  { img: 'certificates/parami.png', title: 'Management Skills', org: 'Parami University', date: 'October 8, 2021' },
  { img: 'certificates/physics.png', title: 'Physics Behind Internet', org: 'Parami University', date: 'October 8, 2021' },
];

type ProjectFilter = 'All' | 'AI & Automation' | 'Full-Stack' | 'AR' | 'Game';

const aiProjects = [
  {
    id: 'salesmind',
    title: 'SalesMind AI — Lead Intelligence Automation',
    impact: 'Saved the sales team hours of manual lead review every day — an AI pipeline now scores, classifies, and routes every inbound lead automatically, cutting wrong classifications and LLM costs by ~30%.',
    summary: 'Multi-stage LLM pipeline for lead scoring, classification, and AI-generated buyer/seller microsites — integrated into a live CRM via webhooks.',
    role: 'AI Automation Engineer · Jan 2026 – Jun 2026',
    stack: ['n8n', 'Google Vertex AI (Gemini)', 'JavaScript', 'GHL CRM APIs', 'Webhooks'],
    confidential: true,
    year: '2026',
    status: 'Completed',
    problem: 'The sales team spent hours manually qualifying inbound leads, leading to high misclassification rates, inconsistent handover quality, and zero visibility into LLM token costs per workflow run.',
    solution: 'A two-stage classification pipeline: a lightweight pre-classifier routes low-signal leads before they reach the full Gemini model, cutting token usage ~30%. A canonical 11-tag enum system with an intentQualifier field standardises lead signals across all n8n workflows.',
    myRole: [
      'Designed lead scoring & status classification with a pre-classifier LLM gate (~30% token cost reduction)',
      'Built 11-tag canonical enum + intentQualifier taxonomy for consistent lead signal extraction',
      'Created n8n workflows for AI-generated buyer/seller microsites',
      'Developed conversation reply prompt system with natural tone and rejection handling',
      'Built execution tracker logging token cost per workflow run',
    ],
    result: 'Reduced misclassified leads and cut LLM costs ~30% via the pre-classification gate. Improved sales handover quality with structured, consistent lead context delivered to the CRM.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [enlargedImgSrc, setEnlargedImgSrc] = useState<string | null>(null);
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<string | null>(null);
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>('All');

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

      <Box sx={{ maxWidth: 900, mx: 'auto', px: { xs: 2.5, md: 4 }, py: { xs: 5, md: 8 } }}>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <Box sx={{ mb: { xs: 8, md: 10 }, pb: { xs: 6, md: 8 }, borderBottom: '1px solid var(--rule-strong)' }}>

          {/* Eyebrow */}
          <Typography sx={{ fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-soft)', mb: 2.5 }}>
            Software Engineer · Bangkok
          </Typography>

          <Typography
            component="h1"
            sx={{ fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4.2rem' }, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.025em', mb: 1.5 }}
          >
            Ye Myat Moe
          </Typography>

          <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, color: 'var(--signal)', fontWeight: 500, mb: 3, letterSpacing: '-0.01em' }}>
            AI automation, LLM workflows, and full-stack products
          </Typography>

          {/* ① Availability badge */}
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 3, px: 1.5, py: 0.75, border: '1px solid rgba(46,125,50,0.4)', bgcolor: 'rgba(46,125,50,0.06)' }}>
            <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: '#2E7D32', flexShrink: 0, boxShadow: '0 0 0 2px rgba(46,125,50,0.25)' }} />
            <Typography sx={{ fontSize: '0.72rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2E7D32', fontWeight: 600 }}>
              Available for hire · From July 2026
            </Typography>
          </Box>

          <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.75, maxWidth: 580, color: 'var(--ink-soft)', mb: 4.5 }}>
            I build production-grade AI pipelines and full-stack web apps.
            Previously an AI Automation Engineer at <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>SalesMind AI</strong> and
            Software Developer intern at <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>TechCreative LTD</strong>.
            Open to full-time roles, contracts, and freelance projects.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1.25, sm: 1.5 }} sx={{ width: '100%', maxWidth: { xs: '100%', sm: 420 }, mb: 5 }}>
            <Button
              variant="contained"
              startIcon={<Download />}
              component="a"
              href="https://drive.google.com/uc?export=download&id=1c_tt5AwgSuW1zuJqUPRugBzfDf0m6_E9"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ width: { xs: '100%', sm: 'auto' }, flex: { sm: 1 }, justifyContent: 'center', py: 1.5, px: 3, fontSize: '0.72rem', letterSpacing: '0.1em' }}
            >
              Download CV
            </Button>
            <Button
              variant="outlined"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/contact')}
              sx={{ width: { xs: '100%', sm: 'auto' }, flex: { sm: 1 }, justifyContent: 'center', py: 1.5, px: 3, fontSize: '0.72rem', letterSpacing: '0.1em' }}
            >
              Get in touch
            </Button>
          </Stack>

          {/* ⑦ "As seen at" social proof strip */}
          <Box sx={{ pt: 3.5, borderTop: '1px solid var(--rule-strong)' }}>
            <Typography sx={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-soft)', mb: 1.5, opacity: 0.7 }}>
              As seen at / used by
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, sm: 4 }, alignItems: 'center' }}>
              {[
                { label: 'ABAC × MG – SAIC Motor', sub: 'Industry event · Jan 2026' },
                { label: 'SalesMind AI', sub: 'Production LLM system' },
                { label: 'Sumo Shabu Buffet', sub: 'Live client · FoodLoft' },
                { label: 'NetMonitoringTech.com', sub: 'Live website' },
              ].map((item) => (
                <Box key={item.label}>
                  <Typography sx={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.3 }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--ink-soft)', letterSpacing: '0.06em' }}>
                    {item.sub}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ── WHAT I DO — 3 pillars ─────────────────────────────────────────── */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <SectionTitle>What I Do</SectionTitle>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: { xs: 3, sm: 3 } }}>
            {[
              {
                num: '01',
                title: 'AI & Automation',
                body: 'I build LLM workflows, prompt systems, and automation pipelines — things that replace repetitive human work with reliable AI. Tools: n8n, Gemini, CRM APIs.',
              },
              {
                num: '02',
                title: 'Full-Stack Web',
                body: "I ship complete web and mobile products — from database to UI — with real users, payments, and third-party integrations. Not just demos; things people actually use.",
              },
              {
                num: '03',
                title: 'AR & Interactive',
                body: "I've built AR experiences presented at official industry events and 3D games played in the browser. I work with Unity, C#, and AR Foundation for spatial computing.",
              },
            ].map((pillar) => (
              <Box key={pillar.num} sx={{ borderTop: '2px solid var(--signal)', pt: 2.5 }}>
                <Typography sx={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.12em', color: 'var(--ink-soft)', mb: 1 }}>
                  {pillar.num}
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: '1rem', mb: 1.25, letterSpacing: '-0.01em' }}>
                  {pillar.title}
                </Typography>
                <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--ink-soft)' }}>
                  {pillar.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <SectionTitle>Experience</SectionTitle>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {experience.map((e, idx) => (
              <Box
                key={e.title + e.org}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '52px 1fr' },
                  gap: { xs: 1.5, sm: 3 },
                  py: 3.5,
                  pl: { xs: idx === 0 ? 1.5 : 0, sm: 0 },
                  borderBottom: '1px solid var(--rule-strong)',
                  borderLeft: { xs: idx === 0 ? '2px solid var(--signal)' : 'none', sm: 'none' },
                  ...(idx === 0 && { borderTop: '1px solid var(--rule-strong)' }),
                }}
              >
                <Box
                  component="img"
                  src={e.logo}
                  alt={e.org}
                  sx={{ width: 40, height: 40, objectFit: 'contain', objectPosition: 'center', filter: 'grayscale(1) contrast(1.1)', mixBlendMode: 'multiply', display: { xs: 'none', sm: 'block' }, mt: 0.5, opacity: idx === 0 ? 1 : 0.7 }}
                />
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1, flexWrap: 'wrap', mb: 0.75 }}>
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                          {e.title}
                        </Typography>
                        {e.badge && (
                          <Box sx={{ display: 'inline-flex', alignItems: 'center', px: 1, py: 0.25, border: '1px solid var(--signal)', bgcolor: 'rgba(var(--signal-rgb, 180,120,0),0.07)' }}>
                            <Typography sx={{ fontSize: '0.62rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--signal)', fontWeight: 600, lineHeight: 1.4 }}>
                              {e.badge}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                      <Typography sx={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--signal)', mt: 0.25 }}>
                        {e.link ? (
                          <Link href={e.link} target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
                            {e.org} <OpenInNew sx={{ fontSize: '0.7rem', verticalAlign: 'middle' }} />
                          </Link>
                        ) : e.org}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: { sm: 'right' } }}>
                      <Typography sx={{ fontSize: '0.75rem', color: 'var(--ink-soft)', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap' }}>
                        {e.period}
                      </Typography>
                      <Typography sx={{ fontSize: '0.7rem', color: 'var(--ink-soft)', fontFamily: 'JetBrains Mono, monospace', opacity: 0.75 }}>
                        {e.mode}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--ink-soft)' }}>
                    {e.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── LETTER OF RECOMMENDATION ─────────────────────────────────────── */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <SectionTitle>Testimonial</SectionTitle>
          <Box sx={{ border: '1px solid var(--rule-strong)', p: { xs: 2.5, md: 3 } }}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1, pb: 2, mb: 2.5, borderBottom: '1px solid var(--rule-strong)' }}>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: '-0.01em' }}>SalesMind AI</Typography>
                <Typography sx={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--ink-soft)', mt: 0.25, letterSpacing: '0.06em' }}>
                  Letter of Recommendation
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.72rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--ink-soft)', letterSpacing: '0.06em' }}>
                Jan 5 – Apr 5, 2026
              </Typography>
            </Box>
            {/* Excerpt */}
            <Typography
              sx={{
                fontFamily: 'Fraunces, serif',
                fontSize: { xs: '1.05rem', md: '1.2rem' },
                fontStyle: 'italic',
                lineHeight: 1.75,
                color: 'var(--ink)',
                mb: 2.5,
                fontVariationSettings: '"opsz" 144, "SOFT" 80',
              }}
            >
              "Ye Myat Moe was assigned tasks related to prompt design and AI-related workflows.
              He supported the team in testing prompts, refining outputs, and assisting with basic AI
              content generation tasks … Throughout his internship, he maintained a professional attitude
              and communicated appropriately with team members. His time at SalesMind AI provided him
              with foundational experience in AI-related work and team collaboration."
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ width: 2, height: 28, bgcolor: 'var(--signal)', flexShrink: 0 }} />
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: '0.85rem' }}>SalesMind AI</Typography>
                <Typography sx={{ fontSize: '0.72rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--ink-soft)', letterSpacing: '0.06em' }}>
                  AI Prompt Engineer Intern · Official Letter of Recommendation
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <SectionTitle>Projects</SectionTitle>
            <Box
              component="button"
              type="button"
              onClick={() => navigate('/projects')}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--ink-soft)',
                transition: 'color 140ms ease',
                flexShrink: 0,
                mb: 1.5,
                '&:hover': { color: 'var(--signal)' },
              }}
            >
              View all
              <ArrowForward sx={{ fontSize: '0.8rem' }} />
            </Box>
          </Box>

          {/* Filter tabs */}
          <Box sx={{ display: 'flex', gap: 0.75, mb: 4, flexWrap: 'wrap', borderBottom: '1px solid var(--rule-strong)', pb: 2.5 }}>
            {(['All', 'AI & Automation', 'Full-Stack', 'AR', 'Game'] as const).map((tab) => (
              <Box
                key={tab}
                component="button"
                type="button"
                onClick={() => setProjectFilter(tab)}
                sx={{
                  fontSize: '0.68rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  px: 1.5,
                  py: 0.6,
                  border: '1px solid',
                  borderRadius: '2px',
                  borderColor: projectFilter === tab ? 'var(--ink)' : 'var(--rule-strong)',
                  color: projectFilter === tab ? 'var(--paper)' : 'var(--ink-soft)',
                  bgcolor: projectFilter === tab ? 'var(--ink)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 140ms ease',
                  '&:hover': { borderColor: 'var(--ink)', color: projectFilter === tab ? 'var(--paper)' : 'var(--ink)' },
                }}
              >
                {tab}
              </Box>
            ))}
          </Box>

          {/* AI & AUTOMATION CARDS */}
          {(projectFilter === 'All' || projectFilter === 'AI & Automation') && (
            <Box sx={{ mb: projectFilter === 'All' ? 4 : 0 }}>
              {projectFilter === 'All' && (
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft)', mb: 2 }}>
                  AI &amp; Automation
                </Typography>
              )}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {aiProjects.map((ap) => (
                  <Box
                    key={ap.id}
                    sx={{ border: '1px solid', borderColor: expandedCaseStudy === ap.id ? 'var(--signal)' : 'var(--rule-strong)', p: 2.5, transition: 'border-color 160ms ease' }}
                  >
                    {/* Eyebrow */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.75, flexWrap: 'wrap' }}>
                      <Typography sx={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--signal)', fontWeight: 600 }}>
                        AI &amp; Automation
                      </Typography>
                      <StatusBadge status={ap.status} year={ap.year} />
                      {ap.confidential && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
                          <Lock sx={{ fontSize: '0.6rem', color: 'var(--ink-soft)' }} />
                          <Typography sx={{ fontSize: '0.65rem', color: 'var(--ink-soft)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                            NDA · architecture overview only
                          </Typography>
                        </Box>
                      )}
                    </Box>

                    <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.25, letterSpacing: '-0.02em', mb: 0.5 }}>
                      {ap.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'var(--ink-soft)', fontFamily: 'JetBrains Mono, monospace', opacity: 0.8, mb: 1.5 }}>
                      {ap.role}
                    </Typography>

                    {/* ② Plain-English impact */}
                    <Box sx={{ bgcolor: 'var(--paper-deep)', border: '1px solid var(--rule-strong)', borderLeft: '2px solid var(--signal)', px: 1.5, py: 1, mb: 1.5 }}>
                      <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--ink)', fontStyle: 'italic' }}>
                        {ap.impact}
                      </Typography>
                    </Box>

                    <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.65, color: 'var(--ink-soft)', mb: 1.5 }}>
                      {ap.summary}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.75 }}>
                      {ap.stack.map((tech) => (
                        <Typography key={tech} sx={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--signal)', border: '1px solid var(--signal)', px: 0.75, py: 0.35, lineHeight: 1.4 }}>
                          {tech}
                        </Typography>
                      ))}
                    </Box>

                    <Box
                      component="button"
                      type="button"
                      onClick={() => setExpandedCaseStudy(expandedCaseStudy === ap.id ? null : ap.id)}
                      sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, mt: 0.5, p: 0, border: 'none', background: 'none', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--signal)', transition: 'opacity 140ms ease', '&:hover': { opacity: 0.75 } }}
                    >
                      {expandedCaseStudy === ap.id ? 'Hide case study' : 'View case study'}
                      {expandedCaseStudy === ap.id ? <KeyboardArrowUp sx={{ fontSize: '1rem' }} /> : <KeyboardArrowDown sx={{ fontSize: '1rem' }} />}
                    </Box>

                    <Collapse in={expandedCaseStudy === ap.id} timeout="auto" unmountOnExit>
                      <Box sx={{ mt: 2.5, pt: 2.5, borderTop: '1px solid var(--rule-strong)' }}>
                        <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft)', mb: 1.5 }}>
                          Workflow Architecture
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', overflowX: 'auto', pb: 1.5, mb: 3, gap: 0 }}>
                          {[
                            { label: 'Inbound Lead', sub: 'CRM / Webhook' },
                            { label: 'n8n Trigger', sub: 'entry point' },
                            { label: 'Pre-Classifier', sub: 'LLM gate ★', highlight: true },
                            { label: 'Gemini Chain', sub: 'full LLM' },
                            { label: 'CRM + Microsite', sub: 'output' },
                          ].map((step, i, arr) => (
                            <React.Fragment key={step.label}>
                              <Box sx={{ px: 1.5, py: 1, border: '1px solid', borderColor: step.highlight ? 'var(--signal)' : 'var(--rule-strong)', textAlign: 'center', minWidth: 90, flexShrink: 0 }}>
                                <Typography sx={{ fontSize: '0.72rem', fontWeight: step.highlight ? 700 : 500, fontFamily: 'JetBrains Mono, monospace', color: step.highlight ? 'var(--signal)' : 'var(--ink)', lineHeight: 1.4 }}>
                                  {step.label}
                                </Typography>
                                <Typography sx={{ fontSize: '0.62rem', color: 'var(--ink-soft)', fontFamily: 'JetBrains Mono, monospace' }}>
                                  {step.sub}
                                </Typography>
                              </Box>
                              {i < arr.length - 1 && (
                                <Typography sx={{ color: 'var(--ink-soft)', px: 0.75, fontSize: '1rem', flexShrink: 0, lineHeight: 1, userSelect: 'none' }}>→</Typography>
                              )}
                            </React.Fragment>
                          ))}
                        </Box>
                        {[
                          { key: 'Problem', content: ap.problem },
                          { key: 'Solution', content: ap.solution },
                          { key: 'Stack', content: ap.stack.join(' · ') },
                          { key: 'Result', content: ap.result },
                        ].map((section) => (
                          <Box key={section.key} sx={{ mb: 2 }}>
                            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--signal)', mb: 0.5 }}>
                              {section.key}
                            </Typography>
                            <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                              {section.content}
                            </Typography>
                          </Box>
                        ))}
                        <Box>
                          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--signal)', mb: 0.75 }}>
                            My Role
                          </Typography>
                          <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                            {ap.myRole.map((item) => (
                              <Box component="li" key={item} sx={{ mb: 0.5 }}>
                                <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--ink-soft)' }}>{item}</Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    </Collapse>
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          {/* FULL-STACK / AR / GAME CARDS */}
          {(projectFilter === 'All' || projectFilter === 'Full-Stack' || projectFilter === 'AR' || projectFilter === 'Game') && (
            <Box>
              {projectFilter === 'All' && (
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft)', mb: 2 }}>
                  Full-Stack · AR · Game
                </Typography>
              )}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {projects
                  .filter((p) => projectFilter === 'All' ? true : p.category === projectFilter)
                  .slice(0, projectFilter === 'All' ? 4 : 10)
                  .map((project) => (
                    <Box
                      key={project.id}
                      onClick={() => navigate(`/projects/${project.slug}`)}
                      className="is-interactive"
                      sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '200px 1fr' }, gap: { xs: 2, sm: 3 }, p: 2.5, border: '1px solid var(--rule-strong)', cursor: 'pointer', transition: 'border-color 160ms ease, background 160ms ease', '&:hover': { borderColor: 'var(--signal)', background: 'var(--paper-deep)' } }}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', filter: 'grayscale(1) contrast(1.05)', display: { xs: 'none', sm: 'block' } }}
                      />
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                        {/* Eyebrow */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 0.25 }}>
                          <Typography sx={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--signal)', fontWeight: 600 }}>
                            {project.category}
                          </Typography>
                          {project.status && <StatusBadge status={project.status} year={project.year} />}
                          {project.private && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.35 }}>
                              <Lock sx={{ fontSize: '0.6rem', color: 'var(--ink-soft)' }} />
                              <Typography sx={{ fontSize: '0.65rem', color: 'var(--ink-soft)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Private</Typography>
                            </Box>
                          )}
                        </Box>

                        <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                          {project.title}
                        </Typography>

                        {(project.role || project.client) && (
                          <Typography sx={{ fontSize: '0.75rem', color: 'var(--ink-soft)', fontFamily: 'JetBrains Mono, monospace', opacity: 0.8 }}>
                            {[project.role, project.client].filter(Boolean).join(' · ')}
                          </Typography>
                        )}

                        {/* ② Plain-English impact — shown if available */}
                        {project.impact && (
                          <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.65, color: 'var(--ink)', fontStyle: 'italic' }}>
                            {project.impact}
                          </Typography>
                        )}

                        <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                          {project.description}
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 'auto', pt: 0.75 }}>
                          {project.techStack.slice(0, 5).map((tech) => (
                            <Typography key={tech} sx={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-soft)', bgcolor: 'var(--paper-deep)', border: '1px solid var(--rule-strong)', px: 0.75, py: 0.35, lineHeight: 1 }}>
                              {tech}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  ))}
              </Box>
            </Box>
          )}
        </Box>

        {/* ── SKILLS ───────────────────────────────────────────────────────── */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <SectionTitle>Skills</SectionTitle>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {skills.map((s) => (
              <Box key={s.label} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '160px 1fr' }, gap: { xs: 1, sm: 3 }, alignItems: 'start' }}>
                <Typography sx={{ fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'JetBrains Mono, monospace', color: 'var(--ink-soft)', pt: { sm: 0.25 } }}>
                  {s.label}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {s.items.map((item) => (
                    <Typography key={item} sx={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--ink)', border: '1px solid var(--rule-strong)', px: 1, py: 0.4, lineHeight: 1, transition: 'border-color 140ms ease, color 140ms ease', '&:hover': { borderColor: 'var(--signal)', color: 'var(--signal)' } }}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── EDUCATION + LANGUAGES ────────────────────────────────────────── */}
        <Box sx={{ mb: { xs: 8, md: 10 }, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: 6, sm: 6 } }}>
          <Box>
            <SectionTitle>Education</SectionTitle>
            <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Bachelor of Computer Science</Typography>
            <Typography sx={{ fontSize: '0.9rem', color: 'var(--ink-soft)', mt: 0.5 }}>Assumption University of Thailand</Typography>
            <Typography sx={{ fontSize: '0.8rem', color: 'var(--ink-soft)', fontFamily: 'JetBrains Mono, monospace', mt: 0.5 }}>
              Jun 2022 — Oct 2025
            </Typography>
          </Box>
          <Box>
            <SectionTitle>Languages</SectionTitle>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[{ name: 'English', level: 'Proficient' }, { name: 'Burmese', level: 'Native' }].map((l) => (
                <Box key={l.name} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>{l.name}</Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'var(--ink-soft)', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase' }}>
                    {l.level}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ── CERTIFICATES ─────────────────────────────────────────────────── */}
        <Box>
          <SectionTitle>Certificates</SectionTitle>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2 }}>
            {certificates.map((c) => (
              <Box
                key={c.title}
                onClick={() => setEnlargedImgSrc(c.img)}
                className="is-interactive"
                sx={{ cursor: 'pointer', border: '1px solid var(--rule-strong)', overflow: 'hidden', transition: 'border-color 160ms ease', '&:hover': { borderColor: 'var(--signal)' } }}
              >
                <Box component="img" src={c.img} alt={c.title} sx={{ width: '100%', height: 110, objectFit: 'cover', filter: 'grayscale(1) contrast(1.05)', display: 'block' }} />
                <Box sx={{ p: 1.5 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.85rem', lineHeight: 1.3 }}>{c.title}</Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'var(--ink-soft)', mt: 0.25 }}>{c.org} · {c.date}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Image modal */}
      {enlargedImgSrc && (
        <Portal>
          <Box
            onClick={() => setEnlargedImgSrc(null)}
            sx={{ position: 'fixed', inset: 0, bgcolor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <Box
              component="img"
              src={enlargedImgSrc}
              alt="Certificate"
              onClick={(e) => e.stopPropagation()}
              sx={{ maxWidth: '90vw', maxHeight: '88vh', background: '#fff', cursor: 'default' }}
            />
          </Box>
        </Portal>
      )}
    </>
  );
};

export default ProfilePage;
