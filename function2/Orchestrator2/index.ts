import * as df from "durable-functions";

const orchestrator = df.orchestrator(function* (context) {
  const resultActivity2 = yield context.df.callActivity("Activity2", {
    a: "a",
    b: "b",
  });
  console.log("resultActivity2: ", resultActivity2);
  return resultActivity2;
});

export default orchestrator;
