import { AzureFunction, Context } from "@azure/functions";

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const activityFunction: AzureFunction = async function (
  context: Context
): Promise<string> {
  await sleep(5000);
  return `Return Activity1`;
};

export default activityFunction;
