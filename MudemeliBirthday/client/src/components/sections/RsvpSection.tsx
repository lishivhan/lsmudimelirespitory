import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import PageHeader from "@/components/layout/PageHeader";

// Form schema with validation
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  guests: z.string().min(1, { message: "Please select number of guests" }),
  message: z.string().optional(),
  whatsappUpdates: z.boolean().default(false),
  emailUpdates: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

export default function RsvpSection() {
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      guests: "",
      message: "",
      whatsappUpdates: false,
      emailUpdates: false,
    },
  });

  // Handle RSVP submission
  const rsvpMutation = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest("POST", "/api/rsvp", data);
    },
    onSuccess: () => {
      navigate("/thank-you");
    },
    onError: (error) => {
      toast({
        title: "Error submitting RSVP",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    rsvpMutation.mutate(data);
  };

  return (
    <section id="rsvp" className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <PageHeader title="RSVP" color="red" />
        
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg">
          <p className="text-center mb-6">
            Please confirm your attendance by filling out this form. We look forward to celebrating with you!
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        First Name <span className="text-[hsl(var(--venda-red))]">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your first name"
                          className="bg-background"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Last Name <span className="text-[hsl(var(--venda-red))]">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your last name"
                          className="bg-background"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Address */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email Address <span className="text-[hsl(var(--venda-red))]">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your email address"
                          className="bg-background"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* WhatsApp Number */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        WhatsApp Number <span className="text-[hsl(var(--venda-red))]">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Your WhatsApp number"
                          className="bg-background"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Number of Guests */}
              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Number of Guests <span className="text-[hsl(var(--venda-red))]">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1 person</SelectItem>
                        <SelectItem value="2">2 people</SelectItem>
                        <SelectItem value="3">3 people</SelectItem>
                        <SelectItem value="4">4 people</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Special Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any special message for Mrs. Mudimeli?"
                        className="resize-none bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Communication Preferences */}
              <div className="space-y-2">
                <p className="font-medium">Communication Preferences</p>
                
                <FormField
                  control={form.control}
                  name="whatsappUpdates"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Receive updates via WhatsApp</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="emailUpdates"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Receive updates via Email</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-[hsl(var(--venda-purple))] hover:bg-[hsl(var(--venda-purple))/90] text-white rounded-full px-8 py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit RSVP"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full h-40 opacity-10 bg-venda-pattern transform rotate-180"></div>
    </section>
  );
}
