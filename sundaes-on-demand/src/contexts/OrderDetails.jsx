import { createContext, useContext, useState } from "react";
import { pricePerItem } from "../constants";

const OrderDetails = createContext();

// create custom hook to check whether we are in a provider

export function useOrderDetails() {
  const contextValue = useContext(OrderDetails);
  if (!contextValue) {
    throw new Error(
      "useOrderDetails must be called from within an OrderDetailsProviders"
    );
  }

  return contextValue;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {}, // ex: Chocolate:1 ...
    toppings: {}, //ex: {Gummi Bears :1}
  });

  function updateItemCount(itemName, newItemCount, optionType) {
    //  make a copy of existing state
    const newOptionCounts = { ...optionCounts };

    //  update the copy with the new information
    newOptionCounts[optionType][itemName] = newItemCount;

    //update the state with the updated copy
    setOptionCounts(newOptionCounts);
  }

  function resetOrder() {
    setOptionCounts({ scoops: {}, toppings: {} });
  }

  //utility function to derice totals from optionCounts state value
  function calculateTotal(optionType) {
    //  get an array of counts for the option type
    const countsArray = Object.values(optionCounts[optionType]);

    //  total the values in the array of counts for the number of items
    const totalCount = countsArray.reduce((total, value) => total + value, 0);

    // multiply the total number of items by the price for this item type
    return totalCount * pricePerItem[optionType];
  }
  const totals = {
    scoops: calculateTotal("scoops"),
    toppings: calculateTotal("toppings"),
  };

  const value = {
    optionCounts,
    updateItemCount,
    resetOrder,
    totals,
  };
  return <OrderDetails.Provider value={value} {...props} />;
}
