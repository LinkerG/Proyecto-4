import { Boat_type, Competition, Team, db } from 'astro:db';

export default async function run() {
  await db.insert(Team).values([
    { email: 'rembadalona@gmail.com', password: 'test', name: 'Club de Rem Badalona', logo: 'default.png' },
    { email: 'nataciobadalona@gmail.com', password: 'test', name: 'Club Natació Badalona', logo: 'default.png' },
    { email: 'betulo@gmail.com', password: 'test', name: 'Club Nàutic Bétulo', logo: 'default.png' },
    { email: 'aexinoxano@gmail.com', password: 'test', name: 'A.E. Xino Xano Deltebre', logo: 'default.png' },
    { email: 'nauticflix@gmail.com', password: 'test', name: 'Club Nàutic Flix', logo: 'default.png' },
    { email: 'vecambrills@gmail.com', password: 'test', name: "Vent d'Estrop Vogadors de Cambrills", logo: 'default.png' },
    { email: 'remcambrills@gmail.com', password: 'test', name: 'Club de rem Cambrills', logo: 'default.png' },
    { email: 'remmataro@gmail.com', password: 'test', name: 'Club de rem Mataró', logo: 'default.png' },
  ]);

  await db.insert(Boat_type).values([
    {id: 1, boat_type: "llaut_med"},
    {id: 2, boat_type: "llagut_cat"},
    {id: 3, boat_type: "batel"},
  ])

  await db.insert(Competition).values([
    {
      // REGATA LLAUT EJ 3 CALLES
      id: 1, name: "1ª Regata de Lliga de Llaüt", year: "23-24", date: new Date("2024-05-31"), location: "Castelldefells", 
      image: "default.txt", boat_type_id: 1, available_categories: {"I":"I", "C":"C", "J":"J", "S":"S", "V":"V"}, lines: 3, isCancelled: false, isActive: true
    },
    {
      // REGATA LLAUT EJ 4 CALLES
      id: 2, name: "2ª Regata de Lliga de Llaüt", year: "23-24", date: new Date("2024-05-31"), location: "Castelldefells", 
      image: "default.txt", boat_type_id: 1, available_categories: {"I":"I", "C":"C", "J":"J", "S":"S", "V":"V"}, lines: 4, isCancelled: false, isActive: true
    },
    {
      // REGATA BATEL EJ
      id: 3, name: "1ª Regata de Lliga de Batel", year: "23-24", date: new Date("2024-05-30"), location: "Castelldefells", 
      image: "default.txt", boat_type_id: 3, available_categories: {"A":"A", "I":"I", "C":"C", "J":"J", "S":"S", "V":"V"}, isCancelled: false, isActive: true
    },
  ])
}
