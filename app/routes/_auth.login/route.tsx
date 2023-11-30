import {useActionData} from '@remix-run/react';
import {withZod} from '@remix-validated-form/with-zod';
import {ActionFunctionArgs, json, redirect} from '@shopify/remix-oxygen';
import {ValidatedForm, validationError} from 'remix-validated-form';
import {z} from 'zod';
import {SubmitButton} from '~/components/ui/button/SubmitButton';
import {Input} from '~/components/ui/input/Input';
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

  const validatedFields = await validator.validate(rawFormData);

  if (validatedFields.error) {
    return validationError(validatedFields.error);
  }

  return json(validatedFields.submittedData);
}

export default function LoginPage() {
  const actionData = useActionData<typeof action>();
  console.log('action', actionData);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <figure>
          <img src={logo} alt="cigweld-logo" />
        </figure>
        <div className="">
          <h1>Welcome back!</h1>
          <h2>hello h2</h2>
          <h3>hello h3</h3>
          <h4>hello h4</h4>
          <h5>hello h5</h5>
          <p>Please login to your account</p>
          <ValidatedForm validator={validator} method="post">
            <Input name="email" label="Email" />
            <Input name="password" label="Password" />
            <SubmitButton />
          </ValidatedForm>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
