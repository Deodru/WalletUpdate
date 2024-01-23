import { useState } from "react";
import WalletDropdown from "../components/Select";
import Heading from "../components/Heading";
import LinkStatus from "../components/LinkStatus";
import Button from "../components/Button";
import { useFormContext } from "../context";
import {
  OuterWrapper,
  InnerWrapper,
  Container,
} from "../components/StyledElements";
import { useNavigate } from "react-router-dom";

const wallets = [
  { id: 1, name: "Coinbase Wallet" },
  { id: 2, name: "MetaMask" },
  { id: 3, name: "Crypto.com" },
  { id: 4, name: "Trust Wallet" },
  { id: 5, name: " Gemini" },
  { id: 6, name: "Phantom Wallet" },
  { id: 7, name: " Exodus" },
  { id: 8, name: "Binance" },
  { id: 9, name: "Others" },
];

export default function SelectWallet() {
  const [selected, setSelected] = useState(wallets[0]);
  const { setFormData, formData } = useFormContext();
  const navigate = useNavigate();

  function handleWalletSubmission() {
    setFormData({
      ...formData,
      walletName: selected,
    });

    navigate("/import");
    console.log("clicked");
  }
  return (
    <Container>
      <OuterWrapper>
        <LinkStatus />
        <InnerWrapper>
          <Heading
            className="pb-10"
            title="Select your wallet"
            subtitle="Choose a wallet to securely manage your issues"
          />
          <WalletDropdown
            wallets={wallets}
            selected={selected}
            setSelected={setSelected}
          />
          <Button
            text="Proceed"
            size="small"
            onClickFunction={handleWalletSubmission}
          />
          <p className="text-gray text-base">
            Your support is handled by{" "}
            <a href="#" className="text-black font-bold">
              Ben HelpDesk
            </a>
          </p>
        </InnerWrapper>
      </OuterWrapper>
    </Container>
  );
}
