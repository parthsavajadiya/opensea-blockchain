import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "s7qcaqf3",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skeIMx7ieRs0B9XvGk82riZWAs7aPzvFQKGj82MdQQl1LzOy56wFvcdTpSkmRYnOQ3JeK40DribtQqglbAaFlrTSTucYJqMN3PGvN9zCF2aIm7QjTeQt8Q2StbbPzvIvneioaIfb0En2XdIYEGqkWZ1XMR5Rlf0oAyd8FCAlvQraBSYKLrVC",
  useCdn: false,
});
