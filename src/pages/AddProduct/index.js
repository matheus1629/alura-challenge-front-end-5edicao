import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { joiResolver } from "@hookform/resolvers/joi";
import {
  Section,
  TitleForm,
  InputLabel,
  WrapperInput,
  Input,
  AddProductForm,
} from "./style";
import ButtonFill from "../../components/Button/ButtonFill/index";
import addProductValidation from "./addProductValidation";

const AddProduct = () => {
  const location = useLocation();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolvers: joiResolver(addProductValidation) });

  let fileBase64 = "";
  const onSubmit = async (data) => {
    const file = data.file[0];
    const reader = new FileReader();

    const readFile = () => {
      return new Promise((resolve, reject) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = () => {
          reject(reader.error);
        };
        reader.readAsDataURL(file);
      });
    };

    try {
      fileBase64 = await readFile();
    } catch (error) {
      console.error(error);
    }
    console.log(fileBase64);


    reset(); 
  };

  useEffect(() => {
    reset();
  }, [location, reset]);

  return (
    <Section>
      <AddProductForm
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <TitleForm>Adicionar novo produto</TitleForm>
        <WrapperInput>
          <InputLabel htmlFor="file">URL da imagem</InputLabel>
          <Input id="file" type="file" {...register("file")}></Input>
        </WrapperInput>

        <WrapperInput>
          <InputLabel htmlFor="category">Categoria</InputLabel>
          <Input id="category" type="text" {...register("category")}></Input>
        </WrapperInput>

        <WrapperInput>
          <InputLabel htmlFor="name">Nome do produto</InputLabel>
          <Input id="name" type="text" {...register("name")}></Input>
        </WrapperInput>

        <WrapperInput>
          <InputLabel htmlFor="price">Preço do produto</InputLabel>
          <Input id="price" type="number" {...register("price")}></Input>
        </WrapperInput>

        <WrapperInput>
          <InputLabel htmlFor="description">Descrição do produto</InputLabel>
          <Input
            id="description"
            type="textarea"
            {...register("description")}
          ></Input>
        </WrapperInput>

        <ButtonFill
          text={"Adicionar produto"}
          width={"var(--button-width, 550px)"}
          height={"var(--button-height, 62px)"}
          onClick={handleSubmit(onSubmit)}
        />
      </AddProductForm>
    </Section>
  );
};

export default AddProduct;
