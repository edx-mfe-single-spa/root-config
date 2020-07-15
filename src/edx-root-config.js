import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@edx/navbar",
  app: () => System.import("@edx/navbar"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
