import { FadeLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  alignItems: "center",
};

export default function ZohoSpinner({ isLoading = false } = {} ) {
  return (
    <FadeLoader
      color='#00eaed'
      loading={isLoading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}