import { Boat_type, Competition, Team, db } from 'astro:db';

export default async function run() {
  await db.insert(Team).values([
    { 
      email: 'rembadalona@gmail.com', 
      password: 'test', 
      name: 'Club de Rem Badalona', 
      logo: 'img/logo/rembadalona.jpg' 
  },
  { 
      email: 'nataciobadalona@gmail.com', 
      password: 'test', 
      name: 'Club Natació Badalona', 
      logo: 'img/logo/nataciobadalona.jpg' 
  },
  { 
      email: 'betulo@gmail.com', 
      password: 'test', 
      name: 'Club Nàutic Bétulo', 
      logo: 'img/logo/betulo.jpg' 
  },
  { 
      email: 'aexinoxano@gmail.com', 
      password: 'test', 
      name: 'A.E. Xino Xano Deltebre', 
      logo: 'img/logo/aexinoxano.jpg' 
  },
  { 
      email: 'nauticflix@gmail.com', 
      password: 'test', 
      name: 'Club Nàutic Flix', 
      logo: 'img/logo/flix.jpg' 
  },
  { 
      email: 'vecambrills@gmail.com', 
      password: 'test', 
      name: "V.E. Vogadors de Cambrills", 
      logo: 'img/logo/vecambrills.jpg' 
  },
  { 
      email: 'remcambrills@gmail.com', 
      password: 'test', 
      name: 'Club de Rem Cambrills', 
      logo: 'img/logo/remcambrills.jpg' 
  },
  { 
      email: 'remmataro@gmail.com', 
      password: 'test', 
      name: 'Club de rem Mataró', 
      logo: 'img/logo/remmataro.jpg' 
  },
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
