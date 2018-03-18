class Identifier {
  constructor(public obPropId: number,
              public fips: string,
              public apn: string,
              public apnOrig: string) {}
}
class Address {
  constructor(public country: string,
              public countrySubd: string,
              public line1: string,
              public line2: string,
              public locality: string,
              public matchCode: string,
              public oneLine: string,
              public postal1: string,
              public postal2: string,
              public postal3: string) {}
}
class Location {
  constructor(public accuracy: number,
              public elevation: number,
              public latitude: string,
              public longitude: string,
              public distance: number,
              public geoid: string) {}
}
class Vintage {
  constructor(public lastModified: string,
              public pubDate: string) {}
}
export class Realty {
  constructor(
    public identifier: Identifier,
    public address: Address,
    public location: Location,
    public vintage: Vintage) {}
}
