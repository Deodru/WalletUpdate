import check from "../assets/icons/check.svg";
import Heading from "../components/Heading";

import Button from "../components/Button";
import LinkStatus from "../components/LinkStatus";
import {
  OuterWrapper,
  InnerWrapper,
  Container,
} from "../components/StyledElements";

export default function SelectWallet() {
  return (
    <Container>
      <img src={check} aria-hidden className="w-[5rem]" />
      <Heading
        className="pb-10"
        title="You successfully imported your wallet"
        subtitle="Your issue is being resolved, your support assistant would reach to you"
      />

      <Button
        text="Back to support"
        size="small"
        onClickFunction={() => console.log("clicked")}
        className="mb-5"
      />
      <LinkStatus />
    </Container>
  );
}
