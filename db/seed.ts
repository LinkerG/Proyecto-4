import { Competition, Competition_Result, Team, db } from 'astro:db';
import { generateUUID } from "../src/helpers/generateUUID"

export default async function run() {
  await db.insert(Team).values([
  { 
      slug: 'rembadalona', 
      name: 'Club de Rem Badalona', 
      logo: 'img/logo/rembadalona.jpg' ,
      isActive: true,
  },
  { 
      slug: 'nataciobdn', 
      name: 'Club Natació Badalona', 
      logo: 'img/logo/nataciobdn.jpg' ,
      isActive: true,
  },
  { 
      slug: 'betulo', 
      name: 'Club Nàutic Bétulo', 
      logo: 'img/logo/betulo.jpg' ,
      isActive: true,
  },
  { 
      slug: 'aexinoxano', 
      name: 'A.E. Xino Xano Deltebre', 
      logo: 'img/logo/aexinoxano.jpg' ,
      isActive: true,
  },
  { 
      slug: 'flix', 
      name: 'Club Nàutic Flix', 
      logo: 'img/logo/flix.jpg' ,
      isActive: true,
  },
  { 
      slug: 'vecambrills', 
      name: "V.E. Vogadors de Cambrills", 
      logo: 'img/logo/vecambrills.jpg' ,
      isActive: true,
  },
  { 
      slug: 'remcambrills', 
      name: 'Club de Rem Cambrills', 
      logo: 'img/logo/remcambrills.jpg' ,
      isActive: true,
  },
  { 
      slug: 'remmataro', 
      name: 'Club de rem Mataró', 
      logo: 'img/logo/remmataro.jpg' ,
      isActive: true,
  },
  ]);

  await db.insert(Competition).values([
    {
      // REGATA LLAUT EJ 3 CALLES
      id: 1, name: "1ª Regata de Lliga de Llaüt", year: "23-24", date: new Date("2024-04-14"), location: "Castelldefells", 
      image: "default.png", boat_type_id: 1, available_categories: {"I":"I", "C":"C", "J":"J", "S":"S", "V":"V"}, lines: 3, line_distance: 350, isCancelled: false, isActive: true
    },
    {
      // REGATA LLAUT EJ 4 CALLES
      id: 2, name: "2ª Regata de Lliga de Llaüt", year: "23-24", date: new Date("2024-05-12"), location: "Flix", 
      image: "default.png", boat_type_id: 1, available_categories: {"I":"I", "C":"C", "J":"J", "S":"S", "V":"V"}, lines: 4, line_distance: 350, isCancelled: false, isActive: true
    },
    {
      // REGATA BATEL EJ
      id: 3, name: "1ª Regata de Lliga de Batel", year: "23-24", date: new Date("2024-04-13"), location: "Castelldefells", 
      image: "default.png", boat_type_id: 3, available_categories: {"A":"A", "I":"I", "C":"C", "J":"J", "S":"S", "V":"V"}, lines: 4, line_distance: 500, isCancelled: false, isActive: true
    },
  ])

  await db.insert(Competition_Result).values([
    {
      id: generateUUID(),
      competition_id: 3,
      team_id: "rembadalona",
      isFinal: false,
      group: 1,
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
      team_id: "rembadalona",
      isFinal: false,
      group: 1,
      category: "SF",
      time: "5:45",
      distance: 1400,
      isLeague: true,
      isChampionship: false,
      isActive: true
    },
    {
      id: generateUUID(),
      competition_id: 3,
      team_id: "rembadalona",
      isFinal: false,
      group: 1,
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
      team_id: "remmataro",
      isFinal: false,
      group: 1,
      category: "SF",
      time: "5:40",
      distance: 1400,
      isLeague: true,
      isChampionship: false,
      isActive: true
    },
    {
      id: generateUUID(),
      competition_id: 3,
      team_id: "betulo",
      isFinal: false,
      group: 1,
      category: "SF",
      time: "6:45",
      distance: 1400,
      isLeague: true,
      isChampionship: false,
      isActive: true
    },
    {
      id: generateUUID(),
      competition_id: 3,
      team_id: "remmataro",
      isFinal: false,
      group: 1,
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
      team_id: "rembadalona",
      isFinal: true,
      group: 1,
      category: "SF",
      time: "4:50",
      distance: 1400,
      isLeague: true,
      isChampionship: false,
      isActive: true
    },
    {
      id: generateUUID(),
      competition_id: 3,
      team_id: "remmataro",
      isFinal: true,
      group: 1,
      category: "SF",
      time: "4:40",
      distance: 1400,
      isLeague: true,
      isChampionship: false,
      isActive: true
    },
    {
      id: generateUUID(),
      competition_id: 3,
      team_id: "betulo",
      isFinal: true,
      group: 1,
      category: "SF",
      time: "4:51",
      distance: 1400,
      isLeague: true,
      isChampionship: false,
      isActive: true
    },
  ])
}
