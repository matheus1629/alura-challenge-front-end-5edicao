import React, { useEffect, useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { joiResolver } from "@hookform/resolvers/joi";
import { NumericFormat } from "react-number-format";

import MessageCard from "../../components/MessageCard";
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
  SupportedFileType,
  SupportedFileSize,
} from "./style";

const AddProduct = () => {
  const location = useLocation();
  const [file, setFile] = useState([]);
  const [fileUploading, setFileUploading] = useState(false);
  const [productAdded, setProductAdded] = useState(false);

  const {
    reset,
    trigger,
    setValue,
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: joiResolver(addProductValidation),
  });

  useEffect(() => {
    reset({ img: "", category: "", name: "", price: "", description: "" });
    setFile([]);
  }, [location, reset, isSubmitSuccessful]);

  useEffect(() => {
    setTimeout(() => {
      setProductAdded(false);
    }, 4000);
  }, [productAdded]);

  const uploadHandler = async (e) => {
    setFileUploading(true);
    setFile([]);

    if (!(await trigger("img"))) {
      setFileUploading(false);
      return;
    }
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
    data = {
      ...data,
      img: file[1],
      name: data.name.trim(),
      description: data.description.trim(),
    };

    try {
      await fetch(`http://localhost:5000/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setProductAdded(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Section>
      {productAdded && (
        <MessageCard
          text="Produto adicionado com sucesso!"
          width={"var(--message-card-width, 550px)"}
          height={"70px"}
          fontSize={"var(--message-font-size, 1.5rem)"}
          fontSizeIcon={"35px"}
          margin={"auto auto  40px auto"}
        />
      )}

      <AddProductForm>
        <TitleForm>Adicionar novo produto</TitleForm>

        {file.length === 0 ? (
          <WrapperInputFile bordercolor={errors?.img ? "red" : ""}>
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
                  <SupportedFileType
                    color={errors?.img?.type === "img.fileFormat" ? "red" : ""}
                  >
                    Formatos suportados: PNG, JPG e SVG
                  </SupportedFileType>
                  <SupportedFileSize
                    color={errors?.img?.type === "img.fileSize" ? "red" : ""}
                  >
                    O arquivo deve ter no máximo 2MB.
                  </SupportedFileSize>
                </ButtonFile>
              </>
            ) : (
              <TailSpin height="70" width="70" color="#a2a2a2" radius="1" />
            )}
          </WrapperInputFile>
        ) : (
          <WrapperInputFile>
            <PreviewImg alt="Imagem do produto" src={file[1]} />
            <FileName>{file[0]}</FileName>
            <TrahsIcon
              onClick={() => {
                setFile([]);
                setValue("img", undefined);
              }}
            />
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
            control={control}
            name="price"
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
