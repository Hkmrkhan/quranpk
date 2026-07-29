import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, articlesList } from "@/data/articles";
import ScrollReveal from "@/components/ScrollReveal";
import { FiClock, FiUser, FiArrowLeft, FiBookmark } from "react-icons/fi";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} | Huzaifa's Quran Academy`,
    description: article.summary,
    alternates: {
      canonical: `https://quranpk.vercel.app/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://quranpk.vercel.app/articles/${article.slug}`,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return articlesList.map((art) => ({ slug: art.slug }));
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 space-y-12">
      <section className="bg-sage-900 text-cream-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-gold-400 font-bold text-xs hover:underline mb-2"
          >
            <FiArrowLeft /> Back to All Articles
          </Link>
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold uppercase bg-gold-500/20 text-gold-400 border border-gold-500/30">
            {article.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 text-xs text-sage-200 font-semibold pt-2">
            <span className="flex items-center gap-1.5">
              <FiUser /> {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <FiClock /> {article.readTime}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <ScrollReveal direction="up">
          <div
            className="prose prose-sage max-w-none text-sage-900 font-medium leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />
        </ScrollReveal>

        {/* CTA Card */}
        <ScrollReveal direction="zoom">
          <div className="bg-sage-900 text-cream-50 p-8 rounded-3xl text-center space-y-4 border border-sage-800">
            <h3 className="font-serif font-bold text-2xl text-cream-50">
              Put Your Knowledge Into Practice With 1-on-1 Tutoring
            </h3>
            <p className="text-sage-200 text-sm max-w-lg mx-auto font-medium">
              Enroll today in our Norani Qaida, Tajweed, or Hifz programs starting at $10/mo.
            </p>
            <Link
              href="/#contact-section"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-400 text-sage-900 font-extrabold text-sm hover:bg-gold-300 transition-colors shadow-md"
            >
              <FiBookmark />
              <span>Reserve Seat Now</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
