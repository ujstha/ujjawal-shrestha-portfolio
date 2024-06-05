export const projectQuery = `*[_type == 'project'] | order(_createdAt desc) {
  title, smallDescription, techs, 'slug': slug.current, projectImage, demo_link, source_code_link
}`
