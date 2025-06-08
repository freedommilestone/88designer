import ClaimForm from "@/components/claim-form";
import { Suspense } from "react";
import MainLayout from "@/components/layout/MainLayout";

export default function ClaimPage() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <Suspense fallback={<div>Loading...</div>}>
          <ClaimForm />
        </Suspense>
      </div>
    </MainLayout>
  );
} 