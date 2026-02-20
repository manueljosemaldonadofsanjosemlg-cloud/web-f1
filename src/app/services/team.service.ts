import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player.interface';
import { Team } from '../interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private players: Player[] = [
    // ── FERRARI ──
    {
      id: 'leclerc',
      name: 'Charles Leclerc',
      team: 'Ferrari',
      teamColor: '#E8002D',
      number: 16,
      country: 'MC',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 7, podiums: 39, points: 1339 }
    },
    {
      id: 'hamilton',
      name: 'Lewis Hamilton',
      team: 'Ferrari',
      teamColor: '#E8002D',
      number: 44,
      country: 'GB',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 7, wins: 105, podiums: 201, points: 4829.5 }
    },

    // ── McLAREN ──
    {
      id: 'norris',
      name: 'Lando Norris',
      team: 'McLaren',
      teamColor: '#FF8000',
      number: 1,
      country: 'GB',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 1, wins: 8, podiums: 30, points: 1300 }
    },
    {
      id: 'piastri',
      name: 'Oscar Piastri',
      team: 'McLaren',
      teamColor: '#FF8000',
      number: 81,
      country: 'AU',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 4, podiums: 18, points: 550 }
    },

    // ── RED BULL RACING ──
    {
      id: 'verstappen',
      name: 'Max Verstappen',
      team: 'Red Bull Racing',
      teamColor: '#3671C6',
      number: 3,
      country: 'NL',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 4, wins: 63, podiums: 112, points: 3100 }
    },
    {
      id: 'hadjar',
      name: 'Isack Hadjar',
      team: 'Red Bull Racing',
      teamColor: '#3671C6',
      number: 6,
      country: 'FR',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/I/ISAHAD01_Isack_Hadjar/isahad01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 0, podiums: 1, points: 30 }
    },

    // ── MERCEDES ──
    {
      id: 'russell',
      name: 'George Russell',
      team: 'Mercedes',
      teamColor: '#27F4D2',
      number: 63,
      country: 'GB',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 3, podiums: 18, points: 750 }
    },
    {
      id: 'antonelli',
      name: 'Kimi Antonelli',
      team: 'Mercedes',
      teamColor: '#27F4D2',
      number: 12,
      country: 'IT',
      image: 'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/mercedes/andant01/2025mercedesandant01right.webp',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 0, podiums: 3, points: 80 }
    },

    // ── ASTON MARTIN ──
    {
      id: 'alonso',
      name: 'Fernando Alonso',
      team: 'Aston Martin',
      teamColor: '#229971',
      number: 14,
      country: 'ES',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 2, wins: 32, podiums: 106, points: 2350 }
    },
    {
      id: 'stroll',
      name: 'Lance Stroll',
      team: 'Aston Martin',
      teamColor: '#229971',
      number: 18,
      country: 'CA',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png',
      position: 'Piloto Titular',
      status: 'Sancionado',
      stats: { worldChampionships: 0, wins: 0, podiums: 3, points: 310 }
    },

    // ── ALPINE ──
    {
      id: 'gasly',
      name: 'Pierre Gasly',
      team: 'Alpine',
      teamColor: '#FF87BC',
      number: 10,
      country: 'FR',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 1, podiums: 5, points: 440 }
    },
    {
      id: 'colapinto',
      name: 'Franco Colapinto',
      team: 'Alpine',
      teamColor: '#FF87BC',
      number: 43,
      country: 'AR',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FRACOL01_Franco_Colapinto/fracol01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 5 }
    },

    // ── WILLIAMS ──
    {
      id: 'albon',
      name: 'Alexander Albon',
      team: 'Williams',
      teamColor: '#64C4FF',
      number: 23,
      country: 'TH',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 0, podiums: 2, points: 260 }
    },
    {
      id: 'sainz',
      name: 'Carlos Sainz',
      team: 'Williams',
      teamColor: '#64C4FF',
      number: 55,
      country: 'ES',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 4, podiums: 25, points: 1250 }
    },

    // ── RACING BULLS ──
    {
      id: 'lawson',
      name: 'Liam Lawson',
      team: 'Racing Bulls',
      teamColor: '#6692FF',
      number: 30,
      country: 'NZ',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 18 }
    },
    {
      id: 'lindblad',
      name: 'Arvid Lindblad',
      team: 'Racing Bulls',
      teamColor: '#6692FF',
      number: 41,
      country: 'GB',
      image: 'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2026/racingbulls/arvlin01/2026racingbullsarvlin01right.webp',
      position: 'Rookie',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 0 }
    },

    // ── AUDI (antes Sauber) ──
    {
      id: 'hulkenberg',
      name: 'Nico Hulkenberg',
      team: 'Audi',
      teamColor: '#FF0000',
      number: 27,
      country: 'DE',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 0, podiums: 1, points: 560 }
    },
    {
      id: 'bortoleto',
      name: 'Gabriel Bortoleto',
      team: 'Audi',
      teamColor: '#FF0000',
      number: 19,
      country: 'BR',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 8 }
    },

    // ── HAAS ──
    {
      id: 'ocon',
      name: 'Esteban Ocon',
      team: 'Haas',
      teamColor: '#B6BABD',
      number: 31,
      country: 'FR',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png',
      position: 'Piloto Titular',
      status: 'Lesionado',
      stats: { worldChampionships: 0, wins: 1, podiums: 3, points: 450 }
    },
    {
      id: 'bearman',
      name: 'Oliver Bearman',
      team: 'Haas',
      teamColor: '#B6BABD',
      number: 87,
      country: 'GB',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 14 }
    },

    // ── CADILLAC (Nuevo equipo 2026) ──
    {
      id: 'perez',
      name: 'Sergio Perez',
      team: 'Cadillac',
      teamColor: '#C0A44D',
      number: 11,
      country: 'MX',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 6, podiums: 39, points: 1620 }
    },
    {
      id: 'bottas',
      name: 'Valtteri Bottas',
      team: 'Cadillac',
      teamColor: '#C0A44D',
      number: 77,
      country: 'FI',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png',
      position: 'Piloto Titular',
      status: 'Disponible',
      stats: { worldChampionships: 0, wins: 10, podiums: 67, points: 1797 }
    }
  ];

  private teams: Team[] = [
    {
      id: 'ferrari',
      name: 'Ferrari',
      color: '#E8002D',
      logo: 'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/ferrari/2025ferrarilogo.webp',
      base: 'Maranello, Italia',
      country: 'IT',
      teamPrincipal: 'Frédéric Vasseur',
      powerUnit: 'Ferrari',
      drivers: ['Charles Leclerc', 'Lewis Hamilton'],
      championships: 16,
      wins: 245
    },
    {
      id: 'mclaren',
      name: 'McLaren',
      color: '#FF8000',
      logo: 'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/mclaren/2025mclarenlogo.webp',
      base: 'Woking, Reino Unido',
      country: 'GB',
      teamPrincipal: 'Andrea Stella',
      powerUnit: 'Mercedes',
      drivers: ['Lando Norris', 'Oscar Piastri'],
      championships: 9,
      wins: 184
    },
    {
      id: 'redbull',
      name: 'Red Bull Racing',
      color: '#3671C6',
      logo: 'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/redbullracing/2025redbullracinglogo.webp',
      base: 'Milton Keynes, Reino Unido',
      country: 'AT',
      teamPrincipal: 'Christian Horner',
      powerUnit: 'Honda RBPT',
      drivers: ['Max Verstappen', 'Isack Hadjar'],
      championships: 6,
      wins: 120
    },
    {
      id: 'mercedes',
      name: 'Mercedes',
      color: '#27F4D2',
      logo: 'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/mercedes/2025mercedeslogowhite.webp',
      base: 'Brackley, Reino Unido',
      country: 'DE',
      teamPrincipal: 'Toto Wolff',
      powerUnit: 'Mercedes',
      drivers: ['George Russell', 'Kimi Antonelli'],
      championships: 8,
      wins: 128
    },
    {
      id: 'aston-martin',
      name: 'Aston Martin',
      color: '#229971',
      logo: 'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/astonmartin/2025astonmartinlogowhite.webp',
      base: 'Silverstone, Reino Unido',
      country: 'GB',
      teamPrincipal: 'Andy Cowell',
      powerUnit: 'Honda',
      drivers: ['Fernando Alonso', 'Lance Stroll'],
      championships: 0,
      wins: 1
    },
    {
      id: 'alpine',
      name: 'Alpine',
      color: '#FF87BC',
      logo: 'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/alpine/2025alpinelogowhite.webp',
      base: 'Enstone, Reino Unido',
      country: 'FR',
      teamPrincipal: 'Oliver Oakes',
      powerUnit: 'Mercedes',
      drivers: ['Pierre Gasly', 'Franco Colapinto'],
      championships: 2,
      wins: 35
    },
    {
      id: 'williams',
      name: 'Williams',
      color: '#64C4FF',
      logo: 'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/williams/2025williamslogowhite.webp',
      base: 'Grove, Reino Unido',
      country: 'GB',
      teamPrincipal: 'James Vowles',
      powerUnit: 'Mercedes',
      drivers: ['Alexander Albon', 'Carlos Sainz'],
      championships: 9,
      wins: 114
    },
    {
      id: 'racing-bulls',
      name: 'Racing Bulls',
      color: '#6692FF',
      logo: 'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/racingbulls/2025racingbullslogowhite.webp',
      base: 'Faenza, Italia',
      country: 'IT',
      teamPrincipal: 'Laurent Mekies',
      powerUnit: 'Honda RBPT',
      drivers: ['Liam Lawson', 'Arvid Lindblad'],
      championships: 0,
      wins: 2
    },
    {
      id: 'audi',
      name: 'Audi F1 Team',
      color: '#FF0000',
      logo: 'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2026/audi/2026audilogowhite.webp',
      base: 'Neuburg an der Donau, Alemania',
      country: 'DE',
      teamPrincipal: 'Mattia Binotto',
      powerUnit: 'Audi',
      drivers: ['Nico Hulkenberg', 'Gabriel Bortoleto'],
      championships: 0,
      wins: 0
    },
    {
      id: 'haas',
      name: 'Haas',
      color: '#B6BABD',
      logo: 'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/haas/2025haaslogowhite.webp',
      base: 'Kannapolis, EE.UU.',
      country: 'US',
      teamPrincipal: 'Ayao Komatsu',
      powerUnit: 'Ferrari',
      drivers: ['Esteban Ocon', 'Oliver Bearman'],
      championships: 0,
      wins: 0
    },
    {
      id: 'cadillac',
      name: 'Cadillac F1 Team',
      color: '#C0A44D',
      logo: 'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2026/cadillac/2026cadillaclogowhite.webp',
      base: 'Charlotte, EE.UU.',
      country: 'US',
      teamPrincipal: 'Graeme Lowdon',
      powerUnit: 'Ferrari',
      drivers: ['Sergio Perez', 'Valtteri Bottas'],
      championships: 0,
      wins: 0
    }
  ];

  getPlayers(): Player[] {
    return this.players;
  }

  getTeams(): Team[] {
    return this.teams;
  }

  getPlayerByName(name: string): Player | undefined {
    return this.players.find(p => p.name.toLowerCase() === name.toLowerCase());
  }
}
