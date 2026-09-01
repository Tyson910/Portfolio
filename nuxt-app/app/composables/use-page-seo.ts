export function usePageSeo(title: string, description: string) {
  const route = useRoute();
  const metaTitle = `Tyson Suttle | ${title}`;
  const canonical = computed(() => new URL(route.path, "https://tyson-suttle.com").href);

  useSeoMeta({
    title: metaTitle,
    description,
    ogType: "website",
    ogUrl: canonical,
    ogTitle: metaTitle,
    ogDescription: description,
    twitterCard: "summary_large_image",
    twitterTitle: metaTitle,
    twitterDescription: description,
  });
  useHead({ link: [{ rel: "canonical", href: canonical }] });
}
