import React, { Fragment, useState, BaseSyntheticEvent } from "react";
import styled, { css } from "styled-components";

interface IPropsAuthStyledInput {
  error?: string;
}

export const StyledInput = styled.input<IPropsAuthStyledInput>`
  width: 500px;
  ${(props) => props.theme.textOptions}
  padding: 15px 10px 15px 56px;
  border: 1px solid ${(props) => props.theme.separatorColor};
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
  border-radius: 3px;
  transition: 0.2s;
  @media (max-width: 900px) {
    width: 100%;
  }
  &:hover {
    background: #fde9dd;
  }
  &:focus {
    border: 1px solid rgba(255, 102, 0, 0.3);
    padding: 15px 10px 15px 56px;
    background: #fde9dd;
  }
  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${(props) => props.theme.errorColor};
      padding: 15px 10px 15px 56px;
    `}
`;

export const StyledTextArea = styled.textarea`
  resize: none;
  outline: none;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.separatorColor};
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif;
  ${(props) => props.theme.textOptions}
  transition: 0.2s;
  &:hover {
    background: #fde9dd;
  }
  &:focus {
    border: 1px solid rgba(255, 102, 0, 0.3);
    background: #fde9dd;
  }
`;

export const CustomStyledTextArea = styled.div`
  resize: none;
  outline: none;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.separatorColor};
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif;
  ${(props) => props.theme.textOptions}
  transition: 0.2s;
  &:hover {
    background: #fde9dd;
  }
  &:focus {
    border: 1px solid rgba(255, 102, 0, 0.3);
    background: #fde9dd;
  }
`;

export const StyledContainerTextArea = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.separatorColor};
`;

export const StyledTextAreaInput = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif;
  transition: 0.2s;
  &:hover {
    background: #fde9dd;
  }
  &:focus {
    background: #fde9dd;
  }
`;

const CheckboxSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  box-sizing: border-box;
  width: 20px;
  background-color: #eee;
  border: 1px solid ${(props) => props.theme.secondaryTextColor};
  border-radius: 3px;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const CheckboxInput = styled.input``;

const CheckBoxMainContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 14px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  :hover {
    ${CheckboxSpan} {
      background-color: #f88030;
      border: none;
      :after {
        display: block;
        left: 6px;
        top: 1px;
      }
    }
  }

  ${CheckboxInput} {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ ${CheckboxSpan} {
      background-color: #f88030;
      border: none;
    }
    &:checked ~ ${CheckboxSpan}:after {
      display: block;
      left: 6px;
      top: 1px;
    }
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  ${CheckboxSpan}:after {
    left: 5px;
    top: 1px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

interface IAuthStyledCheckbox {
  type: string;
  name: string;
  onChange: (e: BaseSyntheticEvent, name: string) => void;
  checked: boolean;
}

export const StyledCheckbox = ({
  type,
  name,
  onChange,
  checked,
}: IAuthStyledCheckbox) => {
  return (
    <CheckBoxMainContainer>
      <CheckboxInput
        type={type}
        name={name}
        id={name}
        onChange={(e) => onChange(e, name)}
        checked={checked}
      />
      <CheckboxSpan />
    </CheckBoxMainContainer>
  );
};

const FilterChekboxSpan = styled(CheckboxSpan)`
  border-color: ${(props) => props.theme.splitLineColor};
  border-radius: 3px;
`;

const FilterCheckboxMainContainer = styled(CheckBoxMainContainer)`
  ${CheckboxInput} {
    &:checked ~ ${CheckboxSpan} {
      border: none;
      :after {
        left: 6px;
        top: 2px;
      }
    }
  }

  ${CheckboxSpan}:after {
    left: 5px;
    top: 1px;
  }
