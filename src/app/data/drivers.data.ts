import { Driver } from '../models/driver.model';

export const DRIVERS: Driver[] = [
  {
    id: 'hamilton',
    name: 'Lewis Hamilton',
    team: 'Ferrari',
    teamColor: '#FF2800',
    number: 44,
    country: 'GB',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png',
    stats: { worldChampionships: 7, wins: 105, podiums: 201, points: 4829.5 }
  },
  {
    id: 'leclerc',
    name: 'Charles Leclerc',
    team: 'Ferrari',
    teamColor: '#FF2800',
    number: 16,
    country: 'MC',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png',
    stats: { worldChampionships: 0, wins: 7, podiums: 39, points: 1339 }
  },
  {
    id: 'verstappen',
    name: 'Max Verstappen',
    team: 'Red Bull Racing',
    teamColor: '#0600EF',
    number: 1,
    country: 'NL',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png',
    stats: { worldChampionships: 4, wins: 62, podiums: 110, points: 2953.5 }
  },
  {
    id: 'lawson',
    name: 'Liam Lawson',
    team: 'Red Bull Racing',
    teamColor: '#0600EF',
    number: 30, // Assuming number
    country: 'NZ',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png',
    stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 2 }
  },
  {
    id: 'norris',
    name: 'Lando Norris',
    team: 'McLaren',
    teamColor: '#FF8000',
    number: 4,
    country: 'GB',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png',
    stats: { worldChampionships: 0, wins: 3, podiums: 25, points: 938 }
  },
  {
    id: 'piastri',
    name: 'Oscar Piastri',
    team: 'McLaren',
    teamColor: '#FF8000',
    number: 81,
    country: 'AU',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png',
    stats: { worldChampionships: 0, wins: 2, podiums: 9, points: 334 }
  },
  {
    id: 'russell',
    name: 'George Russell',
    team: 'Mercedes',
    teamColor: '#00D2BE',
    number: 63,
    country: 'GB',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png',
    stats: { worldChampionships: 0, wins: 2, podiums: 14, points: 641 }
  },
  {
    id: 'antonelli',
    name: 'Kimi Antonelli',
    team: 'Mercedes',
    teamColor: '#00D2BE',
    number: 12, // Speculative
    country: 'IT',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/KIMANT01_Kimi_Antonelli/kimant01.png',
    stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 0 }
  },
  {
    id: 'alonso',
    name: 'Fernando Alonso',
    team: 'Aston Martin',
    teamColor: '#006F62',
    number: 14,
    country: 'ES',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png',
    stats: { worldChampionships: 2, wins: 32, podiums: 106, points: 2329 }
  },
  {
    id: 'stroll',
    name: 'Lance Stroll',
    team: 'Aston Martin',
    teamColor: '#006F62',
    number: 18,
    country: 'CA',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png',
    stats: { worldChampionships: 0, wins: 0, podiums: 3, points: 292 }
  },
   {
    id: 'gasly',
    name: 'Pierre Gasly',
    team: 'Alpine',
    teamColor: '#0090FF',
    number: 10,
    country: 'FR',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png',
    stats: { worldChampionships: 0, wins: 1, podiums: 4, points: 418 }
  },
  {
    id: 'doohan',
    name: 'Jack Doohan',
    team: 'Alpine',
    teamColor: '#0090FF',
    number: 42, // Speculative
    country: 'AU',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/J/JACDOO01_Jack_Doohan/jacdoo01.png',
    stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 0 }
  },
   {
    id: 'albon',
    name: 'Alexander Albon',
    team: 'Williams',
    teamColor: '#005AFF',
    number: 23,
    country: 'TH',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png',
    stats: { worldChampionships: 0, wins: 0, podiums: 2, points: 240 }
  },
  {
    id: 'sainz',
    name: 'Carlos Sainz',
    team: 'Williams',
    teamColor: '#005AFF',
    number: 55,
    country: 'ES',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png',
    stats: { worldChampionships: 0, wins: 3, podiums: 23, points: 1184.5 }
  },
   {
    id: 'tsunoda',
    name: 'Yuki Tsunoda',
    team: 'RB',
    teamColor: '#1634CB',
    number: 22,
    country: 'JP',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png',
    stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 85 }
  },
  {
    id: 'hadjar',
    name: 'Isack Hadjar',
    team: 'RB',
    teamColor: '#1634CB',
    number: 44, // Speculative
    country: 'FR',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/I/ISAHAD01_Isack_Hadjar/isahad01.png',
    stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 0 }
  },
  {
    id: 'hulkenberg',
    name: 'Nico Hulkenberg',
    team: 'Sauber',
    teamColor: '#00E701', // Kick Sauber green
    number: 27,
    country: 'DE',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png',
    stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 552 }
  },
  {
    id: 'bortoleto',
    name: 'Gabriel Bortoleto',
    team: 'Sauber',
    teamColor: '#00E701',
    number: 19, // Speculative
    country: 'BR',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png',
    stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 0 }
  },
   {
    id: 'ocon',
    name: 'Esteban Ocon',
    team: 'Haas',
    teamColor: '#B6BABD',
    number: 31,
    country: 'FR',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png',
    stats: { worldChampionships: 0, wins: 1, podiums: 3, points: 440 }
  },
  {
    id: 'bearman',
    name: 'Oliver Bearman',
    team: 'Haas',
    teamColor: '#B6BABD',
    number: 87,
    country: 'GB',
    image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png',
    stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 6 }
  }
];
