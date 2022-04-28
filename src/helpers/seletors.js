export function getAppointmentsForDay(state, day) {

  const { days, appointments } = state;

  const correctDay = []
  const correctAppointments = [];

  // Finds state day
  days.find((item) => {
    if (item.name === day) {
      correctDay.push(item);
    };
    return correctDay;
  });

  // Gets appointments for day
  correctDay.map((keys) => {
    for (const key of keys.appointments) {
      correctAppointments.push(appointments[key])
    };
    return correctAppointments;
  });

  return correctAppointments
};


export function getInterview(state, interview) {

  const { interviewers } = state;

  if (interview) {
    const id = interview.interviewer;
    const student = interview.student;
    const returnThis = {
      "student": student,
      "interviewer": interviewers[id]
    }
    return returnThis;
  };
  return null;
};


export function getInterviewersForDay(state, day) {

  const { days, interviewers } = state;

  const daysFound = days.find(item => item.name === day);

  if (!daysFound) {
    return [];
  }

  const interviewersForDay = daysFound.interviewers.map(interviewerID => interviewers[interviewerID])

  return interviewersForDay;
}

// Makes key id's when props does not provide > Wouldn't use in the wild
export function keyString() { (Math.random() + 6).toString(36).substring(7) };