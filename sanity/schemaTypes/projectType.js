import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title of Project', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'Slug of Project',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
    }),
    defineField({
      name: 'smallDescription',
      title: 'Small Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'categories',
      title: 'Categories of the project',
      type: 'text',
      rows: 2,
      description: 'Comma separated with space after the comma. (e.g. frontend, backend)',
    }),
    defineField({
      name: 'techs',
      title: 'Techs used in the project',
      type: 'text',
      rows: 2,
      description: 'Comma separated with space after the comma. (e.g. react, next)',
    }),
    defineField({
      name: 'demo_link',
      title: 'Link to the demo',
      type: 'url',
      description: 'https://example.com',
    }),
    defineField({
      name: 'source_code_link',
      title: 'Link to the source code',
      type: 'url',
      description: 'https://github.com/example/project',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
