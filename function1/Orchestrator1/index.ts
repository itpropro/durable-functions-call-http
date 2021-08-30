import * as df from "durable-functions";

const orchestrator = df.orchestrator(function* (context) {
  const resutlActivity1 = yield context.df.callActivity("Activity1", {
    a: "a",
    b: "b",
  });
  console.log("resultActivity1: ", resutlActivity1);
  const resultOrchestrator2 = yield context.df.callHttp(
    "GET",
    "http://localhost:7072/api/Orchestrator2"
  );
  console.log("resultOrchestrator2: ", resultOrchestrator2);
  return resultOrchestrator2;
});

export default orchestrator;
