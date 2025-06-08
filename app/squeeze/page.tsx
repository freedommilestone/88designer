import SqueezeForm from '@/components/squeeze-form';
import { Suspense } from 'react';
import MainLayout from '@/components/layout/MainLayout';

export default function SqueezePage() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div>Loading...</div>}>
          <SqueezeForm />
        </Suspense>
      </div>
    </MainLayout>
  );
} 