`;

interface IPropsFilterStyledCheckbox {
  type: string;
  name: string;
  onChange: (e: BaseSyntheticEvent, name: string) => void;
  checked: boolean;
}

export const FilterStyledCheckbox = ({
  type,
  name,
  onChange,
  checked,
}: IPropsFilterStyledCheckbox) => {
  return (
    <FilterCheckboxMainContainer>
      <CheckboxInput
        type={type}
        name={name}
        id={name}
        onChange={(e) => onChange(e, name)}
        checked={checked}
      />
      <FilterChekboxSpan />
    </FilterCheckboxMainContainer>
  );
};

interface IPropsAuthStyledRadio {
  type: string;
  name: string;
  onChange: (name: string) => void;
  checked: boolean;
}

export const StyledRadio = ({
  type,
  name,
  onChange,
  checked,
}: IPropsAuthStyledRadio) => {
  const RadioInput = styled.input``;

  const RadioSpan = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    box-sizing: border-box;
    width: 20px;
    background-color: #eee;
    border: 2px solid ${(props) => props.theme.splitLineColor};
    border-radius: 100%;

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  `;

  const RadioMainContainer = styled.label`
    display: block;
    position: relative;
    padding-left: 14px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;

    ${RadioInput} {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      &:checked ~ ${RadioSpan} {
        border-color: ${(props) => props.theme.orangeColor};
      }
      &:checked ~ ${RadioSpan}:after {
        display: block;
      }
    }

    &:hover input ~ .checkmark {
      border-color: ${(props) => props.theme.orangeColor};
    }

    ${RadioSpan}:after {
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background: ${(props) => props.theme.orangeColor};
      left: 4px;
      top: 4px;
    }
  `;

  return (
    <RadioMainContainer htmlFor={name}>
      <RadioInput
        type={"radio"}
        id={name}
        checked={checked}
        onChange={() => onChange(name)}
      />
      <RadioSpan />
    </RadioMainContainer>
  );
};

interface IPropsSignUpSubmitButton {
  width?: string;
  blocked?: boolean;
}

export const StyledButton = styled.div<IPropsSignUpSubmitButton>`
  background: ${(props) => props.theme.orangeColor};
  width: 260px;
  height: 50px;
  display: flex;
  color: #fff;
  font-weight: 600;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  margin-top: 30px;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
  outline: none;

  :hover {
    background: ${(props) => props.theme.hoverOrangeColor};
  }

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  ${({ blocked }) =>
    blocked &&
    css`
      background: ${(props) => props.theme.disabledSecondaryText};
      :hover {
        background: ${(props) => props.theme.blockedButtonColor};
      }
    `}
`;

export const Container = styled.div`
  padding: 0 20px;
  max-width: 1365px;
  margin: 0 auto;
`;

export const OrangeButton = styled.button`
  font-size: 15px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.orangeColor} !important;
  font-weight: 600;
  border: 2px solid ${(props) => props.theme.orangeColor};
  padding: 10px 15px;
  background: none;
  width: fit-content;
  &:hover {
    background-color: ${(props) => props.theme.orangeColor};
    color: #fff !important;
    cursor: pointer;
  }
`;

export const SolidButton = styled.button`
  padding: 10px 15px;
  background-color: ${(props) => props.theme.orangeColor};
  color: #fff !important;
  border-radius: 3px;
  border: none;
  font-size: 16px;
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
`;
interface ISecondaryButton {
  isDisabled?: boolean;
  isActive?: boolean;
}

export const SecondaryButton = styled.div<ISecondaryButton>`
  padding: 14px 32px;
  box-sizing: border-box;
  color: ${(props) => props.theme.orangeColor};
  border-radius: 3px;
  font-weight: 600;
  height: 50px;
  font-size: 16px;
  border: 2px solid ${(props) => props.theme.orangeColor};
  display: flex;
  justify-content: center;
  align-items: center;
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.hoverOrangeColor};
    border-color: ${(props) => props.theme.hoverOrangeColor};
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      border-color: ${(props) => props.theme.disabledSecondaryText};
      color: ${(props) => props.theme.disabledSecondaryText};
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${(props) => props.theme.hoverOrangeColor};
      border-color: ${(props) => props.theme.hoverOrangeColor};
    `}
