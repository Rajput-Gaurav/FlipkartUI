// create a model class for mobile-description:
export class MobileDescription {
  public id: number;
  // Product Description:
  public image1: string;
  public image2: string;
  public image3: string;
  public image4: string;
  public image5: string;
  public image6: string;
  public image7: string;
  public image8: string;
  public Productname1: string;
  public Productdescription1: string;
  public Productname2: string;
  public Productdescription2: string;
  public Productname3: string;
  public Productdescription3: string;
  public Productname4: string;
  public Productdescription4: string;
  public Productname5: string;
  public Productdescription5: string;
  public Productname6: string;
  public Productdescription6: string;
  public Productname7: string;
  public Productdescription7: string;
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
    // Product Description:
    id: number,
    image1: string,
    image2: string,
    image3: string,
    image4: string,
    image5: string,
    image6: string,
    image7: string,
    image8: string,
    Productname1: string,
    Productdescription1: string,
    Productname2: string,
    Productdescription2: string,
    Productname3: string,
    Productdescription3: string,
    Productname4: string,
    Productdescription4: string,
    Productname5: string,
    Productdescription5: string,
    Productname6: string,
    Productdescription6: string,
    Productname7: string,
    Productdescription7: string,
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
    // Product Description:
    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;
    this.image4 = image4;
    this.image5 = image5;
    this.image6 = image6;
    this.image7 = image7;
    this.image8 = image8;
    this.Productname1 = Productname1;
    this.Productdescription1 = Productdescription1;
    this.Productname2 = Productname2;
    this.Productdescription2 = Productdescription2;
    this.Productname3 = Productname3;
    this.Productdescription3 = Productdescription3;
    this.Productname4 = Productname4;
    this.Productdescription4 = Productdescription4;
    this.Productname5 = Productname5;
    this.Productdescription5 = Productdescription5;
    this.Productname6 = Productname5;
    this.Productdescription6 = Productdescription6;
    this.Productname7 = Productname7;
    this.Productdescription7 = Productdescription7;
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
