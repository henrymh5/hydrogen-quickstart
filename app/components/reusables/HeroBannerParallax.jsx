import React, { useEffect, useRef } from "react";

export function HeroBanner({
  backgroundImage,
  headline,
  subheadline,
  parallax = false,
  height = 600, // 👈 default height for desktop
}) {
  const bannerRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (!parallax) return;

    const banner = bannerRef.current;
    const bg = bgRef.current;

    const handleScroll = () => {
      if (!banner || !bg) return;

      const rect = banner.getBoundingClientRect();
      const vh = window.innerHeight;

      // calculate how visible the banner is
      const progress = 1 - Math.abs(rect.top / vh);
      const clamped = Math.max(0, Math.min(1, progress));

      const translateY = clamped * 100; // smooth motion
      bg.style.transform = `translate3d(0, -${translateY}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [parallax]);

  return (
    <section
      className="HeroBanner"
      ref={bannerRef}
      style={{ "--hero-height": `${height}px` }} // 👈 pass value to CSS variable
    >
      <div
        className="HeroBannerBG"
        ref={bgRef}
        style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0279/3095/1750/files/${backgroundImage}")` }}
      ></div>

      <div className="HeroBannerContent">
        <h2>{headline}</h2>
        {subheadline && <p>{subheadline}</p>}
      </div>
    </section>
  );
}