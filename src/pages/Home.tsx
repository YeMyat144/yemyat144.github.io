import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Particles from 'react-tsparticles';

const Home: React.FC = () => {
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
                {/* Particle Background */}
                <Particles
                    options={{
                        background: { color: 'transparent' },
                        particles: {
                            number: { value: 50 },
                            size: { value: 3 },
                            move: { enable: true, speed: 2 },
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

                {/* Animated Hero Text */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ zIndex: 2 }}
                >
                    <Typography 
                        variant="h2" 
                        sx={{ fontWeight: 600, mb: 2, background: 'linear-gradient(45deg, #6be5ff,rgb(34, 66, 224))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                        Welcome to My Portfolio
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.8, mb: 4 }}>
                        Discover my work and projects
                    </Typography>
                </motion.div>

                {/* 3D Animation */}
                <Box sx={{ height: 300, width: '100%', zIndex: 2 }}>
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[2, 5, 2]} />
                        <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
                            <MeshDistortMaterial 
                                color="#6be5ff"
                                attach="material"
                                distort={0.6} 
                                speed={2}
                            />
                        </Sphere>
                    </Canvas>
                </Box>

                {/* Button to Projects */}
                <motion.div whileHover={{ scale: 1.1 }} style={{ zIndex: 2 }}>
                    <Button 
                        variant="contained" 
                        sx={{ mt: 4, background: '#6be5ff', color: '#0A1929' }}
                        href="/projects"
                    >
                        Explore Projects
                    </Button>
                </motion.div>
            </Box>
        </>
    );
};

export default Home;
