import {
  BaseCard,
  BaseCardDescription,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import paid_mock_tests from "@/lib/demo-data/paid-mock-tests";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PaidMockTestPage() {
  return (
    <div className="min-h-screen bg-background base-px base-py">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center section-title mb-12">
          Paid Mock <span>Tests</span>
        </h1>

        <div className="grid grid-cols-1 gap-8">
          {paid_mock_tests.map((test: any) => (
            <Link key={test.id} href={`/paid-mock-test/${test.id}`}>
              <BaseCard className="p-7">
                <div className="flex items-center justify-between gap-2">
                  <BaseCardTitle>{test.exam_name}</BaseCardTitle>
                  <ArrowRight
                    className="size-6 
                      text-slate-300
                      group-hover:text-primary group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
                <BaseCardDescription className="line-clamp-2">
                  {test.description}
                </BaseCardDescription>
              </BaseCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
