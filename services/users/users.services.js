
class UsersService {
  constructor()
  {
    this.users= [];
    this.generate();
  }
  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.Users.push({
        id: id,
        userCC: userCC,
        name: name,
        city: city,
        neighborhood: neighborhood,
        indications : indicators,
      })
    }
  }

}
