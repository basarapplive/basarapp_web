/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 25;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x10b981, 1.8); // Emerald glowing light
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x3b82f6, 1.5); // Indigo/Blue glowing light
    dirLight2.position.set(-10, -15, 10);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x10b981, 1, 50);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Particles (Background Stars / Nodes)
    const particleCount = 200;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colorChoices = [
      new THREE.Color('#10b981'), // Emerald
      new THREE.Color('#3b82f6'), // Indigo
      new THREE.Color('#64748b'), // Slate
    ];
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Position particles in a sphere/box structure
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // Color coding
      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Canvas Texture for Rounded Particles
    const canvasTexture = document.createElement('canvas');
    canvasTexture.width = 16;
    canvasTexture.height = 16;
    const ctx = canvasTexture.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.3, 'rgba(255,255,255,0.8)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvasTexture);

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.45,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const starParticles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(starParticles);

    // floating 3D Geometric Objects (Representing structural units of BasarApp)
    const objectsGroup = new THREE.Group();

    // 1. Core House Dodecahedron (Structural Stability)
    const dG = new THREE.DodecahedronGeometry(3.5, 1);
    const dMat = new THREE.MeshPhongMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
      shininess: 100,
    });
    const houseCore = new THREE.Mesh(dG, dMat);
    houseCore.position.set(-6, 3, 0);
    objectsGroup.add(houseCore);

    // 2. Financial Flows (Torus Ring)
    const tG = new THREE.TorusGeometry(2.8, 0.4, 8, 24);
    const tMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
      roughness: 0.1,
    });
    const flowTorus = new THREE.Mesh(tG, tMat);
    flowTorus.position.set(6, -3, 0);
    objectsGroup.add(flowTorus);

    // 3. Central Balance Balance Node (Icosahedron)
    const iG = new THREE.IcosahedronGeometry(2.0, 0);
    const iMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b, // Gold
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const balanceNode = new THREE.Mesh(iG, iMat);
    balanceNode.position.set(0, -1, 5);
    objectsGroup.add(balanceNode);

    scene.add(objectsGroup);

    // Interaction State
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const scroll = { y: 0, targetY: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.targetX = (event.clientX / window.innerWidth - 0.5) * 4;
      mouse.targetY = -(event.clientY / window.innerHeight - 0.5) * 4;
    };

    const handleScroll = () => {
      scroll.targetY = window.scrollY * 0.02;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle container resizing dynamically (via ResizeObserver for iframe compliance)
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = entry.contentRect.width || container.clientWidth;
        height = entry.contentRect.height || container.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Smooth scroll easing
      scroll.y += (scroll.targetY - scroll.y) * 0.08;

      // Apply slow rotations
      starParticles.rotation.y = elapsedTime * 0.02 + mouse.x * 0.05;
      starParticles.rotation.x = mouse.y * 0.05;

      // Individual object animations
      houseCore.rotation.x = elapsedTime * 0.12;
      houseCore.rotation.y = elapsedTime * 0.08 + mouse.x * 0.1;
      houseCore.position.y = 3 + Math.sin(elapsedTime * 0.8) * 0.8 - scroll.y * 0.5;

      flowTorus.rotation.y = -elapsedTime * 0.18;
      flowTorus.rotation.z = elapsedTime * 0.1;
      flowTorus.position.y = -3 + Math.cos(elapsedTime * 0.6) * 0.6 + scroll.y * 0.4;

      balanceNode.rotation.x = elapsedTime * 0.2;
      balanceNode.rotation.y = elapsedTime * 0.15;
      balanceNode.position.y = -1 + Math.sin(elapsedTime * 1.2) * 0.4 - scroll.y * 0.1;
      balanceNode.position.x = mouse.x * 1.5;

      // Move camera slightly for parallax scroll feeling
      camera.position.y = -scroll.y * 0.8;
      camera.lookAt(0, -scroll.y * 0.8, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      dG.dispose();
      dMat.dispose();
      tG.dispose();
      tMat.dispose();
      iG.dispose();
      iMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
