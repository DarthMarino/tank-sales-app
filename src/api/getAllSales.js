import { client, q } from '../config/db'

const getAllSales = client.query(
  q.Paginate(
    q.Match(
      q.Ref('indexes/all_sales')))
)
  .then(response => {
    const salesRefs = response.data
    // create new query out of notes refs. 
    // https://docs.fauna.com/fauna/current/api/fql/
    const getAllSalesDataQuery = salesRefs.map((ref) => {
      return q.Get(ref)
    })
    // query the refs
    return client.query(getAllSalesDataQuery).then((data) => data)
  })
  .catch(error => console.warn('error', error.message))

export default getAllSales;