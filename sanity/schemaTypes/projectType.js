import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title of Project'}),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of Project',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'projectImage',
      type: 'image',
      title: 'Project Image',
    }),
    defineField({
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'techs',
      type: 'text',
      title: 'Small Description',
    }),
  ],
})
