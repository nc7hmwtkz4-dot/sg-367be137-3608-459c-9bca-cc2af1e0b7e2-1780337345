import Head from "next/head";

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEOElements({
  title = "Arc Club de Nîmes — Excellence Sportive & Sponsoring",
  description = "1er club français de tir à l'arc. 3 médailles olympiques. Partenaire stratégique pour sponsors exigeants. L'Arc Club de Nîmes se définit par l'excellence, l'inclusion, le rayonnement économique et l'implication auprès de la communauté. Si ces valeurs vous parlent, n'attendez plus, contactez-nous!",
  image = "/og-image.png",
  url,
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}

export function SEO({
  title = "Arc Club de Nîmes — Excellence Sportive & Sponsoring",
  description = "1er club français de tir à l'arc. 2 médailles Paris 2024. Partenaire stratégique pour sponsors exigeants.",
  image = "/og-image.png",
  url,
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}