export interface SurahData {
  number: number;
  slug: string;
  nameArabic: string;
  nameEnglish: string;
  meaning: string;
  revelationType: "Makki" | "Madani";
  numberOfAyahs: number;
  juzNumber: number;
  audioUrl?: string;
  reciter?: string;
  shortDescription: string;
  about: string;
  background: string;
  benefits: string[];
  keyThemes: string[];
  faqs: { q: string; a: string }[];
  prevSlug?: string;
  nextSlug?: string;
}

export const surahsList: SurahData[] = [
  {
    number: 1,
    slug: "al-fatiha",
    nameArabic: "سُورَةُ الْفَاتِحَةِ",
    nameEnglish: "Surah Al-Fatiha",
    meaning: "The Opening",
    revelationType: "Makki",
    numberOfAyahs: 7,
    juzNumber: 1,
    audioUrl: "https://server8.mp3quran.net/afs/001.mp3",
    reciter: "Sheikh Mishary Rashid Al-Afasy",
    shortDescription: "The foundational chapter of the Holy Quran, recited in every unit of Islamic prayer (Salah).",
    about:
      "Surah Al-Fatiha (The Opening) is the first chapter of the Holy Quran. It consists of 7 verses and is classified as a Makki Surah. It is also known as Umm al-Kitab (The Mother of the Book) and Surah As-Salah because no prayer is valid without its recitation. It encapsulates the core principles of Islamic belief: praise of Allah, reliance on His mercy, recognition of Judgment Day, and supplication for guidance upon the straight path (Sirat al-Mustaqeem).",
    background:
      "Revealed during the early period of Prophethood in Makkah, Surah Al-Fatiha served as a spiritual light and complete prayer formula for the early Muslim community. Scholars note that while other chapters contain specific laws or stories, Al-Fatiha contains the essence of the entire Quranic message in seven concise verses.",
    benefits: [
      "Essential component of daily Salah (recited at least 17 times daily by Muslims).",
      "Known as Ar-Ruqyah (The Spiritual Healing) for physical and spiritual ailments.",
      "A direct dialogue between the worshipper and Allah Almighty (Sahih Muslim).",
      "Brings immense peace, clarity of mind, and divine guidance."
    ],
    keyThemes: [
      "Praise and Gratitude to Allah (Alhamdulillah)",
      "Divine Mercy and Compassion (Ar-Rahman Ar-Raheem)",
      "Sovereignty of Judgment Day (Maliki Yawm ad-Deen)",
      "Exclusive Worship and Reliance (Iyyaka Na'budu wa Iyyaka Nasta'een)",
      "Supplication for Straight Path Guidance (Ihdina as-Sirat al-Mustaqeem)"
    ],
    faqs: [
      {
        q: "Why is Surah Al-Fatiha called the Mother of the Book?",
        a: "It is called Umm al-Kitab because it summarizes the foundational teachings of Islam: Tawheed (Monotheism), Risalah (Prophethood), Akhirah (Afterlife), and Ibadah (Worship)."
      },
      {
        q: "Is it obligatory to recite Al-Fatiha in Salah?",
        a: "Yes, Prophet Muhammad (PBUH) stated: 'There is no prayer for whoever does not recite the Opening of the Book (Al-Fatiha).' (Sahih Al-Bukhari)."
      }
    ],
    nextSlug: "al-baqarah"
  },
  {
    number: 2,
    slug: "al-baqarah",
    nameArabic: "سُورَةُ الْبَقَرَةِ",
    nameEnglish: "Surah Al-Baqarah",
    meaning: "The Cow",
    revelationType: "Madani",
    numberOfAyahs: 286,
    juzNumber: 1,
    audioUrl: "https://server8.mp3quran.net/afs/002.mp3",
    reciter: "Sheikh Mishary Rashid Al-Afasy",
    shortDescription: "The longest chapter of the Quran containing Ayatul Kursi, Islamic laws, and protection against evil.",
    about:
      "Surah Al-Baqarah (The Cow) is the 2nd chapter and the longest Surah of the Quran, comprising 286 verses. Revealed in Madinah, it outlines comprehensive legislation for personal life, family relations, economic principles, warfare ethics, fasting in Ramadan, and Pilgrimage. It contains the greatest verse in the Quran, Ayatul Kursi (Verse 255), and the longest verse regarding financial contracts (Verse 282).",
    background:
      "Revealed over several years following the Hijrah (migration) to Madinah, Surah Al-Baqarah established the legal and social framework for the newly formed Muslim state. It addresses the People of the Book, hypocrites, and believers, offering timeless wisdom.",
    benefits: [
      "Protects homes against Shaytaan (Satan) when recited regularly (Sahih Muslim).",
      "Contains Ayatul Kursi, the supreme verse of divine sovereignty and protection.",
      "The last two verses (285-286) suffice as spiritual protection for whoever recites them at night.",
      "Intercedes for its reciter on the Day of Resurrection like two shadowing clouds."
    ],
    keyThemes: [
      "Characteristics of Believers, Disbelievers & Hypocrites",
      "Creation of Adam (AS) and human stewardship on Earth",
      "Story of the Cow and lessons from Banu Isra'il",
      "Ayatul Kursi: Supreme Description of Allah's Throne & Knowledge",
      "Islamic Banking, Fasting, Hajj, and Legal Codes"
    ],
    faqs: [
      {
        q: "What is the virtue of reciting Surah Al-Baqarah at home?",
        a: "The Prophet (PBUH) said: 'Do not turn your houses into graves. Verily, Satan flees from a house in which Surah Al-Baqarah is recited.' (Sahih Muslim)."
      },
      {
        q: "Which verse in Surah Al-Baqarah is the greatest verse?",
        a: "Verse 255, known as Ayatul Kursi (The Throne Verse), is the greatest verse in the Quran."
      }
    ],
    prevSlug: "al-fatiha",
    nextSlug: "yaseen"
  },
  {
    number: 36,
    slug: "yaseen",
    nameArabic: "سُورَةُ يس",
    nameEnglish: "Surah Yaseen",
    meaning: "Ya-Sin",
    revelationType: "Makki",
    numberOfAyahs: 83,
    juzNumber: 22,
    audioUrl: "https://server8.mp3quran.net/afs/036.mp3",
    reciter: "Sheikh Mishary Rashid Al-Afasy",
    shortDescription: "Referred to as the Heart of the Quran, emphasizing Resurrection, Prophethood, and Divine Signs.",
    about:
      "Surah Yaseen is the 36th chapter of the Quran, containing 83 verses. Frequently described as 'The Heart of the Quran', Yaseen focuses on core tenets of faith: the truth of divine revelation, the certainty of Resurrection, the signs of creation in nature, and the ultimate accountability of mankind before their Creator.",
    background:
      "Revealed in Makkah during a period of intense opposition from pagan chieftains, Surah Yaseen presents vivid parables of historical towns that rejected messengers, warning disbelievers while reassuring the Prophet (PBUH) of ultimate divine triumph.",
    benefits: [
      "Known as the Heart of the Quran (Heart of the Scripture).",
      "Brings ease in times of difficulty and spiritual hardship.",
      "Reminds believers of the reality of death, judgment, and eternal Jannah.",
      "Recited for those nearing death or seeking forgiveness for deceased relatives."
    ],
    keyThemes: [
      "Confirmation of Muhammad's (PBUH) Prophethood",
      "Parable of the People of the Town and the Believing Man",
      "Cosmic Signs: Orbits of Sun & Moon, Day & Night cycles",
      "The Trumpet Blow and Resurrection of All Souls",
      "Dialogue of Believers in Paradise and Disbelievers in Fire"
    ],
    faqs: [
      {
        q: "Why is Surah Yaseen called the Heart of the Quran?",
        a: "Because it forcefully articulates the fundamental core of Islamic creed: Monotheism, Prophethood, and Resurrection."
      }
    ],
    prevSlug: "al-baqarah",
    nextSlug: "ar-rahman"
  },
  {
    number: 55,
    slug: "ar-rahman",
    nameArabic: "سُورَةُ الرَّحْمَٰنِ",
    nameEnglish: "Surah Ar-Rahman",
    meaning: "The Beneficent",
    revelationType: "Madani",
    numberOfAyahs: 78,
    juzNumber: 27,
    audioUrl: "https://server8.mp3quran.net/afs/055.mp3",
    reciter: "Sheikh Mishary Rashid Al-Afasy",
    shortDescription: "A rhythmic masterpiece highlighting Allah's endless favors and mercy upon mankind and Jinn.",
    about:
      "Surah Ar-Rahman (The Beneficent) is the 55th chapter of the Quran. Renowned for its poetic rhythm and haunting refrain: 'Fabi-ayyi ala-i Rabbikuma tukazziban' (Which of the favors of your Lord will you deny?), repeated 31 times. It addresses both humanity and Jinn, enumerating divine blessings from celestial orbits to fertile lands and heavenly palaces.",
    background:
      "Surah Ar-Rahman highlights Allah's attribute of Supreme Mercy (Ar-Rahman). It contrasts the temporary nature of worldly existence with the eternal majesty of Allah, inviting reflection and repentance.",
    benefits: [
      "Known as the Beauty of the Quran (Arus al-Quran).",
      "Softens hard hearts and increases gratitude for everyday blessings.",
      "Brings peace, tranquility, and cure for anxiety.",
      "Encourages deep reflection on nature, oceans, and cosmic balance."
    ],
    keyThemes: [
      "Teaching of the Quran and Creation of Man",
      "Cosmic Balance: Sun, Moon, Stars & Justice in Measures",
      "The Two Seas meeting without transgressing bounds",
      "Impermanence of all creation vs Eternity of Allah's Face",
      "Vivid descriptions of the Gardens of Paradise for God-conscious souls"
    ],
    faqs: [
      {
        q: "How many times is the refrain repeated in Surah Ar-Rahman?",
        a: "The verse 'Fabi-ayyi ala-i Rabbikuma tukazziban' is repeated 31 times throughout the 78 verses."
      }
    ],
    prevSlug: "yaseen",
    nextSlug: "al-mulk"
  },
  {
    number: 67,
    slug: "al-mulk",
    nameArabic: "سُورَةُ الْمُلْكِ",
    nameEnglish: "Surah Al-Mulk",
    meaning: "The Dominion",
    revelationType: "Makki",
    numberOfAyahs: 30,
    juzNumber: 29,
    audioUrl: "https://server8.mp3quran.net/afs/067.mp3",
    reciter: "Sheikh Mishary Rashid Al-Afasy",
    shortDescription: "The 30-verse chapter that intercedes for its reciter until they are forgiven and saved from grave torment.",
    about:
      "Surah Al-Mulk (The Dominion) is the 67th Surah consisting of 30 verses. It emphasizes Allah's absolute control over life, death, and the universe. Reciting Surah Al-Mulk every night before sleep is a Sunnah that protects the believer from the punishment of the grave.",
    background:
      "Revealed in Makkah, Surah Al-Mulk challenges skeptics to inspect the flaws in creation, pointing out the seamless perfection of the heavens and stars as proof of an All-Wise Creator.",
    benefits: [
      "Intercedes for its reciter until all their sins are forgiven (Sunan At-Tirmidhi).",
      "Shields and protects against the punishment of the grave (Azab al-Qabr).",
      "Sunnah practice to recite every night before sleeping.",
      "Instills deep awareness of life as a temporary test of deeds."
    ],
    keyThemes: [
      "Dominion of Allah over Life and Death as a Test",
      "Perfection of the Seven Heavens with no flaws or rifts",
      "Adornment of the lowest sky with stars as missiles against devils",
      "Remorse of those in Hell who failed to listen or reason",
      "Divine knowledge of secret thoughts and open words"
    ],
    faqs: [
      {
        q: "When is the best time to recite Surah Al-Mulk?",
        a: "It is Sunnah to recite Surah Al-Mulk every night before going to sleep."
      }
    ],
    prevSlug: "ar-rahman",
    nextSlug: "al-kahf"
  },
  {
    number: 18,
    slug: "al-kahf",
    nameArabic: "سُورَةُ الْكَهْفِ",
    nameEnglish: "Surah Al-Kahf",
    meaning: "The Cave",
    revelationType: "Makki",
    numberOfAyahs: 110,
    juzNumber: 15,
    audioUrl: "https://server8.mp3quran.net/afs/018.mp3",
    reciter: "Sheikh Mishary Rashid Al-Afasy",
    shortDescription: "The Friday Surah containing 4 major stories protecting believers against trials & Dajjal.",
    about:
      "Surah Al-Kahf (The Cave) is the 18th Surah with 110 verses. Recited every Friday by Muslims worldwide, it details four powerful narratives: The Sleepers of the Cave (Trial of Faith), The Man with Two Gardens (Trial of Wealth), Musa and Khidr (Trial of Knowledge), and Dhul-Qarnayn (Trial of Power). Reciting its first or last ten verses protects against the tribulations of Dajjal.",
    background:
      "Revealed when Quraish elders sent emissaries to Jewish rabbis in Madinah to test Prophet Muhammad (PBUH) with three challenging questions regarding the cave youths, the traveler Dhul-Qarnayn, and the Soul (Rooh).",
    benefits: [
      "Illuminates a light for the reciter between two Fridays (Sunan Al-Kubra).",
      "Protects against the severe trials of Dajjal (The Anti-Christ).",
      "Teaches humility in seeking sacred knowledge through the story of Musa & Khidr.",
      "Protects faith during times of societal corruption and secular pressure."
    ],
    keyThemes: [
      "Story of Youth of the Cave (As-hab al-Kahf)",
      "Parable of the Rich Garden Owner and the Poor Believer",
      "Journey of Prophet Musa (AS) with the Wise Servant Khidr",
      "Expedition of Dhul-Qarnayn and building of the Iron Rampart",
      "Insignificance of worldly adornments compared to righteous good deeds"
    ],
    faqs: [
      {
        q: "Why do Muslims recite Surah Al-Kahf every Friday?",
        a: "The Prophet (PBUH) said: 'Whoever recites Surah Al-Kahf on Friday, a light will shine for him between this Friday and the next.' (Al-Hakim)."
      }
    ],
    prevSlug: "al-mulk",
    nextSlug: "al-fatiha"
  }
];

export function getSurahBySlug(slug: string): SurahData | undefined {
  return surahsList.find((s) => s.slug === slug.toLowerCase());
}
