import { useEateries } from "./EateryProvider.js";

export const EateryListcomponent = () => {
  const UseEateries = useEateries();
  console.log(UseEateries.map(eatery => eatery.businessName));
};
