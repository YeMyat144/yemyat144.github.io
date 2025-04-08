import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Particles from 'react-tsparticles';

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ye Myat Moe</title>
      </Helmet>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0A1929 0%, #0F2744 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Particles */}
        <Particles
          options={{
            background: { color: 'transparent' },
            particles: {
              number: { value: 60 },
              size: { value: 3 },
              move: { enable: true, speed: 1.5 },
              interactivity: {
                events: { onHover: { enable: true, mode: 'repulse' } },
              },
            },
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        />

        {/* Glow Background Element */}
        <Box sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, #6be5ff33, transparent)',
          filter: 'blur(100px)',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
        }} />

        {/* Header Texts with motion */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, staggerChildren: 0.2 }
            }
          }}
          style={{ zIndex: 2 }}
        >
          <motion.div>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(45deg, #6be5ff, #2242e0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Hi, I'm Ye Myat Moe
            </Typography>
          </motion.div>
          <motion.div>
            <Typography variant="h6" sx={{ opacity: 0.85, mb: 4 }}>
              Full-stack Developer & Creative Technologist
            </Typography>
          </motion.div>
          <motion.div>
            <Typography sx={{ opacity: 0.75, mb: 2 }}>
              <a href="https://www.behance.net/yemyat13" style={{ color: '#6be5ff', textDecoration: 'none', marginRight: 16 }} target="_blank" rel="noopener noreferrer">Behance</a>
              <a href="https://unsplash.com/@yemyat9" style={{ color: '#6be5ff', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">Unsplash</a>
            </Typography>
          </motion.div>
        </motion.div>

        {/* 3D Sphere Canvas */}
        <Box sx={{ height: 300, width: '100%', zIndex: 2 }}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 3, 3]} intensity={1.5} />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate />
            <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
              <MeshDistortMaterial
                color="#6be5ff"
                distort={0.5}
                speed={3}
              />
            </Sphere>
          </Canvas>
        </Box>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.1 }} style={{ zIndex: 2 }}>
          <Button
            variant="contained"
            sx={{
              mt: 4,
              background: '#6be5ff',
              color: '#0A1929',
              boxShadow: '0 0 10px #6be5ff, 0 0 20px #6be5ff',
              '&:hover': {
                background: '#5ed2f5',
                boxShadow: '0 0 15px #6be5ff, 0 0 30px #6be5ff',
              },
              transition: 'all 0.3s ease-in-out',
            }}
            href="#projects"
          >
            Explore Projects
          </Button>
        </motion.div>
      </Box>
    </>
  );
};

export default Home;
