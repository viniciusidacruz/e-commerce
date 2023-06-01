"use client";

import Image from "next/image";
import { formatToBRL } from "brazilian-values";
import { Plus, Minus } from "@phosphor-icons/react";

import { IParamsComponent } from "./types";

/**
 * @param {object}  product - Informações sobre produto espeficico como Titulo, Imagem, Preço, etc...
 */

export const CardSmallComponent = ({ product }: IParamsComponent) => {
  return (
    <div className="flex gap-6">
      <div className="relative w-[10.4rem] h-[10.4rem]">
        <Image
          fill
          src={product.thumbnail}
          className="object-cover rounded-xl"
          alt={`Imagem do produto ${product.id}`}
        />
      </div>

      <div className="w-full">
        <div>{product.title}</div>

        <div className="mt-[1.6rem] flex items-center justify-between">
          <strong>
            {formatToBRL(product.price)} <small>{product.soldBy}</small>
          </strong>

          <div className="flex items-center">
            <button
              type="button"
              aria-label="Adicionar mais uma quantidade do produto no carrinho"
              className="h-[4rem] w-[4rem] flex items-center justify-center leading-[0] rounded bg-green-300 hover:bg-green-400"
            >
              <Minus />
            </button>

            <span className="h-[4rem] w-[4rem] flex items-center justify-center leading-[0]">
              5
            </span>

            <button
              type="button"
              aria-label="Remover mais uma quantidade do produto no carrinho"
              className="h-[4rem] w-[4rem] flex items-center justify-center leading-[0] rounded bg-green-300 hover:bg-green-400"
            >
              <Plus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
