import { client, q } from '../config/db'

const deleteSale = saleRef => client.query(
  q.Delete(q.Ref(q.Collection('sales'), saleRef))
)
.then(res => res)
.catch(err => console.warn(err.message))

export default deleteSale