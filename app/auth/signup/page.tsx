'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button/Button';
import { signIn } from 'next-auth/react';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useRouter } from 'next/navigation';
import { User } from '@prisma/client';
import PageCard from '../../../components/PageCard/PageCard';
import ReCAPTCHA from 'react-google-recaptcha';

export default function SignUp() {
  const methods = useForm<User & { captcha: string }>();
  const [authError, setAuthError] = useState('');
  const router = useRouter();

  const onSubmit: SubmitHandler<User & { captcha: string }> = async (
    data,
    event
  ) => {
    setAuthError('');

    event?.preventDefault();

    const res = await fetch('/api/signup', {
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
    });
    const json = await res.json();

    if (json.error) {
      setAuthError(json.error);
      return;
    }
    autoLoginUser(data);
  };

  const onVerifyCaptcha = (token: string | null) => {
    if (!token) return;
    methods.setValue('captcha', token);
  };
  const autoLoginUser = async (data: User) => {
    const { email, password } = data;

    const signInRes = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    if (signInRes?.error) {
      setAuthError(signInRes.error);
      return;
    }
    router.push('/profile');
  };

  return (
    <PageCard>
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
          type="email"
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
          type="password"
          placeholder="password"
        />

        {methods.formState.errors.password && (
          <p className="text-red font-bold">
            {methods.formState.errors.password.message}
          </p>
        )}
        <div className="flex flex-col items-center gap-2 rounded-3xl bg-gray-800 p-2 pb-6">
          <p>ReCAPTCHA</p>
          <ReCAPTCHA
            {...methods.register('captcha', {
              required: 'A captcha is required!',
            })}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            onChange={onVerifyCaptcha}
          />
        </div>
        {methods.formState.errors.captcha && (
          <p className="text-red font-bold">
            {methods.formState.errors.captcha.message}
          </p>
        )}
        {authError && <p className="text-red font-bold">{authError}</p>}
        <div className="flex w-full items-center justify-center gap-2">
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </PageCard>
  );
}
