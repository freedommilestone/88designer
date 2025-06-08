import SqueezeForm from '@/components/squeeze-form';
import { Suspense } from 'react';

export default function SqueezePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<div>Loading...</div>}>
        <SqueezeForm />
      </Suspense>
    </div>
  );
} 