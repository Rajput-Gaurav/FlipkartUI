// create a model class for mobile:
export class Mobile {
  public id: number;
  public name: string;
  public description: string;
  public image: string;
  public reviewCounter: number;
  public reviews: string[];
  public price: number;
  public ratingCounter: number;
  public ratings: number[];
  public avg: number;
  public extraImages: string[];

  constructor(
    id: number,
    name: string,
    desc: string,
    image: string,
    reviewCounter: number,
    reviews: string[],
    price: number,
    ratingCounter: number,
    ratings: number[],
    avg: number,
    extraImg: string[]
  ) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.image = image;
    this.reviewCounter = reviewCounter;
    this.reviews = reviews;
    this.price = price;
    this.ratingCounter = ratingCounter;
    this.ratings = ratings;
    this.avg = avg;
    this.extraImages = extraImg;
  }
}
