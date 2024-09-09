import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, ".env.development"),
});

const codegenConfig: CodegenConfig = {
  overwrite: true,
  schema: {
    [`${process.env.REACT_APP_PITAKA_GRAPHQL_API_URL}`]: {
      headers: {
        Authorization: `Bearer ${process.env.PITAKA_API_TOKEN}`,
      },
    },
  },
  documents: ["src/**/services.ts"],
  generates: {
    "src/__generated__/gql/": {
      preset: "client",
    },
  },
  config: {
    skipTypename: true,
  },
};

export default codegenConfig;
