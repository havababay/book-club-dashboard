interface TopBook {
  name: string;
  author: string;
  reads: number;
}

export const topBooks : TopBook[] = [
  {name: "Before I Fall", author: "Lauren Oliver", reads: 100},
  {name: "Eleanor Oliphant Is Completely Fine", author: "Gail Honeyman", reads: 30},
  {name: "We Were the Lucky Ones", author: "Georgia Hunter", reads: 50},
  {name: "A Prisoner of Birth", author: "Jeffrey Archer", reads: 29},
  {name: "Never Let Me Go", author: "Kazuo Ishiguro", reads: 300},
  {name: "Fahrenheit 451", author: "Ray Bradbury", reads: 0},
];