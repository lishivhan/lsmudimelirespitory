import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRsvpSchema, insertSubscriptionSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for RSVP
  app.post("/api/rsvp", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const rsvpData = insertRsvpSchema.parse(req.body);
      
      // Create RSVP
      const newRsvp = await storage.createRsvp(rsvpData);
      
      // Check if user wants to receive updates and create subscription
      if (rsvpData.whatsappUpdates || rsvpData.emailUpdates) {
        // Check if subscription already exists
        const existingSubscription = await storage.getSubscriptionByEmail(rsvpData.email);
        
        if (existingSubscription) {
          // Update existing subscription
          const updatedSubscription = {
            ...existingSubscription,
            whatsapp: rsvpData.phone,
            isWhatsappSubscribed: rsvpData.whatsappUpdates,
            isEmailSubscribed: rsvpData.emailUpdates
          };
          await storage.createSubscription(updatedSubscription);
        } else {
          // Create new subscription
          await storage.createSubscription({
            email: rsvpData.email,
            whatsapp: rsvpData.phone,
            isWhatsappSubscribed: rsvpData.whatsappUpdates,
            isEmailSubscribed: rsvpData.emailUpdates
          });
        }
      }
      
      res.status(201).json({ success: true, rsvp: newRsvp });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        console.error("Error creating RSVP:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your RSVP" 
        });
      }
    }
  });

  // Get all RSVPs
  app.get("/api/rsvps", async (req: Request, res: Response) => {
    try {
      const rsvps = await storage.getRsvps();
      res.status(200).json({ success: true, rsvps });
    } catch (error) {
      console.error("Error fetching RSVPs:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching RSVPs" 
      });
    }
  });

  // Subscribe for updates
  app.post("/api/subscribe", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const subscriptionData = insertSubscriptionSchema.parse(req.body);
      
      // Check if subscription already exists
      const existingSubscription = await storage.getSubscriptionByEmail(subscriptionData.email);
      
      if (existingSubscription) {
        // Update existing subscription
        const updatedSubscription = {
          ...existingSubscription,
          ...subscriptionData
        };
        const subscription = await storage.createSubscription(updatedSubscription);
        res.status(200).json({ success: true, subscription });
      } else {
        // Create new subscription
        const subscription = await storage.createSubscription(subscriptionData);
        res.status(201).json({ success: true, subscription });
      }
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        console.error("Error creating subscription:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your subscription" 
        });
      }
    }
  });
  
  // Send a test notification (for testing purposes)
  app.post("/api/notify/test", async (req: Request, res: Response) => {
    try {
      const { type, message } = req.body;
      
      if (!type || !message) {
        return res.status(400).json({
          success: false,
          message: "Type and message are required"
        });
      }
      
      if (type === "whatsapp") {
        // In a real implementation, this would use a WhatsApp API or Twilio
        console.log(`WhatsApp notification: ${message}`);
      } else if (type === "email") {
        // In a real implementation, this would use Nodemailer
        console.log(`Email notification: ${message}`);
      } else {
        return res.status(400).json({
          success: false,
          message: "Invalid notification type"
        });
      }
      
      res.status(200).json({ success: true, message: "Notification sent" });
    } catch (error) {
      console.error("Error sending notification:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while sending the notification" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
