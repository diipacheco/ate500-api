export type Recommendation = {
  id: string;
  name: string;
  price: number;
  image: string;
  link: string;
  createdAt: Date;
};

export interface RecommendationsRepository {
  findAll(): Promise<Recommendation[]>;
}
