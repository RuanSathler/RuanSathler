import fs from 'fs';

const svgLight = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="100"><text x="10" y="50" font-size="20">Pacman Graph - Light</text></svg>`;
const svgDark = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="100"><text x="10" y="50" font-size="20" fill="white">Pacman Graph - Dark</text></svg>`;

fs.mkdirSync('./output', { recursive: true });
fs.writeFileSync('./output/pacman-contribution-graph.svg', svgLight);
fs.writeFileSync('./output/pacman-contribution-graph-dark.svg', svgDark);

console.log("✅ Gráficos SVG gerados na pasta ./output");
