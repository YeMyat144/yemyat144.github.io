import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Helmet } from 'react-helmet';
import { socialLinks } from '../data/navigation';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ye Myat Moe — Field Notes / §03 Contact</title>
      </Helmet>

      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
        }}
      >
        {/* Kicker */}
        <Box
          sx={{
            pb: { xs: 3, md: 5 },
            borderBottom: '1px solid var(--ink)',
          }}
        >
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
            §03 / Post to —
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Fraunces, serif',
              fontSize: { xs: '3rem', md: '6rem', lg: '7.5rem' },
              lineHeight: 0.88,
              letterSpacing: '-0.035em',
              fontWeight: 300,
              fontVariationSettings: '"opsz" 144, "SOFT" 80',
            }}
          >
            Send a{' '}
            <Box
              component="em"
              sx={{
                fontStyle: 'italic',
                color: 'var(--signal)',
                fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
              }}
            >
              signal
            </Box>
            .
          </Typography>
        </Box>

        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'start',
          }}
        >
          {/* Card */}
          <Box
            className="corner-brackets"
            sx={{
              position: 'relative',
              border: '1px solid var(--ink)',
              p: { xs: 3, md: 5 },
              background: 'var(--paper-deep)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                pb: 2,
                borderBottom: '1px dashed var(--rule-strong)',
              }}
            >
              <Typography variant="caption">CARTE · DE · VISITE</Typography>
              <Typography variant="caption" sx={{ color: 'var(--signal)' }}>
                №0001
              </Typography>
            </Box>

            <Typography
              sx={{
                mt: 3,
                fontFamily: 'Fraunces, serif',
                fontSize: { xs: '2.2rem', md: '3rem' },
                lineHeight: 0.95,
                fontStyle: 'italic',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
              }}
            >
              Ye Myat Moe
            </Typography>
            <Typography
              sx={{
                mt: 0.5,
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.78rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--ink-soft)',
              }}
            >
              Software Engineer · Bangkok, Thailand
            </Typography>

            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Email */}
              <Box sx={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 2, alignItems: 'baseline' }}>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>Email</Typography>
                <Typography
                  component="a"
                  href="mailto:yemyatmoe.tetee@gmail.com"
                  sx={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                    color: 'var(--ink)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '6px',
                    textDecorationThickness: '1px',
                    '&:hover': { color: 'var(--signal)' },
                    wordBreak: 'break-all',
                  }}
                >
                  yemyatmoe.tetee@gmail.com
                </Typography>
              </Box>

              <Box sx={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 2, alignItems: 'baseline' }}>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>Address</Typography>
                <Typography
                  sx={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    fontStyle: 'italic',
                  }}
                >
                  Bang Bo District, Samut Prakan 10270, Thailand
                </Typography>
              </Box>

              <Box sx={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 2, alignItems: 'baseline' }}>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>Broadcast</Typography>
                <Typography sx={{ fontFamily: 'Fraunces, serif', fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                  I post new projects on{' '}
                  <Box
                    component="a"
                    href="https://www.youtube.com/@yemyatlabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'var(--signal)',
                      textDecoration: 'underline',
                      textUnderlineOffset: '4px',
                      fontWeight: 500,
                      '&:hover': { color: 'var(--ink)' },
                    }}
                  >
                    YouTube / @yemyatlabs
                  </Box>
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 4,
                pt: 3,
                borderTop: '1px dashed var(--rule-strong)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                Fold along the dotted line.
              </Typography>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  background: 'var(--signal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: 'var(--paper)',
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Elsewhere list */}
          <Box>
            <Typography variant="caption" sx={{ color: 'var(--signal)' }}>
              Elsewhere on the internet
            </Typography>

            <Box sx={{ mt: 2 }}>
              {socialLinks.map((s, i) => (
                <Box
                  key={s.name}
                  component="a"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="is-interactive"
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '40px 1fr auto 40px',
                    alignItems: 'center',
                    gap: 2,
                    py: 2,
                    borderTop: '1px solid var(--rule-strong)',
                    borderBottom:
                      i === socialLinks.length - 1 ? '1px solid var(--rule-strong)' : 0,
                    color: 'var(--ink)',
                    textDecoration: 'none',
                    cursor: 'none',
                    transition: 'padding-left 220ms ease, color 160ms ease',
                    '&:hover': { color: 'var(--signal)', pl: 1 },
                  }}
                >
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: { xs: '1.5rem', md: '1.8rem' },
                      fontWeight: 400,
                      lineHeight: 1,
                      color: 'inherit',
                    }}
                  >
                    {s.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.7rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-soft)',
                    }}
                  >
                    ↗ Open
                  </Typography>
                  <IconButton
                    component="span"
                    sx={{
                      border: '1px solid var(--ink)',
                      borderRadius: 0,
                      width: 36,
                      height: 36,
                      pointerEvents: 'none',
                      color: 'inherit',
                    }}
                  >
                    <s.icon fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactPage;
