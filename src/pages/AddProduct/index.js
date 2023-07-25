import React, { useEffect, useState } from "react";

import { Controller, set, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { joiResolver } from "@hookform/resolvers/joi";
import { NumericFormat } from "react-number-format";

import ButtonFill from "../../components/Button/ButtonFill/index";
import addProductValidation from "./addProductValidation";

import {
  Section,
  TitleForm,
  InputLabel,
  WrapperInput,
  TextField,
  AddProductForm,
  WrapperInputFile,
  ButtonFile,
  FileIcon,
  InputFile,
  PreviewImg,
  TrahsIcon,
  FileName,
  SelectContainer,
  Select,
  TextAreaField,
  Option,
} from "./style";

const AddProduct = () => {
  const location = useLocation();
  const [file, setFile] = useState([]);
  const [fileUploading, setFileUploading] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: joiResolver(addProductValidation) });

  const uploadHandler = async (e) => {
    setFileUploading(true);
    setFile([]);
    const inputFile = e.target.files[0];

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

  const onSubmit = async (data) => {
    data = { ...data, img: file[1] };
    try {
      await fetch(`http://localhost:5000/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    reset();
  }, [location, reset]);

  console.log(errors);
  return (
    <Section>
      <AddProductForm>
        <TitleForm>Adicionar novo produto</TitleForm>

        {file.length === 0 ? (
          <WrapperInputFile borderColor={errors?.img ? "red" : ""}>
            {!fileUploading ? (
              <>
                <InputFile
                  {...register("img", { onChange: uploadHandler })}
                  accept=".svg,.jpg,.png"
                  id="img"
                  type="file"
                />
                <ButtonFile>
                  <FileIcon />
                  <p>
                    Arraste para adicionar uma imagem ou procure no seu
                    computador
                  </p>
                  <p>formatos suportados: PNG, JPG e SVG</p>
                </ButtonFile>
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

        <SelectContainer border={errors?.category ? "1px solid red" : ""}>
          <Select
            color={errors?.category ? "red" : ""}
            {...register("category")}
            id="category"
          >
            <Option value="">Selecione uma categoria</Option>
            <Option value="star-wars">Star-Wars</Option>
            <Option value="console">Console</Option>
            <Option value="others">Others</Option>
          </Select>
        </SelectContainer>

        <WrapperInput>
          <InputLabel color={errors?.name ? "red" : ""} htmlFor="name">
            Nome do produto
          </InputLabel>
          <TextField
            border={errors?.name ? "1px solid red" : ""}
            {...register("name")}
            id="name"
            type="text"
          ></TextField>
        </WrapperInput>

        <WrapperInput>
          <InputLabel color={errors?.price ? "red" : ""} htmlFor="price">
            Preço do produto
          </InputLabel>
          <Controller
            control={control}
            name="price"
            render={({ field: { onChange, value } }) => (
              <NumericFormat
                border={errors?.price ? "1px solid red" : ""}
                customInput={TextField}
                id="price"
                type="text"
                thousandSeparator="."
                decimalSeparator=","
                decimalScale={2}
                prefix="R$ "
                allowNegative={false}
                value={value}
                onValueChange={(values) => {
                  onChange(values.floatValue);
                }}
              />
            )}
          />
        </WrapperInput>

        <WrapperInput>
          <InputLabel
            color={errors?.description ? "red" : ""}
            htmlFor="description"
          >
            Descrição do produto
          </InputLabel>
          <TextAreaField
            {...register("description")}
            id="description"
            border={errors?.description ? "1px solid red" : ""}
          ></TextAreaField>
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
