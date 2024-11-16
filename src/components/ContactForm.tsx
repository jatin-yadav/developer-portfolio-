import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    // FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const YOUR_PUBLIC_KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY;

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "enter correct email",
    }),
    mobile: z.string().optional(),
    message: z.string().min(2, {
        message: "Meassage must be at least 2 characters.",
    }),
})

export function ContactForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            email: "",
            mobile: "",
            message: "",
        },
    })

    const { reset } = form;
    const sendEmail = (data: z.infer<typeof FormSchema>) => {
        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, data, {
                publicKey: YOUR_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast({
                        description: "Your message has been sent.",
                    })
                    reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        await sendEmail(data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex w-full lg:flex-row flex-col gap-4">
                    <div className="lg:w-1/2 w-full">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="pt-4">
                                    {/* <FormLabel>Username</FormLabel> */}
                                    <FormControl>
                                        <Input placeholder="Your Name" {...field} className="border-2 border-accent-1" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="pt-4">
                                    {/* <FormLabel>Email</FormLabel> */}
                                    <FormControl>
                                        <Input placeholder="Your Email" {...field} className="border-2 border-accent-1" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="mobile"
                            render={({ field }) => (
                                <FormItem className="pt-4">
                                    {/* <FormLabel>Your Contact</FormLabel> */}
                                    <FormControl>
                                        <Input placeholder="Enter your contact number" {...field} className="border-2 border-accent-1" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="pt-4 h-full">
                                    {/* <FormLabel>Bio</FormLabel> */}
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us a little bit about yourself or just type any message "
                                            className="resize-none h-full border-2 border-accent-1"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <Button type="submit" className="py-4 lg:w-1/2 w-full">Submit</Button>
                </div>
            </form>
        </Form>
    )
}
