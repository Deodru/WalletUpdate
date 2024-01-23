import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/StyledElements";

export default function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout to navigate after 5 seconds
    const timeoutId = setTimeout(() => {
      // Navigate to the "/select" route
      navigate("/select");
    }, 5000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <Container center={true}>Give us a few, we're securing your link</Container>
  );
}
