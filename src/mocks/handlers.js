import { rest } from "msw";

import jsonData from "./data.json";

export const handlers = [
  rest.get("/api/data", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: jsonData,
        success: true
      })
    );
  })
];
