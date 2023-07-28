import React, { useEffect, useState } from "react";
import {
  Header,
  Option,
  Section,
  SectionContent,
  Select,
  Title,
} from "./style";
import { useNavigate, useParams } from "react-router-dom";
import Paginate from "../../components/Paginate";

const AllProducts = () => {
  const navigate = useNavigate();
  const { category, page } = useParams();
  const [title, setTitle] = useState();
  const pageNumber = Number(page);

  useEffect(() => {
    switch (category) {
      case "star-wars":
        setTitle("Star Wars");
        break;
      case "console":
        setTitle("Consoles");
        break;
      case "others":
        setTitle("Outros");
        break;
      default:
        setTitle("Todos os produtos");
        break;
    }
  }, [category]);

  const changeCategory = (value) => {
    navigate(`/allproducts/${value}/1`);
  };

  return (
    <Section>
      <SectionContent>
        <Header>
          <Title>{title}</Title>

          <Select
            defaultValue={category}
            onChange={(event) => changeCategory(event.target.value)}
          >
            <Option value="all">Ver tudo</Option>
            <Option value="star-wars">Star-Wars</Option>
            <Option value="console">Console</Option>
            <Option value="others">Others</Option>
          </Select>
        </Header>
        <Paginate
          category={category}
          page={pageNumber}
          wrapperStyle={{ flexWrap: "wrap" }}
        />
      </SectionContent>
    </Section>
  );
};

export default AllProducts;
