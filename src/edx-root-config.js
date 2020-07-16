import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@edx/navbar",
  app: () => System.import("@edx/navbar"),
  activeWhen: () => true,
});

registerApplication({
  name: "@edx/enterprise-learner-portal",
  app: () => System.import("@edx/enterprise-learner-portal"),
  activeWhen: ["/enterprise"],
});

registerApplication({
  name: "@edx/course-learning",
  app: () => System.import("@edx/course-learning"),
  activeWhen: ["/course"],
});

registerApplication({
  name: "@edx/user-profile",
  app: () => System.import("@edx/user-profile"),
  activeWhen: ["/profile"],
});

start({
  urlRerouteOnly: true,
});
