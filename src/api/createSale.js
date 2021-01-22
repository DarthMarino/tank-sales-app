import { client, q } from '../config/db'

const createSale = text => client.query(
  q.Create(
    q.Collection('sales'),
    {
      data: {
        text
      },
    },
  )
)
.then(ret => ret)
.catch(err => console.warn(err))


export default createSale