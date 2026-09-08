import {
    Activity,
    BadgeCheck,
    Boxes,
    Building2,
    Cable,
    Cctv,
    ClipboardCheck,
    Cloud,
    DatabaseBackup,
    Factory,
    Gauge,
    Headset,
    LifeBuoy,
    Lock,
    Mail,
    Network,
    Phone,
    PlugZap,
    Route,
    Server,
    ServerCog,
    ShieldCheck,
    Spline,
    Truck,
    Wifi,
    Wrench,
    type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
    headset: Headset,
    "life-buoy": LifeBuoy,
    "clipboard-check": ClipboardCheck,
    activity: Activity,
    "shield-check": ShieldCheck,
    "database-backup": DatabaseBackup,
    "server-cog": ServerCog,
    wrench: Wrench,
    boxes: Boxes,
    mail: Mail,
    network: Network,
    server: Server,
    cloud: Cloud,
    lock: Lock,
    phone: Phone,
    wifi: Wifi,
    cable: Cable,
    spline: Spline,
    route: Route,
    "badge-check": BadgeCheck,
    cctv: Cctv,
    "plug-zap": PlugZap,
    truck: Truck,
    gauge: Gauge,
    "building-2": Building2,
    factory: Factory,
};

interface Props {
    name: string;
    className?: string;
}

const ServiceIcon = ({ name, className }: Props) => {
    const Icon = MAP[name] ?? Activity;
    return <Icon className={className} />;
};

export default ServiceIcon;
