import * as sass from "sass";

const server = Bun.serve({
  port: 3000,

  routes: {
    "/": () => {
      return new Response(Bun.file("./index.html"));
    },

    "/style.css": () => {
      const result = sass.compile("./src/style.scss", {
        loadPaths: ["./node_modules"],
      });

      return new Response(result.css, {
        headers: {
          "Content-Type": "text/css",
        },
      });
    },

    "/src/index.js": () => {
      return new Response(Bun.file("./src/index.js"), {
        headers: {
          "Content-Type": "text/javascript",
        },
      });
    },
  },
});

console.log(`Listening on ${server.url}`);
