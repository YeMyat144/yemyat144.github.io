import React from 'react';
import { Box, Typography } from '@mui/material';

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ items, reverse = false }) => {
  const content = [...items, ...items];

  return (
    <Box
      className="marquee-host"
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        py: 1.25,
        borderTop: '1px solid var(--ink)',
        borderBottom: '1px solid var(--ink)',
        backgroundColor: reverse ? 'var(--ink)' : 'transparent',
        color: reverse ? 'var(--paper)' : 'var(--ink)',
        position: 'relative',
      }}
    >
      <Box
        className={`marquee-track ${reverse ? 'reverse' : ''}`}
        sx={{ alignItems: 'center' }}
      >
        {content.map((item, idx) => (
          <Typography
            key={idx}
            component="span"
            sx={{
              fontFamily:
                idx % 2 === 0 ? 'Fraunces, serif' : 'JetBrains Mono, monospace',
              fontStyle: idx % 2 === 0 ? 'italic' : 'normal',
              fontSize: idx % 2 === 0 ? '1.5rem' : '0.8rem',
              lineHeight: 1,
              letterSpacing: idx % 2 === 0 ? '-0.01em' : '0.12em',
              textTransform: idx % 2 === 0 ? 'none' : 'uppercase',
              color: 'inherit',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 3,
            }}
          >
            {item}
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--signal)',
              }}
            />
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Marquee;
