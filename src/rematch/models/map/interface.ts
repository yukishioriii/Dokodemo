import { ICoord } from "../../../service/interface.service";

export interface ILocation {
    lat: number;
    lng: number;
}

export interface IGeometry {
    location: ILocation;
}

export interface IOpeningHours {
    open_now: boolean;
}

export interface IPhoto {
    height: number;
    html_attributions: any[];
    photo_reference: string;
    width: number;
}

export interface AltId {
    place_id: string;
    scope: string;
}

export interface IPlaceFromGoogle {
    geometry: IGeometry;
    icon: string;
    id: string;
    name: string;
    opening_hours: IOpeningHours;
    photos: IPhoto[];
    place_id: string;
    scope: string;
    alt_ids: AltId[];
    reference: string;
    types: string[];
    vicinity: string;
    rating: number;
    firstImageUrl?: string;
    estimatedTime?: any;
}

export interface IRootObject {
    html_attributions: any[];
    results: IPlaceFromGoogle[];
    status: string;
}

export interface IMapScreenState {
    chosenPlaces: IPlaceFromGoogle[],
    polylineCoords: ICoord[],
    isBusy: boolean,
    currentLocation: ICoord,
    checkedPlaces : {
      placeId: string,
      placeName: string,
      endTime: number,
      movingTime: number
    }[],
    ratingModalVisible: boolean,
    rating: number,
    startTime: number
}

export interface IAddChosenPlacePayload {
    chosenPlace: IPlaceFromGoogle
}

export interface IUpdatePolylineCoordsPayload {
    polylineCoords: ICoord[]
}

export interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
}

export interface Northeast {
    lat: number;
    lng: number;
}

export interface Southwest {
    lat: number;
    lng: number;
}

export interface Viewport {
    northeast: Northeast;
    southwest: Southwest;
}

export interface Geometry {
    location: ILocation;
    viewport: Viewport;
}

export interface Close {
    day: number;
    time: string;
}

export interface Open {
    day: number;
    time: string;
}

export interface Period {
    close: Close;
    open: Open;
}

export interface OpeningHours {
    open_now: boolean;
    periods: Period[];
    weekday_text: string[];
}

export interface Photo {
    height: number;
    html_attributions: string[];
    photo_reference: string;
    width: number;
}

export interface PlusCode {
    compound_code: string;
    global_code: string;
}

export interface Review {
    author_name: string;
    author_url: string;
    language: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
}

export interface IPlaceDetailResult {
    address_components: AddressComponent[];
    adr_address: string;
    formatted_address: string;
    formatted_phone_number: string;
    geometry: Geometry;
    icon: string;
    id: string;
    international_phone_number: string;
    name: string;
    opening_hours: OpeningHours;
    photos: Photo[];
    place_id: string;
    plus_code: PlusCode;
    rating: number;
    reference: string;
    reviews: Review[];
    scope: string;
    types: string[];
    url: string;
    utc_offset: number;
    vicinity: string;
    website: string;
}

export interface IFirebasePlace {
    createTime: number;
    favoriteBy: any;
    name: string;
    ratings: number;
}

export interface ICombinePlaceDetail extends IFirebasePlace, IPlaceDetailResult {

}
export interface IPlaceDetailFromGoogle {
    html_attributions: any[];
    result: IPlaceDetailResult;
    status: string;
}

export interface IComment {
    text: string;
    createTime: number;
    placeId: string;
    user: IUser
}

export interface IUser {
    id: string;
    name: string;
}

export interface IStoreDataPayload {
  key: string;
  value: any;
}