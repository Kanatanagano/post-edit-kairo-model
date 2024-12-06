'use client';

import { cn } from '@/lib/utils';
import { Input } from './input';
import { Label } from './label';
import { buttonVariants } from './button';
import { Icon } from '../icon';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function UserAuthForm() {
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);

  return (
    <div className="grid gap-6">
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" placeholder="name@example.com" type="email" />
          </div>
          <button className={cn(buttonVariants())}>メールでログイン</button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="text-muted-foreground px-2 bg-background ">
            または
          </span>
        </div>
      </div>

      <button
        className={cn(buttonVariants({ variant: 'outline' }))}
        onClick={() => {
          setIsGithubLoading(true);
          signIn('github');
        }}
      >
        {isGithubLoading ? (
          <Icon.spinner />
         ) : (
         <Icon.github/>
        )}
        GitHub
      </button>
    </div>
  );
}
