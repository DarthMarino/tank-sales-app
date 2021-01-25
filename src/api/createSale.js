import { client, q } from "../config/db";

/*: {
          client,
          location,
          ["140gls"]: "140gls",
          ["215gls"]: "215gls",
          ["265gls"]: "265gls",
          ["330gls"]: "330gls",
          ["410gls"]: "410gls",
          ["530gls"]: "530gls",
          ["600gls"]: "600gls",
          lids: "lids",
          specialClient: "specialClient",
          status: "status",
        }, */

const createSale = (data) =>
  client
    .query(
      q.Create(q.Collection("sales"), {
        data,
      })
    )
    //.then(ret => ret)
    .catch((err) => console.warn(err));

export default createSale;
