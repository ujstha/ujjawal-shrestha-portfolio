export const projectQuery = `*[_type == 'project'] | order(_createdAt desc) {
  title, smallDescription, techs, categories, 'slug': slug.current, projectImage, demo_link, source_code_link
}`
