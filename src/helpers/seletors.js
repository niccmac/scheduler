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

export function getInterview(state, interview) {
  
  const { interviewers } = state;

  if ( interview ) {
    const id = interview.interviewer;
    const student = interview.student;
    const returnThis = { 
    "student": student,
    "interviewer": interviewers[id]}
  return returnThis;
  }
  return null;
  
}

export function getInterviewersForDay(state, day) {
  const { days, interviewers, appointments } = state;
  if (state.days.length === 0 ) return [];

  let appointmentIDlist = ``;
  const correctInterviewers = [];

  days.map((item) => { 
    if (item.name === day) {
      appointmentIDlist = (item.appointments);
    }
  });
    for( const key of appointmentIDlist) {
      if(appointments[key].interview){
        const id = appointments[key].interview.interviewer
        correctInterviewers.push(interviewers[id].name)  
      }
    }
  
  return correctInterviewers
  
}