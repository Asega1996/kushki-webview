import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import luhn from "luhn";

import { Kushki } from "@kushki/js";
import { yupResolver } from "@hookform/resolvers/yup";

import MakeSinglePay from "./forms/makeSinglePay";
import { Typography } from "@material-ui/core";

const MakePaymentScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const kushki = new Kushki({
    merchantId: "54c0da1586d940feac2f8e4d0affaa46", // Your public merchant id - TEST
    inTestEnvironment: true,
    //merchantId: "d71c3de5b57f46a3825f101095bc7fbc", // Your public merchant id - PRO
  });

  const defaultValues = {
    cardNumber: "",
    fullName: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  };

  const schema = yup.object().shape({
    cardNumber: yup
      .string()
      .required("este campo es obligatorio")
      .test("Campo obligatorio", "La tarjeta no es válida", (value) => {
        return luhn.validate(value!);
      }),
    fullName: yup.string().required("este campo es obligatorio"),
    expiryMonth: yup
      .string()
      .required("este campo es obligatorio")
      .min(2, "2 dígitos")
      .max(2, "2 dígitos")
      .test("Campo obligatorio", "El mes debe ser válido", (value) => {
        return Number.parseInt(value!) > 0 && Number.parseInt(value!) < 13;
      }),
    expiryYear: yup
      .string()
      .required("este campo es obligatorio")
      .min(2, "2 dígitos")
      .max(2, "2 dígitos")
      .test(
        "Campo obligatorio",
        "El año no puede ser menor que el actual",
        (value) => {
          console.log(new Date().getFullYear().toString().substr(-2));
          return (
            Number.parseInt(value!) >=
            Number.parseInt(new Date().getFullYear().toString().substr(-2))
          );
        }
      ),
    cvc: yup
      .string()
      .required("este campo es obligatorio")
      .min(3, "El cvc/cvv debe tener 3 dígitos")
      .max(3, "El cvc/cvv debe tener 3 dígitos"),
  });

  const { handleSubmit, errors, control, formState } = useForm<any>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const makeKushkiPayment = (control: any) => {
    setLoading(true);
    kushki.requestToken(
      {
        amount: "0",
        currency: "USD",
        card: {
          name: control.fullName,
          number: control.cardNumber,
          cvc: control.cvc,
          expiryMonth: control.expiryMonth,
          expiryYear: control.expiryYear,
        },
      },
      (response: any) => {
        console.log(response);
        if (response.token) {
          console.log("Submit your code to your back-end");

          // Submit your code to your back-end
        } else {
          if (response.code) {
            console.error(
              "Error: ",
              response.error,
              "Code: ",
              response.code,
              "Message: ",
              response.message
            );
          }
          setError(response.message + " Código de error " + response.code);
        }

        setLoading(false);
      }
    );
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(makeKushkiPayment)}
        id="payment-form"
      >
        {error.length > 0 && <Typography color="secondary">{error}</Typography>}
        <MakeSinglePay
          control={control}
          errors={errors}
          formState={formState}
          loading={loading}
        />
      </form>
    </>
  );
};

export default MakePaymentScreen;
