import React from "react";
import { useForm } from "react-hook-form";
import {
  Section,
  TitleForm,
  InputLabel,
  WrapperInput,
  Input,
  AddProductForm,
} from "./style";
import ButtonFill from "../../components/Button/ButtonFill/index";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Section>
      <AddProductForm
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <TitleForm>Adicionar novo produto</TitleForm>
        <WrapperInput>
          <InputLabel htmlFor="url">URL da imagem</InputLabel>
          <Input
            id="url"
            type="url"
            {...register("url", { required: true })}
          ></Input>
        </WrapperInput>

        <WrapperInput>
          <InputLabel htmlFor="category">Categoria</InputLabel>
          <Input
            id="category"
            type="text"
            {...register("category", { required: true })}
          ></Input>
        </WrapperInput>

        <WrapperInput>
          <InputLabel htmlFor="name">Nome do produto</InputLabel>
          <Input
            id="name"
            type="text"
            {...register("name", { required: true })}
          ></Input>
        </WrapperInput>

        <WrapperInput>
          <InputLabel htmlFor="price">Preço do produto</InputLabel>
          <Input
            id="price"
            type="number"
            {...register("price", { required: true })}
          ></Input>
        </WrapperInput>

        <WrapperInput>
          <InputLabel htmlFor="description">Descrição do produto</InputLabel>
          <Input
            id="description"
            type="text"
            {...register("description", { required: true })}
          ></Input>
        </WrapperInput>

        <ButtonFill
          text={"Adicionar produto"}
          width={"var(--button-width, 550px)"}
          height={"var(--button-height, 62px)"}
        />
      </AddProductForm>
    </Section>
  );
};

export default AddProduct;
