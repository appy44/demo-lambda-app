import { handler } from "../src/handler.js";

const response = await handler();

if (response.statusCode !== 200) {
  throw new Error("❌ Lambda execution failed");
}

console.log("✅ Lambda test passed");
