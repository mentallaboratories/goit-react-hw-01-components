import styled  from "styled-components";
import {Form as FormikForm, ErrorMessage as FormikErrorMessage} from 'formik';

export const Form = styled(FormikForm)`
    width: 400px;
    padding: 8px;
    border: 1px solid #2a2a2a;
    display: flex;
    flex-direction: column;
    gap:12px;
    background-color: pink;
`;

export const FormField = styled.label`
    display: flex;
    flex-direction: column;
    background-color: tomato;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
    color: ${p => p.theme.colors.error};
`;