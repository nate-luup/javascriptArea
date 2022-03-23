import ajax from "./ajax";
import Ajax from "./ajax";

test("ajax", async () => {
  const response = await Ajax.get("http://localhost:3000/getAllStudent");
  console.log(response);
  expect(response).toEqual([
    { id: 1, name: "zhangsan", age: 10 },
    { id: 2, name: "lisi", age: 20 },
  ]);
});
