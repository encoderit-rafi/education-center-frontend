import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExamCardProps {
  exam: {
    id: string;
    name: string;
    image: string;
    content: string;
  };
  types?: { name: string }[];
}

export default function CourseCard({ exam, types }: ExamCardProps) {
  return (
    <Card
      key={exam.id}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl border border-slate-100 h-full p-0"
    >
      <div className="h-48 relative overflow-hidden bg-slate-50">
        <Image
          className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
          src={exam.image}
          alt={exam.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity" />
      </div>

      <div className="flex-1 flex flex-col">
        <CardHeader className="px-6 pb-2">
          <CardTitle className="text-2xl font-black text-slate-900 leading-tight tracking-tight uppercase">
            {exam.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-6 pb-4">
          <p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">
            {exam.content}
          </p>
          
          {types && types.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {types.map((type, idx) => (
                <Badge 
                  key={idx} 
                  variant="secondary"
                  className="bg-slate-100 text-slate-700 hover:bg-primary hover:text-white transition-colors text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm"
                >
                  {type.name}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="mt-auto p-6 pt-0">
          <Link
            href={`/exams/${exam.id}`}
            className="w-full text-center px-8 py-4 bg-primary text-white font-bold text-sm rounded-xl shadow-lg shadow-primary/20 hover:bg-red-900 transition-all uppercase tracking-[0.2em]"
          >
            Explore Exam
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}
