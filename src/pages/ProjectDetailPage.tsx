import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { projects } from '../data/projects';
import { YouTube, GitHub, Language } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MotionBox = motion(Box);

const ProjectDetailPage: React.FC = () => {
  const { projectSlug } = useParams();
  const navigate = useNavigate();

  const index = projects.findIndex((p) => p.slug === projectSlug);
  const project = projects[index];

  if (!project) {
    return (
      <Box sx={{ maxWidth: 900, mx: 'auto', p: 6, textAlign: 'center' }}>
        <Typography
          sx={{
            fontFamily: 'Fraunces, serif',
            fontSize: '3rem',
            fontStyle: 'italic',
            mb: 2,
          }}
        >
          Not in the index.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/projects')}
          startIcon={<ArrowBackIosNewIcon />}
        >
          Back to Work
        </Button>
      </Box>
    );
  }

  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Helmet>
        <title>Ye Myat Moe — {project.title}</title>
      </Helmet>

      <MotionBox
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
        }}
      >
        {/* Breadcrumb */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pb: 3,
            borderBottom: '1px dashed var(--rule-strong)',
          }}
        >
          <Button
            variant="outlined"
            onClick={() => navigate('/projects')}
            startIcon={<ArrowBackIosNewIcon />}
            sx={{ borderRadius: 999 }}
          >
            Back to Index
          </Button>
          <Typography
            variant="caption"
            sx={{ color: 'var(--signal)' }}
          >
            §02 / ENTRY №{String(index + 1).padStart(3, '0')}
          </Typography>
        </Box>

        {/* Title block */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 280px' },
            gap: { xs: 3, md: 6 },
            alignItems: 'end',
            py: { xs: 4, md: 7 },
            borderBottom: '1px solid var(--ink)',
          }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{ display: 'block', mb: 1.5, opacity: 0.7 }}
            >
              Project study
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontFamily: 'Fraunces, serif',
                fontSize: { xs: '2.6rem', sm: '4rem', md: '6rem' },
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
                fontWeight: 300,
                fontVariationSettings: '"opsz" 144, "SOFT" 80',
              }}
            >
              {project.title.split(' ').map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <Box
                    key={i}
                    component="em"
                    sx={{ fontStyle: 'italic', color: 'var(--signal)' }}
                  >
                    {word}
                  </Box>
                ) : (
                  <span key={i}>{word} </span>
                ),
              )}
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: 'Fraunces, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: { xs: '1.05rem', md: '1.15rem' },
                lineHeight: 1.55,
              }}
            >
              {project.description}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2.5 }}>
              {project.repoLink && (
                <Button
                  variant="contained"
                  startIcon={<GitHub />}
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </Button>
              )}
              {project.liveLink && (
                <Button
                  variant="outlined"
                  startIcon={<Language />}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </Button>
              )}
              {project.youtubeLink && (
                <Button
                  variant="outlined"
                  startIcon={<YouTube />}
                  href={project.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Button>
              )}
            </Stack>
          </Box>
        </Box>

        {/* Hero image */}
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            border: '1px solid var(--ink)',
            background: 'var(--paper-deep)',
            overflow: 'hidden',
            aspectRatio: { xs: '4 / 3', md: '16 / 9' },
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(1) contrast(1.02)',
            }}
          />
        </Box>

        {/* Body grid */}
        <Box
          sx={{
            mt: { xs: 5, md: 8 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '160px 1fr' },
            gap: { xs: 3, md: 6 },
          }}
        >
          <Box>
            <Typography variant="caption" sx={{ color: 'var(--signal)' }}>
              § Summary
            </Typography>
          </Box>
          <Box>
            {project.longDescription && (
              <Typography
                sx={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: { xs: '1.15rem', md: '1.35rem' },
                  lineHeight: 1.55,
                  fontWeight: 300,
                  columnCount: { xs: 1, md: 1 },
                  maxWidth: 800,
                }}
              >
                {project.longDescription}
              </Typography>
            )}

            {project.contributors && project.contributors.length > 0 && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="caption" sx={{ color: 'var(--ink-soft)' }}>
                  Co-conspirators
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {project.contributors.map((c) => (
                    <Chip key={c} label={c} />
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </Box>

        {/* Tech */}
        <Box
          sx={{
            mt: { xs: 5, md: 8 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '160px 1fr' },
            gap: { xs: 3, md: 6 },
            pt: 4,
            borderTop: '1px solid var(--rule-strong)',
          }}
        >
          <Box>
            <Typography variant="caption" sx={{ color: 'var(--signal)' }}>
              § Stack
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.techStack.map((t) => (
              <Chip key={t} label={t} />
            ))}
          </Box>
        </Box>

        {/* Features */}
        {project.features && (
          <Box
            sx={{
              mt: { xs: 5, md: 8 },
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '160px 1fr' },
              gap: { xs: 3, md: 6 },
              pt: 4,
              borderTop: '1px solid var(--rule-strong)',
            }}
          >
            <Box>
              <Typography variant="caption" sx={{ color: 'var(--signal)' }}>
                § Notable
              </Typography>
            </Box>
            <Box>
              {project.features.map((f, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '40px 1fr',
                    alignItems: 'baseline',
                    gap: 2,
                    py: 1.5,
                    borderBottom: '1px dashed var(--rule-strong)',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.75rem',
                      letterSpacing: '0.12em',
                      color: 'var(--signal)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: { xs: '1.05rem', md: '1.15rem' },
                      lineHeight: 1.45,
                      fontWeight: 400,
                    }}
                  >
                    {f}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Next */}
        <Box
          onClick={() => navigate(`/projects/${next.slug}`)}
          className="is-interactive"
          sx={{
            mt: { xs: 6, md: 10 },
            pt: 3,
            pb: 6,
            borderTop: '1px solid var(--ink)',
            cursor: 'none',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'baseline' },
            justifyContent: 'space-between',
            gap: 2,
            '&:hover .nextTitle': { color: 'var(--signal)', fontStyle: 'italic' },
          }}
        >
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            ↳ Next entry
          </Typography>
          <Typography
            className="nextTitle"
            sx={{
              fontFamily: 'Fraunces, serif',
              fontSize: { xs: '2rem', md: '3rem' },
              lineHeight: 1,
              fontWeight: 400,
              letterSpacing: '-0.02em',
              transition: 'color 160ms ease, font-style 160ms ease',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {next.title}
            <ArrowForwardIcon fontSize="inherit" />
          </Typography>
        </Box>
      </MotionBox>
    </>
  );
};

export default ProjectDetailPage;
