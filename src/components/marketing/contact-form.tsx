"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRightIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const INTERESSES = [
    "Quero conhecer o MSP",
    "Preciso de suporte",
    "Quero terceirizar minha TI",
    "Quero Service Desk",
    "Quero monitoramento",
    "Quero Field Service",
    "Quero segurança",
    "Quero infraestrutura",
    "Outro",
] as const;

const schema = z.object({
    nome: z.string().min(2, "Informe seu nome."),
    empresa: z.string().min(2, "Informe o nome da empresa."),
    email: z.string().email("Informe um e-mail válido."),
    telefone: z.string().min(8, "Informe um telefone para contato."),
    interesse: z.string().min(1, "Selecione uma opção."),
    mensagem: z.string().min(10, "Conte um pouco mais sobre o cenário (mín. 10 caracteres)."),
});

type FormValues = z.infer<typeof schema>;

const FieldError = ({ msg }: { msg?: string }) =>
    msg ? <p className="mt-1.5 text-xs text-red-400">{msg}</p> : null;

const labelCls = "mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({ resolver: zodResolver(schema) });

    const onSubmit = async (values: FormValues) => {
        // Sem backend: simula o envio. Trocar por chamada de API / e-mail quando disponível.
        await new Promise((r) => setTimeout(r, 800));
        console.info("Contato Oliver Network:", values);
        toast.success("Recebemos o seu contato", {
            description: "A Oliver responde em até 1 dia útil para agendar o diagnóstico.",
        });
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-6 lg:p-8"
        >
            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="nome" className={labelCls}>Nome</label>
                    <Input id="nome" autoComplete="name" {...register("nome")} />
                    <FieldError msg={errors.nome?.message} />
                </div>
                <div>
                    <label htmlFor="empresa" className={labelCls}>Empresa</label>
                    <Input id="empresa" autoComplete="organization" {...register("empresa")} />
                    <FieldError msg={errors.empresa?.message} />
                </div>
                <div>
                    <label htmlFor="email" className={labelCls}>E-mail corporativo</label>
                    <Input id="email" type="email" autoComplete="email" {...register("email")} />
                    <FieldError msg={errors.email?.message} />
                </div>
                <div>
                    <label htmlFor="telefone" className={labelCls}>Telefone / WhatsApp</label>
                    <Input id="telefone" type="tel" autoComplete="tel" {...register("telefone")} />
                    <FieldError msg={errors.telefone?.message} />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="interesse" className={labelCls}>Como podemos ajudar?</label>
                    <select
                        id="interesse"
                        defaultValue=""
                        {...register("interesse")}
                        className={cn(
                            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors",
                            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                        )}
                    >
                        <option value="" disabled>Selecione uma opção</option>
                        {INTERESSES.map((i) => (
                            <option key={i} value={i}>{i}</option>
                        ))}
                    </select>
                    <FieldError msg={errors.interesse?.message} />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="mensagem" className={labelCls}>Conte um pouco mais</label>
                    <Textarea
                        id="mensagem"
                        rows={4}
                        placeholder="Equipe interna, número de usuários, principais dores, sistemas críticos, se já tem suporte terceirizado…"
                        {...register("mensagem")}
                    />
                    <FieldError msg={errors.mensagem?.message} />
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                    Ao enviar, você concorda em ser contatado pela Oliver Network sobre este pedido.
                </p>
                <Button type="submit" size="lg" className="group shrink-0" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando…" : "Enviar contato"}
                    <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
