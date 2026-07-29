export interface ArticleData {
  slug: string;
  title: string;
  readTime: string;
  publishDate: string;
  author: string;
  category: string;
  summary: string;
  contentHtml: string;
}

export const articlesList: ArticleData[] = [
  {
    slug: "how-to-read-quran-with-tajweed",
    title: "How to Read Quran with Tajweed: A Step-by-Step Beginner's Guide",
    readTime: "6 Min Read",
    publishDate: "2026-07-29",
    author: "Ustadh Huzaifa Khan",
    category: "Tajweed Guide",
    summary:
      "Mastering Tajweed is essential for every Muslim seeking to recite the Holy Quran as it was revealed to Prophet Muhammad (PBUH). Learn basic rules, makharij, and practice steps.",
    contentHtml: `
      <h2>What is Tajweed and Why is it Essential?</h2>
      <p>The word <strong>Tajweed</strong> literally means "beautification" or "making something better". In Islamic scholarship, Tajweed refers to the precise set of linguistic and phonetic rules governing the correct pronunciation of Arabic letters when reciting the Holy Quran.</p>
      <p>Allah Almighty commands in Surah Al-Muzzammil (73:4): <em>"And recite the Quran with measured recitation (Tarteel)."</em> Reciting with Tajweed preserves the sacred meaning of Allah's words and prevents distortion caused by incorrect letter articulation.</p>

      <h2>Key Pillars of Learning Tajweed</h2>
      <ol>
        <li><strong>Makharij Al-Huruf (Points of Articulation):</strong> Understanding exact physical origin points in the throat, tongue, lips, and nasal cavity for each of the 28 Arabic letters.</li>
        <li><strong>Sifat Al-Huruf (Letter Characteristics):</strong> Learning intrinsic letter qualities such as heavy vs light tones (Tafkheem & Tarqeeq) and echoing sounds (Qalqala).</li>
        <li><strong>Rules of Noon Sakinah and Tanween:</strong> Master Izhar (Clarity), Idgham (Merging), Iqlab (Conversion), and Ikhfa (Concealment).</li>
        <li><strong>Rules of Madd (Elongation):</strong> Knowing when to stretch vowel sounds for 2, 4, 5, or 6 counts.</li>
      </ol>

      <h2>3 Effective Steps to Improve Your Tajweed Fast</h2>
      <p>1. <strong>Start with Norani Qaida:</strong> Build a solid foundation in joint letter recognition and short vowels.</p>
      <p>2. <strong>Listen to Master Qaris:</strong> Regularly listen to Sheikh Minshawi, Al-Hussary, or Al-Afasy to train your ear.</p>
      <p>3. <strong>Practice 1-on-1 with a Certified Tutor:</strong> Having a qualified native Arab teacher correct your pronunciation in real time is the single fastest way to achieve fluency.</p>
    `
  },
  {
    slug: "benefits-of-surah-yaseen",
    title: "The Virtues & Spiritual Benefits of Surah Yaseen (The Heart of the Quran)",
    readTime: "5 Min Read",
    publishDate: "2026-07-29",
    author: "Sheikh Mahmoud Al-Azhari",
    category: "Quranic Insights",
    summary:
      "Surah Yaseen is revered as the Heart of the Quran. Explore why Prophet Muhammad (PBUH) highlighted its immense blessings for forgiveness and spiritual peace.",
    contentHtml: `
      <h2>Why Surah Yaseen is Called the Heart of the Quran</h2>
      <p>Prophet Muhammad (PBUH) said: <em>"Everything has a heart, and the heart of the Quran is Yaseen."</em> (Sunan At-Tirmidhi). Just as the heart supplies life to the human body, Surah Yaseen contains the core spiritual doctrine of Islam: Monotheism, Prophethood, and Resurrection.</p>

      <h2>Key Spiritual Benefits of Reciting Surah Yaseen</h2>
      <ul>
        <li><strong>Forgiveness of Past Sins:</strong> Reciting Yaseen seeking Allah's pleasure leads to divine forgiveness.</li>
        <li><strong>Fulfillment of Daily Needs:</strong> Scholars note that reciting Yaseen in the morning brings ease and blessings to all daily endeavors.</li>
        <li><strong>Comfort for the Departed:</strong> Reciting Yaseen brings tranquility and mercy for souls nearing death or those who have passed away.</li>
      </ul>
    `
  },
  {
    slug: "benefits-of-surah-al-mulk",
    title: "Surah Al-Mulk: The 30-Verse Protector from Grave Torment",
    readTime: "5 Min Read",
    publishDate: "2026-07-29",
    author: "Ustadh Huzaifa Khan",
    category: "Daily Practices",
    summary:
      "Discover the Hadith virtues of reciting Surah Al-Mulk every night before sleep and how it acts as an intercessor for its reciter.",
    contentHtml: `
      <h2>The Shield Against Grave Punishment</h2>
      <p>The Prophet (PBUH) said: <em>"There is a Surah in the Quran consisting of thirty verses which will intercede for a man until he is forgiven. It is Surah Tabarak alladhi bi-yadihi al-mulk (Surah Al-Mulk)."</em> (Sunan At-Tirmidhi).</p>
      <p>Making it a nightly habit to recite Surah Al-Mulk before sleeping grants divine protection during the period of transition in the grave (Barzakh).</p>
    `
  }
];

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return articlesList.find((a) => a.slug === slug.toLowerCase());
}
