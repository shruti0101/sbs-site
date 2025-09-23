// app/login/page.jsx
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("@/components/LoginForm"), {
  ssr: false, // disable server-side rendering
});

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <Suspense fallback={<p>Loading...</p>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
