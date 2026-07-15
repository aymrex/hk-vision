import * as THREE from "three";

export function initSecurityScene(canvas: HTMLCanvasElement) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    canvas.closest("[data-scene-wrap]")?.classList.add("is-reduced-motion");
    return () => undefined;
  }

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0.5, 9);

  const group = new THREE.Group();
  scene.add(group);

  const shieldShape = new THREE.Shape();
  shieldShape.moveTo(0, 2.6);
  shieldShape.lineTo(2.25, 1.7);
  shieldShape.lineTo(1.8, -1.35);
  shieldShape.quadraticCurveTo(1.3, -2.25, 0, -2.8);
  shieldShape.quadraticCurveTo(-1.3, -2.25, -1.8, -1.35);
  shieldShape.lineTo(-2.25, 1.7);
  shieldShape.lineTo(0, 2.6);

  const shield = new THREE.Mesh(
    new THREE.ShapeGeometry(shieldShape),
    new THREE.MeshBasicMaterial({
      color: 0x1b4f72,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
    }),
  );
  group.add(shield);

  const shieldLine = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(
      shieldShape.getPoints(80).map((point) => new THREE.Vector3(point.x, point.y, 0.05)),
    ),
    new THREE.LineBasicMaterial({
      color: 0x2e86c1,
      transparent: true,
      opacity: 0.75,
    }),
  );
  group.add(shieldLine);

  const nodes = [
    [-1.35, 1.1, 0.25],
    [1.2, 1.0, -0.1],
    [-0.45, 0.15, 0.35],
    [0.85, -0.35, 0.15],
    [-1.05, -1.0, -0.15],
    [0.25, -1.55, 0.3],
  ].map(([x, y, z]) => new THREE.Vector3(x, y, z));

  const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x3aaed8 });
  const nodeGeometry = new THREE.SphereGeometry(0.085, 18, 18);

  nodes.forEach((node) => {
    const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial);
    mesh.position.copy(node);
    group.add(mesh);
  });

  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x3aaed8,
    transparent: true,
    opacity: 0.45,
  });
  const connections = [
    [0, 2],
    [1, 2],
    [2, 3],
    [2, 4],
    [3, 5],
    [4, 5],
  ];

  connections.forEach(([from, to]) => {
    const line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([nodes[from], nodes[to]]),
      lineMaterial,
    );
    group.add(line);
  });

  const ringGeometry = new THREE.TorusGeometry(2.85, 0.01, 8, 120);
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x2e86c1,
    transparent: true,
    opacity: 0.18,
  });

  for (let index = 0; index < 3; index += 1) {
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2.6;
    ring.rotation.z = index * 0.8;
    ring.scale.setScalar(0.86 + index * 0.16);
    group.add(ring);
  }

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / Math.max(rect.height, 1);
    camera.updateProjectionMatrix();
  };

  let frame = 0;
  const animate = () => {
    frame = requestAnimationFrame(animate);
    const time = performance.now() * 0.0004;
    group.rotation.y = Math.sin(time) * 0.28;
    group.rotation.x = Math.cos(time * 0.7) * 0.08;
    group.position.y = Math.sin(time * 1.6) * 0.08;
    renderer.render(scene, camera);
  };

  resize();
  animate();
  window.addEventListener("resize", resize);

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("resize", resize);
    renderer.dispose();
    nodeGeometry.dispose();
    ringGeometry.dispose();
  };
}
