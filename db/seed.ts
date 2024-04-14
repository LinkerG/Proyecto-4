import { Competition, Competition_Result, Team, db } from 'astro:db';
import { generateUUID } from "../src/helpers/generateUUID"

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

  await db.insert(Competition).values([
    {
      // REGATA LLAUT EJ 3 CALLES
      id: 1, name: "1ª Regata de Lliga de Llaüt", year: "23-24", date: new Date("2024-04-14"), location: "Castelldefells", 
      image: "default.png", boat_type_id: 1, available_categories: {"I":"I", "C":"C", "J":"J", "S":"S", "V":"V"}, lines: 3, isCancelled: false, isActive: true
    },
    {
      // REGATA LLAUT EJ 4 CALLES
      id: 2, name: "2ª Regata de Lliga de Llaüt", year: "23-24", date: new Date("2024-05-12"), location: "Flix", 
      image: "default.png", boat_type_id: 1, available_categories: {"I":"I", "C":"C", "J":"J", "S":"S", "V":"V"}, lines: 4, isCancelled: false, isActive: true
    },
    {
      // REGATA BATEL EJ
      id: 3, name: "1ª Regata de Lliga de Batel", year: "23-24", date: new Date("2024-04-13"), location: "Castelldefells", 
      image: "default.png", boat_type_id: 3, available_categories: {"A":"A", "I":"I", "C":"C", "J":"J", "S":"S", "V":"V"}, isCancelled: false, isActive: true
    },
  ])

  await db.insert(Competition_Result).values([
    {
      id: generateUUID(),
      competition_id: 3,
      team_id: "rembadalona@gmail.com",
      isFinal: false,
      category: "SM",
      time: "DNS",
      distance: 1400,
      isLeague: true,
      isChampionship: false,
      isActive: true
    },
    {
      id: generateUUID(),
      competition_id: 3,
      team_id: "rembadalona@gmail.com",
      isFinal: false,
      category: "SF",
      time: "DNS",
      distance: 1400,
      isLeague: true,
      isChampionship: false,
      isActive: true
    },
    {
      id: generateUUID(),
      competition_id: 3,
      team_id: "rembadalona@gmail.com",
      isFinal: false,
      category: "JM",
      time: "DNS",
      distance: 1400,
      isLeague: true,
      isChampionship: false,
      isActive: true
    },
    {
      id: generateUUID(),
      competition_id: 3,
      team_id: "remmataro@gmail.com",
      isFinal: false,
      category: "SF",
      time: "DNS",
      distance: 1400,
      isLeague: true,
      isChampionship: false,
      isActive: true
    },
    {
      id: generateUUID(),
      competition_id: 3,
      team_id: "remmataro@gmail.com",
      isFinal: false,
      category: "JM",
      time: "DNS",
      distance: 1400,
      isLeague: true,
      isChampionship: false,
      isActive: true
    },
  ])
}
