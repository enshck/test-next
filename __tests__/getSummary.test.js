const { getSummaryOrder } = require("../utils");

test("summary order", () => {
  expect(
    getSummaryOrder([
      {
        count: 12,
        price: 12.3,
      },
      {
        count: 2,
        price: 55.62,
      },
      {
        count: 1,
        price: 855.33,
      },
      {
        count: 4,
        price: 12.3,
      },
      {
        count: 5,
        price: 852.25,
      },
    ])
  ).toBeCloseTo(5424.62);
});
