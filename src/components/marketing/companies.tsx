import Container from "../global/container";

const SECTORS = [
    "Indústria",
    "Saúde",
    "Varejo",
    "Serviços",
    "Logística",
    "Educação",
    "Construção",
    "Escritórios de advocacia",
];

const Companies = () => {
    return (
        <div className="companies relative mt-16 flex w-full flex-col items-center justify-center overflow-hidden py-20">
            <Container>
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-medium lg:text-4xl">
                        Operações que <span className="font-subheading italic">não podem parar</span>{" "}
                        confiam a TI à Oliver
                    </h2>
                </div>
            </Container>

            <Container delay={0.1}>
                <div className="mx-auto flex max-w-3xl flex-row flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-14 text-muted-foreground">
                    {SECTORS.map((sector) => (
                        <span
                            key={sector}
                            className="text-base font-medium transition-colors hover:text-foreground lg:text-lg"
                        >
                            {sector}
                        </span>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Companies;
