import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const requestTypes = ["Access my data", "Correct my data", "Delete my data", "Object to or restrict processing"] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(254),
  requestType: z.enum(requestTypes, { message: "Please choose a request type" }),
  details: z.string().trim().min(10, "Please add a few details (at least 10 characters)").max(2000),
});

export const PrivacyRequestForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", requestType: "", details: "", website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return;
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    const { error } = await supabase.functions.invoke("send-privacy-request", { body: result.data });
    setSending(false);
    if (error) {
      toast({ title: "Could not send request", description: "Please try again or email eliud@elfreyzzltd.com.", variant: "destructive" });
      return;
    }
    setSent(true);
  };

  if (sent) {
    return (
      <p className="text-muted-foreground" role="status">
        Thank you. Your privacy request has been sent to ELFREYZZ LTD. We will reply to your email without undue delay.
      </p>
    );
  }

  const field = "text-base min-h-[44px]";
  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <div>
        <Label htmlFor="pr-name">Full name</Label>
        <Input id="pr-name" className={field} value={form.name} onChange={update("name")} maxLength={100} />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
      </div>
      <div>
        <Label htmlFor="pr-email">Email used in your enquiry</Label>
        <Input id="pr-email" type="email" className={field} value={form.email} onChange={update("email")} maxLength={254} />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
      </div>
      <div>
        <Label htmlFor="pr-type">Request type</Label>
        <select
          id="pr-type"
          value={form.requestType}
          onChange={update("requestType")}
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base min-h-[44px] focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Choose a request…</option>
          {requestTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.requestType && <p className="text-sm text-destructive mt-1">{errors.requestType}</p>}
      </div>
      <div>
        <Label htmlFor="pr-details">Details</Label>
        <Textarea id="pr-details" className="text-base" rows={4} value={form.details} onChange={update("details")} maxLength={2000}
          placeholder="e.g. Please correct my phone number, or delete my enquiry from March." />
        {errors.details && <p className="text-sm text-destructive mt-1">{errors.details}</p>}
      </div>
      <input type="text" name="website" value={form.website} onChange={update("website")} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <Button type="submit" disabled={sending} className="min-h-[44px]">{sending ? "Sending…" : "Submit privacy request"}</Button>
      <p className="text-xs text-muted-foreground">We may contact you to confirm your identity before acting on the request.</p>
    </form>
  );
};
