export const sanityHomepageGroqQuery = `
*[_type == "page" && homepage == true]
{
  title,
  pageBuilder[]{
    _type == "heroSection" => {
      _type,
      heading,
      tagline,
      button{url, text},
      subLink{url, text},
      desktopImage{alt, asset->{url}},
      mobileImage{alt, asset->{url}},
    },
    _type == "welcomeSection" => {
      _type,
      subtitle,
      signature,
      body,
      image{alt, asset->{url}},
    },
    _type == "clientSection" => {
      _type,
      title,
      "clients": clients[]->{
        _id,
        companyName,
        image{alt, asset->{url}},
      },
    },
    _type == "testimonialSection" => {
      _type,
      title,
      "testimonials": testimonials[]->{
        _id,
        author,
        position,
        body,
        image{alt, asset->{url}},
      },
    },
    _type == "serviceSection" => {
      _type,
      blueTheme,
      orientation,
      image{alt, asset->{url}},
      title,
      testimonial,
      body,
      tagline,
      button{url, text},
      "testimonial": testimonial->{author, position, body, image{alt, asset->{url}}},
    },
    _type == "aboutMeSection" => {
      _type,
      image{alt, asset->{url}},
      title,
      body,
    },
    _type == "workWithMeSection" => {
      _type,
      title,
      body,
      button{url, text},
      image{alt, asset->{url}},
    },
  }
}
`
