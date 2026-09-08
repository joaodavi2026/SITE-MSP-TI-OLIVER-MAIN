import Container from "../global/container";

const NUMBERS = [
    { value: "24/7", label: "Monitoramento do ambiente, todos os dias do ano" },
    { value: "< 15 min", label: "Primeira resposta em chamados críticos" },
    { value: "3-2-1", label: "Regra aplicada a todo backup, com teste de restauração" },
    { value: "1", label: "Responsável pela sua TI, do chamado à governança" },
];

const LanguageSupport = () => {
    return (
        <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center py-20">
            <Container>
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center">
                    <h2 className="mb-6 font-heading text-2xl font-medium !leading-snug md:text-4xl lg:text-5xl">
                        O trabalho invisível que{" "}
                        <span className="font-subheading italic">mantém tudo de pé</span>
                    </h2>
                </div>
            </Container>

            <div className="relative mt-6 grid w-full grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
                <div className="absolute right-1/4 top-1/2 -z-10 h-14 w-3/5 -translate-y-1/2 -rotate-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 blur-[10rem]" />
                {NUMBERS.map((item, idx) => (
                    <Container key={item.value} delay={0.08 * idx} className="h-full">
                        <div className="flex h-full flex-col gap-2 bg-background p-6">
                            <span className="font-heading text-3xl font-semibold text-foreground">
                                {item.value}
                            </span>
                            <span className="text-sm leading-relaxed text-muted-foreground">
                                {item.label}
                            </span>
                        </div>
                    </Container>
                ))}
            </div>
        </div>
    );
};

export default LanguageSupport;
