const CLOUD_NAME = "dbja22ql";

const imageAssets = new Set([
  "welcome-ima.jpg", "9ocotober.jpeg", "mentalhealth1.jpeg", "mentalhealth2.jpeg",
  "561ff335-03db-4316-8247-2814caa5a806.jpg", "8c19a607-7d5a-4ae1-9d11-31d9fecd3493.jpg",
  "pmsschool.jpeg", "WhatsApp Image 2026-10-10 at 5.03.52 PM.jpeg",
  "WhatsApp Image 2026-10-10 at 5.03.53 PM.jpeg", "WhatsApp Image 2026-10-10 at 5.03.54 PM.jpeg",
  "WhatsApp Image 2026-10-10 at 5.03.57 PM.jpeg", "WhatsApp Image 2026-10-10 at 5.03.57 PM (1).jpeg",
  "WhatsApp Image 2026-10-10 at 5.03.59 PM.jpeg", "ima-hero-image-1.jpg", "ima-hero-image-2.jpg",
  "ima-hero-image-3.jpg", "ima-hero-image-4.jpg", "ima-hero-image-5.jpg", "IMA_LOGO.png",
  "news-1.jpg", "news-2.jpg", "news-3.jpg", "news-4.jpg", "news-5.jpg", "news-6.jpg",
  "news-7.jpg", "news-8.jpg", "news-9.jpg", "news-10.jpg", "gallery-1.jpg", "gallery-3.jpg",
  "gallery-4.jpg", "gallery-5.jpg", "gallery-6.jpg", "gallery-7.jpg", "gallery-8.jpg",
  "gallery-9.jpg", "gallery-10.jpg", "gallery-11.jpg", "gallery-12.jpg",
  "PUBLIC OUTREACH PROGRAM UPDATED.png", "Pi7_dr-dishantar-goel-moradabad-ho-moradabad-psychiatrists-8ivtob85g6.jpeg",
  "file_0000000014848208836ddf30894e8069 (1).png", "file_0000000063b08208b822b0557b714332.png",
  "1f952a7b-250c-4329-9fa1-89fe99ddb3fd.png", "image.png"
]);

const videoAssets = new Set([
  "mentalhealth1.mp4", "mentalhealth2.mp4", "mentalhealth3.mp4",
  "mentalhealth4.mp4", "mentalhealth5.mp4", "mentalhealth6.mp4"
]);

export function cloudinaryAsset(src) {
  if (!src || !src.startsWith("/")) return src;
  const filename = decodeURIComponent(src.slice(1));
  if (filename === "gallery-2.jpg") return src;
  const isVideo = videoAssets.has(filename);
  if (!isVideo && !imageAssets.has(filename)) return src;
  const publicId = filename.replace(/\.[^.]+$/, "").replaceAll(" ", "_").replaceAll("(", "").replaceAll(")", "");
  const folder = isVideo ? "video" : "image";
  const transform = isVideo ? "f_auto,q_auto,vc_auto,w_1280,c_limit" : "f_auto,q_auto,w_1600,c_limit";
  return `https://res.cloudinary.com/${CLOUD_NAME}/${folder}/upload/${transform}/${publicId}`;
}
