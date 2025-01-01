'use client'

import { Button } from '@/components/ui/button';
import { IoPaperPlane } from 'react-icons/io5';
import { useToast } from "@/hooks/use-toast";
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { Loader2 } from 'lucide-react';

const FooterForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    try {
      const response = await axios.post("/api/spreadsheet", { email });

      if (response.status === 200) {
        toast({
          variant: "success",
          title: "Subscription Successful!",
          description: "Thank you for joining our community.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({
          variant: "destructive",
          title: "Subscription Failed",
          description: "Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="space-y-4 col-span-1 md:col-span-3 rounded-[1.5rem] border border-primary-400/20 p-6">
      <h3 className={`text-2xl text-white`}>
        Join Our Online Community
      </h3>
      <p className="text-white/80">
        Stay connected with our vibrant community! Get exclusive
        updates about projects, events, and opportunities to
        collaborate.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 flex-col md:flex-row"
      >
        <input
          type="email"
          name="email"
          required
          disabled={isLoading}
          placeholder="Enter your Email"
          className="flex-1 rounded-full bg-transparent border border-white/20 px-4 py-2 text-white focus:outline-none focus:border-primary-400 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="rounded-full bg-transparent border h-full my-auto border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-primary-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            <>
              Subscribe
              <IoPaperPlane className="h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default FooterForm;