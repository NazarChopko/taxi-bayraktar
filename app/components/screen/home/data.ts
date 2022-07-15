import economyIcon from "../../../assets/images/options/car.png";
import comfortIcon from "../../../assets/images/options/hatchback.png";
import comfortPlusIcon from "../../../assets/images/options/sport-car.png";
import bussinesIcon from "../../../assets/images/options/helicopter.png";

interface IList {
  _id: string;
  title: string;
  img: string;
  multiplier: number;
}

export const optionList: IList[] = [
  {
    _id: "Ya-economy-439",
    title: "Econom",
    img: economyIcon.src,
    multiplier: 0.8,
  },
  {
    _id: "Ya-comfort-541",
    title: "Comfort",
    img: comfortIcon.src,
    multiplier: 1.2,
  },
  {
    _id: "Ya-comfort-plus-842",
    title: "Comfort+",
    img: comfortPlusIcon.src,
    multiplier: 2.2,
  },
  {
    _id: "bussines-200",
    title: "Bussines",
    img: bussinesIcon.src,
    multiplier: 10,
  },
];
