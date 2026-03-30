// src/inngest/client.ts
import { Inngest } from "inngest";
import connectDB from "./db";
import User from "/models/user";

export const inngest = new Inngest({ id: "quickcart-next" });

//inngest function to store user data
export const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk.user.created" },
  async ({ event, step }) => {
    const { id, first_name, last_name, email, image_Url } = event.data;
    const userData = {
      _id: id,
      name: first_name + " " + last_name,
      email: email_addresses[0].email_addresses,
      image_Url: image_Url,
    };
    await connectDB();
    await User.create(userData);
    console.log("User created event received:", userData);
  },
);

//inngest function to update user data

export const syncUserUpdates = inngest.createFunction(
    { id: "user-updates-from-clerk" },
    { event: "clerk/user.updated" },
    async ({ event, step }) => {
        const { id, first_name, last_name, email_addresses, image_Url } = event.data;
        const userData = {
            id: id,
            name: first_name + " " + last_name,
            email: email_addresses[0].email_addresses,
            image_Url: image_Url,
        };
        await connectDB();

        await User.findByIdAndUpdate(id, userData);
        console.log("User updated event received:", userData);
    },
);

//inngest function to delete user database

export const syncUserDeletion = inngest.createFunction(
    { id: "delete-user-with-clerk" },
    { event: "clerk/user.deleted" },
    async ({ event, step }) => {
        const { id } = event.data;
        await connectDB();

        await User.findByIdAndDelete(id);
        console.log("User deleted event received:", id);
    },
);  