"use client"

import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

export default function Globe3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    let phi = 0
    
    if (!canvasRef.current) return
    
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1200,
      height: 1200,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      scale: 1.1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.6],
      markerColor: [1, 0.5, 1],
      glowColor: [0.7, 0.7, 1],
      offset: [0, 0],
      markers: [
        { location: [37.7595, -122.4367], size: 0.06 }, // San Francisco
        { location: [40.7128, -74.006], size: 0.03 },   // New York
        { location: [51.5074, -0.1278], size: 0.03 },   // London
        { location: [35.6762, 139.6503], size: 0.03 },  // Tokyo
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.003
      },
    })
    
    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <div className="w-full max-w-xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform transition-all hover:scale-105 duration-500">
      <div className="relative h-[450px]">
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: '100%' }}
          width={1200}
          height={1200}
          className="absolute inset-0"
        />
        <div className="absolute top-4 left-6 z-10">
          <h2 className="text-3xl font-bold text-white">Global Web Solutions</h2>
          <p className="text-white/70 text-base">Premium Website Design & Hosting</p>
        </div>
        <div className="absolute bottom-4 right-6 bg-black/30 backdrop-blur-md rounded-lg p-3 z-10">
          <div className="flex space-x-4 text-sm text-white">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-pink-500 mr-1"></span>
              <span>Our Clients</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-400 mr-1"></span>
              <span>Support Team</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-black/40">
        <div className="flex justify-between text-white/80 text-base">
          <div>
            <p className="font-medium">250+ Websites</p>
            <p className="text-sm text-white/60">Launched & Maintained</p>
          </div>
          <div>
            <p className="font-medium">24/7 Support</p>
            <p className="text-sm text-white/60">Global Team</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-white/70 text-sm">Our premium web design services span across industries and locations, providing beautiful, functional websites with reliable hosting and round-the-clock support.</p>
        </div>
      </div>
    </div>
  )
} 