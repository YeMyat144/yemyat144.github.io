import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Stack } from '@mui/material';
import { Helmet } from 'react-helmet';
import { projects } from '../data/projects';
import { YouTube, GitHub, Language } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Reveal } from '../components/motion/Reveal';

const ProjectDetailPage: React.FC = () => {
  const { projectSlug } = useParams();
  const navigate = useNavigate();

  const index = projects.findIndex((p) => p.slug === projectSlug);
  const project = projects[index];

  if (!project) {
    return (
      <Box className="page-shell" sx={{ py: 8, textAlign: 'center' }}>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 2 }}>Project not found</Typography>
        <Button variant="contained" onClick={() => navigate('/projects')} startIcon={<ArrowBackIosNewIcon />}>
          Back to work
        </Button>
      </Box>
    );
  }

  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Helmet>
        <title>{project.title} · Ye Myat Moe</title>
      </Helmet>

      <Box className="page-shell" sx={{ py: { xs: 5, md: 8 } }}>
        <Reveal>
          <Button
            variant="text"
            onClick={() => navigate('/projects')}
            startIcon={<ArrowBackIosNewIcon />}
            sx={{ mb: 4, px: 0, color: 'var(--muted)', '&:hover': { color: 'var(--fg)' } }}
          >
            Back to work
          </Button>

          <Typography className="text-label" sx={{ mb: 1.5 }}>
            {project.category} · {String(index + 1).padStart(2, '0')}
          </Typography>
          <Typography
            component="h1"
            className="text-display"
            sx={{ fontSize: { xs: '2.25rem', md: '3.5rem' }, maxWidth: 900, mb: 2 }}
          >
            {project.title}
          </Typography>
          <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.65, color: 'var(--muted)', maxWidth: 640, mb: 3 }}>
            {project.description}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {project.repoLink && (
              <Button variant="contained" startIcon={<GitHub />} href={project.repoLink} target="_blank" rel="noopener noreferrer">
                Repo
              </Button>
            )}
            {project.liveLink && (
              <Button variant="outlined" startIcon={<Language />} href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Live
              </Button>
            )}
            {project.youtubeLink && (
              <Button variant="outlined" startIcon={<YouTube />} href={project.youtubeLink} target="_blank" rel="noopener noreferrer">
                Demo
              </Button>
            )}
          </Stack>
        </Reveal>

        <Reveal delay={0.08}>
          <Box
            className="surface-card"
            sx={{
              mt: 5,
              overflow: 'hidden',
              p: 0,
              aspectRatio: { xs: '4/3', md: '16/9' },
            }}
          >
            <Box component="img" src={project.image} alt={project.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </Box>
        </Reveal>

        {project.longDescription && (
          <Reveal delay={0.1}>
            <Box sx={{ mt: 8, maxWidth: 720 }}>
              <Typography className="text-label" sx={{ mb: 2 }}>Overview</Typography>
              <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--fg-secondary)' }}>
                {project.longDescription}
              </Typography>
            </Box>
          </Reveal>
        )}

        <Reveal delay={0.12}>
          <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid var(--border)' }}>
            <Typography className="text-label" sx={{ mb: 2 }}>Stack</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
              {project.techStack.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </Box>
          </Box>
        </Reveal>

        {project.features && (
          <Reveal delay={0.14}>
            <Box sx={{ mt: 6 }}>
              <Typography className="text-label" sx={{ mb: 2 }}>Highlights</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {project.features.map((f, i) => (
                  <Box
                    key={i}
                    sx={{
                      py: 1.75,
                      borderTop: '1px solid var(--border)',
                      borderBottom: i === project.features!.length - 1 ? '1px solid var(--border)' : 0,
                      display: 'grid',
                      gridTemplateColumns: '32px 1fr',
                      gap: 2,
                    }}
                  >
                    <Typography sx={{ fontSize: '0.8125rem', color: 'var(--muted)', fontWeight: 500 }}>
                      {String(i + 1).padStart(2, '0')}
                    </Typography>
                    <Typography sx={{ fontSize: '0.975rem', lineHeight: 1.6, color: 'var(--fg-secondary)' }}>{f}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Reveal>
        )}

        <Box
          onClick={() => navigate(`/projects/${next.slug}`)}
          sx={{
            mt: 8,
            pt: 4,
            borderTop: '1px solid var(--border)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'center' },
            justifyContent: 'space-between',
            gap: 2,
            '&:hover .next-title': { color: 'var(--highlight)' },
          }}
        >
          <Typography className="text-label">Next project</Typography>
          <Typography
            className="next-title"
            sx={{
              fontSize: { xs: '1.35rem', md: '1.75rem' },
              fontWeight: 600,
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              transition: 'color 160ms ease',
            }}
          >
            {next.title}
            <ArrowForwardIcon fontSize="small" />
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProjectDetailPage;
