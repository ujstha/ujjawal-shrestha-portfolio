import {defineField, defineType} from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Professional Experience',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Job Title', type: 'string'}),
    defineField({name: 'company_name', title: 'Company Name', type: 'string'}),
    defineField({name: 'company_link', title: 'Company Page Link', type: 'url'}),
    defineField({
      name: 'icon',
      title: 'Company Logo',
      type: 'image',
    }),
    defineField({
      name: 'iconBg',
      title: 'Background Color for Company Icon',
      type: 'string',
      description: 'Use Hex Color e.g. #ffffff',
    }),
    defineField({
      name: 'date',
      title: 'Worked Date Range',
      type: 'string',
      description: 'E.g. Oct 2020 - June 2022',
    }),
    defineField({
      name: 'points',
      title: 'Bullet Points for tasks & Responsibilities',
      type: 'array',
      of: [{type: 'text', rows: 1}],
    }),
  ],
})
