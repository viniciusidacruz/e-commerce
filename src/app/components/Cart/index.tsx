"use client";

import { useForm } from "react-hook-form";
import { Fragment, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, Tag, Trash, ShoppingCart } from "@phosphor-icons/react";

import { ButtonComponent } from "../Button";
import { CardSmallComponent } from "../CardSmall";

import { calcTotalPrice } from "@/utils";
import { TCouponFormData, incrementCouponFormSchema } from "@/schemas";

import Mock from "./__mocks__/db.json";

export const CartComponent = () => {
  const [isVisibleCart, setIsVisibleCart] = useState(false);
  const [isVisibleFieldCoupon, setIsVisibleFieldCoupon] = useState(false);

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCouponFormData>({
    resolver: zodResolver(incrementCouponFormSchema),
  });

  const handleStateVisibilityCart = () => setIsVisibleCart(!isVisibleCart);

  const handleStateVisibilityFieldCoupon = () => {
    setValue("coupon", "");

    setIsVisibleFieldCoupon(!isVisibleFieldCoupon);
  };

  const handleApplyCoupon = (data: TCouponFormData) => {
    console.log(data);
  };

  return (
    <Fragment>
      {isVisibleCart ? (
        <aside
          className={`h-screen fixed right-0 w-[42.8rem] grid grid-rows-[max-content,1fr,max-content] bg-green-50`}
        >
          <header className="text-xl flex items-center justify-between px-[3.2rem] py-[2.4rem] bg-green-100">
            <div>
              Seu carrinho tem{" "}
              <strong className="text-green-600">
                {Mock.products.length} items
              </strong>
            </div>

            <button
              type="button"
              onClick={handleStateVisibilityCart}
              title="Botão para fechar o carrinho"
              aria-label="Botão para fechar o carrinho"
            >
              <X />
            </button>
          </header>

          <main className="relative p-[3.2rem] grid place-content-start grid-cols-1 gap-12 w-ful overflow-y-scroll">
            {Mock.products.map((product) => (
              <CardSmallComponent key={product.id} product={product} />
            ))}
          </main>

          <footer className="p-[3.2rem] bg-green-100">
            <form onSubmit={handleSubmit(handleApplyCoupon)}>
              <div className="flex justify-between text-xl">
                <span>Total: </span>
                <strong className="text-green-600">
                  {calcTotalPrice(Mock.products)}
                </strong>
              </div>

              {isVisibleFieldCoupon && (
                <Fragment>
                  <input
                    type="text"
                    {...register("coupon")}
                    maxLength={6}
                    placeholder="Digite seu cupom"
                    className="h-[4.8rem] mt-[1.6rem] rounded outline-none bg-white px-4 w-full"
                  />

                  {errors.coupon && (
                    <small className="text-red-600">
                      {errors.coupon.message}
                    </small>
                  )}
                </Fragment>
              )}

              <div className="mt-[1.6rem] flex items-center justify-end gap-[.8rem] mb-[3.2rem]">
                {isVisibleFieldCoupon ? (
                  <Trash className="text-xl" />
                ) : (
                  <Tag className="text-xl" />
                )}
                <button
                  type="button"
                  title="Botão de adicionar o cupom"
                  aria-label="Botão de adicionar o cupom"
                  onClick={handleStateVisibilityFieldCoupon}
                >
                  {isVisibleFieldCoupon ? "Remover" : "Adicionar"} cupom
                </button>
              </div>

              <ButtonComponent type="submit" title="Finalizar compra" />
            </form>
          </footer>
        </aside>
      ) : (
        <button
          type="button"
          className="p-4 relative"
          title="Botão para abrir o carrinho"
          onClick={handleStateVisibilityCart}
          aria-label="Botão para abrir o carrinho"
        >
          <strong className="absolute top-[-5px] bg-green-600 rounded-full right-0 min-h-[2rem] min-w-[2rem] flex items-center justify-center text-[10px] text-white">
            20
          </strong>
          <ShoppingCart className="text-2xl" />
        </button>
      )}
    </Fragment>
  );
};
