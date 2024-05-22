export default class UserService {
    //Metodo que obtiene los usuarios de la db
    async all() {
      // return users from db
      return [
        {
          name: "Jhen", hincha: "Santa Fe"},
        {
          name: "Kmila", hincha: "Nacional"},
          {
            name: "Jorge", hincha: "Millonrarios"},
      ]
    }
  }
  