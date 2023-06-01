import { IParamsComponent } from "./types";

/**
 * @param {ReactNode}  icon - Qualquer elemento HTML valído servindo como ícone;
 * @param {string}  title - Título para o botão;
 * @param {boolean}  isLoading - Feedback se está ou não fazendo uma ação;
 */

export const ButtonComponent = ({
  icon,
  title,
  isLoading,
  ...restProps
}: IParamsComponent) => {
  return (
    <button
      className="text-xl py-8 bg-green-600 text-white w-full rounded hover:bg-green-800 transition ease-in flex justify-center gap-4"
      {...restProps}
    >
      {isLoading ? "Carregando..." : title}
      {icon && icon}
    </button>
  );
};
