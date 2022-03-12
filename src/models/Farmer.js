export default class Farmer {
  constructor(payload) {
    this.id = payload.id;
    this.title = payload.title.split("|")[1].trim();
    this.farmer_name = payload.title.split("|")[0].trim();
    this.image = payload.image;
    this.created_time = payload.created_time;
    this.updated_time = payload.updated_time;
  }
}
