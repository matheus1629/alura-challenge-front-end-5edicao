import React from "react";
import { ButtonFile, FileIcon, InputFile, WrapperInputFile } from "./style";
import ButtonFill from "../Button/ButtonFill";

const FileUpload = ({ fileCotent, setFileCotent }) => {
  const uploadHandler = (e) => {
    const file = e.target.files[0];
    file.isUploading = true;
    setFileCotent([...file, fileCotent]);
  };

  return (
    <WrapperInputFile>
      <InputFile id="file" type="file" />

      <ButtonFile>
        <FileIcon />
        Arraste para adicionar uma imagem ou procure no seu computador
      </ButtonFile>
    </WrapperInputFile>
  );
};

export default FileUpload;
