import { Blog } from "./Blog";
import { Pricing } from "./Pricing";

export interface DataObject {
  blogs: Blog[];
  pricing: Pricing[];
  progress: number;
}
