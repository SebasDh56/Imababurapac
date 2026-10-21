import routeMapImage from '../assets/images/home.png';
import nightBusImage from '../assets/images/Autobús Imbaburapac bajo luces nocturnas.png';
import ibarraPlatformImage from '../assets/images/andenIbarra.jpg';
import quinchePlatformImage from '../assets/images/andenQuinche.png';

export { routeMapImage };

export const terminalDetails = [
  {
    id: 'ibarra',
    name: 'Ibarra',
    eyebrow: 'Salida hacia Otavalo, Cayambe y El Quinche',
    description: 'Desde Ibarra comienza un recorrido que baja por el valle y va enlazando ciudades, mercados y familias. Aquí encuentras el punto de partida para tomar la ruta rumbo a Otavalo, Cayambe o El Quinche.',
    platform: 'Andén 19',
    office: 'Boletería: Numero 2 - Terminal Terrestre de Ibarra',
    mapUrl: 'https://maps.app.goo.gl/k9fw7Em5rTCiaTe86',
    mapQuery: 'Terminal Terrestre de Ibarra, Ibarra, Ecuador',
    photos: [
      { label: 'Foto de la boletería' },
      { label: 'Andén de salida en Ibarra', src: ibarraPlatformImage, alt: 'Unidad Imbaburapac en el andén de Ibarra' }
    ],
    scheduleKey: 'Ibarra-El Quinche'
  },
  {
    id: 'otavalo',
    name: 'Otavalo',
    eyebrow: 'Conexión hacia Cayambe y El Quinche',
    description: 'Otavalo es una parada para continuar el camino con calma. Desde el terminal, la ruta sigue hacia Cayambe y El Quinche, conectando a quienes viajan por trabajo, estudio o para visitar a los suyos.',
    platform: 'Andén 1',
    office: 'Boletería: Calle Neptali Ordoñez, Terminal Terrestre de Otavalo (Esquina)',
    mapUrl: 'https://maps.app.goo.gl/WAPceQasRBqXDWFR7',
    mapQuery: 'Terminal Terrestre de Otavalo, Otavalo, Ecuador',
    photos: [{ label: 'Foto del terminal' }, { label: 'Foto del andén 1' }],
    frequency: 'Salidas hacia Cayambe cada 10 minutos, de 05:00 a 19:30.'
  },
  {
    id: 'cayambe',
    name: 'Cayambe',
    eyebrow: 'Terminal y parada principal',
    description: 'En Cayambe el servicio tiene dos referencias útiles: el terminal y la parada principal. Así puedes ubicarte mejor y decidir cuál punto te queda más cerca antes de salir.',
    platform: 'Andén: Anden 1',
    office: 'Oficina: Terminal Terrestre de Cayambe, Oficina 1',
    mapUrl: 'https://maps.app.goo.gl/E1ZF5afRyBBf4EKk9',
    mapQuery: 'Terminal Terrestre de Cayambe, Cayambe, Ecuador',
    additionalMapUrl: 'https://maps.app.goo.gl/4gB7kxjgeyexQvB3A',
    photos: [
      { label: 'Foto de la oficina' },
      { label: 'Andén de salida en Cayambe', src: nightBusImage, alt: 'Unidad Imbaburapac en el andén de Cayambe durante la noche' }
    ],
    frequency: 'Salidas hacia Otavalo cada 10 minutos, de 05:00 a 20:30.'
  },
  {
    id: 'el-quinche',
    name: 'El Quinche',
    eyebrow: 'Atención dominical',
    description: 'El Quinche es el punto de retorno hacia Cayambe, Otavalo e Ibarra. La atención en boletería se realiza únicamente los domingos; por eso conviene revisar la hora de salida antes de acercarte.',
    platform: 'Andén: Anden 1',
    office: 'Boletería disponible solo los domingos',
    mapUrl: 'https://maps.app.goo.gl/1BWWqP3kv5vLKoub6',
    mapQuery: '-0.112138,-78.297931',
    photos: [
      { label: 'Foto de la boletería' },
      { label: 'Andén de salida en El Quinche', src: quinchePlatformImage, alt: 'Unidad Imbaburapac en El Quinche' }
    ],
    scheduleKey: 'El Quinche-Ibarra'
  }
];
