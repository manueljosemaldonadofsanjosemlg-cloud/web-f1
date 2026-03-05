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
      stats: { worldChampionships: 0, wins: 7, podiums: 39, points: 1339 },
      bio: 'Monegasco de Mónaco y símbolo de la nueva generación Ferrari. Debutó en F1 en 2018 con Sauber y llegó a la Scuderia en 2019. Logró su primera victoria en Bélgica ese mismo año. Conocido por sus brillantes poles en clasificación, es considerado uno de los pilotos más talentosos de la parrilla. Con Lewis Hamilton como compañero desde 2025, busca su primer campeonato del mundo.'
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
      stats: { worldChampionships: 7, wins: 105, podiums: 201, points: 4829.5 },
      bio: 'El piloto más laureado de la historia de la Fórmula 1, con 7 campeonatos del mundo igualando el récord de Schumacher. Debutó en 2007 con McLaren y casi ganó el campeonato en su primera temporada. Domino la era híbrida con Mercedes (2014–2020). En 2025 dio el salto histórico a Ferrari, donde busca su octavo título y una nueva era de victorias con el icónico equipo italiano.'
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
      stats: { worldChampionships: 1, wins: 8, podiums: 30, points: 1300 },
      bio: 'Campeón del Mundo 2025 con McLaren. El británico de Bristol debutó en 2019 con el equipo naranja y rápidamente se convirtió en uno de los favoritos del público por su carisma y velocidad. Tras años de podios y victorias parciales, coronó su talento con el título mundial en 2025, liderando la resurgencia de McLaren como potencia dominante de la F1.'
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
      stats: { worldChampionships: 0, wins: 4, podiums: 18, points: 550 },
      bio: 'Prodigio australiano que dominó las categorías de formación (F3 y F2) ganando ambos títulos consecutivamente antes de debutar en F1 en 2023. Llegó a McLaren como rookie pero rápidamente demostró ser un rival de primera línea. Múltiple ganador de Grandes Premios, su madurez y consistencia lo sitúan como una de las grandes estrellas del futuro de la Fórmula 1.'
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
      stats: { worldChampionships: 4, wins: 63, podiums: 112, points: 3100 },
      bio: 'Cuádruple Campeón del Mundo (2021–2024) y el dominador indiscutible de la F1 moderna. Debutó en 2015 como el piloto más joven en la historia del deporte. Con Red Bull, logró hazañas memorables como 15 victorias consecutivas en 2023. Agresivo, rápido y sin límites, Verstappen es considerado por muchos el mejor piloto de su generación.'
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
      stats: { worldChampionships: 0, wins: 0, podiums: 1, points: 30 },
      bio: 'Joven promesa franco-argelina del programa Red Bull Junior. Campeón de Fórmula 2 en 2024, ascendió al equipo principal para 2026 en sustitución de Sergio Pérez. Criado en Francia, su estilo de conducción agresivo y sus reflejos naturales lo señalan como uno de los grandes talentos emergentes de la nueva generación.'
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
      stats: { worldChampionships: 0, wins: 3, podiums: 18, points: 750 },
      bio: 'El heredero natural del trono de Mercedes. Debutó en F1 en 2019 con Williams y durante tres años demostró su nivel sacando todo el potencial de un coche inferior. En 2022 se incorporó a Mercedes y en 2023 ganó su primer Gran Premio. Conocido como «Mr. Saturday» por su dominio en clasificación, lidera el proyecto Mercedes de cara al futuro.'
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
      stats: { worldChampionships: 0, wins: 0, podiums: 3, points: 80 },
      bio: 'La gran joya italiana del automovilismo. Nacido en Bolonia en 2006, se incorporó al programa junior de Mercedes siendo un adolescente y arrasó en todas las categorías de formación. Debutó en F1 en 2025 como sucesor de Lewis Hamilton, convirtiéndose en uno de los rookies más esperados en años. Su cerebro de carrera y su talento innato lo hacen un candidato a título en el futuro.'
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
      stats: { worldChampionships: 2, wins: 32, podiums: 106, points: 2350 },
      bio: 'Leyenda española de la Fórmula 1 y bicampeón del mundo en 2005 y 2006. El asturiano es conocido por una carrera llena de momentos épicos: su duelo con Schumacher, sus años en McLaren y Ferrari, y su mítico regreso a la F1 en 2021. Con Aston Martin sigue siendo una fuerza a tener en cuenta por su increíble gestión de carrera y su talento imperecedero.'
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
      stats: { worldChampionships: 0, wins: 0, podiums: 3, points: 310 },
      bio: 'Piloto canadiense e hijo del propietario del equipo Aston Martin, Lawrence Stroll. Debutó en F1 en 2017 con Williams convirtiéndose en el tercer piloto más joven en puntuar. Ha logrado tres podios en su carrera, incluyendo uno desde la pole en Turquía 2020. Su acceso privilegiado al equipo no ha impedido que demuestre velocidad real en condiciones específicas.'
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
      stats: { worldChampionships: 0, wins: 1, podiums: 5, points: 440 },
      bio: 'Piloto francés que vivió uno de los momentos más emotivos de la F1 moderna al ganar el Gran Premio de Italia 2020 con AlphaTauri, un resultado inesperado que se convirtió en histórico. Pasó por Red Bull Racing pero fue devuelto al equipo junior. En Alpine encontró estabilidad y es uno de los pilotos franceses más destacados del pelotón.'
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
      stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 5 },
      bio: 'La nueva sensación argentina de la Fórmula 1. Debutó a mediados de 2024 con Williams, convirtiéndose en el primer piloto argentino en la élite del automovilismo desde Gastón Mazzacane en 2001. Su debut fue tan impactante que generó una fiebre colectiva en Argentina. En 2026 da el salto a Alpine como piloto oficial, con el apoyo masivo de sus fanáticos latinoamericanos.'
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
      stats: { worldChampionships: 0, wins: 0, podiums: 2, points: 260 },
      bio: 'Piloto thai-británico que vivió la montaña rusa de la F1: llegó a Red Bull Racing con grandes expectativas pero fue reemplazado en 2021. Tras un año sabático como piloto de reserva de Williams, regresó en 2022 y se convirtió en el pilar fundamental del equipo de Grove, siendo reconocido por su capacidad para poner el coche en posiciones que van más allá del potencial del vehículo.'
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
      stats: { worldChampionships: 0, wins: 4, podiums: 25, points: 1250 },
      bio: 'El madrileño Carlos Sainz Jr., hijo del rally legend Carlos Sainz Sr., demostró en Ferrari ser un piloto de primera línea. Conquistó su primera victoria en Silverstone 2022 y fue especialmente brillante en la temporada 2023. Rechazado por Ferrari en favor de Hamilton, fichó por Williams para 2025 con el objetivo de elevar al equipo histórico al nivel de los mejores.'
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
      stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 18 },
      bio: 'Piloto neozelandés del programa Red Bull Junior que sustituyó a Ricciardo en AlphaTauri en 2023 durante varias carreras y demostró un nivel sorprendente. Ascendió al equipo principal de Red Bull en 2025 pero fue devuelto a Racing Bulls para 2026. Reconocido por su carácter combativo y su velocidad en una sola vuelta.'
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
      stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 0 },
      bio: 'Uno de los rookies más jóvenes de la historia de la F1. El sueco-británico Arvid Lindblad proviene del programa Red Bull Junior y se dio a conocer en la Fórmula 3 donde destacó desde muy joven. Debuta en 2026 con Racing Bulls, siendo uno de los talentos más prometedores de su generación con tan solo 18 años.'
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
      stats: { worldChampionships: 0, wins: 0, podiums: 1, points: 560 },
      bio: 'El «sin podios» más famoso de la F1, récord que finalmente rompió. El alemán lleva más de una década compitiendo en la Fórmula 1 con una consistencia y un nivel fuera de lo común, a pesar de nunca haber tenido el mejor coche. Es un maestro del ritmo de carrera y la gestión de neumáticos. Lidera el proyecto Audi como su piloto estrella para el debut del fabricante alemán en 2026.'
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
      stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 8 },
      bio: 'El campeón de Fórmula 2 de 2024 que ilusionó al automovilismo brasileño. Gabriel Bortoleto es protegido de Fernando Alonso y del programa McLaren Academy. Con solo 20 años debuta en F1 con Audi, una apuesta arriesgada que refleja la confianza masiva que el equipo alemán tiene en él. Su compatriota Ayrton Senna es su gran inspiración.'
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
      stats: { worldChampionships: 0, wins: 1, podiums: 3, points: 450 },
      bio: 'Piloto francés que luchó toda su carrera para abrirse camino en la F1. Su victoria en el Gran Premio de Hungría 2021 con Alpine fue el punto culminante de su trayectoria. Conocido por su constancia y determinación, pasó a Haas en busca de un nuevo comienzo. Su rivalidad con su antiguo compañero Alonso marcó una de las etapas más intensas de su carrera.'
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
      stats: { worldChampionships: 0, wins: 0, podiums: 0, points: 14 },
      bio: 'Joven promesa británica que sorprendió al mundo al sustituir a Carlos Sainz en Ferrari durante el Gran Premio de Arabia Saudí 2024, logrando un meritorio 7.º puesto en su debut. Ese rendimiento le valió un asiento titular en Haas para 2025. Con apenas 19 años, es uno de los rookies con más futuro de la parrilla actual.'
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
      stats: { worldChampionships: 0, wins: 6, podiums: 39, points: 1620 },
      bio: 'El ídolo mexicano de la Fórmula 1. «Checo» Pérez pasó años peleando con equipos de mediana capacidad antes de llegar a Red Bull en 2021, donde fue compañero de Verstappen. Sus victorias en Bakú, Mónaco y Arabia Saudí lo convirtieron en el piloto mexicano más exitoso de la historia. En 2026 inicia una nueva aventura con el recién llegado equipo Cadillac.'
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
      stats: { worldChampionships: 0, wins: 10, podiums: 67, points: 1797 },
      bio: 'Veterano finlandés con una carrera llena de victorias pero sin el campeonato soñado. Fue compañero de Hamilton en Mercedes durante cinco años, logrando 10 victorias y 67 podios, pero siempre a la sombra del británico. Tras su etapa en Sauber/Audi, se une a Cadillac para aportar su vasta experiencia al nuevo equipo estadounidense en su temporada debut.'
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
