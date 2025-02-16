/** @type {import("syncpack").RcFile} */
const config = {
  dependencyTypes: ["**"],
  semverGroups: [
    {
      range: "^",
      dependencyTypes: ["**"],
      dependencies: ["**"],
      packages: ["**"],
    },
  ],
  versionGroups: [
    {
      dependencies: ["$LOCAL"],
      dependencyTypes: ["dev", "prod"],
      pinVersion: "workspace:*",
    },
  ],
};

module.exports = config;
