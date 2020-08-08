import { simpleSwap } from "./common";

test("Swap (numbers)", () => {
  const data = [5, 6, 9, 1, 3];
  simpleSwap(data, 2, 4);

  expect(data[2]).toBe(3);
  expect(data[4]).toBe(9);
});

test("Swap (objects)", () => {
  const data = [
    { name: "Joe", age: 37 },
    { name: "Steve", age: 23 },
    { name: "Eloise", age: 31 },
  ];

  simpleSwap(data, 0, 2);

  const names = data.map((n) => n.name);
  expect(names).toStrictEqual(["Eloise", "Steve", "Joe"]);
});
