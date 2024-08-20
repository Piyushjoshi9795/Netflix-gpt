import OpenAI from "openai";
import { OPEN_GPT_KEY } from "./constants";

const openAi = new OpenAI({
  apiKey: OPEN_GPT_KEY,
  dangerouslyAllowBrowser: true,
});
export default openAi;
