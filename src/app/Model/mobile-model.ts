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
  // Product Description:
  public image1: string;
  public image2: string;
  public image3: string;
  public image4: string;
  public image5: string;
  public image6: string;
  public image7: string;
  public image8: string;
  public productname1: string;
  public productdescription1: string;
  public productname2: string;
  public productdescription2: string;
  public productname3: string;
  public productdescription3: string;
  public productname4: string;
  public productdescription4: string;
  public productname5: string;
  public productdescription5: string;
  public productname6: string;
  public productdescription6: string;
  public productname7: string;
  public productdescription7: string;
  // Product Specification:
  // General
  public InTheBox: string;
  public ModelNumber: string;
  public ModelName: string;
  public Color: string;
  public BrowseType: string;
  public SimType: string;
  public HybridSim: string;
  public TouchScreen: string;
  public OtgCompatible: string;
  public SoundEnhancements: string;
  //   Display Features
  public DisplaySize: string;
  public Resolution: string;
  public ResolutionType: string;
  public Gpu: string;
  public DisplayType: string;
  public OtherDisplayFeature: string;
  //   Os & Processor Features:
  public OperatingSystem: string;
  public ProcessorType: string;
  public ProcessorCore: string;
  public PrimaryClockSpeed: string;
  public OperatingFrequency: string;
  //   Memory & Storage Feature
  public InternalStorage: string;
  public Ram: string;
  public ExpandableStorage: string;
  //   Camera Feature
  public PrimaryCameraAvailable: string;
  public PrimaryCamera: string;
  public SecondaryCameraAvailable: string;
  public SecondaryCamera: string;

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
    extraImg: string[],
    image1: string,
    image2: string,
    image3: string,
    image4: string,
    image5: string,
    image6: string,
    image7: string,
    image8: string,
    productname1: string,
    productdescription1: string,
    productname2: string,
    productdescription2: string,
    productname3: string,
    productdescription3: string,
    productname4: string,
    productdescription4: string,
    productname5: string,
    productdescription5: string,
    productname6: string,
    productdescription6: string,
    productname7: string,
    productdescription7: string,
    // Product Specification:
    // General
    InTheBox: string,
    ModelNumber: string,
    ModelName: string,
    Color: string,
    BrowseType: string,
    SimType: string,
    HybridSim: string,
    TouchScreen: string,
    OtgCompatible: string,
    SoundEnhancements: string,
    //   Display Features
    DisplaySize: string,
    Resolution: string,
    ResolutionType: string,
    Gpu: string,
    DisplayType: string,
    OtherDisplayFeature: string,
    //   Os & Processor Features:
    OperatingSystem: string,
    ProcessorType: string,
    ProcessorCore: string,
    PrimaryClockSpeed: string,
    OperatingFrequency: string,
    //   Memory & Storage Feature
    InternalStorage: string,
    Ram: string,
    ExpandableStorage: string,
    //   Camera Feature
    PrimaryCameraAvailable: string,
    PrimaryCamera: string,
    SecondaryCameraAvailable: string,
    SecondaryCamera: string
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
    // Product Description:
    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;
    this.image4 = image4;
    this.image5 = image5;
    this.image6 = image6;
    this.image7 = image7;
    this.image8 = image8;
    this.productname1 = productname1;
    this.productdescription1 = productdescription1;
    this.productname2 = productname2;
    this.productdescription2 = productdescription2;
    this.productname3 = productname3;
    this.productdescription3 = productdescription3;
    this.productname4 = productname4;
    this.productdescription4 = productdescription4;
    this.productname5 = productname5;
    this.productdescription5 = productdescription5;
    this.productname6 = productname6;
    this.productdescription6 = productdescription6;
    this.productname7 = productname7;
    this.productdescription7 = productdescription7;
    // Product Specification:
    // General
    this.InTheBox = InTheBox;
    this.ModelName = ModelName;
    this.ModelNumber = ModelNumber;
    this.Color = Color;
    this.BrowseType = BrowseType;
    this.SimType = SimType;
    this.HybridSim = HybridSim;
    this.TouchScreen = TouchScreen;
    this.OtgCompatible = OtgCompatible;
    this.SoundEnhancements = SoundEnhancements;
    //   Display Features
    this.DisplaySize = DisplaySize;
    this.Resolution = Resolution;
    this.ResolutionType = ResolutionType;
    this.Gpu = Gpu;
    this.DisplayType = DisplayType;
    this.OtherDisplayFeature = OtherDisplayFeature;
    //   Os & Processor Features:
    this.OperatingSystem = OperatingSystem;
    this.ProcessorType = ProcessorType;
    this.ProcessorCore = ProcessorCore;
    this.PrimaryClockSpeed = PrimaryClockSpeed;
    this.OperatingFrequency = OperatingFrequency;
    //   Memory & Storage Feature
    this.InternalStorage = InternalStorage;
    this.Ram = Ram;
    this.ExpandableStorage = ExpandableStorage;
    //   Camera Feature
    this.PrimaryCameraAvailable = PrimaryCameraAvailable;
    this.PrimaryCamera = PrimaryCamera;
    this.SecondaryCameraAvailable = SecondaryCameraAvailable;
    this.SecondaryCamera = SecondaryCamera;
  }
}
