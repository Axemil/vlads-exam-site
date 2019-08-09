import uuid from "uuid";

const accountList = [
  {
    id: uuid.v4(),
    email: 'random1@mail.smth',
    password: '1234',
    address: '40142 Freeman Port',
    zip: '15107-3618'
  },
  {
    id: uuid.v4(),
    email: 'random2@mail.smth',
    password: '12345',
    address: '683 Emmerich Rest',
    zip: '25887'
  },
  {
    id: uuid.v4(),
    email: 'random3@mail.smth',
    password: '4321',
    address: '74983 Denesik Throughway',
    zip: '61067'
  },

]

export default accountList;