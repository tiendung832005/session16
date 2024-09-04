// Bài 4
"use client"
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

export default function HomePage() {
  const [select, setSelect] = useState("en");
  const router = useRouter();
  
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    setSelect(language);
    if (language === "en") {
      router.push("/en");
    } else {
      router.push("/vi");
    }
  };

  const t = useTranslations('HomePage');

  return (
    <>
      <b>{t('title')}</b><br />
      <b>{t('description')}</b><br />
      <select value={select} onChange={handleChange}>
        <option value="en">Tiếng Anh</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </>
  );
}

