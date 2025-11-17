export default function SEO(){
  return (
    <>
      <title>Éclat Dining – Luxury Veg Gourmet Restaurant</title>
      <meta name="description" content="Luxury vegetarian fine dining. Paneer pizzas, creamy veg pastas, cinematic starters in a warm, minimal-luxury ambience."/>
      <meta property="og:title" content="Éclat Dining – Luxury Veg Gourmet"/>
      <meta property="og:description" content="Luxury vegetarian fine dining in a cinematic setting."/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://images.unsplash.com/photo-1604908176997-4313343f5e8e?q=80&w=1200&auto=format&fit=crop"/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"Restaurant",
        "name":"Éclat Dining",
        "servesCuisine":"Vegetarian",
        "priceRange":"$$$",
        "image":"https://images.unsplash.com/photo-1604908176997-4313343f5e8e?q=80&w=1200&auto=format&fit=crop",
        "address":{
          "@type":"PostalAddress",
          "streetAddress":"88 Gourmet Ave",
          "addressLocality":"Culinary District",
          "addressRegion":"CA",
          "postalCode":"94000",
          "addressCountry":"US"
        },
        "telephone":"+1-555-010-9876"
      })}} />
    </>
  )
}
