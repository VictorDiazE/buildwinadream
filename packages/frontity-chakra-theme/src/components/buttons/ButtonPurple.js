import { connect, styled } from "frontity";
import FrontityLink from "../link";

const ButtonPurple = ({ url, title }) => {
  return (
    <>
      <Button variant="base" link={url}>
        {title}
      </Button>
    </>
  );
};

export default connect(ButtonPurple);

const Button = styled(FrontityLink)`
  display: flex;
  justify-content: center;
  background: #4c43cd;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  padding: 20px 35px;
  border-radius: 40px;
  border: 2px solid #4c43cd;
  height: fit-content;
  transition: ease-in-out 500ms;
  cursor: pointer;
  :hover {
    background: #fff;
    color: #4c43cd;
    border-color: #fff;
  }
`;
