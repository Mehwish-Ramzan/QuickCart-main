import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserUpdates, syncUserDeletion } from "@/config/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdates,
    syncUserDeletion

  ],
});