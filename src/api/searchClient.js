/*
Filter(
    Paginate(Match(Index('search_client'))),
    Lambda(['clientName','clientId', 'ref'], ContainsStrRegex(Var('clientName'), 'FERRETERIA'))
  )
*/
import { client, q } from "../config/db";

const searchClient = (value) =>
  client
    .query(
      q.Filter(
        q.Paginate(q.Match(q.Index("search_client"))),
        q.Lambda(
          ["clientName", "clientId", "ref"],
          q.ContainsStr(q.Var("clientName"), value)
        )
      )
    )
    .then((response) => {
      const searchResult = response.data
      return searchResult;
    })
    .catch((error) => console.warn("error", error.message));

export default searchClient;
