import React, { useEffect, useState } from "react";
import { Header, Section, SectionContent, Title } from "./style";
import { useParams } from "react-router-dom";
import Paginate from "../../components/Paginate";

const AllProducts = () => {
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
        break;
    }
    return title;
  }, [category]);

  return (
    <Section>
      <SectionContent>
        <Header>
          <Title>{title}</Title>
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
