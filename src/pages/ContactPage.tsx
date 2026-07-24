import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Seo } from '../components/seo/Seo';
import { socialLinks } from '../data/navigation';
import { Reveal } from '../components/motion/Reveal';
import { SectionHeader } from '../components/ui/SectionHeader';

const ContactPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Ye Myat Moe for full-time roles, contracts, and freelance work in AI automation and product engineering."
        path="/contact"
      />

      <Box className="page-shell" sx={{ py: { xs: 5, md: 8 } }}>
        <Reveal>
          <SectionHeader
            label="Contact"
            title="Let's build something useful"
            description="Open to full-time roles, contracts, and freelance work in AI automation and product engineering."
          />
        </Reveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'start',
          }}
        >
          <Reveal>
            <Box className="surface-card" sx={{ p: { xs: 3, md: 4 } }}>
              <Typography sx={{ fontWeight: 600, fontSize: '1.25rem', letterSpacing: '-0.02em', mb: 0.5 }}>
                Ye Myat Moe
              </Typography>
              <Typography sx={{ fontSize: '0.9375rem', color: 'var(--muted)', mb: 4 }}>
                AI Automation Engineer · Bangkok, Thailand
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <Box>
                  <Typography className="text-label" sx={{ mb: 0.75 }}>Email</Typography>
                  <Typography
                    component="a"
                    href="mailto:yemyatmoe.tetee@gmail.com"
                    sx={{
                      fontSize: '1.05rem',
                      fontWeight: 500,
                      color: 'var(--fg)',
                      textDecoration: 'none',
                      '&:hover': { color: 'var(--highlight)' },
                      wordBreak: 'break-all',
                    }}
                  >
                    yemyatmoe.tetee@gmail.com
                  </Typography>
                </Box>

                <Box>
                  <Typography className="text-label" sx={{ mb: 0.75 }}>Location</Typography>
                  <Typography sx={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                    Bang Bo District, Samut Prakan 10270, Thailand
                  </Typography>
                </Box>

                <Box>
                  <Typography className="text-label" sx={{ mb: 0.75 }}>YouTube</Typography>
                  <Typography
                    component="a"
                    href="https://www.youtube.com/@yemyatlabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      fontSize: '0.9375rem',
                      color: 'var(--highlight)',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    @yemyatlabs
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Reveal>

          <Reveal delay={0.08}>
            <Typography className="text-label" sx={{ mb: 2 }}>
              Elsewhere
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Box
                    key={s.name}
                    component="a"
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto 36px',
                      alignItems: 'center',
                      gap: 2,
                      py: 2,
                      borderTop: '1px solid var(--border)',
                      borderBottom: i === socialLinks.length - 1 ? '1px solid var(--border)' : 0,
                      color: 'var(--fg)',
                      textDecoration: 'none',
                      transition: 'color 160ms ease, padding-left 160ms ease',
                      '&:hover': { color: 'var(--highlight)', pl: 0.5 },
                    }}
                  >
                    <Typography sx={{ fontWeight: 500, fontSize: '1.05rem' }}>{s.name}</Typography>
                    <Typography sx={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>Open</Typography>
                    <IconButton
                      component="span"
                      sx={{
                        width: 36,
                        height: 36,
                        pointerEvents: 'none',
                        color: 'inherit',
                      }}
                    >
                      <Icon fontSize="small" />
                    </IconButton>
                  </Box>
                );
              })}
            </Box>
          </Reveal>
        </Box>
      </Box>
    </>
  );
};

export default ContactPage;
