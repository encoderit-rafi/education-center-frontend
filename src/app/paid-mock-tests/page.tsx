import {
  BaseCard,
  BaseCardArrow,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardImportantInfo,
  BaseCardList,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import FreeConsultation from "../free-consultation/_components/free-consultation";
import Link from "next/link";
import { PAID_MOCK_TEST_CARDS_DATA } from "@/data";

export default function PaidMockTestPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="base-px base-py max-w-3xl mx-auto base-space-y">
        <h1 className="page-heading text-center">
          Our <span className="highlight">Paid</span> MockTests
        </h1>
        <p className="page-description text-center">
          Elevate your performance through rigorous simulation. Our proprietary
          testing environment mirrors the actual exam constraints, providing the
          diagnostic precision required for elite academic success.
        </p>
      </div>
      <div className="base-px base-py max-w-5xl mx-auto">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {PAID_MOCK_TEST_CARDS_DATA.map((card, index) => (
            <Link key={card.id} href={`/paid-mock-tests/${card.id}`}>
              <BaseCard>
                <div className="flex items-center justify-between">
                  <BaseCardIcon>{index + 1}</BaseCardIcon>
                  <BaseCardArrow />
                </div>
                <div className="space-y-3">
                  <BaseCardTitle>{card.name}</BaseCardTitle>
                  <BaseCardDescription>{card.description}</BaseCardDescription>
                  <BaseCardList items={card.points} />
                </div>
                <BaseCardImportantInfo className="mt-auto">
                  {card.important}
                </BaseCardImportantInfo>
              </BaseCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
