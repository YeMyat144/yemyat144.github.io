import React, { useState } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';

const MotionImg = motion('img');

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const [hoverId, setHoverId] = useState<number | null>(null);

  const active = projects.find((p) => p.id === hoverId) ?? projects[0];

  return (
    <>
      <Helmet>
        <title>Ye Myat Moe — Field Notes / §02 Work</title>
      </Helmet>

      <Box
        sx={{
          maxWidth: 1400,
          mx: 'auto',
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
        }}
      >
        {/* Kicker */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 320px' },
            gap: 3,
            alignItems: 'end',
            pb: { xs: 3, md: 5 },
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
              §02 / The Index
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Fraunces, serif',
                fontSize: { xs: '3rem', md: '6rem', lg: '7rem' },
                lineHeight: 0.88,
                letterSpacing: '-0.035em',
                fontWeight: 300,
                fontVariationSettings: '"opsz" 144, "SOFT" 80',
              }}
            >
              A catalog of{' '}
              <Box component="em" sx={{ fontStyle: 'italic', color: 'var(--signal)' }}>
                things
              </Box>{' '}
              made.
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: 'Fraunces, serif',
                fontSize: { xs: '1.05rem', md: '1.15rem' },
                fontStyle: 'italic',
                fontWeight: 300,
                lineHeight: 1.55,
              }}
            >
              A running log of projects — shipped, experimental, and in-between.
              Hover a row to peek; click to read the full entry.
            </Typography>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mt: 2,
                color: 'var(--ink-soft)',
              }}
            >
              TOTAL · {String(projects.length).padStart(2, '0')} ENTRIES
            </Typography>
          </Box>
        </Box>

        {/* Index */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 360px' },
            gap: { xs: 0, md: 6 },
            mt: { xs: 4, md: 6 },
            alignItems: 'start',
          }}
        >
          {/* List */}
          <Box>
            {projects.map((project, i) => {
              const isActive = hoverId === project.id;
              return (
                <Box
                  key={project.id}
                  onMouseEnter={() => setHoverId(project.id)}
                  onFocus={() => setHoverId(project.id)}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="is-interactive"
                  tabIndex={0}
                  role="button"
                  sx={{
                    cursor: 'none',
                    py: { xs: 2.5, md: 3 },
                    borderTop: '1px solid var(--ink)',
                    borderBottom: i === projects.length - 1 ? '1px solid var(--ink)' : 0,
                    display: 'grid',
                    gridTemplateColumns: { xs: '46px 1fr auto', md: '60px 1fr auto' },
                    gap: { xs: 2, md: 3 },
                    alignItems: 'center',
                    position: 'relative',
                    transition: 'color 160ms ease, background 160ms ease, padding-left 220ms ease',
                    color: isActive ? 'var(--signal)' : 'var(--ink)',
                    pl: { md: isActive ? 3 : 0 },
                    '&:hover::before': { opacity: 1, transform: 'translateX(0)' },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: -8,
                      top: '50%',
                      width: 24,
                      height: 1,
                      background: 'var(--signal)',
                      transform: 'translateX(-12px)',
                      opacity: 0,
                      transition: 'transform 260ms ease, opacity 260ms ease',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: { xs: '0.75rem', md: '0.85rem' },
                      letterSpacing: '0.1em',
                      opacity: 0.65,
                    }}
                  >
                    {String(i + 1).padStart(3, '0')}
                  </Typography>

                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontFamily: 'Fraunces, serif',
                        fontSize: { xs: '1.6rem', sm: '2rem', md: '2.6rem' },
                        lineHeight: 1,
                        fontWeight: 400,
                        letterSpacing: '-0.015em',
                        fontStyle: isActive ? 'italic' : 'normal',
                        fontVariationSettings: isActive
                          ? '"opsz" 144, "SOFT" 100, "WONK" 1'
                          : '"opsz" 144',
                        transition: 'font-style 160ms ease',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 0.5,
                        color: isActive ? 'var(--signal)' : 'var(--ink-soft)',
                        fontSize: { xs: '0.85rem', md: '0.95rem' },
                      }}
                    >
                      {project.description}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { xs: 'none', sm: 'flex' },
                      flexWrap: 'wrap',
                      gap: 0.5,
                      maxWidth: { sm: 180, md: 220 },
                      justifyContent: 'flex-end',
                    }}
                  >
                    {project.techStack.slice(0, 3).map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          borderColor: isActive ? 'var(--signal)' : 'var(--ink)',
                          color: 'inherit',
                          height: 22,
                          '& .MuiChip-label': {
                            fontSize: '0.65rem',
                            px: 1,
                          },
                        }}
                      />
                    ))}
                  </Box>

                  {/* Mobile thumb */}
                  <Box
                    sx={{
                      gridColumn: '1 / -1',
                      display: { xs: 'block', md: 'none' },
                      mt: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      sx={{
                        width: '100%',
                        maxHeight: 180,
                        objectFit: 'cover',
                        border: '1px solid var(--ink)',
                        filter: 'grayscale(1)',
                      }}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>

          {/* Sticky preview (desktop) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'sticky',
              top: 170,
              alignSelf: 'start',
            }}
          >
            <Box
              className="corner-brackets"
              sx={{
                position: 'relative',
                aspectRatio: '4 / 5',
                border: '1px solid var(--ink)',
                overflow: 'hidden',
                background: 'var(--paper-deep)',
              }}
            >
              <AnimatePresence mode="wait">
                <MotionImg
                  key={active.id}
                  src={active.image}
                  alt={active.title}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(1) contrast(1.03)',
                  }}
                />
              </AnimatePresence>
            </Box>

            <Box
              sx={{
                mt: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <Typography variant="caption" sx={{ color: 'var(--signal)' }}>
                NOW VIEWING
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                №{String(projects.findIndex((p) => p.id === active.id) + 1).padStart(3, '0')}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: 'Fraunces, serif',
                fontSize: '1.6rem',
                lineHeight: 1.1,
                fontStyle: 'italic',
                mt: 0.5,
              }}
            >
              {active.title}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1.5 }}>
              {active.techStack.map((t) => (
                <Chip key={t} label={t} size="small" />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProjectsPage;
