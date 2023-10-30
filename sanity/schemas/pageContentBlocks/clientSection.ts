import { ClientCarouselComponent } from "components";

export default {
  name: "clientSection",
  type: "object",
  title: "Client Section",
  fields: [
    {
      name: "Clients",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "client" },
        },
      ],
      components: {
        input: ClientCarouselComponent,
      },
    },
  ],
};
