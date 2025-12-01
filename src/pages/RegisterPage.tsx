import React from "react";
import { AuthSwitch, Button, Card, DividerOr, Input } from "../components";
import { Form, Formik } from "formik";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card
        title="Sign Up"
        desc="Please enter your details to create an account"
        className="w-xl"
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          onSubmit={() => {}}
        >
          {() => (
            <Form>
              <div className="flex w-full gap-4">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="First Name"
                  className="w-full"
                />

                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Last Name"
                  className="w-full"
                />
              </div>

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                className="mt-4"
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                className="mt-4"
              />

              <Input
                label="Confirm Password"
                type="password"
                placeholder="Re-enter your password"
                className="mt-4"
              />

              <Button
                variant="primary"
                size="md"
                label="Sign Up"
                onClick={() => console.log("Clicked")}
                className="w-full mt-4"
              />

              <DividerOr className="mt-4" />

              <Button
                variant="secondary"
                size="md"
                label="Continue with Google"
                onClick={() => console.log("Clicked")}
                className="w-full mt-4"
              />

              <AuthSwitch
                label="Already have an account?"
                linkText="Log In"
                path="/"
                className="mt-6 justify-center"
              />
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default RegisterPage;
