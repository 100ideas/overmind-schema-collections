import page from "page";
import queryString from 'query-string'
import axios from "axios";

export const router = {
  route(route, action) {
    page(route, ({ params, querystring }) => {
      const payload = Object.assign({}, params, queryString.parse(querystring))
      action(payload)
    })
  },
  start: () => page.start(),
  open: url => page.show(url)
};

export const api = {
  async getCollection() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    let data = res.data;
    let deleteKeys = ['address', 'phone', 'website', 'company', 'email']
    
    // simulate "minimal" user api endpoint
    data.map( user =>
      deleteKeys.map( key => 
        delete user[key]
      )
    )
    
    return data
  },
  async getCollectionWithDetails(id) {
    let { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    data = {
      id: data.id,
      name: data.name,
      details: {
        email: data.email,
        bio: data.company.catchPhrase,
        address: data.address
      }
    }

    return data
    
  }
};
