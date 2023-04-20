import { defineConfig } from 'sanity';

import { deskTool } from "sanity/desk";

import schemas from "./sanity/schemas";

const config = defineConfig ({

    projectId: "8gw39524",

    dataset: "production",

    title: "Venkat's Personal Website",

    apiVersion: "2023-04-10",

    basePath: "/admin",

    plugins: [deskTool()],

    schema: {types: schemas}

})

export default config;