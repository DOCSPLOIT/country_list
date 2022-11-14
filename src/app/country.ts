export interface Country {
    name: Name;
    tld?: string[];
    cca2: string;
    ccn3?: string;
    cca3: string;
    cioc?: string;
    independent?: boolean;
    status: Status;
    unMember: boolean;
    currencies?: Currencies;
    idd: Idd;
    capital?: string[];
    altSpellings: string[];
    region: Region;
    subregion?: string;
    languages?: { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng: number[];
    landlocked: boolean;
    borders?: string[];
    area: number;
    demonyms?: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini?: { [key: string]: number };
    fifa?: string;
    car: Car;
    timezones: string[];
    continents: Continent[];
    flags: CoatOfArms;
    coatOfArms: CoatOfArms;
    startOfWeek: StartOfWeek;
    capitalInfo: CapitalInfo;
    postalCode?: PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side: Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    MRU?: Aed;
    AWG?: Aed;
    ARS?: Aed;
    SEK?: Aed;
    MVR?: Aed;
    MXN?: Aed;
    NZD?: Aed;
    USD?: Aed;
    XPF?: Aed;
    EUR?: Aed;
    PKR?: Aed;
    ZMW?: Aed;
    SCR?: Aed;
    MYR?: Aed;
    NOK?: Aed;
    UZS?: Aed;
    VUV?: Aed;
    AUD?: Aed;
    SGD?: Aed;
    SRD?: Aed;
    DZD?: Aed;
    MAD?: Aed;
    CRC?: Aed;
    LYD?: Aed;
    QAR?: Aed;
    DKK?: Aed;
    MUR?: Aed;
    KZT?: Aed;
    ALL?: Aed;
    BHD?: Aed;
    PGK?: Aed;
    BIF?: Aed;
    INR?: Aed;
    UYU?: Aed;
    XCD?: Aed;
    BBD?: Aed;
    MOP?: Aed;
    GBP?: Aed;
    IMP?: Aed;
    SYP?: Aed;
    ANG?: Aed;
    XOF?: Aed;
    KGS?: Aed;
    TTD?: Aed;
    EGP?: Aed;
    ILS?: Aed;
    JOD?: Aed;
    MGA?: Aed;
    HRK?: Aed;
    FOK?: Aed;
    HTG?: Aed;
    CKD?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    TWD?: Aed;
    SZL?: Aed;
    ZAR?: Aed;
    UAH?: Aed;
    BMD?: Aed;
    KRW?: Aed;
    PEN?: Aed;
    IQD?: Aed;
    MDL?: Aed;
    VES?: Aed;
    GYD?: Aed;
    KYD?: Aed;
    KHR?: Aed;
    LKR?: Aed;
    SDG?: BAM;
    ERN?: Aed;
    SOS?: Aed;
    KMF?: Aed;
    NIO?: Aed;
    RUB?: Aed;
    UGX?: Aed;
    CHF?: Aed;
    TJS?: Aed;
    SSP?: Aed;
    CZK?: Aed;
    BWP?: Aed;
    TND?: Aed;
    JMD?: Aed;
    MZN?: Aed;
    HNL?: Aed;
    AZN?: Aed;
    MKD?: Aed;
    GMD?: Aed;
    LRD?: Aed;
    CVE?: Aed;
    BSD?: Aed;
    GEL?: Aed;
    KID?: Aed;
    TZS?: Aed;
    CNY?: Aed;
    GTQ?: Aed;
    STN?: Aed;
    SLL?: Aed;
    XAF?: Aed;
    THB?: Aed;
    IDR?: Aed;
    GIP?: Aed;
    TMT?: Aed;
    DOP?: Aed;
    GHS?: Aed;
    JEP?: Aed;
    TRY?: Aed;
    TVD?: Aed;
    IRR?: Aed;
    KES?: Aed;
    BGN?: Aed;
    ZWL?: Aed;
    AOA?: Aed;
    NGN?: Aed;
    PLN?: Aed;
    SHP?: Aed;
    LBP?: Aed;
    WST?: Aed;
    PHP?: Aed;
    GGP?: Aed;
    KWD?: Aed;
    TOP?: Aed;
    OMR?: Aed;
    AFN?: Aed;
    RSD?: Aed;
    AMD?: Aed;
    BDT?: Aed;
    LAK?: Aed;
    CLP?: Aed;
    PAB?: Aed;
    NPR?: Aed;
    MMK?: Aed;
    FKP?: Aed;
    HUF?: Aed;
    GNF?: Aed;
    AED?: Aed;
    BAM?: BAM;
    MWK?: Aed;
    BTN?: Aed;
    CDF?: Aed;
    VND?: Aed;
    BRL?: Aed;
    BZD?: Aed;
    PYG?: Aed;
    BND?: Aed;
    BOB?: Aed;
    DJF?: Aed;
    CAD?: Aed;
    JPY?: Aed;
    RWF?: Aed;
    ISK?: Aed;
    BYN?: Aed;
    HKD?: Aed;
    LSL?: Aed;
    FJD?: Aed;
    COP?: Aed;
    SAR?: Aed;
    ETB?: Aed;
    KPW?: Aed;
    NAD?: Aed;
    MNT?: Aed;
    SBD?: Aed;
    YER?: Aed;
    RON?: Aed;
}

export interface Aed {
    name: string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng: Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?: string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common: string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}


export type Countries = Country[];