export function getAppointmentsForDay(state, day) {
  const { days } = state;
  const { appointments } = state;

  const correctDay = []
  const correctAppointments = [];

  days.map((item) => { 
    if (item.name === day) {
      correctDay.push(item);
    }
  });

  correctDay.map((keys) => {
    for( const key of keys.appointments) {
      correctAppointments.push(appointments[key])
    }
  });
  return correctAppointments
}