`;

interface ITextButton {
  isDisabled?: boolean;
  isActive?: boolean;
}

export const TextButton = styled.p<ITextButton>`
  opacity: 1;
  color: #212121;
  font-size: 18px;

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.hoverOrangeColor};
    border-color: ${(props) => props.theme.hoverOrangeColor};
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      border-color: ${(props) => props.theme.disabledSecondaryText};
      color: ${(props) => props.theme.disabledSecondaryText};
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${(props) => props.theme.hoverOrangeColor};
      border-color: ${(props) => props.theme.hoverOrangeColor};
    `}
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 40px;
  font-family: "Exo 2";
  font-weight: 700;
  @media (max-width: 992px) {
    font-size: 20px !important;
  }
`;
interface IPropsStyledFilePicker {
  name: string;
  onChange: (e: BaseSyntheticEvent, name: string) => void;
  multiple: boolean;
}

export const StyledFilePicker = ({
  name,
  onChange,
  multiple,
}: IPropsStyledFilePicker) => {
  const StyledLebel = styled.label`
    cursor: pointer;
    width: 30px;
    height: 30px;

    img {
      position: relative;
      margin-top: 5px;
    }
    @media (max-width: 500px) {
      img {
        width: 10px;
      }
    }
  `;

  const StyledInput = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  `;

  return (
    <Fragment>
      <StyledLebel htmlFor={name}>
        <img src={require("assets/pages/createJob/file.svg")} alt={"file"} />
      </StyledLebel>
      <StyledInput
        type={"file"}
        name={name}
        id={name}
        onChange={(e) => onChange(e, name)}
        multiple={multiple}
      />
    </Fragment>
  );
};

interface IPropsStyledFilePickerEdit {
  name: string;
  onChange: (e: BaseSyntheticEvent, name: string) => void;
  multiple: boolean;
  accept: string;
}

export const StyledFilePickerEdit = ({
  name,
  onChange,
  multiple,
  accept,
}: IPropsStyledFilePickerEdit) => {
  const StyledLebel = styled.label`
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    img {
      border: none;
      margin: 0;
      position: relative;
      left: 0;
    }
  `;

  const StyledInput = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  `;

  return (
    <Fragment>
      <StyledLebel htmlFor={name}>
        <img src={require("assets/pages/profile/edit.svg")} alt={"file"} />
      </StyledLebel>
      <StyledInput
        type={"file"}
        name={name}
        id={name}
        onChange={(e) => onChange(e, name)}
        multiple={multiple}
        accept={accept}
      />
    </Fragment>
  );
};

interface IPropsStyledFilePickerEdit {
  name: string;
  onChange: (e: BaseSyntheticEvent, name: string) => void;
  multiple: boolean;
  accept: string;
  onDrop: (e: {}) => void;
  titleForFileInput: string;
}

interface IPropsStyledLebel {
  isDragEntered: boolean;
}

