import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #6699FF;
`;

//Using Yups email vallidation
// const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
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

const UseFormikContext = () => {
    const onSubmit = (values: any, { setSubmitting }: any) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    };

    //Using Formik default ErrorMessage Component
    // const renderErrors = (error: any) => {
    //     return (
    //         <div>
    //             {error}
    //         </div>
    //     )
    // };

    return (
        <Container>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {formik => (
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" {...formik.getFieldProps('email')} />
                        {/* {formik.touched.email && formik.errors.email ? (
                            <div>{renderErrors(formik.errors.email)}</div>
                        ) : null} */}
                        {/*replacing the above with erromessage component*/}
                        <br />
                        <ErrorMessage name="email" />
                        <br />

                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" {...formik.getFieldProps('password')} />
                        {/* {formik.touched.password && formik.errors.password ? (
                            <div>{renderErrors(formik.errors.password)}</div>
                        ) : null} */}
                        <br />
                        <ErrorMessage name="email" />
                        <br />

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </Container>
    );
};

export default UseFormikContext;