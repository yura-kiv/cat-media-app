interface Weight {
  imperial: string;
  metric: string;
}

interface BreedImagePreview {
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface BreedRes {
  weight: Weight;
  id: string;
  image: BreedImagePreview;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
}

export interface CatImageRes {
  breeds: BreedRes[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface FavouriteImageRes {
  id: number;
  image_id: string;
  sub_id: null;
  created_at: string;
  image: {
    id: string;
    url: string;
  };
}

export interface LikeImageRes {
  id: number;
  image_id: string;
  sub_id: string;
  created_at: string;
  value: number;
  country_code: string;
  image: {
    id: string;
    url: string;
  };
}

export interface UploadImageRes {
  approved: number;
  height: number;
  id: string;
  original_filename: string;
  pending: number;
  sub_id: string;
  url: string;
  width: number;
}
