import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Reveal } from '../components/motion/Reveal';
import { SectionHeader } from '../components/ui/SectionHeader';

const MotionImg = motion.img;

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const [hoverId, setHoverId] = useState<number | null>(null);
  const active = projects.find((p) => p.id === hoverId) ?? projects[0];

  return (
    <>
      <Helmet>
        <title>Work · Ye Myat Moe</title>
      </Helmet>

      <Box className="page-shell" sx={{ py: { xs: 5, md: 8 } }}>
        <Reveal>
          <SectionHeader
            label="Work"
            title="Projects shipped in production and beyond"
            description="Hover to preview. Click any project for the full write-up."
          />
        </Reveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 340px' },
            gap: { xs: 0, lg: 6 },
            alignItems: 'start',
          }}
        >
          <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
            {projects.map((project, i) => {
              const isActive = hoverId === project.id;
              return (
                <Box
                  component="li"
                  key={project.id}
                  onMouseEnter={() => setHoverId(project.id)}
                  onFocus={() => setHoverId(project.id)}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(`/projects/${project.slug}`)}
                  tabIndex={0}
                  role="link"
                  sx={{
                    cursor: 'pointer',
                    py: 2.5,
                    borderTop: '1px solid var(--border)',
                    borderBottom: i === projects.length - 1 ? '1px solid var(--border)' : 0,
                    display: 'grid',
                    gridTemplateColumns: { xs: '40px 1fr', md: '52px 1fr auto' },
                    gap: 2,
                    alignItems: 'center',
                    transition: 'padding-left 200ms var(--ease-out)',
                    pl: isActive ? 1 : 0,
                    '&:hover': { pl: 1 },
                  }}
                >
                  <Typography sx={{ fontSize: '0.8125rem', color: 'var(--muted)', fontWeight: 500 }}>
                    {String(i + 1).padStart(2, '0')}
                  </Typography>

                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: '1.25rem', md: '1.65rem' },
                        fontWeight: 600,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15,
                        color: isActive ? 'var(--fg)' : 'var(--fg-secondary)',
                        transition: 'color 160ms ease',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography sx={{ mt: 0.75, fontSize: '0.9375rem', lineHeight: 1.55, color: 'var(--muted)' }}>
                      {project.description}
                    </Typography>
                  </Box>

                  <Box sx={{ display: { xs: 'none', md: 'flex' }, flexWrap: 'wrap', gap: 0.5, justifyContent: 'flex-end', maxWidth: 200 }}>
                    {project.techStack.slice(0, 2).map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box sx={{ display: { xs: 'none', lg: 'block' }, position: 'sticky', top: 96 }}>
            <Box
              className="surface-card"
              sx={{ overflow: 'hidden', aspectRatio: '4/5', p: 0, borderRadius: 'var(--radius-lg)' }}
            >
              <AnimatePresence mode="wait">
                <MotionImg
                  key={active.id}
                  src={active.image}
                  alt={active.title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </AnimatePresence>
            </Box>
            <Typography className="text-label" sx={{ mt: 2, mb: 0.75 }}>
              Preview
            </Typography>
            <Typography sx={{ fontWeight: 600, fontSize: '1.125rem', letterSpacing: '-0.02em' }}>
              {active.title}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1.5 }}>
              {active.techStack.slice(0, 4).map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProjectsPage;
