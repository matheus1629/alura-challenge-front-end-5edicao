import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { joiResolver } from "@hookform/resolvers/joi";
import {
  Section,
  TitleForm,
  InputLabel,
  WrapperInput,
  Input,
  AddProductForm,
  WrapperInputFile,
  ButtonFile,
  FileIcon,
  InputFile,
  PreviewImg,
  TrahsIcon,
  FileName,
  InputError,
} from "./style";
import ButtonFill from "../../components/Button/ButtonFill/index";
import addProductValidation from "./addProductValidation";

const AddProduct = () => {
  const location = useLocation();
  const [file, setFile] = useState([]);
  const [fileUploading, setFileUploading] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(addProductValidation) });

  const uploadHandler = async (e) => {
    setFileUploading(true);
    setFile([]);
    const inputFile = e.target.files[0];
    console.log(inputFile);

    const reader = new FileReader();

    const readFile = () => {
      return new Promise((resolve, reject) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = () => {
          reject(reader.error);
        };
        reader.readAsDataURL(inputFile);
      });
    };

    try {
      setFile([inputFile.name, await readFile()]);
      setFileUploading(false);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(errors);

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    reset();
  }, [location, reset]);

  return (
    <Section>
      <AddProductForm>
        <TitleForm>Adicionar novo produto</TitleForm>

        {file.length === 0 ? (
          <WrapperInputFile>
            {!fileUploading ? (
              <>
                <InputFile
                  {...register("file", { onChange: uploadHandler })}
                  accept=".svg,.jpg,.png"
                  id="file"
                  type="file"
                />
                <ButtonFile>
                  <FileIcon />
                  <p>
                    Arraste para adicionar uma imagem ou procure no seu
                    computador
                  </p>
                  <p>formatos suportados: PNG, JPG e SVG</p>
                </ButtonFile>{" "}
              </>
            ) : (
              <TailSpin height="70" width="70" color="#a2a2a2" radius="1" />
            )}
          </WrapperInputFile>
        ) : (
          <WrapperInputFile>
            <PreviewImg src={file[1]} />
            <FileName>{file[0]}</FileName>
            <TrahsIcon onClick={() => setFile([])} />
          </WrapperInputFile>
        )}

        <WrapperInput>
          <InputLabel htmlFor="category">Categoria</InputLabel>
          <Input {...register("category")} id="category" type="text"></Input>
          {errors?.category && (
            <InputError>{errors.category.message}</InputError>
          )}
        </WrapperInput>

        <WrapperInput>
          <InputLabel htmlFor="name">Nome do produto</InputLabel>
          <Input {...register("name")} id="name" type="text"></Input>
          {errors?.name && <InputError>{errors.name.message}</InputError>}
        </WrapperInput>

        <WrapperInput>
          <InputLabel htmlFor="price">Preço do produto</InputLabel>
          <Input {...register("price")} id="price" type="number"></Input>
          {errors?.price && <InputError>{errors.price.message}</InputError>}
        </WrapperInput>

        <WrapperInput>
          <InputLabel htmlFor="description">Descrição do produto</InputLabel>
          <Input
            {...register("description")}
            id="description"
            type="textarea"
          ></Input>
          {errors?.description && (
            <InputError>{errors.description.message}</InputError>
          )}
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