export const DragFilesInput = ({
  name,
  onChange,
  multiple,
  onDrop,
  accept,
  titleForFileInput,
}: IPropsStyledFilePickerEdit) => {
  const [isDragEntered, setDragEntered] = useState(false);

  const StyledLebel = styled.label<IPropsStyledLebel>`
    cursor: pointer;
    padding: 32px 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed ${(props) => props.theme.orangeColor};
    width: 100%;

    p {
      margin: 0;
      font-size: 18px;
      opacity: 1;

      span {
        color: ${(props) => props.theme.orangeColor};
      }
    }

    ${({ isDragEntered }) =>
      isDragEntered &&
      css`
        border: 1px solid ${(props) => props.theme.orangeColor};
      `}

    @media (max-width: 400px) {
      p {
        font-size: 14px;
        text-align: center;
      }
    }
    @media (max-width: 350px) {
      p {
        font-size: 13px;
      }
    }
  `;

  const StyledInput = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  `;

  return (
    <Fragment>
      <StyledLebel
        htmlFor={name}
        onDragEnter={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setDragEntered(true);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setDragEntered(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onDrop(e);
        }}
        isDragEntered={isDragEntered}
      >
        {titleForFileInput ? (
          titleForFileInput
        ) : (
          <p>
            Drag files here or <span>browse</span> to upload
          </p>
        )}
      </StyledLebel>
      <StyledInput
        type={"file"}
        name={name}
        id={name}
        onChange={(e) => onChange(e, name)}
        multiple={multiple}
        accept={accept}
      />
    </Fragment>
  );
};

interface IPropsStyledInputSelector {
  isBlocked: boolean;
}

export const StyledInputSelector = styled.div<IPropsStyledInputSelector>`
  padding: 12px;
  border: 1px solid ${(props) => props.theme.separatorColor};
  border-radius: 2px;
  background: #ffffff;
  font-size: 16px;
  color: #2e2e2e;
  outline: none;
  margin: 0;
  cursor: pointer;

  span {
    width: 30%;
    max-width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    z-index: 200;
    border-radius: 3px 3px 0 0;
    box-sizing: border-box;
    cursor: pointer;
    :hover {
      background: #fde9dd;
      border-top: 1px solid rgba(255, 102, 0, 0.3);
      border-right: 1px solid rgba(255, 102, 0, 0.3);
      border-bottom: 1px solid rgba(255, 102, 0, 0.3);
    }
  }
  :hover {
    border: 1px solid rgba(255, 102, 0, 0.3);
    background: #fde9dd;
  }
  :focus {
    border: 1px solid rgba(255, 102, 0, 0.3);
    span {
      background: #fde9dd;
      border-top: 1px solid rgba(255, 102, 0, 0.3);
      border-right: 1px solid rgba(255, 102, 0, 0.3);
      border-bottom: 1px solid rgba(255, 102, 0, 0.3);
    }
  }

  ${({ isBlocked }) =>
    isBlocked &&
    css`
      background: #ebebe4;
    `}
`;

interface IPropsStyledOptionContainer {
  isOpen: boolean;
}

export const StyledOptionContainer = styled.div<IPropsStyledOptionContainer>`
  border: 1px solid rgba(255, 102, 0, 0.3);
  border-top: 0;
  background: #ffffff;
  color: #2e2e2e;
  outline: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  max-height: 160px;
  overflow: auto;
  position: absolute;
  width: 100%;
  visibility: hidden;
  cursor: pointer;
  z-index: 900;

  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: visible;
    `}
`;

interface IPropsStyledOption {
  isSelected: boolean;
}

export const StyledOption = styled.div<IPropsStyledOption>`
  color: #2e2e2e;
  font-size: 16px;
  padding: 10px 22px;
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  transition: background 0.2s;

  :hover {
    background: #fde9dd;
  }
  :focus {
    background: #fde9dd;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: #fde9dd;
    `}
`;

export const CancelButton = styled.div`
  background: transparent;
  border: 2px solid ${(props) => props.theme.splitLineColor};
  width: 180px;
  height: 50px;
  display: flex;
  color: ${(props) => props.theme.splitLineColor};
  font-weight: 600;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
  box-sizing: border-box;

  :hover {
    border-color: ${(props) => props.theme.orangeColor};
    color: ${(props) => props.theme.orangeColor};
  }
`;

export const StyledTextField = styled.textarea`
  border: 1px solid ${(props) => props.theme.splitLineColor};
  padding: 20px;
  resize: none;
  outline: none;
  width: 100%;
  height: 150px;
  font-size: 16px;
  color: #2e2e2e;
  font-family: "Source Sans Pro", sans-serif;
`;

export const DrawerHeaderContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.separatorColor};
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: 40px;
  position: relative;
  width: 100%;

  img {
    position: absolute;
    left: 0;
    top: calc(45% - 10px);
  }
`;
