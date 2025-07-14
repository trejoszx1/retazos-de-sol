class Garments {
  constructor() {
    this.id = newId;
    this.idInstagram = '';
    this.state = 'Edition';
    this.numberOfPublication = null;
    this.imagesPath = [] |'';
    this.folderPath = '';
    this.ReadyForPublication = false;
    this.dateOfpublication = '';
    //this.createdAt = now.format(formatDate);
    this.descriptions = '';
  }

  async create({ item }) {
    const folderPath = `Prenda--${this.createdAt}-${this.id}`;
    const data = {
      id: this.id,
      folderPath: await createDir(`${item.CollectionPath}/${folderPath}`),
      idInstagram: this.idInstagram,
      state: this.state,
      numberOfPublication: this.numberOfPublication,
      imagesPath: this.imagesPath,
      ReadyForPublication: this.ReadyForPublication,
      dateOfpublication: item.dateOfPublication | '',
      //dateCreate: this.dateCreate,
      descriptions: item.descriptions | '',
    }

    console.log('DATA= ',data)

    return data

  }
  serachByID({ id }) {
    return data.find((item) => item.garmentsIds.id === id);
  }
}


module.exports = Garments
