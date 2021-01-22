import { client, q } from '../config/db'

const editSale = (saleId, newSale) => client.query(
  q.Update(
    q.Ref(q.Collection('sales'), saleId),
    { data: { text: newSale } },
  )
)
.then((ret) => console.log(ret))
.catch(err => console.warn(err))


export default editSale