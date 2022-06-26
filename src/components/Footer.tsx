import { RocketseatLogo } from "./RockeseatLogo";

export function Footer() {
    return (
        <div className="flex w-auto mx-10 py-4 border-t border-gray-300 items-center justify-between flex-col md:flex-row">
            <div className="flex gap-4 flex-col md:flex-row md:flex-start items-center">
                <RocketseatLogo />
                <span className="text-sm md:text-md">
                    Rocketseat - Todos os direitos reservados
                </span>
            </div>
            <a
                className="text-sm"
                href=""
            >
                Políticas de privacidade
            </a>
        </div>
    )
}