import { 
  users, type User, type InsertUser,
  rsvps, type Rsvp, type InsertRsvp,
  subscriptions, type Subscription, type InsertSubscription 
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need
export interface IStorage {
  // User operations (keeping from original)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // RSVP operations
  createRsvp(rsvp: InsertRsvp): Promise<Rsvp>;
  getRsvps(): Promise<Rsvp[]>;
  getRsvpById(id: number): Promise<Rsvp | undefined>;
  getRsvpByEmail(email: string): Promise<Rsvp | undefined>;
  
  // Subscription operations
  createSubscription(subscription: InsertSubscription): Promise<Subscription>;
  getSubscriptionByEmail(email: string): Promise<Subscription | undefined>;
  getWhatsappSubscribers(): Promise<Subscription[]>;
  getEmailSubscribers(): Promise<Subscription[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private rsvpEntries: Map<number, Rsvp>;
  private subscriptionEntries: Map<number, Subscription>;
  private userId: number;
  private rsvpId: number;
  private subscriptionId: number;

  constructor() {
    this.users = new Map();
    this.rsvpEntries = new Map();
    this.subscriptionEntries = new Map();
    this.userId = 1;
    this.rsvpId = 1;
    this.subscriptionId = 1;
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // RSVP operations
  async createRsvp(insertRsvp: InsertRsvp): Promise<Rsvp> {
    const id = this.rsvpId++;
    const createdAt = new Date().toISOString();
    const rsvp: Rsvp = { ...insertRsvp, id, createdAt };
    this.rsvpEntries.set(id, rsvp);
    return rsvp;
  }

  async getRsvps(): Promise<Rsvp[]> {
    return Array.from(this.rsvpEntries.values());
  }

  async getRsvpById(id: number): Promise<Rsvp | undefined> {
    return this.rsvpEntries.get(id);
  }

  async getRsvpByEmail(email: string): Promise<Rsvp | undefined> {
    return Array.from(this.rsvpEntries.values()).find(
      (rsvp) => rsvp.email === email
    );
  }

  // Subscription operations
  async createSubscription(insertSubscription: InsertSubscription): Promise<Subscription> {
    const id = this.subscriptionId++;
    const createdAt = new Date().toISOString();
    const subscription: Subscription = { ...insertSubscription, id, createdAt };
    this.subscriptionEntries.set(id, subscription);
    return subscription;
  }

  async getSubscriptionByEmail(email: string): Promise<Subscription | undefined> {
    return Array.from(this.subscriptionEntries.values()).find(
      (subscription) => subscription.email === email
    );
  }

  async getWhatsappSubscribers(): Promise<Subscription[]> {
    return Array.from(this.subscriptionEntries.values()).filter(
      (subscription) => subscription.isWhatsappSubscribed
    );
  }

  async getEmailSubscribers(): Promise<Subscription[]> {
    return Array.from(this.subscriptionEntries.values()).filter(
      (subscription) => subscription.isEmailSubscribed
    );
  }
}

export const storage = new MemStorage();
