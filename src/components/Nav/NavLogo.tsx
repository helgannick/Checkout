import { Truck } from "phosphor-react";

export function NavLogo() {
    return(
        <p className="flex items-start gap-2 text-2xl m-auto">
           <Truck size={32} /> Shipping <span className="font-bold italic">Details</span>
        </p>
    )
}