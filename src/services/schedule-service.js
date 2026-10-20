import { destinationsByOrigin, routeSchedules } from '../data/transport';

export const getToday = () => new Date().toISOString().slice(0, 10);
export const getDestinations = (origin) => destinationsByOrigin[origin] ?? [];
export const getSchedule = ({ origin, destination }) => routeSchedules[`${origin}-${destination}`];
export const isValidTrip = ({ origin, destination }) => getDestinations(origin).includes(destination);

export const getScheduleForDate = (schedule, date) => {
  if (!schedule || !date || schedule.groups.length <= 1) return schedule;

  const day = new Date(`${date}T12:00:00`).getDay();
  const isWeekend = day === 0 || day === 6;

  if (!isWeekend) return { ...schedule, groups: [schedule.groups[0]] };

  return {
    ...schedule,
    groups: [{
      label: `${day === 0 ? 'Domingo' : 'Sábado'} · todos los turnos`,
      times: schedule.groups.flatMap(({ times }) => times)
    }]
  };
};

export const getTurnsForDate = (schedule, date) => getScheduleForDate(schedule, date)?.groups.flatMap(({ times }) => times) ?? [];
