'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button/Button';
import { signIn } from 'next-auth/react';
import { SubmitHandler } from 'react-hook-form/dist/types';
type UserData = {
  email: string,
  password: string,
};
function SignIn() {
  const methods = useForm<UserData>();
  const [authError, setAuthError] = useState('');
  const onSubmit: SubmitHandler<UserData> = async (data, event) => {
    console.log({ event });

    event?.preventDefault();

    const { email, password } = data;
    console.log(data);

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    if (res?.error) {
      setAuthError(res.error);
      return;
    }
    console.log({ res });
  };

  return (
    <div className="relative w-full p-5 text-white shadow-lg">
      <div className="flex flex-col gap-10 rounded-lg bg-gray-900 p-5">
        <form
          className="flex flex-col gap-5 p-20"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <input
            {...methods.register('email', {
              required: 'an email is required!',
            })}
            className="rounded-3xl bg-gray-800 p-2"
            placeholder="email"
          />
          {methods.formState.errors.email && (
            <p className="text-red font-bold">
              {methods.formState.errors.email.message}
            </p>
          )}
          <input
            className="rounded-3xl bg-gray-800 p-2"
            {...methods.register('password', {
              required: 'a password is required!',
            })}
            placeholder="password"
          />

          {methods.formState.errors.password && (
            <p className="text-red font-bold">
              {methods.formState.errors.password.message}
            </p>
          )}
          {authError && <p className="text-red font-bold">{authError}</p>}
          <Button type="submit">Sign In</Button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
