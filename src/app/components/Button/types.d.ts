import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IParamsComponent extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    icon?: ReactNode;
    isLoading?: boolean;
}