import React from 'react';
import ParticleBackground from 'react-particle-backgrounds';

export default function BackgroundAnimation() {

  const settings = {
    canvas: {
      canvasFillSpace: true,
      height: 100,
      width: 100,
    },
    particle: {
      particleCount: 100,
      color: "#d68c38",
      minSize: 2,
      maxSize: 4
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 30,
      minSpeed: 0.2,
      maxSpeed: 0.5
    },
    opacity: {
      minOpacity: 0.1,
      maxOpacity: 0.4,
      opacityTransitionTime: 5000
    }
  }

  return (
    <ParticleBackground settings={settings} />
  )
}