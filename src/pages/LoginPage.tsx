import React from "react";
import { AuthSwitch, Button, Card, DividerOr, Input } from "../components";
import { LockKeyhole, Mail } from "lucide-react";
import { Form, Formik } from "formik";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <Card title="Login" className="w-lg">
        <Formik initialValues={{ email: "", password: "" }} onSubmit={() => {}}>
          {() => (
            <Form>
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                icon={<Mail />}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                icon={<LockKeyhole />}
                className="mt-4"
              />

              <AuthSwitch
                linkText="Forgot Password?"
                path="/"
                className="mt-2 justify-end"
              />

              <Button
                variant="primary"
                size="md"
                label="Log In"
                onClick={() => console.log("Clicked")}
                className="w-full mt-8"
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
                label="Don't have account?"
                linkText="Sign Up"
                path="/register"
                className="mt-6 justify-center"
              />
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default LoginPage;
