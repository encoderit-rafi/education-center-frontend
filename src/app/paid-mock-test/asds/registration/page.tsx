import React from "react";
import MockTestBookingForm from "../../_components/mock-test-booking-form";

export default async function PaidMockTestRegistrationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-slate-50 py-20 base-px">
      <div className="max-w-7xl mx-auto">
        <MockTestBookingForm 
          initialMockTestId={id} 
        />
      </div>
    </div>
  );
}
