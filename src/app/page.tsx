"use client";
import styled from "styled-components";

const Main = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100dvh",
});

const Title = styled.h1({
  fontWeight: "400",
  textAlign: "center",
  color: "#000",
});

export default function Home() {
  return (
    <Main>
      <Title>Jean-Michel Melki</Title>
    </Main>
  );
}
