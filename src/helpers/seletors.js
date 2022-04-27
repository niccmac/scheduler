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
  const { days, interviewers } = state;
  const daysFound = days.find(item => item.name === day);
  
 if ( !daysFound ){
   return [];
 }
  const interviewersForDay = daysFound.interviewers.map(interviewerID => interviewers[interviewerID])
  return interviewersForDay;  
}

export function keyString() { ( Math.random() + 6).toString(36).substring(7) };