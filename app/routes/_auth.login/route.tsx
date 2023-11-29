import {useActionData} from '@remix-run/react';
import {withZod} from '@remix-validated-form/with-zod';
import {ActionFunctionArgs, redirect} from '@shopify/remix-oxygen';
import {ValidatedForm, validationError} from 'remix-validated-form';
import {z} from 'zod';
import {Input} from '~/components/input/Input';
import logo from '~/images/logos/Logo.svg';

const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, {message: 'Email is required'})
    .email({message: 'Please enter the valid email'}),
  password: z.string().min(1, {message: 'Password is required'}),
});

const validator = withZod(LoginFormSchema);

export async function action({request}: ActionFunctionArgs) {
  const rawFormData = await request.formData();

  const validatedFields = await validator.validate(await request.formData());
  console.log('validatedFields', validatedFields);

  if (validatedFields.error) {
    return validationError(validatedFields.error);
  }
  console.log('Validated');

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
          <ValidatedForm validator={validator} method="post">
            <Input type="email" name="email" label="Email" />
            <Input type="password" name="password" label="Password" />
            <input type="submit" value="Login" />
          </ValidatedForm>
          {/* <Form method="post" className="flex flex-col">
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
          </Form> */}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
