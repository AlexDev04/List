import { computed, makeAutoObservable, onBecomeObserved } from "mobx";
import { getEvents, addEvent, editEvent, deleteEvent } from "../API";
import moment from "moment";

class EventStore {
  _id;
  theme = '';
  comment = '';
  date = new Date();
  archive = false;
  favorite = false;

  constructor({_id, theme, comment, date, archive, favorite}) {
    makeAutoObservable(this, {}, {
      autoBind: true
    });

    this._id = _id;
    this.theme = theme;
    this.comment = comment;
    this.date = date;
    this.archive = archive;
    this.favorite = favorite;
  }
}

class EventsStore {
  data = [];
  filtredData = [];

  constructor() {
    makeAutoObservable(this, {}, {
      autoBind: true,
      archiveData: computed,
      notArchiveData: computed
    });

    onBecomeObserved(this, 'data', this.fetch);
  }

  get archiveData() {
    return this.data.map(event => new EventStore(event)).filter(x => x.archive)
  }

  get notArchiveData() {
    return this.data.map(event => new EventStore(event)).filter(x => !x.archive)
  }

  get allData() {
    return this.data.map(event => new EventStore(event))
  }

  get pastData() {
    return this.data.map(event => new EventStore(event))
      .filter(x => moment(x.date).isBefore(moment(), 'day') && !x.archive);
  }

  get todayData() {
    return this.data.map(event => new EventStore(event))
      .filter(x => moment(x.date).isSame(moment(), 'day') && !x.archive);
  }

  get futureData() {
    return this.data.map(event => new EventStore(event))
      .filter(x => moment(x.date).isAfter(moment(), 'day') && !x.archive);
  }

  get favoriteData() {
    return this.data.map(event => new EventStore (event)).filter(x => x.favorite && !x.archive)
  }

  // get increaseData() {
  //   return this.filtredData.sort((x, y) => moment(x.date).isAfter(moment(y.day))? 1 : -1)
  // }

  // get decreaseData() {
  //   return this.filtredData.sort((x, y) => moment(x.date).isBefore(moment(y.day))? 1 : -1)
  // }

  *fetch() {
    const response = yield getEvents();
    this.data = response.map(event => new EventStore(event));
    this.filtredData = response.map(event => new EventStore(event))
      .filter(x => !x.archive)
  }

  *addEvent(data) {
    yield addEvent(data)
    yield this.fetch();
  }

  *editEvent(data) {
    yield editEvent(data);
    yield this.fetch();
  }

  *deleteEvent(id) {
    yield deleteEvent(id)
    yield this.fetch();
  }

  *clearArchive() {
    yield this.clearArchive()
    yield this.fetch();
  }
}

export const events = new EventsStore();