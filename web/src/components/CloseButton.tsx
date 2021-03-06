import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";


export const CloseButton = () => {
    return(
        <Popover.Button className="top-5 right-5 absolute  dark:text-zinc-400 dark:hover:text-zinc-100" title="Fechar formulário de feedback">
            <X weight="bold" className="w-4 h-4"/>
        </Popover.Button>
    )
}