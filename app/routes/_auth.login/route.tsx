import {Form, useActionData} from '@remix-run/react';
import {ActionFunctionArgs, json, redirect} from '@shopify/remix-oxygen';
import {z} from 'zod';
import logo from '~/images/logos/Logo.svg';

const LoginFormSchema = z.object({
  email: z.string({required_error: 'Email is required'}).email(),
  passwod: z.string({required_error: 'Password is requuired'}),
});

export async function action({request}: ActionFunctionArgs) {
  const rawFormData = await request.formData();

  const validatedFields = LoginFormSchema.safeParse({...rawFormData});

  if (!validatedFields.success) {
    return json({errors: validatedFields.error.flatten().fieldErrors});
  }

  return redirect('/');
}

export default function LoginPage() {
  const actionData = useActionData<typeof action>();
  console.log(actionData);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <figure>
          <img src={logo} alt="cigweld-logo" />
        </figure>
        <div className="">
          <h1>Welcome back!</h1>
          <p>Please login to your account</p>
          <Form method="post" className="flex flex-col">
            <input type="email" name="email" id="email" />
            {actionData?.errors.email &&
              actionData.errors.email.map((error: string) => (
                <p className="text-red-500">{error}</p>
              ))}
            <input type="password" name="password" id="password" />
            {actionData?.errors.passwod &&
              actionData.errors.passwod.map((error: string) => (
                <p className="text-red-500">{error}</p>
              ))}
            <input type="submit" value="Log In" />
          </Form>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
