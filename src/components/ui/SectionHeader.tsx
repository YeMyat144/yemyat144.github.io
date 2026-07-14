import React from 'react';
import { Box, Typography } from '@mui/material';

type SectionHeaderProps = {
  label: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  action,
}) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: { xs: 'flex-start', sm: 'flex-end' },
      justifyContent: 'space-between',
      gap: 3,
      mb: { xs: 4, md: 5 },
    }}
  >
    <Box sx={{ maxWidth: 640 }}>
      <Typography
        component="p"
        sx={{
          fontSize: '0.72rem',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          mb: title || description ? 1.25 : 0,
        }}
      >
        {label}
      </Typography>
      {title && (
        <Typography
          component="h2"
          sx={{
            fontFamily: 'var(--font-display)',
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: 'var(--fg)',
          }}
        >
          {title}
        </Typography>
      )}
      {description && (
        <Typography
          sx={{
            mt: 1.5,
            fontSize: '1rem',
            lineHeight: 1.65,
            color: 'var(--muted)',
            maxWidth: 520,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
    {action}
  </Box>
);
