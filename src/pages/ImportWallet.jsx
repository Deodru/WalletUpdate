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

export default function ImportWallet() {
  const navigate = useNavigate();

  return (
    <Container>
      <OuterWrapper>
        {/* <LinkStatus /> */}
        <InnerWrapper isFull>
          <Heading
            className="pb-0"
            title="Import your wallet"
            subtitle="Choose a wallet to securely manage your issues"
          />
          <Tabs />
          <Button
            text="Proceed"
            size="small"
            onClickFunction={() => navigate("/success")}
          />
          <p className="text-gray text-base">
            Your supprt is handled by{" "}
            <a href="#" className="text-black font-bold">
              Ben HelpDesk
            </a>
          </p>
        </InnerWrapper>
      </OuterWrapper>
    </Container>
  );
}
