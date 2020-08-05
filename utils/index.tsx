interface IOrderData {
  count: number;
  price: number;
}

export const sum = (a: number, b: number) => a + b;

export const getSummaryOrder = (ordersData: IOrderData[]) => {
  const resultValue = ordersData
    .map((elem) => (elem.count ? elem.count * elem.price : 0))
    .reduce((accumulator, elem) => accumulator + elem, 0)
    .toFixed(2);

  return +resultValue;
};
