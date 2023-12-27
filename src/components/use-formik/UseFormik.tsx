import { useFormik } from "formik";
import styled from "@emotion/styled";
import * as Yup from "yup";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #66FF99;
`;

//Using Yups email vallidation
// const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// Repacing custom valdations with yup
// const validate = (values: any) => {
//     const errors: any = {};

//     if (!values.email) {
//         errors.email = "Required";
//     } else if (!emailRegex.test(values.email)) {
//         errors.email = "Invalid email address";
//     }

//     if (!values.password) {
//         errors.password = "Required";
//     } else if (!passwordRegex.test(values.password)) {
//         errors.password =
//             "Password should contain minimum eight characters, at least one letter, and one number";
//     }

//     return errors;
// };

const UseFormik = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .max(320, "Email can be greated that 320 characters")
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .matches(passwordRegex, "Password should contain minimum eight characters, at least one letter, and one number")
                .required('Required'),
        }),
        onSubmit: (values: any) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const renderErrors = (error: any) => {
        return (
            <div>
                {error}
            </div>
        )
    };

    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                    // Reducing Boilerplate by using getFieldProps
                    id="email"
                    // name="email"
                    type="text"
                    // onChange={formik.handleChange}
                    // value={formik.values.email}
                    // onBlur={formik.handleBlur}
                    {...formik.getFieldProps('email')}
                />
                {formik.errors.email ? <div>{renderErrors(formik.errors.email)}</div> : null}
                <br />
                <label htmlFor="password">Password</label>
                <input
                    // Reducing Boilerplate by using getFieldProps
                    id="password"
                    // name="password"
                    type="password"
                    // onChange={formik.handleChange}
                    // value={formik.values.password}
                    // onBlur={formik.handleBlur}
                    {...formik.getFieldProps('password')}
                />
                {formik.errors.password ? <div>{renderErrors(formik.errors.password)}</div> : null}
                <br />
                <button type="submit">Submit</button>
            </form>
        </Container>
    );
};

export default UseFormik;