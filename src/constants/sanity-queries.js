export const projectQuery = `*[_type == 'project'] | order(_createdAt desc) {
  title, smallDescription, techs, categories, 'slug': slug.current, projectImage, gallery, demo_link, source_code_link
}`

export const experienceQuery = `*[_type == 'experience'] | order(_createdAt asc) {
  title, company_name, company_link, icon, iconBg, date, points
}`
