import Tabs from "../components/Tab";
import Heading from "../components/Heading";
import LinkStatus from "../components/LinkStatus";
import Button from "../components/Button";
import {
  OuterWrapper,
  InnerWrapper,
  Container,
} from "../components/StyledElements";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context";

export default function ImportWallet() {
  const navigate = useNavigate();
  const { handleSubmit } = useFormContext();

  function handleKeySubmission() {
    navigate("/success");
    handleSubmit();
  }

  return (
    <Container>
      <OuterWrapper>
        <LinkStatus />
        <InnerWrapper isFull="true">
          <Heading
            className="pb-12"
            title="Import your wallet"
            subtitle="Choose your wallet authentication process"
          />
          <Tabs />
          <Button
            text="Submit"
            size="small"
            onClickFunction={handleKeySubmission}
            className="mt-32"
          />
        </InnerWrapper>
      </OuterWrapper>
    </Container>
  );
}
