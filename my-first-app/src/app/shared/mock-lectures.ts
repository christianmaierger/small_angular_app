import { Lecture } from "./lecture";

// no more than a constant array holding objects of the datatype Lecture
export const LECTURES: Lecture[] = [
    {
      id: 1,
      name: 'Webtechnologies',
      room: '275',
      day: 'Friday',
      time: {hours: 8, minutes: 15},
      building: 'WE5',
      floor: '02',
      department: 'Lehrstuhl für Medieninformatik'
    },
    {
      id: 2,
      name: 'Advanced Java Programming',
      room: '332',
      day: 'Tuesday',
      time: {hours: 14, minutes: 15},
      building: 'WE3',
      floor: '04',
      department: 'Distributed Systems Group'
    },
    {
        id: 3,
        name: 'Ubicomp',
        room: '042',
        day: 'Monday',
        time: {hours: 10, minutes: 15},
        building: 'WE5',
        floor: '01',
        department: 'Human Computer Interaction Group'
      }
  ]