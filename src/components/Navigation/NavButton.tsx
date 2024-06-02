import { Link } from "react-router-dom";
import styled from "styled-components";

const NB = styled(Link)`
  border: none;
  background: linear-gradient(to right, #ee77d0, #008cff, #e6e6e6, #e6e6e6);
  background-size: 300%;
  background-position-x: 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1.3em;
  transition: background-position-x 0.8s;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-position-x: 0%;
  }
  text-decoration: none;
`;

export default function NavButton(props: { text: string; href: string }) {
  return <NB to={props.href}>{props.text}</NB>;
}