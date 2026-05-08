import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { exams, exams_types } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { Badge } from "@/components/ui/badge";
import GradientBox from "@/components/blocks/gradient-box";
import { buttonVariants } from "@/components/ui/button";
import { EXAM_IDS_DATA, NAV_EXAMS_DATA } from "@/data";
import ExamIELTS from "../_components/exam-ielts";
import ExamIELTSAcademic from "../_components/exam-ielts-academic";
import ExamIELTSGeneral from "../_components/exam-ielts-general";
import ExamIELTSUKVI from "../_components/exam-ielts -ukvi";
import ExamCelpipGeneral from "../_components/exam-celpip-general";

export default async function ExamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  switch (id) {
    case EXAM_IDS_DATA.ielts.id:
      return <ExamIELTS />;
    case EXAM_IDS_DATA.ielts_academic.id:
      return <ExamIELTSAcademic />;
    case EXAM_IDS_DATA.ielts_general.id:
      return <ExamIELTSGeneral />;
    case EXAM_IDS_DATA.ielts_ukvi.id:
      return <ExamIELTSUKVI />;
    case EXAM_IDS_DATA.celpip_general.id:
      return <ExamCelpipGeneral />;
  }
}
