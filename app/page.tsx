'use client';

import Image from 'next/image';

/** ลิงก์วิดีโอ TikTok แบบมี `/video/เลข` — ตั้งค่า `NEXT_PUBLIC_TIKTOK_VIDEO_URL` ใน .env.local ถ้าต้องการเปลี่ยน */
const DEFAULT_TIKTOK_VIDEO_URL =
  'https://www.tiktok.com/@artie_kanticha/video/7614900064653151506';

function getTikTokVideoId(url: string | undefined): string | null {
  if (!url?.trim()) return null;
  const m = url.match(/tiktok\.com\/@[^/]+\/video\/(\d+)/i);
  return m?.[1] ?? null;
}

export default function Home() {
  const tiktokUrl =
    process.env.NEXT_PUBLIC_TIKTOK_VIDEO_URL ?? DEFAULT_TIKTOK_VIDEO_URL;
  const tiktokVideoId = getTikTokVideoId(tiktokUrl);
  return (
    <div className="min-h-screen bg-[#E3DBD3] text-[#4A3626]">
      {/* Hero: centered logo */}
      <header className="px-4 min-h-[56vh] sm:min-h-[62vh] lg:min-h-[68vh] flex items-center">
        <div className="relative mx-auto flex max-w-md justify-center">
          <Image
            src="/logo.svg"
            alt="Lovelace"
            width={440}
            height={203}
            priority
            className="h-auto w-[min(88vw,360px)]"
          />
        </div>
      </header>

      {/* Announcement bar */}
      <div className="bg-[#4A3626] px-3 py-3 text-center text-[10px] font-medium leading-snug tracking-wide text-white sm:text-xs md:py-2.5 md:text-sm">
        <p className="flex flex-col items-center justify-center gap-y-2 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-8 lg:gap-x-10 md:gap-y-1">
          <span>Coming soon</span>
          <span className="hidden md:inline text-white/85" aria-hidden>
            //
          </span>
          <span>Let&apos;s be Lovelace family</span>
          <span className="hidden md:inline text-white/85" aria-hidden>
            //
          </span>
          <span>Fashion Community</span>
        </p>
      </div>

      {/* Three-up placeholders */}
      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto grid w-full max-w-lg grid-cols-1 items-center gap-3 sm:max-w-5xl sm:grid-cols-3 sm:gap-4 md:gap-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image
              src="/gallery-left.png"
              alt="Lovelace gallery left"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 32vw, 100vw"
            />
          </div>
          {/* TikTok embed: 325×733 — ความสูงตาม embed มาตรฐาน ลดแถบขาวด้านล่าง; ไม่มีกรอบ/bg รอบ iframe */}
          <div className="mx-auto flex w-[325px] max-w-full justify-center leading-none">
            {tiktokVideoId && (
              <iframe
                title="TikTok video"
                src={`https://www.tiktok.com/embed/v2/${tiktokVideoId}`}
                width={325}
                height={733}
                className="m-0 block max-w-full border-0 p-0 align-top"
                allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image
              src="/gallery-right.png"
              alt="Lovelace gallery right"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 32vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Feature card: single frame over pattern band */}
      <section
        className="relative bg-[#4A3626] bg-repeat px-4 py-10 sm:px-6 sm:py-14"
        style={{
          backgroundImage: 'url(/bg-pattern.png)',
          backgroundSize: '280px auto',
        }}
      >
        <div className="absolute inset-0 bg-[#4A3626]/55" aria-hidden />
        <div className="relative mx-auto max-w-xl">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src="/feature-card.png"
              alt="Lovelace feature"
              fill
              className="object-cover object-bottom"
              sizes="(min-width: 1280px) 36rem, 90vw"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-1 border-t border-[#D5CDC4] bg-[#E3DBD3] px-4 pt-4 pb-12 text-center text-sm sm:justify-between sm:px-6 sm:pb-16">
        <span className="font-medium">IG : lovelace.ll</span>
        <span className="text-[#4A3626]/90">Fashion Community</span>
      </footer>
    </div>
  );
}
