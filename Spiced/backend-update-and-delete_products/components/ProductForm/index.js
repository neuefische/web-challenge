import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";

export default function ProductForm({
  value = { name: "", description: "", price: "", currency: "" },
  onSubmit,
  isEditMode,
}) {
  return (
    <StyledForm onSubmit={onSubmit}>
      {isEditMode ? (
        <StyledHeading>Editing Fish</StyledHeading>
      ) : (
        <StyledHeading>Add a new Fish</StyledHeading>
      )}

      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" defaultValue={value.name} />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={value.description}
        />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input
          type="number"
          id="price"
          name="price"
          defaultValue={value.price}
          min="0"
        />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency" defaultValue={value.currency}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
