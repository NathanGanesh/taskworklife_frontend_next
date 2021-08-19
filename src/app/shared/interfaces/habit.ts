

export class Habit {
  id?:number;
  date:Date|string;
  book?:boolean;
  dailyGoals?:boolean;
  foodTrack?:boolean;
  gym?:boolean;
  habitTrack?:boolean;
  journal?:boolean;
  wakatime?:boolean;
  weightTrack?:boolean;
  noFap?:boolean;


  constructor(id: number, date: Date, book: boolean, dailyGoals: boolean, foodTrack: boolean, gym: boolean, habitTrack: boolean , journal: boolean, wakatime: boolean, weightTrack: boolean, noFap: boolean) {
    this.id = id;
    this.date = date;
    this.book = book;
    this.dailyGoals = dailyGoals;
    this.foodTrack = foodTrack;
    this.gym = gym;
    this.habitTrack = habitTrack;
    this.journal = journal;
    this.wakatime = wakatime;
    this.weightTrack = weightTrack;
    this.noFap = noFap;
  }
}
