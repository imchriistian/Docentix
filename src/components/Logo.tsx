import logo from "@/assets/docentix.png";
interface Props {
    className?: string;
}
export function Logo({ className }: Props) {
    return (
        <img
            src={logo}
            alt="Logo"
            className={`${className || ''}`}
        />
    );
}
