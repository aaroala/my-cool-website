import { createClient } from "@sanity/client"


export default createClient({
    projectId: "n0w9gmne", // find this at manage.sanity.io or in your sanity.json
    dataset: "production", // this is from those question during 'sanity init'
    useCdn: true,
    apiVersion: '2023-05-03',
  });




