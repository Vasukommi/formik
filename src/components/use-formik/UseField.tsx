import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FF6699;
`;

const passwordRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const initialValues: any = {
    email: "",
    password: "",
};

const validationSchema: any = Yup.object({
    email: Yup.string()
        .max(320, "Email can be greater than 320 characters")
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .matches(passwordRegex, "Password should contain minimum eight characters, at least one letter, and one number")
        .required('Required'),
});

const UseField = () => {
    const onSubmit = (values: any, { setSubmitting }: any) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    };
    return (
        <Container>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <form>
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <br />
                    <ErrorMessage name="email" />
                    <br />
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <br />
                    <ErrorMessage name="password" />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </Formik>
        </Container>
    )
}

export default UseField;