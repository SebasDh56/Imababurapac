const everyTenMinutes = (startHour, endHour) => {
  const departures = [];

  for (let minutes = startHour * 60; minutes <= endHour * 60; minutes += 10) {
    departures.push(`${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`);
  }

  return departures;
};

const ibarraToQuinche = {
  name: 'Ibarra → El Quinche',
  note: 'Horarios de salida desde Ibarra.',
  groups: [
    { label: 'Todos los días', times: ['05:00', '05:20', '05:40', '06:00', '06:20', '11:02', '14:02', '17:02', '18:02'] },
    { label: 'Sábado y domingo', times: ['06:30', '07:30', '08:30', '09:30', '10:30', '12:30', '14:30'] }
  ]
};

const quincheToIbarra = {
  name: 'El Quinche → Ibarra',
  note: 'Horarios de salida desde El Quinche.',
  groups: [
    { label: 'Todos los días', times: ['05:00', '06:00', '10:30', '13:00', '16:00', '16:30', '17:00', '17:30', '18:00'] },
    { label: 'Sábado y domingo', times: ['07:00', '08:00', '09:00', '10:00', '12:00', '14:00', '18:30'] }
  ]
};

const withRouteMetadata = (schedule, name, note) => ({ ...schedule, name, note });

export const routeSchedules = {
  'Ibarra-El Quinche': ibarraToQuinche,
  'Ibarra-Otavalo': withRouteMetadata(ibarraToQuinche, 'Ibarra → Otavalo', 'Servicio Ibarra–El Quinche, vía Otavalo y Cayambe. Salidas desde Ibarra.'),
  'Ibarra-Cayambe': withRouteMetadata(ibarraToQuinche, 'Ibarra → Cayambe', 'Servicio Ibarra–El Quinche, vía Otavalo y Cayambe. Salidas desde Ibarra.'),
  'Otavalo-Cayambe': { name: 'Otavalo → Cayambe', note: 'Frecuencia cada 10 minutos.', groups: [{ label: 'Todos los días · 05:00–19:30', times: everyTenMinutes(5, 19.5) }] },
  'Cayambe-Otavalo': { name: 'Cayambe → Otavalo', note: 'Frecuencia cada 10 minutos.', groups: [{ label: 'Todos los días · 05:00–20:30', times: everyTenMinutes(5, 20.5) }] },
  'El Quinche-Ibarra': quincheToIbarra,
  'El Quinche-Cayambe': withRouteMetadata(quincheToIbarra, 'El Quinche → Cayambe', 'Servicio El Quinche–Ibarra, vía Cayambe y Otavalo. Salidas desde El Quinche.'),
  'El Quinche-Otavalo': withRouteMetadata(quincheToIbarra, 'El Quinche → Otavalo', 'Servicio El Quinche–Ibarra, vía Cayambe y Otavalo. Salidas desde El Quinche.')
};

export const destinationsByOrigin = {
  Ibarra: ['Otavalo', 'Cayambe', 'El Quinche'],
  Otavalo: ['Cayambe', 'El Quinche'],
  Cayambe: ['Otavalo', 'Ibarra'],
  'El Quinche': ['Ibarra', 'Otavalo', 'Cayambe']
};
